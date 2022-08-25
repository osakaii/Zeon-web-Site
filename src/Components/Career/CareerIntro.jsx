import React from "react";
import styles from "../../styles/Career/CareerIntro.module.scss";
import backgroundLogo from "../../Assets/Company/intro.svg";
import sStyles from "../../styles/Career/CareerSearchBar.module.scss";
import { ReactComponent as SearchIcon } from "../../Assets/career/searchIcon.svg";

function CareerIntro(props) {

  const submitHandler = (e) =>{
    e.preventDefault()
  }

  return (
    <section className={styles.intro}>
      <img src={backgroundLogo} alt="" />
      <div className="container">
        <div className={styles.introContent}>
          <p>Имеешь опыт в разработке?</p>
          <h2>Найди проект в два клика</h2>
          <p className={styles.desc}>База вакансий с удобным поиском</p>
          <form className={styles.form} onSubmit = {submitHandler}>
            <label
              htmlFor="name"
              className={sStyles.input__label + " " + styles.search}
            >
              <SearchIcon />
              <input type="text" name="name" id="name" placeholder="Поиск" />
            </label>
            <button type="submit" className={styles.submit}>
              Найти
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CareerIntro;
