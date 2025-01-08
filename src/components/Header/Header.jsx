import React from 'react'
import "./Header.scss"
import { Link } from 'react-router-dom'
import phone from "../../assets/image/phone.png"

function Header() {
  return (
    <header className='header'>
      <div className='top-header'>
            <div className='header-content container'>
                <p>
                    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                    <Link>ShopNow</Link>
                </p>
                <select >
                    <option value="kg">KGZ</option>
                    <option value="en">ENG</option>
                    <option value="ru">RUS</option>
                </select>
            </div>
      </div>
      <div className='main-header container'>
        <div className='header-left'>
            <h2></h2>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/register">Sign Up</Link>
                </li>
            </ul>
        </div>
        <div className='header-right'>
            <div className='search'> 
                <input type="text" />
                <img src="" alt="" />
            </div>
            <div className='icons'>
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
        </div>
      </div>
    </header>
  )
}

export default Header