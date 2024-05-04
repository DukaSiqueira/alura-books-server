const fs = require("fs")

function getAllBooks() {
    return JSON.parse(fs.readFileSync("books.json"))
}

function getBookById(id) {
    const books = JSON.parse(fs.readFileSync("books.json"))

    const book = books.filter( book => book.id == id )[0]

    return book
}

function insertBook(newBook) {
    const books = JSON.parse(fs.readFileSync("books.json"))

    const newListBooks = [...books, newBook]

    fs.writeFileSync("books.json", JSON.stringify(newListBooks))
}

function updateBook(id, book) {
    let books = JSON.parse(fs.readFileSync("books.json"))
    const index = books.findIndex( book => book.id == id )

    const data = {...books[index], ...book}

    books[index] = data

    fs.writeFileSync("books.json", JSON.stringify(books))
}

function deleteBook(id) {
    const books = JSON.parse(fs.readFileSync("books.json"))
    const bookSFiltered = books.filter( book => book.id != id )

    fs.writeFileSync("books.json", JSON.stringify(bookSFiltered))
}

module.exports = {
    getAllBooks,
    getBookById,
    insertBook,
    updateBook,
    deleteBook
}