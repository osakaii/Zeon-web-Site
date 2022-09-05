import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { answer, getQuiz } from "src/business/axios";
import Footer from "src/Common/Footer/Footer";
import Header from "src/Common/Header/Header";
import MultiChoice from "src/Components/questions/MultiChoice";
import MultiTextChoice from "src/Components/questions/MultiTextChoice";
import OneChoice from "src/Components/questions/OneChoice";
import TextChoice from "src/Components/questions/TextChoice";
import Timer from "src/Components/Test/Timer";
import Pagination from "./pagination";
import styles from "./TestPage.module.scss";

function TestPage() {
    const { test } = useParams();
    const navigate = useNavigate();

    const [questions, setQuestions] = useState();
    const [questionType, setQuestionType] = useState();
    const [questionIndex, setQuestionIndex] = useState(0);
    const [timerValue, setTimerValue] = useState()
    const [noQuestions, setNoQuestions] = useState()
    

    const [userAnswer, setUserAnswer] = useState({
        response: Number(localStorage.getItem("quizId")),
        question: questionIndex + 1,
        text: "",
        options: [],
    });

    const fetchData = async () => {
        const response = await getQuiz(test);
        if (response.status === 200) {
            setQuestions(response.data);

            if(response.data.questions.length === 0){
                setNoQuestions(true)
                return
            }

            setQuestionIndex(0);

            const times = (response.data.questions[questionIndex].time).split(':')

            const time = new Date()
            time.setMinutes(time.getMinutes() + Number(times[1]))

            setTimerValue(time)
        }
    };


    const handleAnswer = () => {
        const maxPage = questions?.questions.length - 1
        setQuestionIndex(prev => prev === maxPage ? maxPage : prev += 1)
        
        const response = answer(userAnswer);
        setUserAnswer((prev) => ({ ...prev, text: "", options: [] }));
        
        if (response.status === 201 && (questionIndex + 1) === questions.questions.length) {
            return navigate("/TestEnd");
        }
        const time = new Date()
        const times = (questions.questions[questionIndex + 1].time)?.split(':')
        time.setMinutes(time.getMinutes() + Number(times[1]))

        setTimerValue(null)
        setTimeout(() => {
            setTimerValue(time)
        }, 1000)

    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        setQuestionType(questions?.questions[questionIndex]?.type);
        setUserAnswer((prev) => ({ ...prev, question: questionIndex + 1}));
    }, [questionIndex, questions]);

  

    return (
        <>
            <Header filled={true} />
            <div className={styles.content}>
                { timerValue && <Timer expiryTimestamp = {timerValue} handleAnswer = {handleAnswer} setTimerValue ={setTimerValue}/>}
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
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel elit elit velit condimentum velit, eget vulputate
                        sapien. Mauris{" "}
                    </p>
                    { 
                    noQuestions?
                        <p className={styles.noQuest}>No questions</p>
                    :
                    questionType === "single_choice" ? (
                        <OneChoice index={questionIndex + 1} questionsInfo={questions.questions[questionIndex]} setUserAnswer={setUserAnswer} />
                    ) : questionType === "multiple" ? (
                        <MultiChoice
                            index={questionIndex + 1}
                            questionsInfo={questions.questions[questionIndex]}
                            setUserAnswer={setUserAnswer}
                            userAnswers={userAnswer.options}
                        />
                    ) : questionType === "text" ? (
                        <TextChoice
                            index={questionIndex + 1}
                            questionsInfo={questions.questions[questionIndex]}
                            setUserAnswer={setUserAnswer}
                            inputValue={userAnswer.text}
                        />
                    ) : questionType === "multiple_with_own" ? (
                        <MultiTextChoice
                            index={questionIndex + 1}
                            questionsInfo={questions.questions[questionIndex]}
                            setUserAnswer={setUserAnswer}
                            userAnswers={userAnswer.options}
                        />
                    ) : null}
                    <Pagination
                        setQuestionIndex = {setQuestionIndex}
                        maxPage={questions?.questions.length - 1}
                        current={questionIndex}
                        handleAnswer={handleAnswer}
                        noQuestions = {noQuestions}
                    />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default TestPage;
