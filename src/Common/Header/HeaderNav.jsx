import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";

function HeaderNav({ nowPage, filled, setIsModalOpen }) {

  const navInfo =   [
    {
      value: "Career",
      view: "Карьера",
    },
    {
      value: "Company",
      view: "О нас ",
    },
    {
      value: "Blog",
      view: "Блог",
    },
    {
      value: "Contact",
      view: "Контакты",
    },
    {
      value: "Test",
      view: "Тест",
    },
  ];;


  return (
    <ol className={styles.nav}>

      {navInfo.map((item, index) => {
        return (
          <li key={item.value + index}>
            <Link
              to={`/${item.value}`}
              className={nowPage === item.value ? styles.underlined : null}
            >
              {item.view}
            </Link>
          </li>
        );
      })}
      <li>
        <button
          className={
            filled ? `button ${styles.filledBtn}` : `button ${styles.btn}`
          }
          onClick={()=> setIsModalOpen(true)}
        >
          Связаться с нами
        </button>
      </li>
    </ol>
  );
}

export default HeaderNav;
