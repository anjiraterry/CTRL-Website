import React from 'react'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import SliderComp from '../../components/SliderComp/SliderComp'
import "./Home.scss"
const Home = () => {
  return (
    <div className='home'>
      <SliderComp/> 
    <FeaturedProducts type="featured"/>
  <Categories /> 
     <Contact/> 
    </div>
  )
}

export default Home