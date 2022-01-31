import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex w-full bg-gray-200 p-3 justify-center mt-10 ">
      <h1>
        <Link href={"https://github.com/ski043"}>
          <a className="text-xl hover:underline">Link to my Github</a>
        </Link>
      </h1>
    </div>
  );
};

export default Footer;
