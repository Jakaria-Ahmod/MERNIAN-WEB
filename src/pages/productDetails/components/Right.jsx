import { Star } from 'lucide-react';
import React from 'react';

const RightComponet = () => {
  return (
    <div>
      <div className="w-[284px] ">
        <div className="bg-white rounded-lg shadow-md p-[30px]">
          {/* Price */}
          <div className="font-poppins text-[49px] font-medium mb-4 text-center">
            <span className="text-cyan-500">$</span>39.00
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between mb-6">
            {/* Sales */}
            <div className="text-center">
              <div className="text-[24px] font-poppins font-semibold text-[#181828]">
                1,320
              </div>
              <div className="text-[14px] font-medium text-colorTwo">Sales</div>
            </div>
            <div className="w-[1px] h-[51px] bg-gray-400"></div>
            {/* Rating */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <span className="text-[24px] font-poppins font-semibold text-[#181828]">
                  4.2
                </span>
                <span className="text-gray-500">/5</span>
              </div>
              <div className="flex items-center justify-center gap-1 mt-1">
                {[1, 2, 3, 4].map(star => (
                  <Star
                    key={star}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <Star className="w-4 h-4 text-gray-300" />
              </div>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 rounded-md cursor-pointer transition">
            Add to your cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightComponet;
