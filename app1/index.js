const express = require('express')
const app = express()
const port = 3000

app.get('/', (_, res) => {
    res.send('Hello from app1!')
})

app.listen(port, () => {
    console.log(`App1 listening on port ${port}`)
})