import React from 'react';
import StoreBanner from '../../globalComponents/storeBanner';
import PaymentHeding from './components/Heding';
import PaymentForm from './components/form';
import PaymentCart from './components/paymentCart';

const CheckOut = () => {
  return (
    <div>
      <div className="mb-[100px]">
        <StoreBanner></StoreBanner>
        <PaymentHeding></PaymentHeding>
        <div className="flex gap-x-[15px] mt-[25px]">
          <div className="w-[784px]">
            <PaymentForm></PaymentForm>
          </div>
          <div className="w-[384px]">
            <PaymentCart></PaymentCart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
