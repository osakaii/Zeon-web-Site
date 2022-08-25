import React, { useEffect, useState } from "react";
import styles from "./NewsInfoPage.module.scss";
import Header from "../../Common/Header/Header";
import Footer from "../../Common/Footer/Footer";
import { getNewNews, getNewsById } from "../../axios";
import { Link, useParams } from "react-router-dom";
import { URL } from "../../constants";
import NewsBlock from "../../Components/NewsBlock";

function NewsInfoPage(props) {
  const newsId = useParams().id;

  const [newsInfo, setNewsInfo] = useState();
  const [newNews, setNewNews] = useState([]);

  const getInfo = async () => {
    const fetchNewsById = await getNewsById(newsId);
    console.log(fetchNewsById);
    setNewsInfo(fetchNewsById);

    const fetchNewNews = await getNewNews();
    console.log(fetchNewNews);
    setNewNews(fetchNewNews);
  };

  useEffect(() => {
    getInfo();
  }, [newsId]);

  return (
    <div className={styles.newsItem}>
      <Header filled={true} />
      <div className={`${styles.content} container`}>
        <div className={styles.main}>
          <p className={styles.date}>{newsInfo?.date_create}</p>
          <h2 className={styles.title}>{newsInfo?.title}</h2>
          <p className={styles.short_desc}>{newsInfo?.short_description}</p>
          <div className={styles.image}>
            <img src={newsInfo?.img} alt="" />
          </div>
          <p className={styles.text}>{newsInfo?.text}</p>
        </div>
        <div className={styles.new}>
          {newNews.map((item, index) => (
            <Link
              to={`/Blog/${item.id}`}
              className={styles.newNewsItem}
              key={item.id}
            >
              <NewsBlock
                image={URL + item.img}
                title={item.title}
                date={item.date_create}
                desc={item.short_description}
              />
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NewsInfoPage;
