const express = require('express');
const app = express()
const port = 3000

const router = express.Router()

router.get('/', (req, res, next) => {
    res.send("Calendar")
})

router.get('/events', (req, res, next) => {
    res.send("Events")
})

app.get('/', (req, res) => {
    res.send("Hey from back")
})

app.post('/user', (req, res) => {
    res.send("Got a POST request")
})

app.put('/user', (req, res) => {
    res.send("Got a PUT request")
})

app.delete('/user', (req, res) => {
    res.send("Got a DELETE request")
})

app.use('/calendar', router)

app.disable('x-powered-by')

app.listen(port, () => {
    console.log(`Back listening at http://localhost:${port}`)
})