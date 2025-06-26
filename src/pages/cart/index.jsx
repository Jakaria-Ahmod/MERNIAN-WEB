import React from 'react';
import StoreBanner from '../../globalComponents/storeBanner';
import { ChevronUp, ChevronDown, Trash2 } from 'lucide-react';
import { Link } from 'react-router';

const Card = () => {
  const data = [1, 2, 3];
  return (
    <div className="mb-[100px]">
      <div>
        <StoreBanner></StoreBanner>
        <div>
          <div className="mt-[23px] mb-[13px]">
            <p className="text-colorTwo font-poppins text-sm font-normal">
              BROWSE YOUR
            </p>
            <h3 className="text-[#24234B] font-poppins text-[24px] font-normal">
              Shopping cart 3
            </h3>
          </div>
          <div className="w-[665px] flex gap-x-[362px]">
            <div>
              <span className="text-balck font-poppins text-[15px] font-medium">
                ITEM
              </span>
            </div>
            <div className="flex gap-x-[133px]">
              <span className="text-balck font-poppins text-[15px] font-medium">
                QUANTITY
              </span>
              <span className="text-balck font-poppins text-[15px] font-medium">
                PRICE
              </span>
            </div>
          </div>
          <div className="flex gap-x-[15px] mt-[10px]">
            <div>
              {data.map(item => (
                <div className="w-[884px] mt-[15px]">
                  <div className="flex px-[20px] items-center gap-x-[123px] p-4 bg-white rounded-lg max-w-4xl">
                    {/* Product Icon */}
                    <div className="flex gap-x-[23px]">
                      <div className="w-20 h-16 bg-[#615dfa] rounded-xl flex-shrink-0"></div>

                      {/* Product Info */}
                      <div className="flex-1">
                        <h3 className="text-[#000000] font-medium text-lg">
                          Twitch stream ui pack
                        </h3>
                        <p className="text-[#3e3f5e] text-sm">Stream packs</p>
                        <p className="text-[#afb0c0] text-sm">ABM shawn</p>
                      </div>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex w-[432px] items-center justify-between">
                      <div className="flex flex-col items-center border border-[#d9d9d9] rounded-lg overflow-hidden">
                        <button className="h-8 w-12 flex items-center justify-center hover:bg-gray-100">
                          <ChevronUp className="h-4 w-4 text-[#3e3f5e]" />
                        </button>
                        <div className="px-4 py-1 text-[#000000] font-medium">
                          1
                        </div>
                        <button className="h-8 w-12 flex items-center justify-center hover:bg-gray-100">
                          <ChevronDown className="h-4 w-4 text-[#3e3f5e]" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-[#23d2e2] font-semibold text-xl px-4">
                        $ 12.00
                      </div>

                      {/* Delete Button */}
                      <button className="w-10 h-10 bg-[#ea5050] hover:bg-[#d54343] rounded-full flex items-center justify-center">
                        <Trash2 className="h-5 w-5 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="max-w-6xl mx-auto p-6 w-[884px] rounded-md bg-white shadow-2xl mt-[23px]">
                <div className="flex items-center justify-between gap-8 flex-wrap">
                  <div className="flex-1 min-w-[250px]">
                    <p className="text-[#afb0c0] text-lg">
                      If you have promotional or a discount code, please enter
                      it right here to redeem it.
                    </p>
                  </div>
                  <div className="flex items-center gap-4 flex-wrap">
                    <input
                      type="text"
                      placeholder="Promo code"
                      className="w-[217px] h-12 rounded-2xl border-2 border-[#d9d9d9] bg-white placeholder-[#afb0c0] text-base px-6 focus:outline-none focus:ring-2 focus:ring-[#615dfa]"
                    />
                    <button className="h-12 px-8 rounded-2xl bg-[#615dfa] hover:bg-[#5048e8] text-white font-medium text-base">
                      Redeem code
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="w-[288px] h-[480px] shadow-2xl bg-white rounded-md mt-[15px] py-[29px] px-[26px]">
                <h3 className="text-black font-poppins text-[17px] font-medium">
                  Order totals
                </h3>
                <h5 className="mt-[15px] text-center">
                  <span className="font-poppins text-[49px] font-medium text-colorFive">
                    $
                  </span>
                  <span className="text-balck font-poppins text-[49px] font-medium">
                    39.00
                  </span>
                </h5>
                <div className="mt-[49px]">
                  <div className="flex justify-between ">
                    <span className="font-poppins text-[12px] font-medium text-colorTwo">
                      Cart(3)
                    </span>
                    <h3>
                      <span className="font-poppins text-colorFive text-[12px] font-medium">
                        $
                      </span>
                      <span className="font-poppins text-black text-[12px] font-medium">
                        44.00
                      </span>
                    </h3>
                  </div>
                  <div className="flex justify-between mt-[11px]">
                    <span className="font-poppins text-[12px] font-medium text-colorTwo">
                      Code
                    </span>
                    <h3>
                      <span className="font-poppins text-colorFive text-[12px] font-medium">
                        - $
                      </span>
                      <span className="font-poppins text-black text-[12px] font-medium">
                        15.00
                      </span>
                    </h3>
                  </div>
                  <div className="flex justify-between mt-[11px]">
                    <span className="font-poppins text-[12px] font-medium text-colorTwo">
                      Total
                    </span>
                    <h3>
                      <span className="font-poppins text-colorFive text-[12px] font-medium">
                        $
                      </span>
                      <span className="font-poppins text-black text-[12px] font-medium">
                        39.00
                      </span>
                    </h3>
                  </div>
                </div>
                <div className="mt-[53px]">
                  <Link to="/profile/checkout">
                    <button className="w-[228px] py-[15px] px-[45px] bg-[#23D2E2] text-white font-poppins text-[12px] font-medium rounded-[15px] cursor-pointer">
                      Proccecd to checkout
                    </button>
                  </Link>
                  <button className="mb-[52px] w-[228px] mt-[10px] py-[15px] px-[45px] bg-white text-[#AFB0C0] border border-borderColor font-poppins text-[12px] font-medium rounded-[15px] cursor-pointer">
                    Update cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
