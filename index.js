const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/', (req, res) => res.send(req.body))

app.listen(port, () => console.log(`sample-expressjs app listening on port ${port}!`))
