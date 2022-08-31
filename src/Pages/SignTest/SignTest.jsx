import React, { useState } from "react";
import styles from "./SignTest.module.scss";
import TestEmail from "../../Components/Test/TestEmail";
import Header from "../../Common/Header/Header";
import Footer from "../../Common/Footer/Footer";
import EmailVerify from "../../Components/Test/EmailVerify";
import { useParams } from 'react-router-dom';

function SignTest() {
    const { test } = useParams()
    console.log(test)
    const [isSended, setIsSended] = useState(false);

    return (
        <div className={styles.sign}>
            <Header filled={true} />
            <div className={styles.content}>{isSended ? <EmailVerify /> : <TestEmail setIsSended={setIsSended} />}</div>
            <Footer />
        </div>
    );
}

export default SignTest;
