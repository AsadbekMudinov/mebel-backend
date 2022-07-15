require('dotenv').config();
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const appRouter = require('./router')
const bodyParser = require('body-parser');

app.use(express.json())
app.use(cors())


mongoose.connect(process.env.DATABASE ,
    {
        useNewUrlParser:true ,
        useUnifiedTopology:true}
)
.then(() => {
    console.log('Bazaga ulandi')
})
.catch((err)=> {
    console.log(err)
})

app.use(bodyParser.json());

app.use('/' , appRouter)

const port = process.env.PORT || 5000

app.listen(port , () => {
    console.log(`${port}chi port ishga tushdi`)
})



