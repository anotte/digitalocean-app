const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    next();
});

// All OPTIONS requests return a simple status: 'OK'
app.options('*', (req, res) => {
    res.json({
        status: 'OK'
    });
});

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/callmesilent', (req, res) => res.send('Hello World!'))

app.post('/', (req, res) => res.sendStatus(200))

app.post('/callmesilent', (req, res) => {
    res.send(req.body)
    console.log('came on....' + req.body.z)
})

app.post('/callmefirst', (req, res) => {
    res.send(req.body)
    console.log('starting now....' + req.body.z)
})

app.listen(port, () => console.log(`sample-expressjs app listening on port ${port}!`))
