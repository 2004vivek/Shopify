import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { RxCross1 } from "react-icons/rx";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
export default function Sidebar() {
    const {sidebarvisible,cutHandler,active,locationHandler}=useContext(AppContext)
  return (
    <div className='sidebar' style={{width:`${sidebarvisible?"200px":"0"}`}}>
      <div style={{marginLeft:"1rem",marginTop:"1rem",width:`${sidebarvisible&&"0"}`}} onClick={cutHandler} ><RxCross1 fontSize={"24px"}/></div>
      <div className='sidebar_nav' >
      <div style={{cursor:"pointer",color:`${active==="home"?"blue":""}`}} onClick={()=>locationHandler("home")}>Home</div>
      <Link to="test1" smooth={true} duration={500}  style={{cursor:"pointer"}} ><div style={{color:`${active==="category"?"blue":""}`}} onClick={()=>locationHandler("category")}>Categories</div></Link>
      <Link  to="test2" smooth={true} duration={1000}  style={{cursor:"pointer",color:`${active==="contact"?"blue":""}`}} ><div id='contact' onClick={()=>locationHandler("contact")}>Contact Us</div></Link>
      </div>
      
    </div>
  )
}
