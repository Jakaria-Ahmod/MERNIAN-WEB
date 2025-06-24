import React from 'react';
import { FaCartArrowDown, FaSms, FaTools } from 'react-icons/fa';
import { IoNotifications } from 'react-icons/io5';
import { Link } from 'react-router';

const Cart = () => {
  return (
    <div>
      <div className="flex justify-end gap-x-[35px]">
        <div className="">
          <div className="flex items-center justify-between gap-x-[46px]">
            <span className="text-white font-poppins text-[12px] font-normal">
              next
            </span>
            <span className="text-white font-poppins text-[12px] font-normal">
              35 EXP
            </span>
          </div>
          <div className="w-[111px] bg-black h-[3px] mt-[3px] rounded-md">
            <span className="bg-colorFive w-[83px] h-[3px] block"></span>
          </div>
        </div>
        <div className="w-[1px] h-[32px] bg-[#7A77FD]"></div>
        <div className="">
          <div className="flex gap-x-[33px]">
            <Link>
              <FaCartArrowDown
                size={18}
                className="cursor-pointer text-colorFour"
              />
            </Link>
            <Link>
              <FaSms size={18} className="cursor-pointer text-colorFour" />
            </Link>
            <Link>
              <IoNotifications
                size={18}
                className="cursor-pointer text-colorFour"
              />
            </Link>
          </div>
        </div>
        <div className="w-[1px] h-[32px] bg-[#7A77FD]"></div>
        <div className="">
          <Link>
            <FaTools className="cursor-pointer text-colorFour" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
