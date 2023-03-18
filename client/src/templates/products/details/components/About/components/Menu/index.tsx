import { IproductDetails } from '@app/reducers/productDetails';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './Menu.module.scss';

const Menu: React.FC = () => {
  const product = useSelector((state: IproductDetails) => state.productDetails.product);

  const [selectedTab, setSelectedTab] = useState('description');

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  const handleClass = (tab: string) => {
    if (selectedTab === tab) {
      return styles.active;
    }
    return '';
  };

  return (
    <>
      <nav className={ styles.menu }>
        <ul>
          <li
            className={ handleClass('description') }
            onClick={ () => handleTabClick('description') }
          >
            Descrição
          </li>

          <li
            className={ handleClass('rating') }
            onClick={ () => handleTabClick('rating') }
          >
            Avaliações
          </li>
        </ul>
      </nav>

      <div className={ styles.tab }>
        { selectedTab === 'description' && (
          <p>{ product?.description }</p>
        ) }

        { selectedTab === 'rating' && (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt, nisl eget ultricies tincidunt, nisl nisl aliquam
          </p>
        ) }
      </div>
    </>
  );
};

export default Menu;
