import {v2 as cloudinary} from "cloudinary"
import dotenv from 'dotenv'
dotenv.config();
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});



const uploadToCloudinary = async (file) => {
    try {
        const result = await cloudinary.uploader.upload(file,
            {resource_type:"auto"}
        )
        console.log("succes uploading url"+result.url);
        
        return result;
    } catch (error) {
        console.log(error)
    }
}


export {uploadToCloudinary}