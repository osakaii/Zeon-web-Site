import React from 'react';
import Footer from '../../Common/Footer/Footer';
import Header from '../../Common/Header/Header';
import CompanyGoals from '../../Components/NewsBlock/Company/CompanyGoals';
import CompanyIntro from '../../Components/NewsBlock/Company/CompanyIntro';
import CompanySpecifity from '../../Components/NewsBlock/Company/CompanySpecifity';
import styles from './CompanyPage.module.scss'
import CompanyVi from '../../Components/NewsBlock/Company/CompanyVi';
import CompanyDevelopers from '../../Components/NewsBlock/Company/CompanyDevelopers';

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