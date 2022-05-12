import React from 'react';
import styles from "./MainPage.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import './swiper.css'

import Czech from "../../Assets/countires/czech-republic.png"
import Finland from "../../Assets/countires/finland 1 (Traced).png"
import Italy from "../../Assets/countires/Italy.png"
import US from "../../Assets/countires/US.png"
import Poland from "../../Assets/countires/Poland.png"
import Sweden from "../../Assets/countires/Sweden.png"
import UK from "../../Assets/countires/Uk.png"
import Norway from "../../Assets/countires/Norway.png"
import nether from "../../Assets/countires/netherlands 1 (Traced).png"

import CzechC from "../../Assets/countires/czech-republic (color).png"


function SecondSection(props) {
    return (
        <section className={styles.secondSection}>
        <div className="container">
          <div className={styles.whyUs}>
            <h1>Почему мы?</h1>
            <div>
              <p>
                Zeon It Hub - это международная компания по аутсорсингу и
                аутстаффингу базирующаяся в Центральной Азии. Мы занимаемся:
              </p>
              <li>
                трудоустройством готовых специалистом с опытом работы от 1,5
                года
              </li>
              <li>повышением квалификации начинающих разработчиков</li>
            </div>
          </div>

          <img
            src={require("../../Assets/WhyUS.jpeg")}
            alt=""
            className={styles.whyUsImg}
          />
          <div className={styles.secondSectionCompanies}>
            <p>Мы сотрудничаем с компаниями из</p>
            <Swiper
              slidesPerView={6.5}
              spaceBetween={10}
              freeMode={true}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide><img src={Czech} alt=""/></SwiperSlide>
              <SwiperSlide><img src={Finland} alt=""/></SwiperSlide>
              <SwiperSlide><img src={Italy} alt=""/></SwiperSlide>
              <SwiperSlide><img src={US} alt=""/></SwiperSlide>
              <SwiperSlide><img src={Poland} alt=""/></SwiperSlide>
              <SwiperSlide><img src={Sweden} alt=""/></SwiperSlide>
              <SwiperSlide><img src={UK} alt=""/></SwiperSlide>
              <SwiperSlide><img src={Norway} alt=""/></SwiperSlide>
              <SwiperSlide><img src={nether} alt=""/></SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    );
}

export default SecondSection;