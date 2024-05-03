import React, { useState } from 'react';

import map from './../../img/images/map.png';

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
        <div className="map" onClick={handleDocumentClick}>
            <div className="map-item map-item1">
                <a className="marker marker1" href="#marker1" onClick={(e) => handleMarkerClick(e, 1)}><span>1</span></a>
                <aside id="marker1" className={`map-popup ${popupOpen === 1 ? 'open' : ''}`}>
                    <h3 className="popup-title">Popup Title</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia pariatur laudantium deserunt minima delectus illum dolor, nesciunt sit iure, debitis eligendi blanditiis, tempore quidem cupiditate quaerat incidunt sapiente aliquam? Debitis!</p>
                    <a className="btn" href="#">Find Out More</a>
                </aside>
            </div>

            <div className="map-item map-item2">
                <a className="marker marker2" href="#marker2" onClick={(e) => handleMarkerClick(e, 2)}>2</a>
                <aside id="marker2" className={`map-popup ${popupOpen === 2 ? 'open' : ''}`}>
                    <h3 className="popup-title">Popup Title</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia pariatur laudantium deserunt minima delectus illum dolor, nesciunt sit iure, debitis eligendi blanditiis, tempore quidem cupiditate quaerat incidunt sapiente aliquam? Debitis!</p>
                    <a className="btn" href="#">Find Out More</a>
                </aside>
            </div>

            <div className="map__wrapper">
                <img src={map} alt="Map" />
            </div>
        </div>
    </div>
    );
}

export default Hotspots;
