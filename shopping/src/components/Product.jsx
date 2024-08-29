import React, { useContext } from 'react'
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { AppContext } from '../context/AppContext';
export default function Product({product}) {
    let discountper=product.discountPercentage;
    let originalprice=product.price*80;
    let discountamount=(originalprice*(discountper/100));
    let priceafterdiscount=originalprice-discountamount
    const {liked,likeHandler,cartHandler,addtocart}=useContext(AppContext);
  return (
    <div className='product'>
        <div className="product_img">
            <img src={product.images[0]} alt="" />
            <div className='product_heart' onClick={()=>{likeHandler(product.id)}}>{liked.includes(product.id)?(<FaHeart color='red' fontSize={"18px"}/>):(<FaRegHeart color='red' fontSize={"18px"}/>)}</div>
        </div>
        <div className='product_title'>
            {product.title}
        </div>
        <div style={{marginBottom:"0.5rem"}}>
            <span className='product_rating'>{product.rating} <FaStar/></span><span className='product_stock'>({(product.stock)})</span>
        </div>
        <div style={{marginLeft:"10px",display:"flex",gap:"0.5rem",marginBottom:"0.344rem"}}>
            <span className='product_price'>₹{priceafterdiscount.toFixed(2)} </span><span className='product_original'>₹{originalprice.toFixed(2)} </span><span className='product_discount'>{discountper}% off</span>
        </div>
        <div className='product_delivery'>Free Delivery</div>
        <div className='product_btn'><button onClick={()=>{cartHandler(product.id)}} className={addtocart.includes(product.id)?'remove':'added'}>{addtocart.includes(product.id)?"Remove Cart":"Add to Cart"}</button></div>
    </div>
  )
}
