const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const connectionPool = require('../database/connection-pool');
const BookRepository = require('../database/book-repository');

let repository = new BookRepository(connectionPool);

//Get One Book
router.get('/:id', function (req, res, next) {
  repository.get(req.params.id,(err, result) => {
    if (err){
      res.status(500).json({'error':err.toString()});
    }else{
      res.status(200).json(result);
    }
    
  });
});


//Update one book
router.put('/:id', function (req, res, next) {
  repository.update(req.body, req.params.id, (err, result) => {
    if (err){
      res.status(500).json({'error':err.toString()});
    }else{
      res.sendStatus(200);
    }
    
  });
});

// Delete one Book
router.delete('/:id', function (req, res, next) {
  repository.delete(req.params.id, (err, result) => {
    if (err){
      res.status(500).json({'error':err.toString()});
    }else{
      res.sendStatus(200);
    }
    
  });
});

//Save a book
router.post('/', function (req, res, next) {
  repository.save(req.body, (err, result) => {
    if (err){
      res.status(500).json({'error':err.toString()});
    }else{
      res.sendStatus(200);
    }
    
  });
});

//Get All Books
router.get('/', function (req, res, next) {
  repository.getAll((err, result) => {
    if (err){
      res.status(500).json({'error':err.toString()});
    }else{
      res.status(200).json(result);
    }
    
  });

  
});


module.exports = router;
