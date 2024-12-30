import express from "express";
import {PORT, mongoDBURL} from './config.js';
import mongoose from "mongoose";
import {Book} from "./models/bookModel.js";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';


const app = express();

app.use(express.json());

app.use(cors());

// app.use(cors({
//     origin: ['http://localhost:3000', 'http://localhost:5555', 'http://localhost:5173'],
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     credentials: true,
//     allowedHeaders: ['Content-Type']  
// }));

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });


// Middleware for parsing request body
app.get('/', (req, res) => {
    console.log(req);
    return res.status(200).send('Welcome to Book Store')
});

app.use('/books',booksRoute);

// Connect to MongoDB

mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('MongoDB connected')
        app.listen(PORT, ()=>{
            console.log(`App is listening to port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err)
    });          