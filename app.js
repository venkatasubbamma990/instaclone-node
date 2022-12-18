
let express = require('express');
let app = express();
let path = require('path')
let fs = require('fs')
//let multer = require('./multer')
const uploader = require("./multer")
const cloudinary = require('./cloudinary')
let Post = require('./model');
let cors = require('cors');
app.use(cors())
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(express.json());

app.post('/createposts',uploader.single('file'), async (request,response)=>{
       try{
        //let file = request.files.photo
       let upload = await cloudinary.v2.uploader.upload(request.file.path);
            let posts = await Post.insertMany({
                file:upload.secure_url,
                Name:request.body.Name,
                Location:request.body.Location,
                Description:request.body.Description,
               
                Likes:Math.ceil(Math.random()*1000),
                Date:Date.now()
            });
            console.log(request.body)
        
           return  response.json({
            status:'Success',
           result:posts
        });
            
        }
        catch(err){
            response.status(500).json({
                status:'failure',
                message:err.message
            })
        }
    }) 
    app.get('/posts', async (request,response)=>{
        try{
             let posts = await Post.find();
         //post.save()
             response.json({
                 status:'Success',
                result:posts
             })
             console.log(request.body)
         }
         catch(err){
             response.status(500).json({
                 status:'failure',
                 message:err.message
             })
         }
     }) 

module.exports = app