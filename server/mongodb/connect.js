import mongoose from "mongoose";

const connectDB = (url) => {
    mongoose.set('strictQuery', true);      //useful for search functionality

    mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => console.log('MongoDB connectedddddd.....'))
        .catch((err) => console.log(err));
    
}

export default connectDB;