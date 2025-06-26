import React from 'react';

const PaymentForm = () => {
  return (
    <div>
      <div>
        <form
          action=""
          className="p-[32px] bg-white shadow-[30px] rounded-[15px]"
        >
          <h2>Billing Details</h2>

          <div className="mt-[32px]">
            <div className="flex gap-x-[15px] ">
              <div>
                <input
                  type="text"
                  placeholder="First name"
                  className="border border-borderColor rounded-[15px] px-[22px] py-[14px] w-[354px] outline-none"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last name"
                  className="border border-borderColor rounded-[15px] px-[22px] py-[14px] w-[354px] outline-none"
                />
              </div>
            </div>
            <div className="flex gap-x-[15px] mt-[22px]">
              <div>
                <input
                  type="Email"
                  placeholder="Email"
                  className="border border-borderColor rounded-[15px] px-[22px] py-[14px] w-[354px] outline-none"
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Phone number"
                  className="border border-borderColor rounded-[15px] px-[22px] py-[14px] w-[354px] outline-none"
                />
              </div>
            </div>
            <div>
              <div className="mt-[22px]">
                <input
                  type="text"
                  placeholder="Full address"
                  className="border border-borderColor rounded-[15px] px-[22px] py-[14px] w-full outline-none"
                />
              </div>
            </div>
            <div className="flex gap-x-[15px] mt-[22px]">
              <div>
                <input
                  type="New York"
                  placeholder="text"
                  className="border border-borderColor rounded-[15px] px-[22px] py-[14px] w-[354px] outline-none"
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="ZIP Code"
                  className="border border-borderColor rounded-[15px] px-[22px] py-[14px] w-[354px] outline-none"
                />
              </div>
            </div>
            <div className="mt-[22px]">
              <textarea
                name=""
                id=""
                placeholder="Write any additional details here..."
                className="resize-none outline-none w-full h-[160px] border border-borderColor rounded-[15px] px-[22px] py-[14px]"
              ></textarea>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
