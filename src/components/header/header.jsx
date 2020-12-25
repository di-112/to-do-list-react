import React from 'react'
import { NavLink } from 'react-router-dom'

const headerLogo = 'https://static10.tgstat.ru/channels/_0/e2/e2db1e0464d24e6c4cbcbd17ed634d11.jpg'

const Header = () => {
   return (
      <header className='header'>
         <div className='header__content'>
            <img className='header__logo' src={headerLogo} alt=""/>
            <nav className='header__menu menu'>
               <NavLink to='/' exact className='menu__item'>Главная</NavLink>
               <NavLink to='/info' className='menu__item'>Информация</NavLink>
            </nav>
            
         </div> 
      </header>
   )
}

export default Header