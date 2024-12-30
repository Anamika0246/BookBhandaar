   import express from "express";
   import {Book} from '../models/bookModel.js';
   const router = express.Router();
   
   
   
   // Route to save a new book
   router.post('/', async (req, res) => {
    try{
        if(
            !req.body.title || !req.body.author || !req.body.publishYear
        ){
           return res.status(400).send({
            message: 'Send all deails to Book Store: Title, Author, PublishYear',
           }) ;
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        };
        const book = await Book.create(newBook);
        return res.status(201).send(book);
    }
    catch(err){
        console.log(err);
        res.status(500).send({message: err.message});
    }
    });

    // Route to get all books
    router.get('/', async (req, res) => {
        try{
            const books = await Book.find({});
            return res.status(200).json({
                count: books.length,
                data : books
            });
        }
        catch(err){
            console.log(err);
            res.status(500).send({message: err.message});
        }
    });

    // Route to get a single book by ID
    router.get('/:id', async (req, res) => {
        try{
            const book = await Book.findById(req.params.id);
            if(!book) return res.status(404).send({message: 'Book not found'});
            return res.status(200).json(book);
        }
        catch(err){
            console.log(err);
            res.status(500).send({message: err.message});
        }
    });

    // Route to update a book
    router.put('/:id',async (req,res)=>{
        try{
            if(
                !req.body.title || !req.body.author || !req.body.publishYear
            ){
                return res.status(400).send({message: 'Send all details to update Book: Title, Author, PublishYear'});
            }
            const {id} = req.params;
            const result = await Book.findByIdAndUpdate(id, req.body);
            if(!result){
                return res.status(404).json({message: 'Book not found'});
            }
            return res.status(200).send({message: "Book updated successfully!"});
        } catch (err){
            console.log(err);
            res.status(500).send({message: err.message});
        }
    });

    // Route to delete a book
    router.delete('/:id', async (req, res) => {
        try{
            const book = await Book.findByIdAndDelete(req.params.id);
            if(!book) return res.status(404).send({message: 'Book not found'});
            return res.status(200).send({message: 'Book deleted successfully!'});
        }
        catch(err){
            console.log(err);
            res.status(500).send({message: err.message});
        }
    });

    export default router;