import React, { useEffect, useState } from 'react';
import styles from "./CareerPage.module.scss"
import Header from '../../Common/Header/Header';
import Footer from '../../Common/Footer/Footer';
import CareerIntro from '../../Components/NewsBlock/Career/CareerIntro';
import photo1 from "../../Assets/career/img.jpg"
import photo2 from "../../Assets/career/img2.jpg"
import photo3 from "../../Assets/career/img3.jpg"
import { getDevelopers } from '../../axios';
import CareerSearchBar from '../../Components/NewsBlock/Career/CareerSearchBar';
import DeveloperInfo from '../../Components/NewsBlock/Career/DeveloperInfo';

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
                <div className={styles.photosWrapper}>
                    <img src={photo1} alt="" />
                    <img src={photo2} alt="" />
                    <img src={photo3} alt="" />
                </div>
                <div className={`${styles.container} container`}>
                    <h2>Вакансии</h2>
                    <CareerSearchBar/>
                    <div className={styles.DevelopersWrapper}>
                        {
                            developerList?.map((developer, index) =>{
                                return (
                                    <DeveloperInfo key = {developer.id} developerInfo = {developer}/>
                                )
                            })
                        }
                    </div>
                </div>
            <Footer/>
        </div>
    );
}

export default CareerPage;