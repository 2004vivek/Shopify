import React from 'react'
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <>
    <div className='contact' style={{position:"relative",bottom:0}}>
    <div className='contacts'>
      <div className='contact_heading'>CONTACT</div>
      <div className='touch'>GET IN TOUCH</div>
    </div>
    
    <div className='contact_content'>
      <div className="contact_content_left">
        <div className='contact_dont'>DONT'S BE SHY</div>
        <p className='contact_para' style={{marginTop:"1rem"}}>Feel free to get in touch with me.I am always open to discussing new projects, creative ideas or oppurnities to be part of your visions</p>
        <div style={{display:"flex",flexDirection:"column"}}>

      
        
        <div style={{display:"flex",alignItems:"center",gap:"0.7rem"}}>
        <div><MdOutlineMarkEmailUnread fontSize={"24px"} style={{ color: "#39f039",marginTop:"1rem"}}/></div>
        <p style={{alignContent:"center",marginRight:"0.7rem"}} className='contact_para'>Mail</p>
        <div style={{alignContent:"center"}}><p className='contact_para' >info@gmail.com</p></div>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:"0.7rem"}}>
            <div><FaPhoneAlt fontSize={"24px"} style={{ color: "#39f039",marginTop:"1rem"}}/></div>
        <p className='contact_para' style={{alignContent:"center"}}>Call me</p>
        <p className='contact_para' style={{alignContent:"center"}}>+1 333 454 55 44</p>

        </div>
        
        </div>

       
      </div>

      <div className="contact_content_right">
        
          <div>
            <input type="text" placeholder='Enter your Name' />
          </div>
          <div>
            <input type="text" placeholder='Enter a valid email address ' />
          </div>
          <div>
            <textarea  name="" id="" placeholder='Enter your message'></textarea>
          </div>
          <div style={{display:"flex",gap:"1rem",alignItems:"center",color:"#d8dcdf"}}><input type="checkbox"/>I accept the Terms of Service</div>
          <button className="btn1">SUBMIT</button>
      </div>
    </div>
    </div>
    </>

  )
}
