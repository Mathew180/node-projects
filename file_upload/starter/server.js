require('dotnev').config();
require('express-async-errors')

const express = require("express");
const app = express();

const connectDB = require('./db/connect');

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-Handler')

app.get('/', (req, res) => {
    res.send('<h1>File upload starter</h1>')
})

//middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware)

const port = process.env.port || 3000;

const start = async () => {
    try{
        await connectDB(prcess.env.Mongo_URI)
          app.listen(port, console.log(`Server is listening on port ${port}...`))
    }catch(error)
    {
        console.log(error);
    }
}

start();