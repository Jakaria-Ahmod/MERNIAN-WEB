import React from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import PorductDetails from './Details';

const LeftComponent = () => {
  return (
    <div>
      <div className="flex gap-x-[10px]">
        <div className="w-[60px flex flex-col items-center mt-[151px]">
          <div className="bg-white shadow-[20px] w-[60px] h-[39px] flex items-center justify-center rounded cursor-pointer">
            <FiArrowRight size={25} color="#23D2E2" />
          </div>
          <div className="my-[12px] bg-white shadow-[20px] p-[6px]">
            <div className="w-[48px] h-[48px] bg-black rounded-[6px] mt-[6px] cursor-pointer"></div>
            <div className="w-[48px] h-[48px] bg-black rounded-[6px] mt-[6px] cursor-pointer"></div>
            <div className="w-[48px] h-[48px] bg-black rounded-[6px] mt-[6px] cursor-pointer"></div>
          </div>

          <div className="bg-white shadow-[20px] w-[60px] h-[39px] flex items-center justify-center rounded cursor-pointer">
            <FiArrowLeft size={25} color="#23D2E2" />
          </div>
        </div>
        <div>
          <div className="w-[830px] h-[560px] bg-blue-800 rounded-[15px]"></div>
          <PorductDetails></PorductDetails>
        </div>
      </div>
    </div>
  );
};

export default LeftComponent;
