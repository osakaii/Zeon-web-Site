import React from "react";

import styles from "./LinkToTest.module.scss";
import { ReactComponent as Clock } from "src/Assets/test/clock.svg";
import { ReactComponent as People } from "src/Assets/test/people.svg";
import { ReactComponent as Todo } from "src/Assets/test/todo.svg";
import { Link } from "react-router-dom";

function LinkToTest(props) {
    return (
        <div className={styles.content}>
            <h2>{props.name}</h2>
            <div className={styles.topics}>
                <p>Темы: </p>
                {props.topics.map((topic, index) => (
                    <p className={styles.topic} key={index}>
                        {topic.name}
                    </p>
                ))}
            </div>
            <p className={styles.desc}>Тестирование можно пройти лишь единоразово. Выделите 1 час на прохождение.</p>
            <div className={styles.info}>
                <div>
                    <Clock />
                    <p>1 час на решение задач</p>
                </div>
                <div>
                    <People />
                    <p>300 человек прошли этот тест</p>
                </div>
                <div>
                    <Todo />
                    <p>Более 24 вопросов</p>
                </div>
            </div>
            <div className={styles.btns}>
                <Link className={styles.enter} to={`/sign-test/${props.link}`}>
                    Пройти
                </Link>
                <button className={styles.back}>Отмена</button>
            </div>
        </div>
    );
}

export default LinkToTest;
