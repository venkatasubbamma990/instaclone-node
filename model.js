let mongoose = require ('mongoose');
let postSchema = new mongoose.Schema({
    Name:{type:String,required:true},
    Location:{type:String,required:true},
    Description:{type:String},
    file:{type:String},
    Likes:{type:Number},
    Date:{type:Date}
})
let Post =  mongoose.model('posts',postSchema)
module.exports = Post