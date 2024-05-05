import './promoaction.css'

import { NavLink } from 'react-router-dom';

const Promoaction = () => {
    return (
    <section className="promo">
            <div className="promo__content">
                <div className="promo__text">
                    <div className="promo__title">
                        <span className='highlight__blue'>
                            <span>Учись</span>
                        </span>
                        <span className='highlight__blue highlight--purple'>
                            <span>новому,</span>
                        </span>
                        <span className='highlight__blue'>
                            <span>играя</span>
                        </span>
                        <span className='highlight__blue highlight--purple'>
                            <span>весело!</span>
                        </span>
                    </div>
                    <div className="promo__desc">
                        <div>Открой для себя мир творчества</div>
                        <div>с помощью пазлов!</div>
                    </div>
                    <div className="promo__btn-wrapper">
                        <NavLink className='promo__btn' to="/catalog" style={{ background: 'var(--green)'}}>В каталог</NavLink>
                    </div>
                </div>
            </div>
    </section>);
}
 
export default Promoaction;