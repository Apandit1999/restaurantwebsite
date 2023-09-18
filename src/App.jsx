

import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Menu from './components/Menu'
import Product from './components/Product'
import Review from './components/Review'
import Contact from './components/Contact'
import Blog from './components/Blog'
import Footer from './components/Footer'


import Data from './Data'
import "../src/assets/css/style.css"

const App=() => {
  return (
    <div>
    <Navbar/>
     <Home/>
     <About/>
     <Menu/>
     <Product/>
     <Review/>
     <Contact/>
     <Blog/>
     <Footer/>
    </div>
  )
}

export default App
