import React from 'react';
import LogoImg from '../../../../../assets/img/menuLogo.png';
import { Link } from 'react-router';

const MenuBarLayoutLeft = () => {
  return (
    <div>
      <Link to="/">
        <img src={LogoImg} alt="logo" />
      </Link>
    </div>
  );
};

export default MenuBarLayoutLeft;
