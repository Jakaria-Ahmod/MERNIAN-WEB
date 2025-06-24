import React from 'react';
import { FaCartArrowDown, FaSms, FaTools } from 'react-icons/fa';
import { IoNotifications } from 'react-icons/io5';
import { Link } from 'react-router';
import SharchBar from '../sharchBar';
import Cart from '../sharchBar/cart';
const CartAndNotifiacation = () => {
  return (
    <div>
      <Cart></Cart>
    </div>
  );
};

export default CartAndNotifiacation;
