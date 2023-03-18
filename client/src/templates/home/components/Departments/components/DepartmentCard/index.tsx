import React from 'react';

import styles from './DepartmentCard.module.scss';

interface IDepartmentCard {
  image: string;
  name: string;
}

const DepartmentCard: React.FC<IDepartmentCard> = (props) => {
  const { image, name } = props;

  return (
    <a
      href='#'
      className={ styles.department_card }
    >
      <img
        src={ image }
        className={ styles.image }
      />

      <p className={ styles.name }>{ name }</p>
    </a>
  );
};

export default DepartmentCard;
