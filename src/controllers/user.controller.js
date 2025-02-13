import {ApiResponse} from '../utils/apiResponse.js'
import {ApiError} from '../utils/apiError.js'
import {uploadToCloudinary} from '../utils/cloudinary.js'
import {asyncHandler} from '../utils/asynchandler.js'
import {User} from '../models/user.models.js'
import { upload } from '../middlewares/multer.middleware.js'
const registerUser = asyncHandler(async (req, res) => {
    const {fullName,email,username,password} = req.body;
    if([fullName,email,username,password
    ].some((f)=>f?.trim()==="")){
        throw new ApiError(401,"all fields are required")
    }

    const alreadyexist = await User.findOne({
        $or:[{username},{email}]
    })
    if(alreadyexist){
         throw new ApiError(401,"user already exists");

    }

    const avatarPath = req.files?.avatar[0]?.path;
    const coverimagePath = req.files?.coverImage[0]?.path;
    if(!avatarPath){
        throw new ApiError(401,"avatar is missing");
    }

    const avatar = await uploadToCloudinary(avatarPath);
    const coverImage = await uploadToCloudinary(coverimagePath);
    const user = await User.create({
        fullName,
        email,
        username,
        password,
        avatar:avatar.url,
        coverImage:coverImage.url
    })


    const isUser = await User.findById(user._id).select("-password -refreshToken");
    if(!isUser){
        throw new ApiError(401,"user not created");
    }
    return res.status(201).json(new ApiResponse(201,isUser,"created"))
}) 


export {registerUser}