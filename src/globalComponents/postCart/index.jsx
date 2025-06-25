import React, { useState } from 'react';
import { BiSolidLike } from 'react-icons/bi';
import { FaCommentAlt, FaShareAlt } from 'react-icons/fa';

// Reaction panel icons
import react1 from '../../assets/allReact/react1.png';
import react2 from '../../assets/allReact/react2.png';
import react3 from '../../assets/allReact/react3.png';
import react4 from '../../assets/allReact/react4.png';
import react5 from '../../assets/allReact/react5.png';
import react6 from '../../assets/allReact/react6.png';
import react7 from '../../assets/allReact/react7.png';
import react8 from '../../assets/allReact/react8.png';
import { postCardApi } from './PostCartApi';

const PostCart = () => {
  const [posts, setPosts] = useState(
    postCardApi.map(post => ({
      ...post,
      showReactions: false,
      selectedReaction: null,
      reactionCount: 0,
      showCommentBox: false,
      comment: '',
      commentsList: [],
      comments: 2,
    }))
  );

  const handleReactionClick = (index, reactionImage) => {
    setPosts(prevPosts => {
      const newPosts = [...prevPosts];
      const post = newPosts[index];
      if (!post.selectedReaction) {
        post.reactionCount += 1;
      }
      post.selectedReaction = reactionImage;
      post.showReactions = false;
      return newPosts;
    });
  };

  const handleCommentSubmit = (e, index) => {
    e.preventDefault();
    setPosts(prevPosts => {
      const newPosts = [...prevPosts];
      const post = newPosts[index];
      if (post.comment.trim()) {
        post.commentsList.push(post.comment);
        post.comment = '';
      }
      return newPosts;
    });
  };

  const handleLoadMoreComments = index => {
    setPosts(prevPosts => {
      const newPosts = [...prevPosts];
      newPosts[index].comments += 2;
      return newPosts;
    });
  };

  const toggleCommentBox = index => {
    setPosts(prevPosts =>
      prevPosts.map((post, i) => ({
        ...post,
        showCommentBox: i === index ? !post.showCommentBox : false,
      }))
    );
  };

  return (
    <div>
      <div>
        {posts.map((item, index) => (
          <div
            key={index}
            className="w-[585px] bg-white shadow  rounded-[10px] mt-[25px]"
          >
            {/* User info */}
            <div className="flex gap-x-[15px] justify-between p-[20px]">
              <div className="flex gap-x-[15px]">
                <div className="w-[50px] h-[50px] rounded-full overflow-hidden bg-amber-700">
                  <img
                    src={item?.profileImg}
                    className="w-full h-full object-cover cursor-pointer"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-balck font-poppins text-sm font-bold">
                    {item?.name}
                  </h3>
                  <span className="text-colorSveven font-poppins text-sm font-medium">
                    {item?.time}
                  </span>
                </div>
              </div>
              <span>...</span>
            </div>

            {/* Post Text */}
            <p className="text-balck font-poppins text-[12px] font-normal mt-[23px] mb-[29px] px-[20px]">
              {item?.title}
            </p>

            {item.video && (
              <div className="bg-blue-600 w-[584px] h-[349px]">
                <video
                  src={item?.video}
                  controls
                  className="w-full h-full object-cover"
                ></video>
              </div>
            )}

            <div className="px-[20px] pb-[20px]">
              {/* Reaction Summary */}
              <div className="w-[524px] h-[1px] bg-borderColor"></div>
              <div className="flex justify-between items-center py-[15px]">
                <div className="flex gap-x-[13px]">
                  <div className="flex cursor-pointer">
                    {item.selectedReaction && (
                      <img
                        src={item.selectedReaction}
                        alt="reaction"
                        className="w-4 h-4 object-contain"
                      />
                    )}
                  </div>
                  <span className="text-black text-[12px] font-bold text-Inter">
                    {item.reactionCount}
                  </span>
                </div>

                <div className="flex gap-x-[5px]">
                  <span className="text-black text-[12px] font-bold text-Inter">
                    {item.commentsList.length}
                  </span>
                  <h3 className="text-black text-[12px] font-bold text-Inter">
                    Comments
                  </h3>
                </div>

                <div className="flex gap-x-[5px]">
                  <span className="text-black text-[12px] font-bold text-Inter">
                    2
                  </span>
                  <h3 className="text-black text-[12px] font-bold text-Inter">
                    Shares
                  </h3>
                </div>
              </div>

              {/* Like / Comment / Share Buttons */}
              <div className="border-t border-borderColor flex justify-between p-[23px] relative">
                {/* Like + Reactions */}
                <div
                  className="flex items-center gap-x-[16px] relative"
                  onMouseEnter={() => {
                    const newPosts = [...posts];
                    newPosts[index].showReactions = true;
                    setPosts(newPosts);
                  }}
                  onMouseLeave={() => {
                    const newPosts = [...posts];
                    newPosts[index].showReactions = false;
                    setPosts(newPosts);
                  }}
                >
                  <BiSolidLike className="cursor-pointer text-colorEight" />
                  <span className="text-colorEight font-Inter text-[12px] font-bold">
                    {item.selectedReaction ? 'Liked' : 'Like'}
                  </span>

                  {item.showReactions && (
                    <div className="absolute w-[200px] bottom-[100%] left-0 bg-white p-2 rounded-xl shadow-lg flex gap-1 z-10 transition-all duration-300">
                      {[
                        react1,
                        react2,
                        react3,
                        react4,
                        react5,
                        react6,
                        react7,
                        react8,
                      ].map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`react-${i}`}
                          onClick={() => handleReactionClick(index, img)}
                          className="w-5 h-5 cursor-pointer hover:scale-110"
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Comment Button */}
                <div
                  className="flex items-center gap-x-[16px] cursor-pointer"
                  onClick={() => toggleCommentBox(index)}
                >
                  <FaCommentAlt className="text-colorEight" />
                  <span className="text-colorEight font-Inter text-[12px] font-bold">
                    Comment
                  </span>
                </div>

                {/* Share Button */}
                <div className="flex items-center gap-x-[16px] cursor-pointer">
                  <FaShareAlt className="text-colorEight" />
                  <span className="text-colorEight font-Inter text-[12px] font-bold">
                    Share
                  </span>
                </div>
              </div>

              {/* Comment Box Section */}
              {item.showCommentBox && (
                <div className="mt-4">
                  <form
                    onSubmit={e => handleCommentSubmit(e, index)}
                    className="flex gap-2"
                  >
                    <input
                      type="text"
                      placeholder="Write a comment..."
                      value={item.comment}
                      onChange={e => {
                        const newPosts = [...posts];
                        newPosts[index].comment = e.target.value;
                        setPosts(newPosts);
                      }}
                      className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm outline-none"
                    />
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-3 py-2 rounded text-sm cursor-pointer"
                    >
                      Post
                    </button>
                  </form>

                  {/* Comments Display */}
                  <div className="mt-3 space-y-2">
                    {item.commentsList
                      .slice(0, item.comments)
                      .map((com, idx) => (
                        <div
                          key={idx}
                          className="text-sm text-gray-800 py-[11px] pb-[18px] px-[26px] bg-gray-100 p-2 rounded"
                        >
                          <div className="flex gap-x-[12px]">
                            <div className="w-[38px] h-[38px] bg-colorSix rounded-full overflow-hidden">
                              <img
                                src={item.profileImg}
                                alt=""
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <div className="flex gap-x-[5px]">
                                <span className="text-colorSveven font-poppins text-[12px] font-medium">
                                  {item.name} :
                                </span>
                                <span className="text-colorSveven font-poppins text-[12px] font-normal">
                                  {com}
                                </span>
                              </div>
                              <div className="mt-[15px] flex gap-x-[14px]">
                                <div className="flex gap-x-[7px]">
                                  <div className="flex">
                                    <div className="w-[20px] h-[20px] object-cover">
                                      <img src={react1} alt="" />
                                    </div>
                                    <div className="w-[20px] h-[20px] object-cover">
                                      <img src={react6} alt="" />
                                    </div>
                                  </div>
                                  <span>4</span>
                                </div>
                                <div className="flex gap-x-[21px] items-center">
                                  <span className="text-colorTwo font-poppins text-[12px] font-medium">
                                    React
                                  </span>
                                  <span className="text-colorTwo font-poppins text-[12px] font-medium">
                                    Reply
                                  </span>
                                  <span className="text-colorTwo font-poppins text-[12px] font-medium">
                                    15 minutes ago
                                  </span>
                                  <span className=" font-poppins text-[30px] text-black text-[12px] font-medium">
                                    ...
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    {item.commentsList.length > item.comments && (
                      <div className="text-center py-[10px]">
                        <button
                          onClick={() => handleLoadMoreComments(index)}
                          className="cursor-pointer"
                        >
                          <span className="text-[12px] font-poppins font-normal text-[#3E3F5E]">
                            Load more comments
                          </span>{' '}
                          <span className="text-[12px] font-poppins font-normal text-[#01C7D9]">
                            9+
                          </span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostCart;
