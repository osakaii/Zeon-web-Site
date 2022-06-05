import React from 'react';
import styles from './NotFound.module.scss'
import logo from '../../Assets/zeon-logo.svg'

function NotFound(props) {
    return (
        <div className={styles.NotFound}>
            <img src={logo} alt="" />
            THIS PAGE DOESNT EXIST
        </div>
    );
}

export default NotFound;