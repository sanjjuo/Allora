import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AppNavbar from './components/Navbar/Navbar'
import Pages from './Pages'
import Footer from './components/Footer/Footer'
import Cart from './components/Cart/Cart'
import CategoryProducts from './components/Categories/CategoryProducts'

const AppRoutes = () => {
    return (
        <>
            <Router>
                <AppNavbar />
                <Routes>
                    <Route path='/' element={<Pages />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/category' element={<CategoryProducts />} />
                </Routes>
                <Footer/>
            </Router>
        </>
    )
}

export default AppRoutes
