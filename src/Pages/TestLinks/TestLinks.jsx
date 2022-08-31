import React, { useEffect, useState } from "react";
import styles from "./TestLinks.module.scss";
import Footer from "../../Common/Footer/Footer";
import Header from "../../Common/Header/Header";
import LinkToTest from "./LinkToTest/LinkToTest";
import { getAllQuiz } from 'src/business/axios';

function TestLinks() {

    const [quizes, setQuizes] = useState([])
    
    const fetchData = async() => {
        const response = await getAllQuiz()
        if(response.status === 200){
            setQuizes(response.data)
        }
        console.log(response.data)
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className={styles.test}>
            <Header filled={true} />
            <div className={styles.content}>
                {
                    quizes.map((el, index) => (
                        <LinkToTest name = {el.title} link={el.id} topics ={el.topics} key={el.id}/>
                    ))
                }
            </div>
            <Footer />
        </div>
    );
}

export default TestLinks;
