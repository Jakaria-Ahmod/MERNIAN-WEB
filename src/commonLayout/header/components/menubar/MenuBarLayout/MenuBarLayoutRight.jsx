import { Dropdown } from 'antd';
import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router';

const MenuBarLayoutRight = () => {
  const items = [
    {
      key: '1',
      label: <Link>Home</Link>,
    },
    {
      key: '2',
      label: <Link>about</Link>,
    },
    {
      key: '3',
      label: <Link>newsfeed</Link>,
    },
  ];
  return (
    <div className="flex items-center gap-x-[48px]">
      <Link>
        <Dropdown menu={{ items }} placement="bottomLeft">
          <RxHamburgerMenu size={20} className="text-white" />
        </Dropdown>
      </Link>
      <Link className="text-white font-poppins text-sm font-bold">Careers</Link>
      <Link className="text-white font-poppins text-sm font-bold">Store</Link>
      <Link className="text-white font-poppins text-sm font-bold">FAQ</Link>
      <Link className="text-white font-poppins text-sm font-bold">...</Link>
    </div>
  );
};

export default MenuBarLayoutRight;
