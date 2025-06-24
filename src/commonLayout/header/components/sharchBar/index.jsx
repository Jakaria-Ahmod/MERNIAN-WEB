import React from 'react';
import { IoSearch } from 'react-icons/io5';
import { Link } from 'react-router';

const SharchBar = () => {
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search here ...."
          className="w-[415px] py-[15px] px-[16px] bg-[#4E4AC8] rounded-md border-none outline-none font-poppins text-sm font-normal"
        ></input>
        <div className="relative">
          <Link className="absolute -top-[30px] right-6">
            <IoSearch size={14} className="text-gray-300" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SharchBar;
