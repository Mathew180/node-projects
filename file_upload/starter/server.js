//require('dotnev').config();
require('express-async-errors')
require('./db/connect');
require("dotenv").config();
const express = require("express");
const app = express();

const connectDB = require('./db/connect');

//const notFoundMiddleware = require('./middleware/not-found');
//const errorHandlerMiddleware = require('./middleware/error-Handler')

app.get('/', (req, res) => {
    res.send('<h1>File upload starter</h1>')
})
//fv9MiAq60QWcFq34
//middleware
//app.use(notFoundMiddleware);
//app.use(errorHandlerMiddleware)

const PORT = process.env.port || 3000;

app.listen(PORT, console.log(`Server is listening on port ${PORT}...`))

// const start = async () => {
//     try{
//         await connectDB(process.env.Mongo_URI)
//           app.listen(port, console.log(`Server is listening on port ${port}...`))
//     }catch(error)
//     {
//         console.log(error);
//     }
// }

// start();
//mongodb+srv://mathewadavuruku:<fv9MiAq60QWcFq34>@cluster0.tkgzawi.mongodb.net/file-upload?retryWrites=true&w=majority

//mongodb+srv://mathewadavuruku:<fv9MiAq60QWcFq34>@cluster0.tkgzawi.mongodb.net/?retryWrites=true&w=majority