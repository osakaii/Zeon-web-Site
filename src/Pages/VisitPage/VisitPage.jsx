import React from 'react';
import styles from './VisitPage.module.scss'
import { Route, Routes } from 'react-router-dom';
import Header from '../../Common/Header/Header';
import Footer from '../../Common/Footer/Footer';
import TestAuth from '../../Components/Test/TestAuth';
import TestEmail from '../../Components/Test/TestEmail';

function VisitPage(props) {
    return (
        <div className={styles.test}>
            <Header filled={true}/>
                <div className={styles.testContent}>
                    <Routes>
                        <Route path = "/" element = {<TestAuth/>}/>
                        <Route path = "/:option" element = {<TestEmail type = {'frontend'}/>}/>
                    </Routes>
                </div>
            <Footer/>
        </div>
    );
}

export default VisitPage;