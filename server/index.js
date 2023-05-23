import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import genRoutes from './routes/genRoutes.js';

dotenv.config();
const app = express();

//middle-ware
app.use(cors());
app.use(express.json({ limit: '50mb'}));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/gen', genRoutes);

app.get('/', async (req,res) => {
    res.send('Hello to everyone from the back end.......');
})

const startServer = async () => {

    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, () => console.log("Server has started on port http://localhost:8080"));
    } catch (error) {
        console.log(error);
    }
    
}

startServer();
