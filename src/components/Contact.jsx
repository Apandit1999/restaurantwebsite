import React from 'react'
const  Contact = () => {
  return (
    <>
      <section className='contact' id ="contact">
        <h1 className='heading'>
            <span>Contact </span>Us
            </h1>
            <div className='row'>

            
            
            <iframe class= "map"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.233805507767!2d77.28923753955075!3d28.590522000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce48b75b6b7c7%3A0xbae93422b10e4726!2sLaxmi%20Restaurant!5e0!3m2!1sen!2sin!4v1694003613282!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <form>
                <h3>get in touch</h3>
                <div className='inputBox'>
                    <span className='fas fa-user'></span>
                    <input type = "text" placeholder='Name'/>
                </div>
                <div className='inputBox'>
                    <span className='fas fa-envelope'></span>
                    <input type = "email" placeholder='Email-id'/>
                </div>
                <div className='inputBox'>
                    <span className='fas fa-phone'></span>
                    <input type = "Number" placeholder='Phone no.'/>
                </div>
                <input type = "submit" value= "contact now"
                    className='btn'/>
            </form>
        </div>
      </section>
    </>
  );
}

export default Contact
