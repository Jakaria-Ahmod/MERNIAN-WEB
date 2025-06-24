import React from 'react';
import Like from '../../assets/reactImg/like.png';
import Love from '../../assets/reactImg/love.png';
import Wow from '../../assets/reactImg/wow.png';
import { BiSolidLike } from 'react-icons/bi';
import { FaCommentAlt, FaShareAlt } from 'react-icons/fa';

const PostCart = () => {
  return (
    <div className="w-[585px] bg-white shadow p-[20px] rounded-[10px]">
      <div>
        <div className="flex gap-x-[15px]">
          <div className="w-[50px] h-[50px] rounded-full overflow-hidden bg-amber-700"></div>
          <div>
            <h3 className="text-balck font-poppins text-sm font-bold">
              A B M Shawon Islam
            </h3>
            <span className="text-colorSveven font-poppins text-sm font-medium">
              29 minutes ago
            </span>
          </div>
        </div>
      </div>
      <div>
        <p className="text-balck font-poppins text-[12px] font-normal mt-[23px] mb-[29px]">
          I have great news to share with you all! I’ve been officially made a
          game streaming verified partner by Streamy http://lyt.ly/snej25. What
          does this mean? I’ll be uploading new content every day, improving the
          quality and I’m gonna have access to games a month before the official
          release. This is a dream come true, thanks to all for the support!!!
        </p>
      </div>
      <div className="w-[524px] h-[1px] bg-borderColor"></div>
      <div className="flex justify-between items-center py-[15px] ">
        <div className="flex gap-x-[13px]">
          <div className="flex cursor-pointer">
            <img src={Like} alt="LIke" className="z-[99999]" />
            <img src={Love} alt="LIke" className="-ml-[6px] z-[333]" />
            <img src={Wow} alt="LIke" className="-ml-[6px]" />
          </div>
          <span className="text-black text-[12px] font-bold text-Inter">
            12
          </span>
        </div>
        <div className="flex gap-x-[5px]">
          <span className="text-black text-[12px] font-bold text-Inter">
            13{' '}
          </span>
          <h3 className="text-black text-[12px] font-bold text-Inter">
            Comments
          </h3>
        </div>
        <div className="flex gap-x-[5px]">
          <span className="text-black text-[12px] font-bold text-Inter">2</span>
          <h3 className="text-black text-[12px] font-bold text-Inter">
            Shares
          </h3>
        </div>
      </div>
      <div className="border-t border-borderColor flex justify-between p-[23px]">
        <div className="flex items-center gap-x-[16px]">
          <BiSolidLike className="cursor-pointer text-colorEight" />
          <span className="text-colorEight font-Inter text-[12px] font-bold">
            Like
          </span>
        </div>
        <div className="flex items-center gap-x-[16px]">
          <FaCommentAlt className="cursor-pointer text-colorEight" />
          <span className="text-colorEight font-Inter text-[12px] font-bold">
            Comment
          </span>
        </div>
        <div className="flex items-center gap-x-[16px]">
          <FaShareAlt className="cursor-pointer text-colorEight" />
          <span className="text-colorEight font-Inter text-[12px] font-bold">
            Share
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostCart;
