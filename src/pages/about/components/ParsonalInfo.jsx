import React from 'react';

const ParsonalInfo = () => {
  return (
    <div>
      <div className="mt-[16px]">
        <div className="py-[29px] px-[27px] rounded-[15px] w-[283px] bg-white shadow-2xl">
          <div className="flex justify-between items-center">
            <h3 className="text-colorSveven text-sm font-poppins font-bold">
              Personal Info
            </h3>
            <span className="text-colorSveven text-sm font-poppins font-bold">
              ...
            </span>
          </div>
          <div>
            <div className="flex gap-x-4 mt-[18px]">
              <strong className="text-colorSveven text-[12px] font-poppins font-bold">
                Email:
              </strong>
              <span className="text-colorSveven text-[12px] font-poppins font-normal">
                shawon.cit.bd@gmail.com
              </span>
            </div>
            <div className="flex gap-x-4 mt-[18px]">
              <strong className="text-colorSveven text-[12px] font-poppins font-bold">
                Birthday:
              </strong>
              <span className="text-colorSveven text-[12px] font-poppins font-normal">
                28 April 1993
              </span>
            </div>
            <div className="flex gap-x-4 mt-[18px]">
              <strong className="text-colorSveven text-[12px] font-poppins font-bold">
                Occupation:
              </strong>
              <span className="text-colorSveven text-[12px] font-poppins font-normal">
                MernStack Developer
              </span>
            </div>
            <div className="flex gap-x-4 mt-[18px]">
              <strong className="text-colorSveven text-[12px] font-poppins font-bold">
                Status:
              </strong>
              <span className="text-colorSveven text-[12px] font-poppins font-normal">
                unmarried
              </span>
            </div>
            <div className="flex gap-x-4 mt-[18px]">
              <strong className="text-colorSveven text-[12px] font-poppins font-bold">
                Birthplace:
              </strong>
              <span className="text-colorSveven text-[12px] font-poppins font-normal">
                Narayanganj
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParsonalInfo;
