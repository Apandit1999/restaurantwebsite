import React from 'react'
import { blog } from '../Data'

function Blog() {
  return (
    <>
    <section className='blogs' id = "blogs">
   <h1 className='heading'>
    Our <span>blogs</span>
   </h1>
   <div className='box-container'>
       { blog.map((item,index) => (
    <div className='box' key = {index}>
    <div className='image'>
      <img src={item.img} alt=''/>
      </div>
      <div className='content'>
      <a href='#' className='title'>
        tasty and healthy
      </a>
      <span>By admin/3rd september 2023</span>
      <p>Awesome food , best service and beautiful place!! One of the best Indian restaurant in town!! Go for it!!
</p>
<a href="#" className='btn'>
    read more
</a>

      </div>
        
      
    </div>
    ))}
    </div>
   </section>
      
    </>
  )
}

export default Blog
