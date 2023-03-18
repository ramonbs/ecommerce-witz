import React from 'react';
import styles from './Question.module.scss';

interface IQuestion {
  title: string;
  questionText: string;
  id: string;
}

const Question: React.FC<IQuestion> = (props) => {
  const { title, questionText, id } = props;

  return (
    <section className={ styles.question }>
      <input
        className={ styles.radio }
        type='radio'
        id={ id }
        name='rd'
      />

      <label
        className={ styles.label }
        htmlFor={ id }
      >
        { title }
      </label>

      <div className={ styles.content }>
        { questionText }
      </div>
    </section>
  );
};

export default Question;
