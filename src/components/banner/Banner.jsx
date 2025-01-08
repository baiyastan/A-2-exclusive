import React from 'react'
import "./Banner.scss"

function Banner() {
  return (
    <div className='banner'>
      <div className='banner-sidebar'>
        <ul>
            <li>Woman’s Fashion</li>
            <li>Men’s Fashion</li>
        </ul>
      </div>
      <div className='banner-carousel'></div>
    </div>
  )
}

export default Banner
