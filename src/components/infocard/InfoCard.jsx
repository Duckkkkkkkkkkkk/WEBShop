import React from 'react';
import styles from './infocard.module.css';

const InfoCard = (props) => {
    const { img, number, title, description } = props;

    return (
        <div className={styles.infocard}>
            <img className={styles.card__img} src={img} alt='Information...' />
            <div className={styles.card__circle}>
                <div className={styles.card__number}>{number}</div>
            </div>
            <div className={styles.card__body}>
                <div className={styles.card__text}>
                    <div className={styles.card__title}>{title}</div>
                    <div className={styles.card__muted}>{description}</div>
                </div>
            </div>
        </div>
    );
}

export default InfoCard;
