import React from 'react';
import storeBanner from '../../assets/img/storeBanner.png';
const StoreBanner = () => {
  return (
    <div className="mt-[150px]">
      <div className="w-[1184px] h-[160px]">
        <img src={storeBanner} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default StoreBanner;
