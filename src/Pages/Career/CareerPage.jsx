import React from 'react';
import styles from "./CareerPage.module.scss"
import Header from '../../Common/Header/Header';
import Footer from '../../Common/Footer/Footer';
import CareerIntro from '../../Components/NewsBlock/Career/CareerIntro';
import photo1 from "../../Assets/career/img.jpg"
import photo2 from "../../Assets/career/img2.jpg"
import photo3 from "../../Assets/career/img3.jpg"

function CareerPage(props) {
    return (
        <div className={styles.career}>
            <Header filled = { false } />
                <CareerIntro/>
                <div className={styles.photosWrapper}>
                    <img src={photo1} alt="" />
                    <img src={photo2} alt="" />
                    <img src={photo3} alt="" />
                </div>
                <div className="container">
                    <h3>Вакансии</h3>
                    <div className={styles.filterForm}>
                        <input type="text"  placeholder='Front end developer'/>
                        <select name="" id="">
                            <option value=""></option>
                        </select>
                        <select name="" id="">
                            <option value=""></option>
                        </select>
                        <button>Search</button>
                    </div>
                </div>
            <Footer/>
        </div>
    );
}

export default CareerPage;