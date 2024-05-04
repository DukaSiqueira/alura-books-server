const express = require('express')
const routeBook = require('./routes/book')
const app = express()
app.use(express.json())
const port = 8000

app.use('/books', routeBook)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})