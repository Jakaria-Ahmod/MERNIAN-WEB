import React, { useState } from 'react';
import coding from '../../../assets/img/coding.jpg';
import {
  Search,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { friends } from './FrindensApi';

const AllFriends = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const friendsPerPage = 8;

  // সার্চ টার্ম অনুযায়ী ফিল্টার
  const filteredFriends = friends.filter(friend => {
    const lowerTerm = searchTerm.toLowerCase();
    return (
      friend.name.toLowerCase().includes(lowerTerm) ||
      friend.email.toLowerCase().includes(lowerTerm)
    );
  });

  // Pagination এর জন্য
  const totalPages = Math.ceil(filteredFriends.length / friendsPerPage);
  const indexOfLastFriend = currentPage * friendsPerPage;
  const indexOfFirstFriend = indexOfLastFriend - friendsPerPage;
  const currentFriends = filteredFriends.slice(
    indexOfFirstFriend,
    indexOfLastFriend
  );

  // পেজ চেঞ্জ ফাংশন
  const handlePageChange = pageNumber => {
    if (pageNumber < 1) pageNumber = 1;
    else if (pageNumber > totalPages) pageNumber = totalPages;
    setCurrentPage(pageNumber);
  };

  // সার্চ ইনপুট পরিবর্তনের সময় পেজ ১ এ নামানো (যখন সার্চ করে)
  const handleSearchChange = e => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div>
      <div>
        <div className="min-h-screen bg-white p-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-2">
              <p className="text-[#afb0c0] text-sm font-medium tracking-wide">
                BROWSE ABM SHAWON
              </p>
            </div>

            {/* Title */}
            <h1 className="text-black text-3xl font-bold mb-8">
              Friends {filteredFriends.length}
            </h1>

            {/* Search Bar */}
            <div className="flex gap-4 mb-12">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search Friends"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="h-12 w-[717px] pl-4 pr-4 border border-[#d9d9d9] rounded-lg text-[#afb0c0] placeholder:text-[#afb0c0] outline-none focus:ring-2 focus:ring-[#23d2e2]"
                />
                <button
                  className="h-12 absolute cursor-pointer right-[420px] top-0 w-12 bg-[#23d2e2] hover:bg-[#23d2e2]/90 rounded-lg flex items-center justify-center"
                  onClick={() => setCurrentPage(1)} // এটা ঐ সময় রিসেট করে দিতে পারেন
                >
                  <Search className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>

            {/* Friends Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {currentFriends.length > 0 ? (
                currentFriends.map((friend, index) => (
                  <div
                    key={index + indexOfFirstFriend}
                    className="bg-white rounded-lg border border-[#d9d9d9] overflow-hidden"
                  >
                    {/* Card Header with Profile */}
                    <div className="bg-[#45437f]  z-0 h-24 relative">
                      <img
                        src={coding}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                      <div>
                        <div className="absolute z-10 -bottom-[25px] left-1/2 transform -translate-x-1/2">
                          <div className="w-12 h-12 z-50 bg-[#615dfa] rounded-full border-4 overflow-hidden border-white">
                            <img
                              src={coding}
                              alt=""
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="pt-8 pb-6 px-6 text-center z-0">
                      <h3 className="text-black font-semibold text-lg mb-1">
                        {friend.name}
                      </h3>
                      <p className="text-[#afb0c0] text-sm mb-6">
                        {friend.email}
                      </p>

                      {/* Stats */}
                      <div className="flex justify-center items-center gap-6 mb-6">
                        <div className="text-center">
                          <div className="text-black font-bold text-lg">
                            {friend.friends}
                          </div>
                          <div className="text-[#afb0c0] text-xs">Friends</div>
                        </div>
                        <div className="w-px h-8 bg-[#d9d9d9]"></div>
                        <div className="text-center">
                          <div className="text-black font-bold text-lg">
                            {friend.posts}
                          </div>
                          <div className="text-[#afb0c0] text-xs">Posts</div>
                        </div>
                        <div className="w-px h-8 bg-[#d9d9d9]"></div>
                        <div className="text-center">
                          <div className="text-black font-bold text-lg">
                            {friend.followers}
                          </div>
                          <div className="text-[#afb0c0] text-xs">
                            Followers
                          </div>
                        </div>
                      </div>

                      {/* Social Icons */}
                      <div className="flex justify-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-[#1877f2] rounded flex items-center justify-center">
                          <Facebook className="h-4 w-4 text-white fill-current" />
                        </div>
                        <div className="w-8 h-8 bg-[#e4405f] rounded flex items-center justify-center">
                          <Instagram className="h-4 w-4 text-white" />
                        </div>
                        <div className="w-8 h-8 bg-[#1da1f2] rounded flex items-center justify-center">
                          <Twitter className="h-4 w-4 text-white fill-current" />
                        </div>
                        <div className="w-8 h-8 bg-[#ff0000] rounded flex items-center justify-center">
                          <Youtube className="h-4 w-4 text-white fill-current" />
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <button className=" cursor-pointer flex-1 bg-[#615dfa] hover:bg-[#615dfa]/90 text-white rounded-lg h-10 text-sm font-medium">
                          Add Friend
                        </button>
                        <button className="flex-1 cursor-pointer  bg-[#23d2e2] hover:bg-[#23d2e2]/90 text-white rounded-lg h-10 text-sm font-medium">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center col-span-full text-gray-500">
                  No friends found.
                </p>
              )}
            </div>

            {/* Pagination */}
            {filteredFriends.length > friendsPerPage && (
              <div className="flex justify-center items-center gap-4">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-full ${
                    currentPage === 1
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-[#afb0c0] hover:text-black'
                  }`}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <div className="flex gap-2">
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => handlePageChange(index + 1)}
                      className={`w-8 h-8 text-sm font-medium rounded ${
                        currentPage === index + 1
                          ? 'text-[#23d2e2]'
                          : 'text-[#afb0c0] hover:text-black'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-full ${
                    currentPage === totalPages
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-[#afb0c0] hover:text-black'
                  }`}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllFriends;
