import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from '../eatwell/layout/Layout'
import Home from '../eatwell/home/Home'
import Dashboard from '../eatwell/dashboard/Dashboard'
import Basket from '../eatwell/basket/Basket'
import Wishlist from '../eatwell/wishlist/Wishlist'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='dashboard' element={<Dashboard />} />
                    <Route path='basket' element={<Basket />} />
                    <Route path='wishlist' element={<Wishlist />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router