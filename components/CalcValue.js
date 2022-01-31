import React from "react";

const CalcValue = ({ coin }) => {
  return (
    <div className="flex flex-col p-5 bg-gray-200 rounded-lg mt-10 lg:w-1/2 mx-auto">
      <div className="mb-5">
        <input
          type="text"
          placeholder="USD"
          className="w-full p-4 rounded-lg"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder={coin.name}
          className="w-full p-4 rounded-lg"
        />
      </div>
    </div>
  );
};

export default CalcValue;
