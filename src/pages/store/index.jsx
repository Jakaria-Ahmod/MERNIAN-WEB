import React from 'react';
import StoreBanner from '../../globalComponents/storeBanner';
import Categories from './components/Categories';
import ProductCard from '../../globalComponents/productCard';

const Store = () => {
  return (
    <div>
      <div className="w-[1184px]">
        <StoreBanner></StoreBanner>
        <Categories></Categories>
      </div>
    </div>
  );
};

export default Store;
