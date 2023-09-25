import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';


dotenv.config();

//create instance of express router
const router = express.Router();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY, 
})

//create instance of open ai api
const openai = new OpenAIApi(configuration);

router.route('/').post( async(req,res) => {
    try {
        //the prommpt from the frontend
        const {prompt} = req.body;

        //gets the response from the api
        const aiReply = await openai.createImage({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json',
        });

        //get the image from the response
        const image = aiReply.data.data[0].b64_json;
        //sending the response to frontend
        res.status(200).json({photo : image});

    } catch (error) {
        //display error and send error message to res
        console.log(error);
        res.status(500).send(error?.response.data.error.message);
    }
})

export default router;