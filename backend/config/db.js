import mongoose from "mongoose"


export const connectDB = async()=>{
    try {
        const db = await mongoose.connect(process.env.MONGO_URI,{

        });
        console.log(`mongoDB connected : ${db.connection.host}`)

    }catch(error){
        console.error(`Error : ${error.message}`)
        process.exit(1) //process code 1 code means exit with failure and 0 means success
    }
    
}