import React from "react";
import styles from "./TestPage.module.scss";
import Footer from "../../Common/Footer/Footer";
import Header from "../../Common/Header/Header";
import LinkToTest from "./LinkToTest/LinkToTest";

function TestPage() {
    return (
        <div className={styles.test}>
            <Header filled={true} />
            <div className={styles.content}>
                <LinkToTest name="FrontEnd"/>
                <LinkToTest name="BackEnd"/>
            </div>
            <Footer />
        </div>
    );
}

export default TestPage;
