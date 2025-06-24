import React from 'react';
import { FaNewspaper } from 'react-icons/fa';
import { Link } from 'react-router';
import { DeshbordMenuData } from './deshbordApi';

const DeshbordMenu = () => {
  return (
    <div>
      <div className="pl-[24px] mt-[64px]">
        {DeshbordMenuData.map((item, index) => (
          <Link
            to={item.to}
            key={index}
            className="flex group cursor-pointer items-center mt-[20px] gap-x-[29px] w-[268px] rounded-[10px] py-[15px] px-[20px] group hover:bg-colorThree transition ease-in"
          >
            <Link
              to={item.to}
              className="text-[20px] text-colorTwo group-hover:text-white"
            >
              {item.icon}
            </Link>
            <Link
              to={item.to}
              className="text-colorTwo font-poppins text-sm font-semibold group-hover:text-white"
            >
              {item.title}
            </Link>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DeshbordMenu;
