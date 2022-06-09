import React from "react";
import styles from "./NewsBlock.module.scss";
import { Link } from "react-router-dom";
import { API, URL } from '../constants';

function NewsBlock(props) {
  const { image, title, date, desc } = props;

  return (
      <div  className={styles.block}>
        <img src={image} alt="newsImg" />
        <h5>{title}</h5>
        <p className={styles.date}>{date}</p>
        <p className={styles.desc}>{desc}</p>
      </div>
  );
}

export default NewsBlock;
