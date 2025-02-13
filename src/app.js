import express from "express"
import cors from 'cors'
import UserRouter from './routes/user.route.js'
import Healthrouter from './routes/healthcheck.route.js'
import cookieParser from "cookie-parser"
const app = express()
app.use(cookieParser())
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
  }))
  
  
  app.use(express.json())

  app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use('/api/v1/healthcheck', Healthrouter)
app.use('/api/v1/user',UserRouter)
export {app}