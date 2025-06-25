import { Search } from 'lucide-react';
import React from 'react';

const ProductPrice = ({ searchTerm, onSearchChange }) => {
  return (
    <div>
      <div className="my-[23px]">
        <p className="font-poppins text-colorTwo text-sm font-normal">
          BROWSE PRODUTS
        </p>
        <h3 className="text-[#24234B] font-poppins text-[24px] font-medium">
          Digital Items
        </h3>
      </div>
      <div className="bg-white shadow-[20px] py-[29px] px-[20px] flex gap-x-[19px] rounded-md">
        <div className="relative flex items-center gap-x-[15px]">
          <input
            type="text"
            placeholder="Search items"
            className="w-[300px] border-borderColor border rounded-[15px] py-[15px] px-[10px] outline-none"
            value={searchTerm}
            onChange={e => onSearchChange(e.target.value)}
          />
          <button className="h-12 cursor-pointer right-[420px] top-0 w-12 bg-[#23d2e2] hover:bg-[#23d2e2]/90 rounded-lg flex items-center justify-center">
            <Search className="h-5 w-5 text-white" />
          </button>
        </div>
        <div className="flex gap-x-[15px]">
          <div>
            <select
              name=""
              id=""
              className="w-[300px] border-borderColor text-black font-poppins text-[17px] font-medium border rounded-[15px] py-[15px] px-[10px] outline-none"
            >
              <option
                value=""
                className="text-black font-poppins text-[17px] font-medium"
              >
                Date Published{' '}
              </option>
              <option
                value=""
                className="text-black font-poppins text-[17px] font-medium"
              >
                Date Published{' '}
              </option>
              <option
                value=""
                className="text-black font-poppins text-[17px] font-medium"
              >
                Date Published{' '}
              </option>
            </select>
          </div>
          <div>
            <select
              name=""
              id=""
              className="w-[300px] border-borderColor text-black font-poppins text-[17px] font-medium border rounded-[15px] py-[15px] px-[10px] outline-none"
            >
              <option
                value=""
                className="text-black font-poppins text-[17px] font-medium"
              >
                Date Published{' '}
              </option>
              <option
                value=""
                className="text-black font-poppins text-[17px] font-medium"
              >
                Date Published{' '}
              </option>
              <option
                value=""
                className="text-black font-poppins text-[17px] font-medium"
              >
                Date Published{' '}
              </option>
            </select>
          </div>

          <button className="px-[18px] py-[11px] bg-colorFour text-white font-poppins font-medium text-sm rounded-[7px]">
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPrice;
