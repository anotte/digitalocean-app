const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/', (req, res) => res.send(req.body))

app.post('/callmesilent', (req, res) => {
    res.send(req.body)
    console.log('came on....' + req.body.z)
})

app.post('/callmefirst', (req, res) => {
    res.send(req.body)
    console.log('starting now....' + req.body.z)
})

app.listen(port, () => console.log(`sample-expressjs app listening on port ${port}!`))
