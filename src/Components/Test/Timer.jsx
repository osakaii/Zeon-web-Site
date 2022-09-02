import React, { useEffect, useState } from "react";
import styles from "src/styles/Test/Timer.module.scss";

function Timer(props) {
    const { initialMinute, initialSeconds, handleAnswer } = props;

    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    // console.log(minutes, seconds)

    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval);
                    handleAnswer()
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000);
        return () => {
            clearInterval(myInterval);
        };
    });

    useEffect(() => {
        setMinutes(initialMinute)
        setSeconds(initialSeconds)
    }, [initialMinute, initialSeconds])

    return (
        <div className={styles.timerWrapper}>
            {minutes === 0 && seconds === 0 ? null : (
                <p className={styles.timer}>
                    Осталось {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                </p>
            )}
        </div>
    );
}

export default Timer;
