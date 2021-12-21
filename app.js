const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Hey from back")
})

app.listen(port, () => {
    console.log(`Back listening at http://localhost:${port}`)
})