import React from 'react';
import Footer from '../../Common/Footer/Footer';
import Header from '../../Common/Header/Header';
import CompanyIntro from '../../Components/NewsBlock/Company/CompanyIntro';
import CompanySpecifity from '../../Components/NewsBlock/Company/CompanySpecifity';
import styles from './CompanyPage.module.scss'

function CompanyPage({ filled }) {
    return (
        <div className={styles.company}>
            <Header filled = { false } />
            <CompanyIntro/>
            <CompanySpecifity/>
            <Footer/>
        </div>
    );
}

export default CompanyPage;