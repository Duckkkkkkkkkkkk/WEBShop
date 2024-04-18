import React from 'react';
import styles from './shopCard.module.css';

import heart from './../../img/icons/heart.svg';
import search from './../../img/icons/search.svg';
import shopping__cart from './../../img/icons/shopping-cart.svg';
import star from './../../img/icons/star.svg';

const ShopCard = (props) => {
    const { title, category, price, img1, stars } = props;

    return (
        <div className={styles.card}>
            <div className={styles.card__image}>
                <a href="#!" className={styles.image}>
                    <img className={styles.pic__1} src={img1} alt='Shopping card' />
                </a>
                <ul className={styles.social}>
                    <li><a href="#!" data-tip="Добавить в Избранное" className={styles.icon__heart}>
                        <img className={styles.social__icon} src={heart} alt="Open" />
                    </a></li>
                    <li><a href="#!" data-tip="Быстрый просмотр" className={styles.icon__search}>
                        <img className={styles.social__icon} src={search} alt="Open" />
                    </a></li>
                    <li><a href="#!" data-tip="Добавить в корзину" className={styles.icon__bag}>
                        <img className={styles.social__icon} src={shopping__cart} alt="Open" />
                    </a></li>
                </ul>
                <div className={styles.card__price}>{price}</div>
            </div>
            <div className={styles.card__content}>
                <div className={styles.card__title}><a href="#!">{title}</a></div>
                <div className={styles.card__category}>{category}</div>
                <div className={styles.card__rating}>
                    <span>{stars}</span>
                    <img className={styles.stars} src={star} alt='Card rating' />
                </div>
            </div>
        </div>
    );
}

export default ShopCard;
