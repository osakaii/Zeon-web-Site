import React, { useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";
import styles from "src/styles/Test/Timer.module.scss";

function Timer(props) {
    const { expiryTimestamp, handleAnswer, setTimerValue } = props;
    
    const {
        seconds,
        minutes,
        start,
        pause,
        resume,
        restart,
      } = useTimer({ expiryTimestamp, onExpire: () => {
        handleAnswer() 
    }});
    
      return (
        <div className={styles.timerWrapper}>
            <p className={styles.timer}>Осталось: {minutes < 10? "0" + minutes : minutes}:{seconds < 10? "0" + seconds : seconds}</p>
        </div>
      );
}

export default Timer;
