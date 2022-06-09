import React, { useState } from "react";
import styles from "../../styles/MainPage/WhyUs.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

import { ReactComponent as ItalyColor } from "../../Assets/countires/svg/image2vector.svg";
import { ReactComponent as CzechColor } from "../../Assets/countires/svg/czech-republic (color).svg";
import { ReactComponent as NorwayColor } from "../../Assets/countires/svg/Norway.svg";
import { ReactComponent as FinlandColor } from "../../Assets/countires/svg/finland.svg";
import { ReactComponent as USColor } from "../../Assets/countires/svg/US.svg";
import { ReactComponent as UKColor } from "../../Assets/countires/svg/UK.svg";
import { ReactComponent as NetherlandsColor } from "../../Assets/countires/svg/netherlands.svg";
import { ReactComponent as SwedenColor } from "../../Assets/countires/svg/Sweden.svg";
import { ReactComponent as PolandColor } from "../../Assets/countires/svg/Poland.svg";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../../styles/swiper.css";

function WhyUs(props) {

  const changeColor = (e) => {
    console.log(e);
  };

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
              трудоустройством готовых специалистом с опытом работы от 1,5 года
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
            <SwiperSlide className={styles.swiperItem}>
              <CzechColor />
              Czech
            </SwiperSlide>
            <SwiperSlide className={styles.swiperItem}>
              <FinlandColor />
              Finland
            </SwiperSlide>
            <SwiperSlide className={styles.swiperItem}>
              <ItalyColor />
              Italy
            </SwiperSlide>
            <SwiperSlide className={styles.swiperItem}>
              <USColor />
              United States
            </SwiperSlide>
            <SwiperSlide className={styles.swiperItem}>
              <PolandColor />
              Poland
            </SwiperSlide>
            <SwiperSlide className={styles.swiperItem}>
              <SwedenColor />
              Sweden
            </SwiperSlide>
            <SwiperSlide className={styles.swiperItem}>
              <UKColor />
              United Kingdom
            </SwiperSlide>
            <SwiperSlide className={styles.swiperItem}>
              <NorwayColor />
              Norway
            </SwiperSlide>
            <SwiperSlide className={styles.swiperItem}>
              <NetherlandsColor />
              Netherland
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
