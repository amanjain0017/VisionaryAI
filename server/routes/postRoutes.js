import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

import post from '../mongodb/models/post.js';

dotenv.config();

const router = express.Router();

//configuring the cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

//GET ALL POSTS
router.route('/').get(async(req,res) =>{
    try {
        //fetch all records from mongodb
        const posts = await post.find({});
        res.status(200).json({ success: true, data: posts});
    } catch (error) {
        res.status(500).json({ success: false, message: error});
    }
});

//CREATE A POST
router.route('/').post(async(req,res) =>{
    try {
        //destructure req 
        const {name, prompt, photo} =req.body;
        //uploading the photo to cloudinary
        const photoURL = await cloudinary.uploader.upload(photo);
        
        //entering new record in the mongodb
        const newPost = await post.create({
            name,
            prompt,
            photo: photoURL.url,
        })

        //success res
        res.status(201).json({ success: true, data: newPost});
    } catch (error) {
        res.status(500).json({ success: false, message: error});
    }
});

export default router;