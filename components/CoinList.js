import Link from "next/link";
import React from "react";
import Footer from "./Footer";

const CoinList = ({
  name,
  image,
  current_price,
  price_change_percentage_24h,
  price_change_percentage_1h_in_currency,
  price_change_percentage_7d_in_currency,
  id,
}) => {
  const roundedPrice24 = (
    Math.round(price_change_percentage_24h * 100) / 100
  ).toFixed(2);

  const roundedPrice1 = (
    Math.round(price_change_percentage_1h_in_currency * 100) / 100
  ).toFixed(1);

  const roundedPrice7 = (
    Math.round(price_change_percentage_7d_in_currency * 100) / 100
  ).toFixed(1);
  return (
    <Link href={`coin/${id}`}>
      <a>
        <div className="w-full shadow-lg p-4 rounded-xl mt-5">
          <div className="flex items-center md:justify-between">
            <div className="w-1/2 flex items-center md:w-1/4">
              <img src={image} alt="crypto logo" className="w-10 h-10" />
              <h1 className="pl-4 text-lg font-medium">{name}</h1>
            </div>
            <div className="w-1/2 flex justify-end text-md font-semibold md:w-1/2">
              <h3 className="pr-5 ">${current_price}</h3>
              <h3
                className={
                  roundedPrice1 > 0
                    ? "text-green-500 pr-5"
                    : "text-red-500 pr-5"
                }
              >
                {Math.abs(roundedPrice1)}%
              </h3>
              <h3
                className={
                  roundedPrice24 > 0
                    ? "text-green-500 pr-5 hidden md:inline-block"
                    : "text-red-500 pr-5 hidden md:inline-block"
                }
              >
                {Math.abs(roundedPrice24)}%
              </h3>
              <h3
                className={
                  roundedPrice7 > 0
                    ? "text-green-500 hidden md:inline-block"
                    : "text-red-500 hidden md:inline-block"
                }
              >
                {Math.abs(roundedPrice7)}%
              </h3>
            </div>
            <div className="md:w-1/4 md:flex justify-end hidden">
              <Link href={`coin/${id}`}>
                <a>
                  <button className=" bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-700  text-white px-3 py-1 rounded-md">
                    Learn More!
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default CoinList;
