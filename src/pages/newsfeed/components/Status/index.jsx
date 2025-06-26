import React, { useState } from 'react';
import { Link } from 'react-router';
import status from '../../../../assets/svg/status.svg';
import { FaCamera, FaLayerGroup, FaPhotoVideo } from 'react-icons/fa';
import ComonButoon from '../../../../globalComponents/ComonButton';
import ProductUploadForm from '../ProductUpload';

const Status = ({ mainPost, setMainPost }) => {
  const [status, setStaus] = useState(false);
  const [post, setPost] = useState('');

  const handleStatus = () => {
    setStaus(true);
  };
  const handleProduct = () => {
    setStaus(false);
  };

  const handlePost = () => {
    if (!post) return;

    const mainPostData = {
      post,
    };
    setMainPost(p => [...p, mainPostData]);
    // console.log(mainPost);
  };

  return (
    <div>
      <div className="min-w-[585px] min-h-[303px] shadow-2xl">
        <div className="flex">
          <div>
            <button
              onClick={handleStatus}
              className="w-[292px] gap-x-[16px] flex transition-all ease-linear cursor-pointer hover:bg-colorFour bg-white py-[29px] px-[108px] rounded-tl-[15px]"
            >
              <img src={status} alt="" className="text-colorNine" />
              <span className="hover:text-white font-Inter text-[12px] font-bold text-colorNine">
                Status
              </span>
            </button>
          </div>
          <div>
            <button
              onClick={handleProduct}
              className="w-[292px] gap-x-[16px] flex transition-all ease-linear cursor-pointer hover:bg-colorFour bg-white py-[29px] justify-center rounded-tr-[15px]"
            >
              <FaLayerGroup className="text-colorNine" />
              <span className="hover:text-white font-Inter text-[12px] font-bold text-colorNine">
                Product Upload
              </span>
            </button>
          </div>
        </div>
        {status ? (
          <div>
            <div>
              <textarea
                placeholder="Hi, A B M Shawon Islam, Share your post ..."
                className="resize-none h-[150px] w-full border-none outline-none p-[25px]"
                name="Post"
                onChange={e => setPost(e.target.value)}
              ></textarea>
            </div>
            <div className="flex justify-between items-center p-[28px]">
              <div className="flex gap-x-[20px]">
                <div>
                  <FaCamera size={20} className="cursor-pointer" />
                </div>
                <div>
                  <FaPhotoVideo size={20} className="cursor-pointer" />
                </div>
              </div>
              <div className="flex gap-x-[20px]">
                <ComonButoon className="bg-black py-[12px] px-[38px] text-white font-poppins font-semibold rounded-[7px] cursor-pointer">
                  Discard
                </ComonButoon>
                <ComonButoon
                  onClick={handlePost}
                  className="bg-colorSix py-[12px] px-[47px] text-white font-poppins font-semibold rounded-[7px] cursor-pointer"
                >
                  Post
                </ComonButoon>
              </div>
            </div>
          </div>
        ) : (
          <ProductUploadForm></ProductUploadForm>
        )}
      </div>
    </div>
  );
};

export default Status;
