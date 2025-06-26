import React, { useState } from 'react';
import ProfileBanner from '../../globalComponents/profileBanner';
import AboutMeComponets from '../../globalComponents/aboutMe';
import PhotoGallary from '../../globalComponents/photoGallary';
import VideoGrallary from '../../globalComponents/videoGrallary';
import PostCart from '../../globalComponents/postCart';
import Status from './components/Status';

const NewsFeed = () => {
  const [mainPost, setMainPost] = useState([
    {
      post: 'my name is jakaria ahmod i learing full stack software engineear i alrady conected one year acadmey ',
    },
    {
      post: `I have great news to share with you all! I’ve been officially made a game streaming verified partner by Streamy http://lyt.ly/snej25. What does this mean? I’ll be uploading new content every day, improving the quality and I’m gonna have access to games a month before the official release.This is a dream come true, thanks to all for the support!!!`,
    },
  ]);
  return (
    <div>
      <div>
        <ProfileBanner></ProfileBanner>
        <div className="flex gap-x-[15px]">
          <div>
            <AboutMeComponets></AboutMeComponets>
            <PhotoGallary></PhotoGallary>
            <VideoGrallary></VideoGrallary>
          </div>
          <div>
            <Status mainPost={mainPost} setMainPost={setMainPost}></Status>
            <PostCart mainPost={mainPost} setMainPost={setMainPost}></PostCart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
