import React from 'react';

import { useState } from 'react';
const PaymentCart = () => {
  const [paymentMethod, setPaymentMethod] = useState('paypal');
  return (
    <div>
      <div>
        <div className="max-w-md mx-auto bg-white p-6 min-h-screen">
          {/* Header */}
          <h1 className="text-2xl font-semibold text-black mb-8">
            Order Summary
          </h1>

          {/* Order Items */}
          <div className="space-y-6 mb-8">
            {[1, 2, 3, 4].map(item => (
              <div key={item} className="flex justify-between items-center">
                <span className="text-[#45437f] text-lg">
                  Twitch stream ui pack
                </span>
                <span className="text-[#23d2e2] text-lg font-medium">
                  $44.00
                </span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-[#afb0c0] mb-6"></div>

          {/* Cart Summary */}
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-[#afb0c0] text-lg">Cart(3)</span>
              <span className="text-[#23d2e2] text-lg font-medium">$44.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#afb0c0] text-lg">Code</span>
              <span className="text-[#23d2e2] text-lg font-medium">
                - $15.00
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#afb0c0] text-lg">Total</span>
              <span className="text-[#23d2e2] text-lg font-medium">$39.00</span>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#afb0c0] mb-8"></div>

          {/* Large Total */}
          <div className="text-center mb-8">
            <div className="text-6xl font-bold">
              <span className="text-[#23d2e2]">$</span>
              <span className="text-black">39.00</span>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#afb0c0] mb-8"></div>

          {/* Payment Method */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-6">
              Payment Method
            </h2>

            <div className="space-y-6">
              {/* Paypal Option */}
              <div className="flex items-start space-x-3">
                <input
                  type="radio"
                  id="paypal"
                  value="paypal"
                  checked={paymentMethod === 'paypal'}
                  onChange={e => setPaymentMethod(e.target.value)}
                  className="mt-1 accent-[#23d2e2] w-5 h-5"
                />
                <div className="flex-1">
                  <label
                    htmlFor="paypal"
                    className="text-lg font-medium text-black cursor-pointer"
                  >
                    Paypal
                  </label>
                  <p className="text-[#afb0c0] text-sm mt-1">
                    Pay with your paypal balance or connected bank account. It’s
                    quick and really secure.
                  </p>
                </div>
              </div>

              {/* Card Option */}
              <div className="flex items-center space-x-3">
                <input
                  type="radio"
                  id="card"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={e => setPaymentMethod(e.target.value)}
                  className="accent-[#23d2e2] w-5 h-5"
                />
                <label
                  htmlFor="card"
                  className="text-lg font-medium text-black cursor-pointer"
                >
                  Credit or Debit card
                </label>
              </div>
            </div>
          </div>

          {/* Button */}
          <button className="w-full bg-[#23d2e2] hover:bg-[#23d2e2]/90 text-white text-lg py-6 rounded-2xl font-medium transition duration-200">
            Complete order !
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentCart;
