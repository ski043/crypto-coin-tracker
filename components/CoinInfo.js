import Link from "next/link";
import React from "react";

const CoinInfo = ({ coin }) => {
  const roundedPrice1d = (
    Math.round(coin.market_data.price_change_percentage_24h * 100) / 100
  ).toFixed(1);
  return (
    <div className="mt-10">
      <p className="bg-gray-500 inline-block text-white px-3 rounded-md text-lg">
        Rank: {coin.market_cap_rank}
      </p>
      <div className="flex items-center mt-4">
        <img src={coin.image.small} alt="coin logo" />
        <h1 className="text-4xl font-semibold pl-4">{coin.name}</h1>
      </div>
      <div className="flex mt-6 items-baseline">
        <h1 className="text-5xl font-bold ">
          ${coin.market_data.current_price.usd}
        </h1>
        <p
          className={
            "text-3xl font-semibold pl-6 " +
            (roundedPrice1d > 0 ? "text-green-500" : "text-red-500")
          }
        >
          {roundedPrice1d}%
        </p>
      </div>
      <div className="flex flex-col mt-10">
        <div className="flex justify-between border-b-2 mb-3">
          <h3 className="text-lg text-gray-500">Market Cap:</h3>
          <h3 className="text-lg pb-1 font-medium">
            ${coin.market_data.market_cap.usd}
          </h3>
        </div>
        <div className="flex justify-between border-b-2 mb-3">
          <h3 className="text-lg text-gray-500">Fully Diluted Valuation:</h3>
          <h3 className="text-lg pb-1 font-medium">
            {coin.market_data.fully_diluted_valuation.usd == null
              ? "Infinte"
              : "$" + coin.market_data.fully_diluted_valuation.usd}
          </h3>
        </div>
        <div className="flex justify-between border-b-2 mb-3">
          <h3 className="text-lg text-gray-500">Circulating Supply:</h3>
          <h3 className="pb-1 text-lg font-medium">
            {coin.market_data.circulating_supply}
          </h3>
        </div>
        <div className="flex justify-between border-b-2 mb-3">
          <h3 className="text-lg text-gray-500">Max Supply:</h3>
          <h3 className="text-lg pb-1 font-medium">
            {coin.market_data.max_supply == null
              ? "Infinite"
              : coin.market_data.max_supply}
          </h3>
        </div>
      </div>
      <div className="w-full flex justify-center mt-10">
        <Link href={coin.links.homepage[0]}>
          <a>
            <button className="bg-teal-400 text-white text-2xl font-medium py-2 rounded-lg px-6 hover:bg-teal-500 duration-200">
              Learn more
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CoinInfo;
