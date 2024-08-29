import React, { useContext,  useState } from 'react'
import { FaCartPlus } from "react-icons/fa6";
// import { FaHeart } from "react-icons/fa6";
import { AppContext } from '../context/AppContext';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { IoReorderThree } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import Sidebar from './Sidebar';
export default function Navbar() {
    const {liked,isToggled,switchingHandler,addtocart,sidebarHandler,active,locationHandler}=useContext(AppContext)
   
  return (
    <>
    <div className='boss' >
    <div className='header' style={{background:isToggled?"black":""}}>
      <Sidebar/>
      <div className='header_inner'>
        <div className='header_img'>
            <img src="shopify_logo.png" alt="" />
        </div>
        <div className='header_nav'>
            <div className='navigator' style={{color:isToggled?"white":""}}>
                <div style={{cursor:"pointer",color:`${active==="home"?"blue":""}`}} onClick={()=>locationHandler("home")}>Home</div>
                <Link to="test1" smooth={true} duration={500}  style={{cursor:"pointer"}} ><div style={{color:`${active==="category"?"blue":""}`}} onClick={()=>locationHandler("category")}>Categories</div></Link>
                <Link  to="test2" smooth={true} duration={1000}  style={{cursor:"pointer",color:`${active==="contact"?"blue":""}`}} ><div id='contact' onClick={()=>locationHandler("contact")}>Contact Us</div></Link>
            </div>
        </div>
        <div className='header_filter' style={{display:"flex", justifyContent:"space-evenly"}}>
            <div className='sample1'>{isToggled?(<FaCartPlus className='cart' style={{cursor:"pointer",color:"white"}} fontSize={"26px"}/>):(<FaCartPlus className='cart' style={{cursor:"pointer"}} fontSize={"26px"}/>)} <div className='sample2'>{addtocart.length===0?0:addtocart.length}</div></div>
            <div className='sample1' >{isToggled?(<FaHeart className='heart' style={{cursor:"pointer",color:"white"}} fontSize={"26px"}/>):(<FaHeart className='heart'  style={{cursor:"pointer"}} fontSize={"26px"}/>)} <div className='sample2'>{liked.length===0?0:liked.length}</div> </div>
      <div
      onClick={()=>switchingHandler()}
      className={`togglemode ${isToggled ? "toggled" : ""}`}
    ></div>
     <div className='hamsburger' >{isToggled?<IoReorderThree style={{cursor:"pointer",color:"white"}} fontSize={"26px"} onClick={sidebarHandler}/>:<IoReorderThree style={{cursor:"pointer"}} fontSize={"26px"} onClick={sidebarHandler}/>}</div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}
