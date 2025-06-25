import React, { useState } from 'react';
import { categories, reviews } from './productApi';

const Categores = () => {
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  return (
    <div className="w-[284px] px-[15px] py-[30px] shadow-2xl">
      <div className="w-64 pr-8 ">
        {/* Categories */}
        <div className="mb-8">
          <h3 className="font-semibold text-black mb-4">Categories</h3>
          <div className="space-y-2">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex justify-between text-sm text-gray-500"
              >
                <span>{category.name}</span>
                <span className="text-cyan-400 font-medium">
                  {category.count}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className="mb-8">
          <h3 className="font-semibold text-black mb-4">Price Range</h3>
          <div className="flex gap-2 mb-4">
            <input
              placeholder="from"
              value={priceFrom}
              onChange={e => setPriceFrom(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 text-sm w-full"
            />
            <input
              placeholder="to"
              value={priceTo}
              onChange={e => setPriceTo(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 text-sm w-full"
            />
          </div>
          <button className="w-full bg-cyan-400 text-white py-2 rounded hover:bg-cyan-500 text-sm">
            Apply Price Filter
          </button>
        </div>

        {/* Reviews */}
        <div>
          <h3 className="font-semibold text-black mb-4">Reviews</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-500">
              <span>All reviews</span>
              <span className="text-cyan-400 font-medium">1207</span>
            </div>
            {reviews.map((review, index) => (
              <div
                key={index}
                className="flex justify-between items-center text-sm"
              >
                <div className="flex items-center gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                  <span className="text-black ml-1">{review.stars}+</span>
                </div>
                <span className="text-cyan-400 font-medium">
                  {review.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categores;
