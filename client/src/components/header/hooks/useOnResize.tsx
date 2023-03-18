import { closeMenu } from '@app/reducers/menu';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useOnResize: React.FC = () => {
  const dispatch = useDispatch();
  if (typeof window === 'undefined') return null;

  const prevWidth = window.innerWidth;
  const onResize = () => {
    const currWidth = window.innerWidth;

    if (prevWidth !== currWidth) {
      dispatch(closeMenu());
    }
  };

  useEffect(() => {
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return null;
};

export default useOnResize;
