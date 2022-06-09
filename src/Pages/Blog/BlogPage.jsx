import React from "react";
import styles from "./BlogPage.module.scss";
import Header from "../../Common/Header/Header";
import Footer from "../../Common/Footer/Footer";
import { useState, useEffect } from "react";
import NewsBlock from "../../Components/NewsBlock";
import { Link } from "react-router-dom";
import { getAllNews } from "../../axios";

function BlogPage(props) {
  const [news, setNews] = useState([]);
  const imageUrl = "";

  const getNews = async () => {
    const fetchedData = await getAllNews();
    setNews(fetchedData);
    console.log(fetchedData ? fetchedData : 'have not answered');
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className={styles.blog}>
      <Header filled={true} />
      <div className="container">
        <div className={styles.blogContent}>
          <p className={styles.titleDesc}>It's places call Blog</p>
          <h2 className={styles.title}>Blog</h2>
          <div className={styles.newsWrapper}>
            {news?.map((item, index) => {
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
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BlogPage;
