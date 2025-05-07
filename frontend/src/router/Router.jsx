import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from '../eatwell/layout/Layout'
import Home from '../eatwell/home/Home'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router