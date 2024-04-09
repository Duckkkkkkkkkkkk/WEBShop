import React from "react";
import "./footer.css";

import logoImg from './../../img/icons/logo.svg'
import vk from './../../img/socials/vk.svg'
import fb from './../../img/socials/fb.svg'
import inst from './../../img/socials/inst.svg'
import tw from './../../img/socials/tw.svg'
import inl from './../../img/socials/in.svg'



const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="footer-column">
            <div className="header__logo">
                <img src={logoImg} alt="Logo"/>
                <span>MentalFlex</span>
            </div>
            <div className="desc__wr">
                <div className="footer__desc">
                    <span>Собери свой мир:</span>
                </div>
                <div className="footer__desc">
                    <span>один кусочек за другим.</span>
                </div>
            </div>
            <div className="social__list">
                <div><a href="#!"><img src={vk} alt="VK"></img></a></div>
                <div><a href="#!"><img src={fb} alt="Facebook"></img></a></div>
                <div><a href="#!"><img src={inst} alt="Instagram"></img></a></div>
                <div><a href="#!"><img src={tw} alt="Twitter"></img></a></div>
                <div><a href="#!"><img src={inl} alt="LinkedIn"></img></a></div>
            </div>
          </div>
          {/* Column2 */}
          <div className="footer-column2">
          <div className="header__footer">Меню</div>
            <ul className="list-unstyled">
              <li><a href="#!">Каталог</a></li>
              <li><a href="#!">О нас</a></li>
              <li><a href="#!">Контакты</a></li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="footer-column2">
            <div className="header__footer">Свяжитесь с нами</div>
            <ul className="list-unstyled">
              <li>+7 900 555-35-35</li>
              <li>MentalFlex@mail.ru</li>
              <li>г. Москва, ул. Московская, д. 15/5.</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="copyright">
            &copy;{new Date().getFullYear()} Интернет-магазин пазлов «MentalFlex»
        </div>
      </div>
    </div>
  );
}

export default Footer;
