import { useContext, useEffect } from 'react'
import './App.css'
import Carousel from './components/Carousel'
import ItemContainer from './components/ItemContainer'
import Navbar from './components/Navbar'
import { AppContext } from './context/AppContext'
import { Element, animateScroll as scroll, scrollSpy } from 'react-scroll';
import Contact from './components/Contact'
function App() {
 const {fetchdata}=useContext(AppContext)
 useEffect(()=>{
  fetchdata()
 },[])

  return (
    <>
    <Navbar/>
    <Carousel/>
    <Element name="test1" className="element"><ItemContainer/></Element>
    <Element name="test2" className="element"><Contact/></Element>
    </>
  )
}

export default App
