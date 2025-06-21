import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import './App.css';
import {LoginPage, SignupPage} from './Routes.js';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/login" element = {<LoginPage/>}/>
      <Route path = "/sign-up" element = {<SignupPage/>}/>
      {/* Add more routes as needed */}
      {/* Example: <Route path="/home" element={<HomePage />} /> */}
      {/* Example: <Route path="/products" element={<ProductsPage />} /> */}
      {/* Example: <Route path="/cart" element={<CartPage />} /> */}
    </Routes>
    </BrowserRouter>

        
  )
}

export default App
