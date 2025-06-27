import React, { useState } from 'react';
import { BiSolidLike } from 'react-icons/bi';
import { FaCommentAlt, FaShareAlt } from 'react-icons/fa';
import jakaria from '../../assets/img/jakaria.jpg';

import react1 from '../../assets/allReact/react1.png';
import react2 from '../../assets/allReact/react2.png';
import react3 from '../../assets/allReact/react3.png';
import react4 from '../../assets/allReact/react4.png';
import react5 from '../../assets/allReact/react5.png';
import react6 from '../../assets/allReact/react6.png';
import react7 from '../../assets/allReact/react7.png';
import react8 from '../../assets/allReact/react8.png';

const PostCart = ({ mainPost = [], setMainPost }) => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const handleReactionClick = (index, reactionImage) => {
    const updated = [...mainPost];
    const post = updated[index];
    if (!post.selectedReaction) {
      post.reactionCount = (post.reactionCount || 0) + 1;
    }
    post.selectedReaction = reactionImage;
    post.showReactions = false;
    setMainPost(updated);
  };

  const toggleCommentBox = index => {
    const updated = mainPost.map((post, i) => ({
      ...post,
      showCommentBox: i === index ? !post.showCommentBox : false,
    }));
    setMainPost(updated);
  };

  const handleCommentSubmit = (e, index) => {
    e.preventDefault();
    const updated = [...mainPost];
    const post = updated[index];
    if (post.comment?.trim()) {
      post.commentsList = [...(post.commentsList || []), post.comment];
      post.comment = '';
    }
    setMainPost(updated);
  };

  const handleLoadMoreComments = index => {
    const updated = [...mainPost];
    updated[index].comments = (updated[index].comments || 2) + 2;
    setMainPost(updated);
  };

  const handleHover = (index, show) => {
    const updated = [...mainPost];
    updated[index].showReactions = show;
    setMainPost(updated);
  };

  const handleCommentChange = (index, value) => {
    const updated = [...mainPost];
    updated[index].comment = value;
    setMainPost(updated);
  };

  const handleDele = id => {
    const mainFilter = mainPost.filter((item, index) => index !== id);
    setMainPost(mainFilter);
  };

  const toggleEditMode = index => {
    const updated = [...mainPost];
    updated[index].isEditing = !updated[index].isEditing;
    setMainPost(updated);
  };

  const handleEditChange = (index, value) => {
    const updated = [...mainPost];
    updated[index].editedPostText = value;
    setMainPost(updated);
  };

  const handleSaveEdit = index => {
    const updated = [...mainPost];
    updated[index].post = updated[index].editedPostText || updated[index].post;
    updated[index].isEditing = false;
    setMainPost(updated);
  };

  const date = new Date().getMinutes();

  return (
    <div>
      {mainPost.length > 0 ? (
        mainPost.map((item, index) => (
          <div
            key={index}
            className="w-[585px] bg-white shadow rounded-[10px] mb-[25px]"
          >
            {/* Header */}
            <div className="relative">
              <div className="flex justify-between p-5">
                <div className="flex gap-3">
                  <div className="w-[50px] h-[50px] rounded-full overflow-hidden bg-gray-300">
                    <img
                      src={jakaria}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">md jakaria</h3>
                    <p className="text-xs text-gray-500">{date} minutes ago</p>
                  </div>
                </div>
                <div className="relative">
                  <button
                    onClick={() =>
                      setOpenDropdownIndex(
                        openDropdownIndex === index ? null : index
                      )
                    }
                    className="text-xl font-bold focus:outline-none cursor-pointer"
                  >
                    ...
                  </button>
                  {openDropdownIndex === index && (
                    <div className="absolute right-0 p-[16px] mt-2 w-40 bg-white border border-borderColor rounded shadow-md z-50">
                      <ul className="text-sm text-gray-700">
                        <li
                          className="px-4 py-2 font-poppins text-[12px] font-normal text-balck hover:bg-gray-100 cursor-pointer"
                          onClick={() => toggleEditMode(index)}
                        >
                          Edit Post
                        </li>
                        <li
                          className="px-4 py-2 font-poppins text-[12px] font-normal text-balck hover:bg-gray-100 cursor-pointer"
                          onClick={() => handleDele(index)}
                        >
                          Delete Post
                        </li>
                        <li className="px-4 py-2 font-poppins text-[12px] font-normal text-balck hover:bg-gray-100 cursor-pointer">
                          Report Post
                        </li>
                        <li className="px-4 py-2 font-poppins text-[12px] font-normal text-balck hover:bg-gray-100 cursor-pointer">
                          Report Author
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Content */}
            {item.isEditing ? (
              <div className="px-5 mb-4">
                <input
                  type="text"
                  value={item.editedPostText || item.post}
                  onChange={e => handleEditChange(index, e.target.value)}
                  className="w-full border px-3 py-2 text-sm rounded mb-2"
                />
                <button
                  onClick={() => handleSaveEdit(index)}
                  className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
                >
                  Post
                </button>
              </div>
            ) : (
              <p className="px-5 text-sm mb-4">{item.post}</p>
            )}

            {item.video && (
              <video
                src={item.video}
                controls
                className="w-full h-[300px] object-cover"
              />
            )}

            {/* Reactions Summary */}
            <div className="px-5 pt-2 border-t border-gray-200">
              <div className="flex justify-between text-xs font-semibold text-gray-700 py-2">
                <div className="flex items-center gap-2">
                  {item.selectedReaction && (
                    <img
                      src={item.selectedReaction}
                      alt="react"
                      className="w-4 h-4"
                    />
                  )}
                  <span className="text-colorTwo font-Inter text-[12px] font-bold">
                    {item.reactionCount || 0}
                  </span>
                </div>
                <div className="text-colorTwo font-Inter text-[12px] font-bold">
                  {item.commentsList?.length || 0} Comments
                </div>
                <div className="text-colorTwo font-Inter text-[12px] font-bold">
                  2 Shares
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div
              className="flex justify-between px-5 items-center border-t border-gray-200 p-3"
              onMouseEnter={() => handleHover(index, true)}
              onMouseLeave={() => handleHover(index, false)}
            >
              <div className="relative flex items-center gap-2 cursor-pointer py-[20px]">
                <BiSolidLike className="text-colorTwo font-Inter text-[18px] font-bold" />
                <span className="text-colorTwo font-Inter text-[12px] font-bold">
                  {item.selectedReaction ? 'Liked' : 'Like'}
                </span>
                {item.showReactions && (
                  <div className="absolute w-[210px] bottom-full left-0 bg-white p-2 rounded-xl shadow-md flex gap-1 z-10">
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
                        alt={`reaction-${i}`}
                        onClick={() => handleReactionClick(index, img)}
                        className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform"
                      />
                    ))}
                  </div>
                )}
              </div>
              <div
                onClick={() => toggleCommentBox(index)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <FaCommentAlt className="text-colorTwo font-Inter text-[15px] font-bold" />
                <span className="text-colorTwo font-Inter text-[12px] font-bold">
                  Comment
                </span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer">
                <FaShareAlt className="text-colorTwo font-Inter text-[15px] font-bold" />
                <span className="text-colorTwo font-Inter text-[12px] font-bold">
                  Share
                </span>
              </div>
            </div>

            {/* Comment Box */}
            {item.showCommentBox && (
              <div className="p-5">
                <form
                  onSubmit={e => handleCommentSubmit(e, index)}
                  className="flex gap-2"
                >
                  <input
                    type="text"
                    placeholder="Write a comment..."
                    value={item.comment || ''}
                    onChange={e => handleCommentChange(index, e.target.value)}
                    className="flex-1 border px-3 py-2 rounded text-sm outline-none border-borderColor"
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-3 py-2 rounded text-sm"
                  >
                    Post
                  </button>
                </form>
                <div className="mt-4 space-y-2">
                  {(item.commentsList || [])
                    .slice(0, item.comments || 2)
                    .map((comment, i) => (
                      <div
                        key={i}
                        className="bg-white shadow p-2 rounded flex gap-2"
                      >
                        <div className="text-sm">
                          <img
                            src={jakaria}
                            alt=""
                            className="w-8 h-8 rounded-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="flex gap-x-[12px]">
                            <p className="font-medium text-xs">
                              md jakaria ahmod :
                            </p>
                            <p className="text-xs">{comment}</p>
                          </div>
                          <div className="flex gap-x-[21px] mt-[15px] items-center">
                            <div className="flex items-center gap-x-[7px]">
                              <div className="flex">
                                <img
                                  src={react1}
                                  alt="like"
                                  className="w-5 h-5 cursor-pointer hover:scale-110 transition"
                                />
                                <img
                                  src={react3}
                                  alt="love"
                                  className="w-5 h-5 cursor-pointer hover:scale-110 transition -ml-1.5"
                                />
                                <img
                                  src={react6}
                                  alt="haha"
                                  className="w-5 h-5 cursor-pointer hover:scale-110 transition -ml-1.5"
                                />
                              </div>
                              <span className="text-black font-poppins text-[12px] font-medium">
                                4
                              </span>
                            </div>
                            <div className="text-colorTwo font-poppins text-[12px] font-medium cursor-pointer">
                              React!
                            </div>
                            <div className="text-colorTwo font-poppins text-[12px] font-medium cursor-pointer">
                              Reply
                            </div>
                            <div className="text-colorTwo font-poppins text-[12px] font-medium cursor-pointer">
                              {date} minutes ago
                            </div>
                            <div>
                              <span className="cursor-pointer">...</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                  {(item.commentsList?.length || 0) > (item.comments || 2) && (
                    <div className="text-center pt-2">
                      <button
                        onClick={() => handleLoadMoreComments(index)}
                        className="text-xs text-blue-500"
                      >
                        Load more comments
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 mt-10">No posts available</p>
      )}
    </div>
  );
};

export default PostCart;
