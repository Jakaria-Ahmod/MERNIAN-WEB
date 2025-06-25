import React from 'react';
import ProfileBanner from '../../globalComponents/profileBanner';
import AboutMeComponets from '../../globalComponents/aboutMe';
import PhotoGallary from '../../globalComponents/photoGallary';
import VideoGrallary from '../../globalComponents/videoGrallary';
import PostCart from '../../globalComponents/postCart';
import Status from './components/Status';

const NewsFeed = () => {
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
            <Status></Status>
            <PostCart></PostCart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
