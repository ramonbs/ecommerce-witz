import React from 'react';

const onScroll = (element: React.RefObject<HTMLDivElement>, direction: string) => {
  if (!element.current) return;

  const scrollOffset = element.current?.offsetWidth + 16;
  const curr = element.current;

  if (direction === 'forward') {
    curr.scrollLeft += scrollOffset;
    if (curr.scrollLeft >= curr.scrollWidth - curr.offsetWidth) curr.scrollLeft = 0;
    return;
  }

  curr.scrollLeft -= scrollOffset;
  if (curr.scrollLeft <= 0) curr.scrollLeft = curr.scrollWidth;
};

export default onScroll;
