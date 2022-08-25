import styles from "./MainPage.module.scss";
import React from "react";
import employeeImg from "../../Assets/OurEmp.png";
import { STATIC_DATA } from "../../static";

function Employees(props) {
  return (
    <section className={styles.employees}>
      <div className="container">
        <h2>Our employees</h2>
        <div className={styles.employees__item__wrapper}>
          {STATIC_DATA.employees.map((person, index) => {
            return (
              <div className={styles.employees__item} key = {person.name + person.country + index}>
                <img src={employeeImg} alt="" />
                <div>
                  <p className="light-gray_color">
                    {person.country}
                  </p>
                  <h3>{person.name}</h3>
                  <p className="blue_color">
                    {person.qualification}
                  </p>
                  <p className="light-gray_color">{person.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Employees;
