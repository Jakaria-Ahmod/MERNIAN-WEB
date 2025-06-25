import React from 'react';

const AboutMeComponets = () => {
  return (
    <div className="py-[29px] px-[27px] rounded-[15px] w-[283px] bg-white shadow-2xl">
      <div className="flex justify-between items-center">
        <h3 className="text-colorSveven text-sm font-poppins font-bold">
          About Me
        </h3>
        <span className="text-colorSveven text-sm font-poppins font-bold">
          ...
        </span>
      </div>
      <div>
        <p className="text-colorSveven text-[12px] font-poppins font-normal mt-[29px]">
          Hi! My name is A B M Shawon Islam but some people may know me as
          GameHuntress! I have a Twitch channel where I stream, play and review
          all the newest games.
        </p>
      </div>
      <div>
        <div className="flex gap-x-4 mt-[18px]">
          <strong className="text-colorSveven text-[12px] font-poppins font-bold">
            Joined:
          </strong>
          <span className="text-colorSveven text-[12px] font-poppins font-normal">
            22 November 2008
          </span>
        </div>
        <div className="flex gap-x-4 mt-[18px]">
          <strong className="text-colorSveven text-[12px] font-poppins font-bold">
            City:
          </strong>
          <span className="text-colorSveven text-[12px] font-poppins font-normal">
            Dhaka
          </span>
        </div>
        <div className="flex gap-x-4 mt-[18px]">
          <strong className="text-colorSveven text-[12px] font-poppins font-bold">
            Age:
          </strong>
          <span className="text-colorSveven text-[12px] font-poppins font-normal">
            18 years
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutMeComponets;
