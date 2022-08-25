import React, { useEffect, useState } from 'react';
import styles from "./CareerPage.module.scss"
import Header from '../../Common/Header/Header';
import Footer from '../../Common/Footer/Footer';
import CareerIntro from '../../Components/Career/CareerIntro';
import { getDevelopers } from '../../axios';
import CareerSearchBar from '../../Components/Career/CareerSearchBar';
import DeveloperInfo from '../../Components/Career/DeveloperInfo';
import CareerWhyUs from '../../Components/Career/CareerWhyUs';

function CareerPage(props) {

    const [ developerList, setDeveloperList ] = useState([])

    const getAllDeveloper = async () =>{
        const fetchedDevelopers = await getDevelopers()
        console.log(fetchedDevelopers)
        setDeveloperList(fetchedDevelopers)
    }

    useEffect(()=>{
        getAllDeveloper()
    },[])

    return (
        <div className={styles.career}>
            <Header filled = { false } />
                <CareerIntro/>
                <CareerWhyUs/>
                <div className={`${styles.container} container`}>
                    <h2>Вакансии</h2>
                    <CareerSearchBar setDeveloperList = {setDeveloperList}/>
                    <div className={styles.DevelopersWrapper}>
                        {   
                            developerList?.length ?
                            developerList?.map((developer, index) =>{
                                return (
                                    <DeveloperInfo key = {developer.id} developerInfo = {developer}/>
                                )
                            })
                            :
                            <div className={styles.emptyDev}>There is no developers now...</div>
                        }
                    </div>
                </div>
            <Footer/>
        </div>
    );
}

export default CareerPage;