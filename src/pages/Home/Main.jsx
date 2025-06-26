import React, { use, useState } from 'react';
import ProfileBanner from '../../globalComponents/profileBanner';
import AboutMeComponets from '../../globalComponents/aboutMe';
import PhotoGallary from '../../globalComponents/photoGallary';
import VideoGrallary from '../../globalComponents/videoGrallary';
import PostCart from '../../globalComponents/postCart';

const HomePage = () => {
  const [mainPost, setMainPost] = useState([
    {
      post: 'jakaria',
      video: '',
      comment: '',
      comments: 2,
      commentsList: [],
      selectedReaction: '',
      reactionCount: 0,
      showCommentBox: false,
      showReactions: false,
    },
    {
      post: 'Ahmod',
      video: '',
      comment: '',
      comments: 2,
      commentsList: [],
      selectedReaction: '',
      reactionCount: 0,
      showCommentBox: false,
      showReactions: false,
    },
    {
      post: 'Bishal',
      video: '',
      comment: '',
      comments: 2,
      commentsList: [],
      selectedReaction: '',
      reactionCount: 0,
      showCommentBox: false,
      showReactions: false,
    },
  ]);
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
            <PostCart mainPost={mainPost} setMainPost={setMainPost}></PostCart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
