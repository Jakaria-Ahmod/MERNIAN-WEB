import React, { useState } from 'react';
import { videoGallaryApi } from './VideoGrllary';

const VideoGrallary = () => {
  const [video, setVideo] = useState(2);
  const handleClick = () => {
    setVideo(p => p + 2);
  };
  return (
    <div>
      <div className="bg-white px-[29px] py-[19px] mt-[15px] w-[283px] rounded-[15px]">
        <div className="flex justify-between items-center">
          <h3 className="text-black text-sm font-poppins font-bold">
            Photos{' '}
            <span className="text-colorFive text-sm font-poppins font-bold">
              {videoGallaryApi.length}
            </span>
          </h3>
          <span className="text-black text-sm font-poppins font-bold">...</span>
        </div>
        <div className=" mt-[17px] flex flex-col gap-y-[19px]">
          {videoGallaryApi.slice(0, video).map((item, index) => (
            <div className="w-[225px] h-[100px] bg-black rounded-[15px] overflow-hidden cursor-pointer">
              <video
                src={item.video}
                controls
                className="w-full h-full object-cover"
              ></video>
            </div>
          ))}
          {videoGallaryApi.length > 1 && (
            <div
              className="w-[225px] h-[100px] bg-colorFive rounded-[15px] overflow-hidden cursor-pointer flex items-center justify-center"
              onClick={handleClick}
            >
              <span className="text-4xl">+</span>
            </div>
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default VideoGrallary;
