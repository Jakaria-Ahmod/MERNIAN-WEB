import React from 'react';
import Menubar from './components/menubar';
import CartAndNotifiacation from './components/cartAndNotiafication';
import SharchBar from './components/sharchBar';

const HederComponets = () => {
  return (
    <header>
      <nav>
        <div className="bg-colorOne fixed z-[99999] top-0 left-0 w-full flex justify-between gap-x-[73px] py-[20px] px-[24px] items-center font-poppins">
          <Menubar></Menubar>
          <SharchBar></SharchBar>
          <CartAndNotifiacation></CartAndNotifiacation>
        </div>
      </nav>
    </header>
  );
};

export default HederComponets;
