import React from 'react'
import AboutImg from "../assets/images/about-img"

const About = () => {
  return (
    <>
     <section className='about' id='about'>
     
      <h1 className='heading'>
      <span>about  </span>us 
      </h1>
      <div className='row'>
        <div className='image'>
            <img src={AboutImg} alt=''/>
        </div>
        <div className='content'>
            <h3>What Makes Our Food Special?</h3>
            <p></p>
            <p></p>
            <a href = "%" className='btn'>Learn More</a>
        </div>
      </div>
      </section>
 
    </>
  );
};

export default About;
