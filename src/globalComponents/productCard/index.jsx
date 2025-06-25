import React from 'react';

const ProductCard = ({ price, img, title, category }) => {
  return (
    <div>
      <div className="px-6 py-6">
        <div className="w-[281px] h-[380px] rounded-[15px]">
          <div className="overflow-hidden border border-[#d9d9d9] rounded-lg">
            <div className="p-0">
              <div className="relative bg-gradient-to-br from-[#615dfa] to-[#615dfa]/80 h-48">
                <img src={img} className="w-full h-full object-cover" alt="" />
                <div className="absolute top-[170px] right-3 bg-white text-[#615dfa] font-semibold text-sm rounded-[24px] py-[5px] px-[24px]">
                  {price}
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-black text-base font-poppins mb-2 line-clamp-2">
                  {title}
                </h3>

                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-[#23d2e2] rounded-full"></div>
                  <span className="text-[#3e3f5e] text-sm">{category}</span>
                </div>

                <button className="text-[#615dfa] text-sm hover:underline mb-4">
                  Full Screen View
                </button>
              </div>
              <div className="flex">
                <button className="flex-1 font-poppins text-[13px] font-semibold bg-[#615dfa] hover:bg-[#615dfa]/90 text-white text-sm py-2">
                  Add To Cart
                </button>
                <button className="flex-1 font-poppins text-[13px] font-semibold bg-[#23d2e2] hover:bg-[#23d2e2]/90 text-white text-sm py-2">
                  Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
