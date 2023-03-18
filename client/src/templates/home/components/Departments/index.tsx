import React, { useRef } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import DepartmentCard from './components/DepartmentCard';
import departments from './data';

import styles from './Departments.module.scss';

const Departments: React.FC = () => {
  const carousel = useRef<HTMLDivElement>(null);

  const onChevronClick = (direction: 'back' | 'forward') => {
    const carouselElement = carousel.current;
    const carouselWidth = carouselElement?.offsetWidth;

    if (carouselElement && carouselWidth) {
      if (direction === 'back') carouselElement.scrollLeft -= carouselWidth;
      else carouselElement.scrollLeft += carouselWidth;
    }
  };

  return (
    <section className={ styles.departments }>
      <IoChevronBack onClick={ () => onChevronClick('back') } />

      <div
        className={ styles.carousel }
        ref={ carousel }
      >
        { departments.map((department) => (
          <DepartmentCard
            key={ department.id }
            image={ department.image }
            name={ department.name }
          />
        )) }
      </div>

      <IoChevronForward onClick={ () => onChevronClick('forward') } />
    </section>
  );
};

export default Departments;
