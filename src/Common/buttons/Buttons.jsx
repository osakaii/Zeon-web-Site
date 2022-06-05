import React from 'react';
import styles from './Buttons.module.scss'

function Buttons({name1, name2}) {
    return (
      <div className={styles.buttons}>
        <button className={`${styles.filledBtn} button`}>{name1}</button>
        <button className={`${styles.btn} button`}>{name2}</button>
      </div>
    );
}

export default Buttons;