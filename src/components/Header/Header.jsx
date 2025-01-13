import React from 'react'
import "./Header.scss"
import { Link } from 'react-router-dom'
import phone from "../../assets/image/phone.png"
import { FaRegHeart } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

function Header() {
    const {t, i18n} = useTranslation()

    function handleChangeLng(event) {
       let lng = event.target.value;
       
       i18n.changeLanguage(lng)
    }

  return (
    <header className='header'>
      <div className='top-header'>
            <div className='header-content container'>
                <p>
                    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                    <Link>ShopNow</Link>
                </p>
                <select onChange={handleChangeLng}>
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
                    <Link to="/">{t("home")}</Link>
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
                <FaRegHeart className='icon' size={24} />
                <img src="" alt="" />
            </div>
        </div>
      </div>
    </header>
  )
}

export default Header