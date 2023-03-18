import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { IoHeartOutline, IoHeartSharp } from 'react-icons/io5';

import styles from './Favorite.module.scss';

const Favorite: React.FC = () => {
  const [favorites, setFavorites] = useState<Array<string>>([]);

  const router = useRouter();
  const { id } = router.query as { id: string };

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  const toggleFavorite = () => {
    if (favorites.includes(id)) {
      const newFavorites = favorites.filter(fav => fav !== id);
      setFavorites(newFavorites);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      return;
    }

    const newFavorites = [...favorites, id];
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const isFavorite = favorites.includes(id);

  return (
    <button onClick={ toggleFavorite } className={ styles.favorite }>
      { isFavorite
        ? <IoHeartSharp className={ styles.disable } />
        : <IoHeartOutline className={ styles.enable } />
      }
    </button>
  );
};

export default Favorite;
