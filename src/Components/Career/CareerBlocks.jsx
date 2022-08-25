import React from 'react';
import styles from '../../styles/Career/CareerBlocks.module.scss'


function CareerBlocks({svg, title, desc}) {
    return (
        <div className={styles.block}>
            { svg }
            <h4> {title} </h4>
            <p> {desc} </p>
        </div>
    );
}

export default CareerBlocks;