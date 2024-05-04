const { Router } = require("express")
const router = Router()
const { getBooks, getBook, createBook, patchBook, destroyBook } = require('../controllers/book')

router.get('/', getBooks)

router.get('/:id', getBook)

router.post('/', createBook)

router.patch('/:id', patchBook)

router.delete('/:id', destroyBook)

module.exports = router