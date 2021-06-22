const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv=require('dotenv')
const postRoutes = require('./routes/posts.js')

const app = express()
dotenv.config()



app.use(express.json({limit:'30mb',extended:true}))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

app.use('/posts', postRoutes)

app.get('/', (req,res) => {
    res.send('Welcome to Memoirs API')
    
})


const PORT = process.env.PORT

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { app.listen(PORT,()=>console.log(`Server Running on port:${PORT}`))})
    .catch((error) => {console.log(error.message) })

mongoose.set('useFindAndModify',false)