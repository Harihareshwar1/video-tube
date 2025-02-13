import {app} from './app.js'
import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT


import {connectdb} from './db/index.js'


connectdb().then(
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
  })
  ).catch(err=>console.log(`mongo conenction error : ${err}`)

  )