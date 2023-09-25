//importing external files
import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';

//importing internal files
import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import genRoutes from './routes/genRoutes.js';

dotenv.config();        //pools env variables
const app = express();  //initialize express application

//middle-ware
app.use(cors());                            //optional
app.use(express.json({ limit: '50mb'}));   //optional

//routes for backend
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/gen', genRoutes);

//to ensure server is running
app.get('/', async (req,res) => {
    res.send('Hello to everyone from the back end.......');
})

//running the server
const startServer = async () => {

    try {
        //passing the env variable as url
        connectDB(process.env.MONGODB_URL);     
        app.listen(8080, () => console.log("Server has started on port http://localhost:8080"));
    } catch (error) {
        console.log(error);
    }
    
}

startServer();
