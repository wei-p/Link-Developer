const express = require('express')
const app =  new express()

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('API running')
})

app.listen(PORT, () => {
    console.log(`Server ${PORT}`)
})