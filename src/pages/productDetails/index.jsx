import React from 'react';
import StoreBanner from '../../globalComponents/storeBanner';
import HedingProductDetails from './components/Heing';
import LeftComponent from './components/Left';
import RightComponet from './components/Right';
import PorductDetails from './components/Details';

const ProductDetails = () => {
  return (
    <div>
      <div className="mb-[100px]">
        <StoreBanner></StoreBanner>
        <HedingProductDetails></HedingProductDetails>
        <div className="grid grid-cols-[5fr_2fr] mt-[23px] gap-x-[12px]">
          <div>
            <LeftComponent></LeftComponent>
          </div>
          <RightComponet></RightComponet>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ProductDetails;
