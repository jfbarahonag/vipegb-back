const express = require('express');

const products = require('./routes/products')

const app = express()
app.disable('x-powered-by')

app.use('/api', products)

const port = 3000
app.listen(port, () => {
    console.log(`Back listening at http://localhost:${port}`)
})