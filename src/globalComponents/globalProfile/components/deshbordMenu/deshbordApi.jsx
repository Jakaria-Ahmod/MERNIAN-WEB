import React from 'react';
import { FaAlgolia, FaLayerGroup, FaNewspaper } from 'react-icons/fa';
import ProfileSvg from '../../../../assets/svg';
import { LiaUserFriendsSolid } from 'react-icons/lia';
import { IoGitPullRequest } from 'react-icons/io5';
import { TbLogout } from 'react-icons/tb';

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
    icon: <TbLogout />,
    title: 'Logout',
    to: '/profile/logout',
  },
];
