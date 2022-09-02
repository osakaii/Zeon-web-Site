import React from 'react'
import styles from "./styles.module.scss"

function Pagination({ current ,setQuestionIndex, maxPage, handleAnswer}) {

  return (
    <div className={styles.pagination}>
        <button onClick={() => setQuestionIndex(prev => prev === 0 ? 0 : prev -= 1)} className={styles.prev}>Назад</button>
           <div className={styles.pages}>Вопрос <span className={styles.current}>{ current + 1}</span> из {maxPage + 1}</div>
        <button onClick={() => {
          handleAnswer()
          }} className={styles.next}>Далее</button>
    </div>
  )
}

export default Pagination