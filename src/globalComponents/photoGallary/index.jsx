import React, { useState } from 'react';
import { photoGalrayApi } from './PhotoGallaryApi';
import man1 from '../../assets/img/man1.jpg';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const PhotoGallary = () => {
  const [mainPhoto, setMainPhoto] = useState(5);
  const handleClick = () => {
    setMainPhoto(p => p + 6);
  };
  return (
    <div>
      <div className="bg-white px-[29px] py-[19px] mt-[15px] w-[283px] rounded-[15px]">
        <div className="flex justify-between items-center">
          <h3 className="text-black text-sm font-poppins font-bold">
            Photos{' '}
            <span className="text-colorFive text-sm font-poppins font-bold">
              {photoGalrayApi.length}
            </span>
          </h3>
          <span className="text-black text-sm font-poppins font-bold">...</span>
        </div>
        <div className="flex flex-wrap gap-[15px] mt-[17px]">
          {photoGalrayApi.slice(0, mainPhoto).map((item, index) => (
            <PhotoProvider>
              <PhotoView src={item.img}>
                <div className="w-[105px] h-[100px] bg-black overflow-hidden rounded-[15px] cursor-pointer">
                  <img
                    src={item.img}
                    alt="thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>
              </PhotoView>
            </PhotoProvider>
          ))}
          {photoGalrayApi.length > 1 && (
            <div
              className="w-[105px] h-[100px] bg-black overflow-hidden rounded-[15px] cursor-pointer"
              onClick={handleClick}
            >
              <img
                src={man1}
                alt="thumbnail"
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default PhotoGallary;
