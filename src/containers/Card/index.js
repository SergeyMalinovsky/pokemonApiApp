import React from 'react';

import styles from './Card.module.css';

const Card = (props) => {
    const {id, name, imageUrl, abilities, base_experience} = props.card;

    return (
        <div className={styles.main}>
            <div className={styles.wrapper}>
                <div className={styles.top}>
                    <div className={styles.avatar}>
                        <img src={imageUrl} alt='avatar'/>
                    </div>
                    <div className={styles.name}>
                        <p>{name}</p>
                    </div>
                </div>
                <div className={styles.center}></div>
                <div className={styles.bottom}></div>
            </div>
        </div>
    );
}

export default Card;
