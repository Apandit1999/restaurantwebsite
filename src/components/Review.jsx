import React from 'react'
import { review } from '../Data'
import qouteImg from "../assets/images/quote-img.png"
function Review() {
  return (
    <>
    <section className='review'>
        <h1 className='heading'>
        customer's <span>review</span>
        </h1>
            <div className='box-container'>

               { review.map((item,index)=>(
                    <div className='box'>
                    <img src={qouteImg} alt='' className='quote'/>
                    <p>
                    My family and I have been to Cross Culture twice since it's opening. We have been pleased to find the dishes
                    </p>
                    <img src='{item.img}' alt=''/>
                    <h3> Aman Sharma</h3>
                    <div className='stars'>
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />

                    </div>
                    </div>
                    

                ))}
            </div> 
    </section>
      
    </>
  )
}

export default Review
