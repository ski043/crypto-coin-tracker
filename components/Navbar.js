import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-teal-400">
      <div className="container p-5 mx-auto">
        <Link href={"/"}>
          <a>
            <h1 className="text-white text-2xl font-medium text-center">
              Coin Tracker 🚀
            </h1>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
