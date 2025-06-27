import React, { useState } from 'react';
import TabSection from './TabSection';
import Description from './Description';
import Comments from './Comments';
import Review from './Review';
// import React, { useState } from 'react';

const PorductDetails = () => {
  const [activeTab, setActiveTab] = useState('description');
  return (
    <div className="mt-[80px]">
      <div>
        <div className="max-w-[830px]  overflow-hidden mt-10 bg-white shadow-md rounded-xl ">
          {/* Tabs */}
          <TabSection
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          ></TabSection>
          {/* Content */}
          <div className="mt-6 space-y-4 p-[20px]">
            {activeTab === 'description' && (
              <>
                <Description></Description>
              </>
            )}

            {activeTab === 'comments' && (
              <div>
                <Comments></Comments>
              </div>
            )}

            {activeTab === 'review' && (
              <div>
                <Review></Review>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PorductDetails;
