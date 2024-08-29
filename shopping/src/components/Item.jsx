import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Product from './Product'
export default function Item() {
    const {category_data,products,categoryHandler,isactivebtn,clone}=useContext(AppContext)
    // let resultantdata=clone||products //this is one way of filtering the data
  return (
    <>
    <div className='categories'>
      {category_data.map((values)=>
      <button className='filter_btn' key={values.id} style={{border:isactivebtn===values.id?"3px solid black":""}} onClick={()=>categoryHandler(values.categoryname,values.id)}>{values.categoryname}</button>
      //   {values.categoryname}
    )}
    </div>
    <div className='dummy_name'>
       {clone!==null?clone.map((product)=>{
        return <Product key={product.id} product={product}/>
    }):
    products.map((product)=>{
      return <Product key={product.id} product={product}/>
  })
    }
    </div>
    </>
  )
}
