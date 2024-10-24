// let mongoose = require('mongoose')

// const connection = async () => {
//     try {
//         const connectionInstance = await mongoose.connect("mongodb+srv://sumit:s1234@sumit123.3uuc687.mongodb.net/?retryWrites=true&w=majority&appName=sumit123")
        
//         console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
        
//     } catch (error) {
//         console.log("MONGODB connection FAILED ", error);
//         process.exit(1)
//     }
// }
// module.exports = connection
// // mongodb+srv://dilnawajquraishi5:<db_password>@cluster0.ag1qcy4.mongodb.net/


const mongoose = require('mongoose');
// require('dotenv').config()

const connectToDb = async()=>{
    mongoose.connect('mongodb://0.0.0.0:27017/Wicts')
//    await mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('connected to mongodb successfully!'))
  .catch(()=>console.log("error in connecting mongodb"))
}

module.exports = connectToDb;