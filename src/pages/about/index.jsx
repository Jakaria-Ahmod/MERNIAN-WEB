import React from 'react';
import ProfileBanner from '../../globalComponents/profileBanner';
import AboutMeComponets from '../../globalComponents/aboutMe';
import PhotoGallary from '../../globalComponents/photoGallary';
import VideoGrallary from '../../globalComponents/videoGrallary';
import ParsonalInfo from './components/ParsonalInfo';
import Interests from './components/Interests';
import JobsEducation from './components/JobsEducation';

const AboutPage = () => {
  return (
    <div>
      <div className="mb-[132px]">
        <ProfileBanner></ProfileBanner>
        <div className="flex gap-x-[18px]">
          <div>
            <AboutMeComponets></AboutMeComponets>
            <ParsonalInfo></ParsonalInfo>
          </div>
          <div>
            <div>
              <Interests></Interests>
            </div>
            <div>
              <JobsEducation></JobsEducation>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
