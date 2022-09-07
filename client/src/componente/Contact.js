import React from 'react'
import emailjs from 'emailjs-com';


function Contact() {
  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm('service_zujgxb5', 'template_b2dwmtp', e.target, 'hvDix9qmj1AOkE81i').then(res =>{
        console.log(res);
    }).catch(res =>{
        console.log(res);
    });
}
const submitHandler = (e) =>{
  alert("Form submitted")
  e.preventDefault(submitHandler)
}

  return (
  <>
  <div onSubmit={submitHandler} className='main '>
            <h1 className='heding'>Contact form</h1>
            <h4 >Gate in touch</h4>
            <form onSubmit={sendEmail}>
            <span class="name"> <i class="fa fa-user"></i> </span>
                <label className='name' >Name:</label>
                <input type="text" placeholder='Full name' name='name' />
                <br></br>
                <br></br>
                <span class="email"> <i class="fa fa-envelope"></i> </span>
                <label className='email'>Email:</label>
                <input type="user_email" placeholder='Email' name='name' />
                <br></br>
                <br></br>
                <span class="msg"> <i class="fa fa-envelope"></i> </span>
                <label className='msg'>Message:</label>
                <textarea placeholder='Type here message' name='message' rows='4' />
                <br/>
                <input className='submit' type="submit"   value='send' />

                
            </form>
            
        </div>
        
  </>
  )
}

export default Contact
