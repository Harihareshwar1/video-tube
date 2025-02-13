import {ApiResponse} from '../utils/apiResponse.js'

import {asyncHandler} from '../utils/asynchandler.js'

const healthcheck = asyncHandler(async (req, res) => {
    const response = new ApiResponse(200,"ok","healthcheck passed")
    res.status(response.status).json(response)
})

export {healthcheck}