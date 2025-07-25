import React from 'react';
import { Link } from 'react-router';
import FriendsAndPostCount from '../friendAndPostCount';
import jakariImg from '../../assets/img/jakaria.jpg';
import { FaNewspaper } from 'react-icons/fa';
import DeshbordMenu from './components/deshbordMenu';

const UserProfile = () => {
  return (
    <div>
      <section className="bg-white mt-[92px] fixed shadow-2xl w-[300px] h-[calc(100vh-92px)] overflow-y-auto">
        <div className="p-[15px]">
          <div className="w-[110px] mx-auto h-[110px] bg-colorFour rounded-full overflow-hidden">
            <img
              src={jakariImg}
              alt="userImg"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center">
            <h3 className="text-black font-poppins text-base font-bold mt-[15px]">
              md jakaria ahmod
            </h3>
            <Link>
              <span className="text-colorTwo font-poppins text-[12px] font-medium">
                www.jakaria.com
              </span>
            </Link>
          </div>
        </div>

        {/* এই অংশগুলো ইউজার প্রোফাইল স্ক্রল এর মধ্যে থাকবে */}
        <div>
          <FriendsAndPostCount />
        </div>
        <DeshbordMenu />
      </section>
    </div>
  );
};

export default UserProfile;
