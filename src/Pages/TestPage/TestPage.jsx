import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getQuiz } from "src/axios";
import Footer from "src/Common/Footer/Footer";
import Header from "src/Common/Header/Header";
import MultiChoice from "src/Components/questions/MultiChoice";
import MultiTextChoice from "src/Components/questions/MultiTextChoice";
import OneChoice from "src/Components/questions/OneChoice";
import TextChoice from "src/Components/questions/TextChoice";
import Pagination from "./pagination";
import styles from "./TestPage.module.scss";

function TestPage() {
    const { test } = useParams();

    const [questions, setQuestions] = useState();
    const [questionType, setQuestionType] = useState();
    const [questionIndex, setQuestionIndex] = useState(0);

    const fetchData = async () => {
        console.log(test);
        const response = await getQuiz(test);
        if (response.status === 200) {
            setQuestions(response.data);
            setQuestionIndex(2);
        }
    };

    useEffect(() => {
        setQuestionType(questions?.questions[questionIndex].type);
    }, [questionIndex]);

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <Header filled={true} />
            <div className={styles.content}>
                <div className={styles.questionWrapper}>
                    <h2 className={styles.title}>{questions?.title}</h2>
                    <div className={styles.topics}>
                        <p>Темы: </p>
                        {questions?.topics.map((topic, index) => (
                            <p className={styles.topic} key={index}>
                                {topic.name}
                            </p>
                        ))}
                    </div>
                    <p></p>
                    {questionType === "single_choice" ? (
                        <OneChoice index={questionIndex + 1} questionsInfo={questions.questions[questionIndex]} />
                    ) : questionType === "multiple" ? (
                        <MultiChoice index={questionIndex + 1} questionsInfo={questions.questions[questionIndex]} />
                    ) : questionType === "text" ? (
                        <TextChoice index={questionIndex + 1} questionsInfo={questions.questions[questionIndex]} />
                    ) : questionType === "multiple_with_own" ? (
                        <MultiTextChoice index={questionIndex + 1} questionsInfo={questions.questions[questionIndex]} />
                    ) : null}
                    <Pagination setQuestionIndex={setQuestionIndex} maxPage={questions?.questions.length - 1} current={questionIndex} />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default TestPage;
