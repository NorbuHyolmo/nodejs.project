const mongoose = require('mongoose');
(async()=>{
    try{
        // await mongoose.connect('mongodb://localhost:27017/iims_training');
        //          OR 
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected successfully!");
    }catch(e){
        console.error('Error during connection with mongo:', e);
    }
})();

