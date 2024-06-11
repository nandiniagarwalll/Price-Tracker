import mongoose from 'mongoose';

let isConnected=false;

export const connectToDB=async()=>{
    mongoose.set('strictQuery',true);

    if(!process.env.MONGODB_URI) return console.log('MONGODB_URI NOT DEFINED');
    if(isConnected) return console.log('==>using eisting database connection');

    try{
        await mongoose.connect(process.env.MONGODB_URI);
        
        isConnected=true;
        console.log('MongoDB Connected');

    }catch(error:any){
        console.log(error)
    }

}