import React from 'react';

import infocard01 from './../../img/images/infocard1.png';
import infocard02 from './../../img/images/infocard2.png';
import infocard03 from './../../img/images/infocard3.png';
import infocard04 from './../../img/images/infocard4.png';

import './infobanner.css';
import InfoCard from '../infocard/InfoCard';

const InfoBanner = () => {
    return ( 
        <section className="infoBanner">
            <div className="container">
                <div className="products__header">
                    <h2 className='title-2'>Почему мы лучшие?</h2>
                </div>
                <div className="infocards">
                    <InfoCard img={infocard01} number="01" title="Доставка по всей России" description="Доставка компанией &quot;CDEK&quot;." />
                    <InfoCard img={infocard02} number="02" title="Защита платежей" description="Если что -то пошло не так - вернем деньги." />
                    <InfoCard img={infocard03} number="03" title="Защита клиентов" description="От клика до доставки." />
                    <InfoCard img={infocard04} number="04" title="24/7 Всегда на связи" description="Ответим на любые вопросы." />
                </div>
            </div>
        </section>
     );
}
 
export default InfoBanner;