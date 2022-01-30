import React from "react";
import CoinInfo from "../../components/CoinInfo";
import Navbar from "../../components/Navbar";

const coin = ({ coin }) => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-5 ">
        <CoinInfo coin={coin} />
      </div>
      {console.log(coin)}
    </>
  );
};

export default coin;

export async function getStaticPaths() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=7d%2C24h%2C1h"
  );
  const coins = await res.json();

  const paths = coins.map((coin) => `/coin/${coin.id}`);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${context.params.id}`
  );
  const coin = await res.json();

  return {
    props: {
      coin,
    },
  };
}
