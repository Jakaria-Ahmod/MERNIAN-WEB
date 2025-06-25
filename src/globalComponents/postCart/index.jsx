import React, { useState } from 'react';
import { BiSolidLike } from 'react-icons/bi';
import { FaCommentAlt, FaShareAlt } from 'react-icons/fa';

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
  const [showReactions, setShowReactions] = useState(false);
  const [selectedReactions, setSelectedReactions] = useState({});
  const [reactionCounts, setReactionCounts] = useState({});
  const [commentStates, setCommentStates] = useState({});
  const [commentInputs, setCommentInputs] = useState({});
  const [openBoxes, setOpenBoxes] = useState({});
  const [visibleComments, setVisibleComments] = useState({});

  const handleReactionClick = (postId, reactionImage) => {
    if (!selectedReactions[postId]) {
      setReactionCounts(prev => ({
        ...prev,
        [postId]: (prev[postId] || 0) + 1,
      }));
    }
    setSelectedReactions(prev => ({ ...prev, [postId]: reactionImage }));
    setShowReactions(false);
  };

  const handleCommentInputChange = (postId, value) => {
    setCommentInputs(prev => ({ ...prev, [postId]: value }));
  };

  const handleCommentSubmit = (e, postId) => {
    e.preventDefault();
    const comment = commentInputs[postId];
    if (comment?.trim()) {
      setCommentStates(prev => ({
        ...prev,
        [postId]: [...(prev[postId] || []), comment],
      }));
      setCommentInputs(prev => ({ ...prev, [postId]: '' }));
    }
  };

  const toggleCommentBox = postId => {
    setOpenBoxes(prev => ({ ...prev, [postId]: !prev[postId] }));
  };

  const handleLoadMore = postId => {
    setVisibleComments(prev => ({
      ...prev,
      [postId]: (prev[postId] || 2) + 2,
    }));
  };

  return (
    <div>
      {postCardApi?.map((item, index) => {
        const postId = item.id || index;
        const selectedReaction = selectedReactions[postId];
        const reactionCount = reactionCounts[postId] || 0;
        const comments = commentStates[postId] || [];
        const isOpen = openBoxes[postId];
        const inputText = commentInputs[postId] || '';
        const visible = visibleComments[postId] || 2;

        return (
          <div
            key={postId}
            className="w-[585px] bg-white shadow rounded-[10px] mt-[25px]"
          >
            <div className="flex gap-x-[15px] justify-between p-[20px]">
              <div className="flex gap-x-[15px]">
                <div className="w-[50px] h-[50px] rounded-full overflow-hidden bg-amber-700">
                  <img
                    src={item.profileImg}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-black font-poppins text-sm font-bold">
                    {item.name}
                  </h3>
                  <span className="text-colorSveven font-poppins text-sm font-medium">
                    {item.time}
                  </span>
                </div>
              </div>
              <span>...</span>
            </div>

            <p className="text-black font-poppins text-[12px] font-normal mt-[23px] mb-[29px] px-[20px]">
              {item.title}
            </p>

            {item.video && (
              <div className="bg-blue-600 w-[584px] h-[349px]">
                <video
                  src={item.video}
                  controls
                  className="w-full h-full object-cover"
                ></video>
              </div>
            )}

            <div className="px-[20px] pb-[20px]">
              <div className="w-[524px] h-[1px] bg-borderColor"></div>
              <div className="flex justify-between items-center py-[15px]">
                <div className="flex gap-x-[13px]">
                  {selectedReaction && (
                    <img
                      src={selectedReaction}
                      alt="reaction"
                      className="w-4 h-4"
                    />
                  )}
                  <span className="text-black text-[12px] font-bold">
                    {reactionCount}
                  </span>
                </div>
                <div className="flex gap-x-[5px]">
                  <span className="text-black text-[12px] font-bold">
                    {comments.length}
                  </span>
                  <h3 className="text-black text-[12px] font-bold">Comments</h3>
                </div>
                <div className="flex gap-x-[5px]">
                  <span className="text-black text-[12px] font-bold">2</span>
                  <h3 className="text-black text-[12px] font-bold">Shares</h3>
                </div>
              </div>

              <div className="border-t border-borderColor flex justify-between p-[23px] relative">
                <div
                  className="flex items-center gap-x-[16px] relative"
                  onMouseEnter={() => setShowReactions(true)}
                  onMouseLeave={() => setShowReactions(false)}
                >
                  <BiSolidLike className="cursor-pointer text-colorEight" />
                  <span className="text-colorEight font-bold">
                    {selectedReaction ? 'Liked' : 'Like'}
                  </span>
                  {showReactions && (
                    <div className="absolute w-[200px] bottom-[100%] left-0 bg-white p-2 rounded-xl shadow-lg flex gap-1 z-10">
                      {[
                        react1,
                        react2,
                        react3,
                        react4,
                        react5,
                        react6,
                        react7,
                        react8,
                      ].map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`react-${idx}`}
                          onClick={() => handleReactionClick(postId, img)}
                          className="w-5 h-5 cursor-pointer hover:scale-110"
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div
                  className="flex items-center gap-x-[16px] cursor-pointer"
                  onClick={() => toggleCommentBox(postId)}
                >
                  <FaCommentAlt className="text-colorEight" />
                  <span className="text-colorEight font-bold">Comment</span>
                </div>

                <div className="flex items-center gap-x-[16px] cursor-pointer">
                  <FaShareAlt className="text-colorEight" />
                  <span className="text-colorEight font-bold">Share</span>
                </div>
              </div>

              {isOpen && (
                <div className="mt-4">
                  <form
                    onSubmit={e => handleCommentSubmit(e, postId)}
                    className="flex gap-2"
                  >
                    <input
                      type="text"
                      placeholder="Write a comment..."
                      value={inputText}
                      onChange={e =>
                        handleCommentInputChange(postId, e.target.value)
                      }
                      className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
                    />
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-3 py-2 rounded text-sm"
                    >
                      Post
                    </button>
                  </form>

                  <div className="mt-3 space-y-2">
                    {comments.slice(0, visible).map((com, idx) => (
                      <div
                        key={idx}
                        className="flex gap-3 bg-gray-100 p-2 rounded"
                      >
                        <div className="w-[38px] h-[38px] overflow-hidden rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                          <img
                            src={item.profileImg}
                            alt=""
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <div className="flex gap-2 items-center">
                            <h3 className="text-[13px] font-bold">
                              {item.name}
                            </h3>
                            <span className="text-[11px] text-gray-500">
                              Just now
                            </span>
                          </div>
                          <p className="text-[13px]">{com}</p>
                        </div>
                      </div>
                    ))}
                    {comments.length > visible && (
                      <div className="text-center py-2">
                        <button
                          onClick={() => handleLoadMore(postId)}
                          className="text-blue-500 text-sm hover:underline"
                        >
                          Load more comments
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostCart;
