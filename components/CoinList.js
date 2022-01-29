import React from "react";

const CoinList = ({
  name,
  image,
  current_price,
  price_change_percentage_24h,
}) => {
  const roundedPrice = (
    Math.round(price_change_percentage_24h * 100) / 100
  ).toFixed(2);
  return (
    <div className="w-full shadow-lg p-4 rounded-xl mt-5">
      <div className="flex items-center">
        <div className="w-1/2 flex items-center">
          <img src={image} alt="crypto logo" className="w-10 h-10" />
          <h1 className="pl-4 text-lg font-medium">{name}</h1>
        </div>
        <div className="w-1/2 flex justify-end text-md  font-semibold">
          <h3 className="pr-5 ">€{current_price}</h3>
          <h3 className={roundedPrice > 0 ? "text-green-500" : "text-red-500"}>
            {roundedPrice}%
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CoinList;
