import React from 'react';
import styles from '../../styles/Company/DeveloperCard.module.scss'

function DeveloperCard(props) {
    const { photo, name, desc } = props
    return (
        <div className={styles.card}>
            <img src={photo} alt="" className={styles.photo}/>
            <p className={styles.name}>{name}</p>
            <p className={styles.desc}>{desc}</p>
        </div>
    );
}

export default DeveloperCard;