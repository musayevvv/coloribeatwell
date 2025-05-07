import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProductsThunk = createAsyncThunk('product/get', async () => {
    const res = await axios.get('http://localhost:5000/products')
})