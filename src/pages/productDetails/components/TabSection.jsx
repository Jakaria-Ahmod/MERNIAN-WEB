import React from 'react';

const TabSection = ({ activeTab, setActiveTab }) => {
  return (
    <div>
      <div className="bg-white">
        <div className="flex">
          {['description', 'comments', 'review'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 cursor-pointer py-[20px] px-[102px] bg-colorOne text-sm font-semibold text-center border-b-2 transition-colors duration-300 ${
                activeTab === tab
                  ? 'bg-blue-500 text-white border-black-500 rounded-t-md'
                  : 'bg-gray-100 text-gray-800 border-transparent'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabSection;
