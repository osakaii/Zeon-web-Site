import styles from "./MainPage.module.scss";
import React from 'react';
import employeeImg from "../../Assets/OurEmp.png";

function Employees(props) {
    return (
        <section className={styles.employees}>
        <div className="container">
          <div></div>
          <h2>Our employees</h2>
          <div className={styles.employees__item__wrapper}>
            <div className={styles.employees__item}>
              <img src={employeeImg} alt="" />
              <div>
                <p className="light-gray_color">United State</p>
                <h3>Alan Kuper</h3>
                <p className="blue_color">Junior programmer at Google</p>
                <p className="light-gray_color">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus vel condimentum velit, eget vulputate sapien.Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                  vel condimentum velit, eget vulputate sapien.
                </p>
              </div>
            </div>
            <div className={styles.employees__item}>
              <img src={employeeImg} alt="" />
              <div>
                <p className="light-gray_color">United State</p>
                <h3>Alan Kuper</h3>
                <p className="blue_color">Junior programmer at Google</p>
                <p className="light-gray_color">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus vel condimentum velit, eget vulputate sapien.Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                  vel condimentum velit, eget vulputate sapien.
                </p>
              </div>
            </div>
            <div className={styles.employees__item}>
              <img src={employeeImg} alt="" />
              <div>
                <p className="light-gray_color">United State</p>
                <h3>Alan Kuper</h3>
                <p className="blue_color">Junior programmer at Google</p>
                <p className="light-gray_color">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus vel condimentum velit, eget vulputate sapien.Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                  vel condimentum velit, eget vulputate sapien.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Employees;