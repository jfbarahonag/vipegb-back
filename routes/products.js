const express = require('express')

let localRouter = express.Router()
let products = express.Router()

localRouter.get('/', (req, res) => {
    res.send("Hello from products")
})

localRouter.get('/:id', (req, res) => {
    const { id } = req.params 
    res.status(200).send(`Hello from product ID: ${id}`)
})

products.use('/products', localRouter)

module.exports = products
