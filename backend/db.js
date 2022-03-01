const mongoose= require('mongoose')
// const uri="mongodb://localhost:27017/backend"
const uri="mongodb+srv://Aviral:aviral@cluster0.ktgl2.mongodb.net/backend"

const connectToMongo=()=>{
    mongoose.connect(uri,()=>{
        console.log("connected to mongoDB");
    })
}

module.exports=connectToMongo;

