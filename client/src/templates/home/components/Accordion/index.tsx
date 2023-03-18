import React from 'react';
import Question from './components/Question';

import Title from '@components/Title';
import styles from './Accordion.module.scss';
import questions from './data';

const Accordion: React.FC = () => {
  return (
    <section className={ styles.accordion }>
      <Title text='Perguntas Frequentes' />

      { questions.map((question) => (
        <Question
          key={ question.id }
          title={ question.title }
          questionText={ question.questionText }
          id={ question.id }
        />
      )) }
    </section>
  );
};

export default Accordion;
