const express = require('express')
const app = express()
const port = 3000
const router = require('./routes')
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use('/public/uploads', express.static(path.join(__dirname + '/public/uploads')))
app.use(router)
app.listen(port, () => {
    console.log('Server Running')
})
