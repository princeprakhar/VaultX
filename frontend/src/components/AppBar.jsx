import React from 'react';

const AppBar = () => {
  return (
    <div className="shadow mt-3 mx-4 rounded-xl h-14 flex justify-between items-center px-4 bg-white">
      <div className="text-black font-extrabold text-xl">VaultX</div>
      <div className="flex items-center">
        <div className="text-black mr-4 hidden sm:block">Hello, User</div>
        <div className="bg-gray-200 text-black rounded-full h-10 w-10 flex items-center justify-center">
          <span className="text-xl">U</span>
        </div>
      </div>
    </div>
  );
};

export default AppBar;