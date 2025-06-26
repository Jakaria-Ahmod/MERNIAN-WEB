import React from 'react';
import {
  FaAlgolia,
  FaLayerGroup,
  FaNewspaper,
  FaRegMoneyBillAlt,
  FaShoppingCart,
  FaStore,
} from 'react-icons/fa';
import ProfileSvg from '../../../../assets/svg';
import { LiaUserFriendsSolid } from 'react-icons/lia';
import { IoGitPullRequest } from 'react-icons/io5';
import { TbLogout } from 'react-icons/tb';
import {
  MdOutlineRoundaboutRight,
  MdProductionQuantityLimits,
} from 'react-icons/md';

export const DeshbordMenuData = [
  {
    id: 1,
    icon: <FaNewspaper></FaNewspaper>,
    title: 'Newsfeed',
    to: '/profile/newsfeed',
  },
  {
    id: 2,
    icon: <ProfileSvg></ProfileSvg>,
    title: 'Profile',
    to: '/profile/profile',
  },
  {
    id: 3,
    icon: <FaLayerGroup />,
    title: 'Groups',
    to: '/profile/groups',
  },
  {
    id: 4,
    icon: <FaAlgolia />,
    title: 'Photos',
    to: '/profile/photos',
  },
  {
    id: 5,
    icon: <LiaUserFriendsSolid />,
    title: 'Friends',
    to: '/profile/friends',
  },
  {
    id: 6,
    icon: <IoGitPullRequest />,
    title: 'Friends Request',
    to: '/profile/friendsRequest',
  },
  {
    id: 7,
    icon: <MdOutlineRoundaboutRight />,
    title: 'About Me',
    to: '/profile/about',
  },
  {
    id: 8,
    icon: <FaStore />,
    title: 'store',
    to: '/profile/store',
  },
  {
    id: 9,
    icon: <MdProductionQuantityLimits />,
    title: 'product',
    to: '/profile/product',
  },
  {
    id: 10,
    icon: <FaShoppingCart />,
    title: 'cart',
    to: '/profile/cart',
  },
  {
    id: 11,
    icon: <FaRegMoneyBillAlt />,
    title: 'Checkout',
    to: '/profile/checkout',
  },
  {
    id: 12,
    icon: <TbLogout />,
    title: 'Logout',
    to: '/profile/logout',
  },
];
