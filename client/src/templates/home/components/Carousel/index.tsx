import React, { useEffect, useRef } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import CarouselCard from './components/CarouselCard';
import onScroll from './helpers/onScroll';
import useCarouselResize from './hooks/useCarouselResize';

import Title from '@components/Title';
import styles from './Carousel.module.scss';

interface ICarousel {
  title: string;
  data: {id: string, title: string, thumbnail: string}[];
  numberOfCards: 3 | 4 | 5;
}

const Carousel: React.FC<ICarousel> = (props) => {
  const { title, data, numberOfCards } = props;

  const slider = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (slider.current) slider.current.scrollLeft = 0;
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={ styles.carousel }>
      <Title text={ title } />

      <div
        className={ styles.backward }
        onClick={ () => onScroll(slider, 'backward') }
      >
        <IoChevronBack />
      </div>

      <div ref={ slider } className={ styles.slider }>
        { data.map((item) => (
          <CarouselCard
            key={ item.id }
            id={ item.id }
            name={ item.title }
            image={ item.thumbnail }
            width={ useCarouselResize(slider, numberOfCards) || 0 }
          />
        )) }
      </div>

      <div
        className={ styles.forward }
        onClick={ () => onScroll(slider, 'forward') }
      >
        <IoChevronForward />
      </div>
    </section>
  );
};

export default Carousel;
