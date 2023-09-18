import React from 'react'
import { product } from '../Data'

function Product() {
  return (
    <div>
      <section className='products' id = "menu">
   <h1 className='heading'>
    Our <span>products</span>
   </h1>
   <div className='box-container'>
  { product.map((item,index) => (
    <div className='box'>
    <div className='icons'>
    <a href='#' className='fas fa-shopping-cart'></a>
    <a href='#' className='fas fa-heart'></a>
    <a href='#' className='fas fa-eye'></a>

    </div> 
    <div className='image'>
    <img src = {item.img} alt=""/>
    </div>
    <div className='content'>
    <h3> fresh coffee</h3>
    <div className='stars'>
    <i className='fas fa-star'/>
    <i className='fas fa-star'/>
    <i className='fas fa-star'/>
    <i className='fas fa-star-half-alt'/>
    <i className='fas fa-star'/>
     </div>
     <div className='price'>
     Rs.89 <span>99</span>
    </div>
   </div>
   </div>
   ))}
    </div>
   </section>
  
    </div>
  )
}

export default Product
