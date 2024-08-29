import React, { useContext } from 'react'
import Filter from './Filter'
import Item from './Item'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'
export default function ItemContainer() {
    const {loading}=useContext(AppContext)
  return (
    <div className='item_container'>
      <div className="item_container_left">
        <Filter/>
      </div>
      <div className="item_container_right">
        {loading?<Spinner/>:<Item/>}
      </div>
    </div>
  )
}
