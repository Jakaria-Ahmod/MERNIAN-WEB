import React from 'react';

const PhotoGallary = () => {
  return (
    <div>
      <div className="bg-white px-[29px] py-[19px] mt-[15px] w-[283px] rounded-[15px]">
        <div className="flex justify-between items-center">
          <h3 className="text-black text-sm font-poppins font-bold">
            Photos{' '}
            <span className="text-colorFive text-sm font-poppins font-bold">
              37
            </span>
          </h3>
          <span className="text-black text-sm font-poppins font-bold">...</span>
        </div>
        <div className="flex flex-wrap gap-[15px] mt-[17px]">
          <div className="w-[105px] h-[100px] bg-black rounded-[15px] cursor-pointer"></div>
          <div className="w-[105px] h-[100px] bg-black rounded-[15px] cursor-pointer"></div>
          <div className="w-[105px] h-[100px] bg-black rounded-[15px] cursor-pointer"></div>
          <div className="w-[105px] h-[100px] bg-black rounded-[15px] cursor-pointer"></div>
          <div className="w-[105px] h-[100px] bg-black rounded-[15px] cursor-pointer"></div>
          <div className="w-[105px] h-[100px] bg-black rounded-[15px] cursor-pointer"></div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default PhotoGallary;
