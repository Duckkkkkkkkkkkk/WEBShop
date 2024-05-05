import './sales.css'
import { NavLink } from 'react-router-dom';


import salesImg from './../../img/images/sales-img.png'

const Sales = () => {
    return (
    <section className="sales">
        <div className="sales__img">
                    <img src={salesImg} alt="" />
                </div>
            <div className="sales__content">
                <div className="sales__text">
                    <div className="sales__title">
                        <span className='highlight'>
                            <span>Скидки</span>
                        </span>
                        <span>ждут тебя!</span>
                    </div>
                    <div className="sales__desc">
                        Собери свою выгоду по кусочкам!   
                        <div className="sales__desc2">
                            1 мая - 10 мая 2024                 
                        </div>
                        <div className="sales__desc2">
                            15 - 30% на любой товар                   
                        </div>                 
                    </div>
                    <div className="sales__btn-wrapper">
                        <NavLink className='sales__btn' to="/catalog">В каталог</NavLink>
                    </div>
                </div>
            </div>
    </section>);
}
 
export default Sales;