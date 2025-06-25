import React from 'react';
import FriendsAndPostCount from '../friendAndPostCount';
import { Link } from 'react-router';
import facebook from '../../assets/socalImg/facebook.png';
import insta from '../../assets/socalImg/insta.png';
import twitter from '../../assets/socalImg/twitter.png';
import youtube from '../../assets/socalImg/youtube.png';
import ComonButoon from '../ComonButton';
import jakariImg from '../../assets/img/jakaria.jpg';
import coding from '../../assets/img/coding.jpg';
const ProfileBanner = () => {
  return (
    <div className="mt-[150px]">
      <div className="w-[1185px]  h-[425px] shadow my-[32px] rounded-md overflow-hidden">
        <div className="w-full h-[300px] bg-colorFour cursor-pointer">
          <img src={coding} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-[125px] bg-white">
          <div className="flex gap-x-[244px] pt-[65px]">
            <div>
              <FriendsAndPostCount></FriendsAndPostCount>
            </div>
            <div className="flex gap-x-[305px]">
              <div className="relative">
                <div className="bg-white w-[154px] h-[316px] absolute -top-[160px] left-0 rounded-l-full rounded-r-full">
                  <div className="w-[130px] h-[130px] rounded-full overflow-hidden mx-auto mt-[11px]">
                    <img
                      src={jakariImg}
                      alt=""
                      className="w-full h-full object-cover cursor-pointer"
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
              </div>
              <div>
                <div className="flex gap-x-[12px]">
                  <div>
                    <Link>
                      <img src={facebook} alt="img" />
                    </Link>
                  </div>
                  <div>
                    <Link>
                      <img src={insta} alt="img" />
                    </Link>
                  </div>
                  <div>
                    <Link>
                      <img src={twitter} alt="img" />
                    </Link>
                  </div>
                  <div>
                    <Link>
                      <img src={youtube} alt="img" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-[135px] right-5">
              <div className="flex gap-x-[16px]">
                <div>
                  <ComonButoon className="bg-colorSix py-[14px] px-[52px] text-white font-poppins font-semibold rounded-[7px] cursor-pointer">
                    Add Friend
                  </ComonButoon>
                </div>
                <div>
                  <ComonButoon className="bg-colorThree py-[14px] px-[38px] text-white font-poppins font-semibold rounded-[7px] cursor-pointer">
                    Send Message
                  </ComonButoon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
