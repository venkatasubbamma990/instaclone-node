let dotenv = require('dotenv');
let app = require('./app')
let port = 5000;
const mongoose = require('mongoose');
//const { MONGOURI } = require('./keys');
dotenv.config();
mongoose.connect("mongodb+srv://venkatasubbamma:sudha1454@cluster0.bw2e1ux.mongodb.net/?retryWrites=true&w=majority" ,{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to DB')
})

app.listen(port,()=>{
    console.log(`express server running at http://localhost:${port}`)
})
