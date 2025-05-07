import express, { json } from 'express'
import cors from 'cors'
import productRouter from './router/router.js'
import { connectDB } from './config/config.js'
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(json())
app.use(cors('*'))
app.use('/products', productRouter)

connectDB()

app.listen(5000, () => {
    console.log('backend running');

})