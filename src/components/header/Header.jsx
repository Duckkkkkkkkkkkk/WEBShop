import { Link } from 'react-router-dom';

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
                                <Link to="/catalog">Главная</Link>
                                <Link to="/catalog">Каталог</Link>
                                <Link to="/about">О нас</Link>
                                <Link to="/contacts">Контакты</Link>
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