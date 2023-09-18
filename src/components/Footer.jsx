import React from 'react'

function Footer() {
  return (
    <>
    <section className='footer'>
        <div className='share'>
        <a href='#' className='fab fa-facebook-f'></a>
        <a href='#' className='fab fa-twitter'></a>
        <a href='#' className='fab fa-instagram'></a>
        <a href='#' className='fab fa-linkedin'></a>
        </div>
        <div className="links">
          <a href="#">home</a>
          <a href="#about">about</a>
          <a href="#menu">menu</a>
          <a href="#products">product</a>
          <a href="#review">review</a>
          <a href="#contact">contact</a>
          <a href="#blogs">blog</a>
        </div>
        <div className='credit'>
            created by <span>Aman</span> All right reserved
        </div>
    </section>
      
    </>
  )
}

export default Footer
