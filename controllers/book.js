const { getAllBooks, getBookById, insertBook, updateBook, deleteBook } = require("../services/book")

function getBooks(req, res) {
    try {
        const livros = getAllBooks()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)   
    }
}

function getBook(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            const livro = getBookById(id)
            res.send(livro)   
        }
        
        res.status(422).send("Id invalid")
    } catch (error) {
        res.status(500)
        res.send(error.message)   
    }
}

function createBook(req, res) {
    try {
        const newBook = req.body
        if (newBook.name) {
            insertBook(newBook)
            res.status(201).send("Created Book!")
        }
        res.status(422).send("Body invalid")
    } catch (error) {
        res.status(500)
        res.send(error.message)   
    }
}

function patchBook(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            const book = req.body
            updateBook(id, book)
            res.send("Updated Book!")
        }

        res.status(422).send("Id invalid")
    } catch (error) {
        res.status(500)
        res.send(error.message)   
    }
}

function destroyBook(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            deleteBook(id)
            res.send("Deleted Book!")
        }

        res.status(422).send("Id invalid")
    } catch (error) {
        res.status(500)
        res.send(error.message)   
    }
}

module.exports = {
    getBooks,
    getBook,
    createBook,
    patchBook,
    destroyBook
}