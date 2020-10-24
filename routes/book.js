let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connection to Book model
let Book = require('../models/book');

/*GET Route for the Book List page - READ operation*/
router.get('/', (req, res, next) => {
    Book.find((err, Booklist) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            console.log(Booklist);
        }
    });
});

module.exports = router;