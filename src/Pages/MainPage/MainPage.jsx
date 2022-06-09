import React from "react";
import styles from "./MainPage.module.scss";
import WhyUs from "./WhyUs";
import Employees from './Employees';
import Benefits from "./Benefits";
import Stages from './Stages';
import Questions from './Questions';
import MainPageNews from "./MainPageNews";
import Intro from "./Intro";
import FindWork from "./FindWork";
import Paths from './Paths';
import Footer from "../../Common/Footer/Footer";
import Header from '../../Common/Header/Header';


function MainPage(props) {

  return (
    <div className={styles.MainPage}>
      <Header filled = { false } />
      <Intro/>
      <WhyUs />
      <FindWork/>
      <Paths/>
      <Employees/>
      <Benefits/>
      <Stages/>
      <Questions/>
      <MainPageNews/>
      <Footer/>
    </div>
  );
}

export default MainPage;
