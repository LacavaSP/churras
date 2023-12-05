const express = require('express')
const port = 4501;
const app = express()
app.use(express.json())
app.use(express.static('public'))

app.listen(port, () => {
    console.log('HTTP SERVER')
})