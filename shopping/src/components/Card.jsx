import React, { useContext, useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { AppContext } from '../context/AppContext';
import ratings from '../../Rating';
import pricing_data from '../../Pricing_data';
import discountdata from '../../Discount';
export default function Card({data}) {
    const {categoryHandler,RatingHandler,PricesHandler,DiscountHandler}=useContext(AppContext)
    const [cardid,setcardid]=useState(null)
    function clickhandler(){
        if(cardid===data.id){
        setcardid(null)
        }
        else{
            setcardid(data.id)
        }
    }
  return (
    <>
    <div className='filter_container' onClick={clickhandler}>
    <div className='filter_card'>
        {data.name}
    </div>
    <div>{cardid===data.id?(<IoIosArrowUp fontSize={"18px"}/>):(<IoIosArrowDown fontSize={"18px"}/>)}</div>
    </div>
    <div className='list_of_filter_item'>
        {cardid===data.id&&data.name==="Category"?(["Laptops","Mens-Watches","Groceries","Sunglasses","Fragrances","Home-Decoration"].map((value,index)=>
        <div className='items' key={index}  onClick={()=>categoryHandler(value,value.id)}>{value}</div>
        )):""}
        {cardid===data.id&&data.name==="Customer Rating"?(ratings.map((value,index)=>
        <div className='items' key={index} onClick={()=>RatingHandler(value.id)}>{value.rating}</div>
        )):""}
        {cardid===data.id&&data.name==="Prices"?(pricing_data.map((value,index)=>
        <div className='items' key={index} onClick={()=>PricesHandler(value.id)}>{value.price}</div>
        )):""}
         {cardid===data.id&&data.name==="Discount"?(discountdata.map((value,index)=>
        <div className='items' key={index} onClick={()=>DiscountHandler(value.id)}>{value.discount}</div>
        )):""}
    </div>
    

    </>
  )
}
