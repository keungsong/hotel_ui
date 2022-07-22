import React from 'react'
import "./featured.css"
const Featured = () => {
  return (
    <div className='featured'>
        <div className='featuredItem'>
            <img className='featuredImg'
             src="https://images.prestigeonline.com/wp-content/uploads/sites/8/2022/06/24144708/avani-luang-prabang--1024x649.jpeg" 
            alt="" />
            <div className='featuredTitle'>
                <h1>Sanctuary Luang Prabang Hotel</h1>
                <h2>555 reviews</h2>
            </div>
        </div>
        <div className='featuredItem'>
            <img className='featuredImg' 
            src="https://images.prestigeonline.com/wp-content/uploads/sites/8/2022/06/24144708/avani-luang-prabang--1024x649.jpeg" 
            alt="" />
            <div className='featuredTitle'>
                <h1>AVANI+ Hotel</h1>
                <h2>500 reviews</h2>
            </div>
        </div>
        <div className='featuredItem'>
            <img className='featuredImg' 
            src="https://images.prestigeonline.com/wp-content/uploads/sites/8/2022/06/24144708/avani-luang-prabang--1024x649.jpeg" 
            alt="" />
            <div className='featuredTitle'>
                <h1>Luxury Hotel</h1>
                <h2>555 reviews</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured