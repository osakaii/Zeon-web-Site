import React from "react";
import styles from "./BlogPage.module.scss";
import Header from "../../Common/Header/Header";
import Footer from "../../Common/Footer/Footer";
import { useState, useEffect } from "react";
import NewsBlock from "../../Components/NewsBlock";
import { Link } from "react-router-dom";
import { getAllNews } from "../../business/axios";

function BlogPage(props) {
  const [news, setNews] = useState([]);

  const getNews = async () => {
    const fetchedData = await getAllNews();
    setNews(fetchedData? fetchedData: []);
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className={styles.blog}>
      <Header filled={true} />
      <div className="container">
        <div className={styles.blogContent}>
          <p className={styles.titleDesc}>Будь в курсе событий в мире digital</p>
          <h2 className={styles.title}>Блог</h2>
          <div className={styles.newsWrapper}>
            {
              news.length?
            news.map((item, index) => {
              return (
                  <Link className={styles.newsItem} key={item.id + item.title} to = {`${item.id}`}>
                   <NewsBlock
                    image={item.img}
                    title={item.title}
                    date={item.date_create}
                    desc={item.short_description}
                  />
                  </Link>
              );
            })
            :
            <div className={styles.emptyNews}>В данный момент нет новостей</div>
          }
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BlogPage;
