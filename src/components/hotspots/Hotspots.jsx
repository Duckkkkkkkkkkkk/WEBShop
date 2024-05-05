import React, { useState } from 'react';

import map from './../../img/images/map.png';
import partners from './../../img/images/partners.png'

import './hotspots.css';

const Hotspots = () => {
    const [popupOpen, setPopupOpen] = useState(null);

    const handleMarkerClick = (e, markerId) => {
        e.preventDefault();
        e.stopPropagation();
        setPopupOpen(popupOpen === markerId ? null : markerId);
    };

    const handleDocumentClick = () => {
        setPopupOpen(null);
    };

    return (
    <div className="container">
        <div className="hotspots__header">
            <h2 className='title-2'>Наши парнеры</h2>
        </div>
        <div className="map__container">
        <div className="map" onClick={handleDocumentClick}>
            <div className="map-item map-item1">
                <a className="marker marker1" href="#marker1" onClick={(e) => handleMarkerClick(e, 1)}><span>1</span></a>
                <aside id="marker1" className={`map-popup ${popupOpen === 1 ? 'open' : ''}`}>
                    <h3 className="popup-title">Пазлы Anatolian</h3>
                    <p className="popup-desc">Известный продукт турецкого производителя Perre Group Educational and Hobby Products Company. Образованная еще в 2000 году, компания уверенно зарекомендовала себя на рынке пазлов и разного рода развивающих игрушек.</p>
                    <a className="btn" href="#">Закрыть</a>
                </aside>
            </div>

            <div className="map-item map-item2">
                <a className="marker marker2" href="#marker2" onClick={(e) => handleMarkerClick(e, 2)}>2</a>
                <aside id="marker2" className={`map-popup ${popupOpen === 2 ? 'open' : ''}`}>
                    <h3 className="popup-title">Пазлы UNIDRAGON</h3>
                    <p className="popup-desc">Российский бренд деревянных пазлов. Уникальные разработки, оригинальные иллюстрации и только самые качественные материалы</p>
                    <a className="btn" href="#">Закрыть</a>
                </aside>
            </div>

            <div className="map-item map-item3">
                <a className="marker marker3" href="#marker3" onClick={(e) => handleMarkerClick(e, 3)}>3</a>
                <aside id="marker3" className={`map-popup ${popupOpen === 3 ? 'open' : ''}`}>
                    <h3 className="popup-title">Пазлы Jumbo</h3>
                    <p className="popup-desc">Это успешный продукт голландской компании Hausmann & Hott. Пазлы Jumbo - это забавные картины с мультяшными персонажами Яна ван Хаастерена и многочисленные мозаики Вазгич (пазлы "наоборот").</p>
                    <a className="btn" href="#">Закрыть</a>
                </aside>
            </div>

            <div className="map-item map-item4">
                <a className="marker marker4" href="#marker4" onClick={(e) => handleMarkerClick(e, 4)}>4</a>
                <aside id="marker4" className={`map-popup ${popupOpen === 4 ? 'open' : ''}`}>
                    <h3 className="popup-title">Magnolia Puzzle</h3>
                    <p className="popup-desc">Бренд компании ALB, основанной в 2020 году в Измире, Турция. Головоломки Magnolia это - высокое качество продукции, отличная техника резки, матовая и бархатистая поверхность, эксклюзивные изображения.</p>
                    <a className="btn" href="#">Закрыть</a>
                </aside>
            </div>

            <div className="map-item map-item5">
                <a className="marker marker5" href="#marker5" onClick={(e) => handleMarkerClick(e, 5)}>5</a>
                <aside id="marker5" className={`map-popup ${popupOpen === 5 ? 'open' : ''}`}>
                    <h3 className="popup-title">Пазлы Hatber</h3>
                    <p className="popup-desc">Один из лидеров рынка бумажной продукции в РФ. Компания производит пазлы в трех линейках "ECO", "Standart" и "Premium".</p>
                    <a className="btn" href="#">Закрыть</a>
                </aside>
            </div>

            <div className="map__wrapper">
                <img src={map} alt="Map" />
            </div>
        </div>
        <div className="text__arrow">
            Нажми на
            <span> маркер</span>
            , чтобы узнать о наших партнерах
            <img src={partners} className='partners__img' alt='Partners...' />
        </div>
        <div className="arrowAnim">
            <div className="arrowSliding">
                <div className="arrow"></div>
            </div>
            <div className="arrowSliding delay1">
                <div class="arrow"></div>
            </div>
            <div className="arrowSliding delay2">
                <div class="arrow"></div>
            </div>
            <div className="arrowSliding delay3">
                <div className="arrow"></div>
            </div>
        </div>
        </div>
    </div>
    );
}

export default Hotspots;
