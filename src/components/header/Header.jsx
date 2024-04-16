import { NavLink } from 'react-router-dom';

import logoImg from './../../img/icons/logo.svg'
import './header.css'

function Header () {

    return (
        <header className='header'>
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <img src={logoImg} alt="Logo"/>
                        <span>MentalFlex</span>
                    </div>
                    <nav className="header__nav">
                        <ul>
                            <li>
                                <NavLink to="/">Главная</NavLink>
                                <NavLink to="/catalog">Каталог</NavLink>
                                <NavLink to="/about">О нас</NavLink>
                                <NavLink to="/contacts">Контакты</NavLink>
                                <a href="#!" className="header__nav-btn">Войти</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )

}

export default Header;