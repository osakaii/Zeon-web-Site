import React from "react";
import styles from "../../styles/MainPage/MainPageNew.module.scss";
import { Link } from "react-router-dom";
import NewsBlock from "../../Components/NewsBlock/NewsBlock";
import image1 from "../../Assets/News/img.jpg";
import image2 from "../../Assets/News/img-1.jpg";
import image3 from "../../Assets/News/img-2.jpg";

function MainPageNews(props) {
  const fetchedNews = [
    {
      image: image1,
      title: "Новые инструменты дизайна интерфейсов",
      date: "12 октября 2020",
      desc: "Flávia Lacerda, Mamede Lima-Marques и Andrea Resmini предлагают свою модель информационной ",
    },
    {
      image: image2,
      title: "Новые инструменты дизайна интерфейсов",
      date: "12 октября 2020",
      desc: "Flávia Lacerda, Mamede Lima-Marques и Andrea Resmini предлагают свою модель информационной ",
    },
    {
      image: image3,
      title: "Новые инструменты дизайна интерфейсов",
      date: "12 октября 2020",
      desc: "Flávia Lacerda, Mamede Lima-Marques и Andrea Resmini предлагают свою модель информационной ",
    },
  ];

  return (
    <section className={styles.news}>
      <div className="container">
        <div className={styles.newContent}>
          <div className={styles.titleAndLink}>
            <h3>Актуальные tech и digital новости</h3>
            <Link to="/blog" className={styles.link}>
              See all
            </Link>
          </div>
          <div className={styles.newsWrapper}>
            {fetchedNews.map((news, index) => {
              return (
                <Link to={`/blog/${index}`} className={styles.newsItem}  key={news.title + index}>
                  <NewsBlock
                    title={news.title}
                    image={news.image}
                    date={news.date}
                    desc={news.desc}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainPageNews;
