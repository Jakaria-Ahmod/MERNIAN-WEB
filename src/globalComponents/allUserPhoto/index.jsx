import React from 'react';
import jakariaImg from '../../assets/img/jakaria.jpg';
const AllUserPhoto = () => {
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div>
      <div className="h-screen shadow-2xl">
        <div className="w-[80px] bg-white">
          {a.map(item => (
            <div className="w-[40px] h-[40px] rounded-full overflow-hidden bg-colorFour mx-auto my-[10px] cursor-pointer">
              <img
                src={jakariaImg}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllUserPhoto;
