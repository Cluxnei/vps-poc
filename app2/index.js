const express = require('express')
const app = express()
const port = 3000

app.get('/', (_, res) => {
    res.send('Hello from app2!')
})

app.listen(port, () => {
    console.log(`App2 listening on port ${port}`)
})