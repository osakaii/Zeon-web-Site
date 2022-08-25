import React, { useEffect, useState } from "react";
import styles from "../../styles/MainPage/WhyUs.module.scss";
import { COUNTRIES } from "../../static";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../../styles/swiper.css";

function WhyUs(props) {
  const [viewSlides, setViewSlides] = useState(5);
  const [countries, setCountries] = useState(COUNTRIES);

  useEffect(() => {
    if (window.innerWidth < 769) {
      setViewSlides(3.5);
    }
  }, []);

  const changeColor = (id, bool) => {
    setCountries((prev) =>
      prev.map((country, index) => {
        if (id === index) {
          return {
            ...country,
            hover: bool,
          };
        }
        return country;
      })
    );
  };

  return (
    <section className={styles.secondSection}>
      <div className="container">
        <div className={styles.whyUs}>
          <h2>Почему мы?</h2>
          <div>
            <p>
              Zeon IT Hub - это международная IT компания по аутсорсу и
              аутстаффингу, базирующаяся в Центральной Азии. Наша база состоит
              из +15 компаний партнеров. Нашей главной задачей является
              адаптировать начинающих разработчиков под требования в мировом IT
              рынке, а так же помочь с поиском интересных проектов для опытных
              программистов уровня Middle и выше.
            </p>
          </div>
        </div>

        <img
          src={require("../../Assets/WhyUS.jpeg")}
          alt="img"
          className={styles.whyUsImg}
        />
        <div className={styles.secondSectionCompanies}>
          <p>Мы сотрудничаем с компаниями из</p>
          <Swiper
            slidesPerView={viewSlides}
            spaceBetween={10}
            freeMode={true}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {countries.map((country, index) => {
              return (
                <SwiperSlide
                  className={styles.swiperItem}
                  key={country.name + index}
                  onMouseEnter={() => changeColor(index, true)}
                  onMouseLeave={() => changeColor(index, false)}
                >
                  <div className={styles.svgDiv}>
                    {country.hover ? country.svg : country.graySvg}
                  </div>

                  {country.name}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
