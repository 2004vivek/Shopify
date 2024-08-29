import { createContext, useState } from "react";
import category_list_data from '../../category_list_data'
import category_data from "../../category_data";
import axios from "axios";
export const AppContext=createContext();
import React from 'react'
import toast from "react-hot-toast";

export default function AppContextProvider({children}) {
    const [products,setproducts]=useState(null)
    const [liked,setliked]=useState([])
    const [isactivebtn,setactivebtn]=useState(null)
    const [loading,setloading]=useState(true)
    const [clone,setclone]=useState(null)
    const [inputvalue,setinputvalue]=useState('')
    const [isToggled, setIsToggled] = useState(false);
    const [addtocart,setaddtocart]=useState([])
    const [sidebarvisible,setsidebarvisible]=useState(false)
    const [active,setactive]=useState("")
    function locationHandler(id){
     setactive(id)

    }
    function sidebarHandler(){
        setsidebarvisible(!sidebarvisible)
    }
    function cutHandler(){
        setsidebarvisible(!sidebarvisible)
    }
    function cartHandler(id){
        console.log(id)
        if(addtocart.includes(id)){
            setaddtocart((prev)=>prev.filter((chosen)=>chosen!==id))
            toast.error("Added to Cart");
        }
        else{
            if(addtocart.length===0){
                setaddtocart([id])
            }
            else{
                setaddtocart((prev)=>[...prev,id])
            }
            toast.success("Added to Cart")
        }
    }
    function likeHandler(id) {
       if(liked.includes(id)){
        setliked((prev)=>prev.filter((chosen)=>chosen!==id))
        toast.error("WishList Removed")
       }
       else{
        if(liked.length===0){
            setliked([id])
        }
        else{
            setliked((prev)=>[...prev,id])
        }
        toast.success("WishList Added")
       }
        console.log(id)
    }
    async function fetchdata(endpoint=""){
        setloading(true)
        let url=`https://dummyjson.com/products${endpoint}`
        console.log(url)
        try {
            let data=await axios.get(url)
            setproducts(data.data.products)
            setloading(false)
        } catch (error) {
            console.log("no url found")
            setproducts([])
        }
    }
    function categoryHandler(category,id){
        console.log(category)
        console.log(id)
        setactivebtn(id)
      
        if(String(category).toLowerCase()=="all"){
            console.log("all")
            fetchdata(category="");
        }
        else{
            fetchdata(`/category/${String(category).toLowerCase()}`)
        }
   
    }
 
    function inputchangeHandler(event) {
        let value = event.target.value.toLowerCase();
        console.log(value)
        setinputvalue(value); 
        if (value) {
            fetchdata(`/search?q=${value}`);
        } else {
            fetchdata("");
        }
        
    }

    function RatingHandler(id){
        console.log(id)
        const filtereddata=products.filter((value)=>value.rating>=id)
        console.log("this is filterd data"+ JSON.stringify(filtereddata,null,2))
            setclone(filtereddata)
    }
   
    function PricesHandler(id){
        let lowerprice=id[0]
        let upperprice=id[1]
        const filtereddata=products.filter((value)=>{
        const originalPrice = value.price*80; 
        const discountAmount = (originalPrice * (value.discountPercentage / 100));
        const priceAfterDiscount = originalPrice - discountAmount;
        return priceAfterDiscount >= lowerprice && priceAfterDiscount <= upperprice;
        })
        console.log(filtereddata)
        setclone(filtereddata)
    }
   function DiscountHandler(id){
   const filtereddata= products.filter((value)=>value.discountPercentage>=id)
   setclone(filtereddata)
   }
   const switchingHandler = () => {
    setIsToggled(!isToggled);
  };
    const value={
        category_list_data,category_data,fetchdata,products,setproducts,liked,setliked,likeHandler,categoryHandler,isactivebtn,setactivebtn,loading,setloading,inputchangeHandler,inputvalue,setinputvalue,RatingHandler,clone,setclone,PricesHandler,DiscountHandler,isToggled, setIsToggled,switchingHandler,addtocart,setaddtocart,cartHandler,sidebarHandler,sidebarvisible,setsidebarvisible,active,setactive,locationHandler,cutHandler
    }
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}
