import React from 'react';
import styles from './Card.module.css';
import arrowImg from './../../img/icons/arrow.svg';

const Card = (props) => {
    const { title, img } = props;

    return (
        <div className={styles.card}>
            <img className={styles.card__img} src={img} alt='Category...' />
            <div className={styles.card__body}>
                <div className={styles.card__text}>
                    <div className={styles.card__title}>{title}</div>
                    <div className={styles.card__muted}>Новинка!</div>
                </div>
                <div className={styles.card__icon}>
                    <img src={arrowImg} alt="Open" />
                </div>
            </div>
        </div>
    );
}

export default Card;
