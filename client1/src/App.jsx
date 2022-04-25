import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'

// Root
import Home from './pages/home'
import About from './pages/about'
import Buku from './pages/buku'
import Peminjaman from './pages/peminjaman'

// Customer
import LoginCustomer from './pages/customer/LoginCustomer'


function App() {
  return (
    
    <div>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/buku' element={<Buku/>} />
        <Route path='peminjaman' element={<Peminjaman />} />

        {/* Customer */}
        <Route path='/login' element={<LoginCustomer />} />
      </Routes>
    </div>
  )
}


export default App
