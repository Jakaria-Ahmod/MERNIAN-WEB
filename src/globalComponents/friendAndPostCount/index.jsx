import React from 'react';
import CountUp from 'react-countup';
import { userAndPostData } from './friensandPostapi';

const FriendsAndPostCount = () => {
  return (
    <div className="px-[35px]">
      <div className="flex gap-x-[24px]">
        {userAndPostData.map((item, index) => (
          <div key={index} className="flex gap-x-[24px] items-center">
            <div className="flex flex-col items-center">
              <h3 className="text-black font-poppins text-sm font-bold">
                <CountUp end={item.number} duration={2.5} separator="," />
              </h3>
              <p className="text-colorTwo font-poppins text-[12px] font-medium">
                {item.title}
              </p>
            </div>
            {index < userAndPostData.length - 1 && (
              <div className="w-[1px] h-[25px] bg-colorTwo"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendsAndPostCount;
