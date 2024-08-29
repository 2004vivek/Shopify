import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Card from './Card'
export default function Filter() {
    const {category_list_data,inputchangeHandler}=useContext(AppContext)
    
  return (
    <div>
      <div><h1 className='filter_heading'>All Products</h1></div>
      <div className='search'><input type="text" placeholder='Search' onChange={(event)=>inputchangeHandler(event)}/></div>
      <div className='filter_section'>
        <h1 className='filter'>Filters</h1>
        <div>
            {category_list_data.map((data)=>{
                return <Card key={data.id} data={data}/>
            })}
        </div>
      </div>
    </div>
  )
}
