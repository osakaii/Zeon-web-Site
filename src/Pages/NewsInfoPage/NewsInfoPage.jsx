import React, { useEffect, useState } from "react";
import styles from "./NewsInfoPage.module.scss";
import Header from "../../Common/Header/Header";
import Footer from "../../Common/Footer/Footer";
import { getNewsById } from "../../axios";
import { useParams } from "react-router-dom";
import { API } from '../../constants';

function NewsInfoPage(props) {
  const newsId = useParams().id;

  const [newsInfo, setNewsInfo] = useState();

  const getInfo = async () => {
    const response = await getNewsById(newsId);
    console.log(response);
    setNewsInfo(response);
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className={styles.newsItem}>
      <Header filled={true} />
      <div className="container">
        <div className={styles.content}>
          <p className={styles.date}>{newsInfo?.date_create}</p>
          <h2 className={styles.title}>{newsInfo?.title}</h2>
          <p className={styles.short_desc}>{newsInfo?.short_description}</p>
          <div className={styles.image}>
              <img src={"http://217.25.90.28" + newsInfo?.img} alt="" />
          </div>
          <p className={styles.text}>{newsInfo?.text}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NewsInfoPage;
