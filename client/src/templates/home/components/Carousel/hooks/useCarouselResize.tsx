import React, { useEffect, useState } from 'react';

const useCarouselResize = (element: React.RefObject<HTMLDivElement>, numberOfCards: 3 | 4 | 5) => {
  const [width, setWidth] = useState<number | undefined>(0);

  if (!element) return;

  const getWidth = () => {
    const width = element.current?.offsetWidth;

    if (!width) return undefined;

    const ONE_CARD = width;
    const TWO_CARDS = (width - 16) / 2;
    const THREE_CARDS = (width - 32) / 3;
    const FOUR_CARDS = (width - 48) / 4;
    const FIVE_CARDS = (width - 64) / 5;

    switch (numberOfCards) {
    case 3:
      if (width < 480) return ONE_CARD;
      if (width < 768) return TWO_CARDS;

      return THREE_CARDS;
    case 4:
      if (width < 408) return ONE_CARD;
      if (width < 680) return TWO_CARDS;
      if (width < 920) return THREE_CARDS;

      return FOUR_CARDS;
    case 5:
      if (width < 580) return TWO_CARDS;
      if (width < 720) return THREE_CARDS;
      if (width < 920) return FOUR_CARDS;
      return FIVE_CARDS;
    }
  };

  useEffect(() => {
    setWidth(getWidth());

    window.addEventListener('resize', () => {
      setWidth(getWidth());
    });

    return () => {
      window.removeEventListener('resize', () => {
        setWidth(getWidth());
      });
    };
  }, []);

  return width;
};

export default useCarouselResize;
