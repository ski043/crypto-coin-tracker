import Head from "next/head";
import CoinList from "../components/CoinList";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";

export default function Home({ coins }) {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-5">
        <h2 className="text-black text-3xl font-semibold my-10">
          Top 100 Crypto Coins
        </h2>
        {coins.map((value) => (
          <CoinList {...value} key={value.id} />
        ))}
      </div>
      <Pagination />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=7d%2C24h%2C1h"
  );
  const coins = await res.json();

  return {
    props: {
      coins,
    },
  };
}
