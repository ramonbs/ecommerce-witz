import React from 'react';

const scrollTo = (element: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {

  if (element.current) {
    const offsetWidth = element.current.offsetWidth;

    if (direction === 'left') element.current.scrollLeft -= offsetWidth;
    if (direction === 'right') element.current.scrollLeft += offsetWidth;
  }

};

export default scrollTo;
