import React from 'react';

const Balance = ({ value }) => {
  return (
    <div className="bg-gradient-to-r from-slate-300 to-slate-600  text-white rounded-xl shadow-md p-6 m-4">
      <div className="text-center">
        <h2 className="text-xl text-black font-bold mb-2">Your Balance</h2>
        <div className="text-4xl font-bold ">
          ₹ {value.toLocaleString('en-IN')} 
        </div>
      </div>
    </div>
  );
};

export default Balance;