import React from "react";
import { NavLink } from 'react-router-dom';

import aboutus__img from './../../img/images/aboutus-img.png';

import './aboutus.css';

const Aboutus = () => {
    return ( 
        <div className="aboutus">
            <div className="container">
                <div className="responsive-container-block bigContainer">
                    <div className="responsive-container-block Container bottomContainer">
                        <div className="ultimateImg">
                            <img className="mainImg" src={aboutus__img} alt="Main Image" />
                            <div className="purpleBox">
                                <p className="purpleText">
                                Давайте вместе собирать восхитительные картинки, оставляя за собой следы радости и вдохновения!
                                </p>
                                <img className="stars" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/mp5.svg" alt="Stars" />
                            </div>
                        </div>
                        <div className="allText bottomText">
                            <div className="arrivals__header">
                                <h2 className='title-2'>Немного о нас</h2>
                            </div>
                            <p className="text-blk subHeadingText">
                                Собирай моменты, шаг за шагом!
                            </p>
                            <p className="text-blk description">
                                Добро пожаловать в мир наших пазлов! Наш магазин предлагает широкий выбор пазлов различной сложности и тематики — от увлекательных пейзажей до захватывающих изображений животного мира. Мы верим, что каждый пазл — это уникальная история, которую вы собираете кусочками, создавая неповторимое произведение искусства. 
                            </p>
                            <div className="promo__btn-wrapper">
                                <NavLink className='promo__btn' to="/catalog">В каталог</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Aboutus;
