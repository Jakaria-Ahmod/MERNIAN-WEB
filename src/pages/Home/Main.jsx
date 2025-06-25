import React from 'react';
import ProfileBanner from '../../globalComponents/profileBanner';
import AboutMeComponets from '../../globalComponents/aboutMe';
import PhotoGallary from '../../globalComponents/photoGallary';
import VideoGrallary from '../../globalComponents/videoGrallary';
import PostCart from '../../globalComponents/postCart';

const HomePage = () => {
  return (
    <div>
      <div className="mb-[20px]">
        <ProfileBanner></ProfileBanner>
        <div className="flex gap-x-[15px]">
          <div>
            <AboutMeComponets></AboutMeComponets>
            <PhotoGallary></PhotoGallary>
            <VideoGrallary></VideoGrallary>
          </div>
          <div>
            <PostCart></PostCart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
