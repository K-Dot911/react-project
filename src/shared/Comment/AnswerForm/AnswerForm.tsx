import React from 'react';
import styles from './answerform.css';

interface IAnswerFormInterface {
    name: string;
}

export function AnswerForm({name}:IAnswerFormInterface) {
  return (
      <form className={styles.form} >
        <textarea className={styles.input} value='' placeholder={name + `, оставьте ваш комментарий`} />
        <button type="submit" className={styles.button}>Комментировать</button>
      </form>
  );
}
