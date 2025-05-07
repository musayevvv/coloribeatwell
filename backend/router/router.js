import { deleteProducts, getProducts, postProducts } from "../controllers/productControllers.js"
import express from 'express'


const router = express.Router()

router
    .get('/', getProducts)
    .post('/', postProducts)
    .delete('/:id', deleteProducts)


export default router