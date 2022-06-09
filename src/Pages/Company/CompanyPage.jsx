import React from 'react';
import Footer from '../../Common/Footer/Footer';
import Header from '../../Common/Header/Header';
import CompanyGoals from '../../Components/Company/CompanyGoals';
import CompanyIntro from '../../Components/Company/CompanyIntro';
import CompanySpecifity from '../../Components/Company/CompanySpecifity';
import styles from './CompanyPage.module.scss'
import CompanyVi from '../../Components/Company/CompanyVi';
import CompanyDevelopers from '../../Components/Company/CompanyDevelopers';

function CompanyPage({ filled }) {
    return (
        <div className={styles.company}>
            <Header filled = { false } />
            <CompanyIntro/>
            <CompanySpecifity/>
            <CompanyGoals/>
            <CompanyVi/>
            <CompanyDevelopers/>
            <Footer/>
        </div>
    );
}

export default CompanyPage;