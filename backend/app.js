const express = require('express');
const app = express() ;
require('dotenv').config() ;
const dbConnect = require('./config/db')
const morgan = require('morgan')

app.use(express.json())

dbConnect();

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.use('/api',require('./routes/userRoutes'))


app.use((err,req,res,next)=>{
    res.status(err.statusCode || 500).json({
        error : err.message || "Internal Server Error"
    })
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on the port ${process.env.PORT}🚀`)
}) ;

