import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-between mt-16">
      <button className="border-gray-300 py-1 px-3 rounded-lg border-2 text-lg font-semibold hover:bg-gray-50">
        Previous
      </button>
      <button className="border-gray-300 py-1 px-3 rounded-lg border-2 text-lg font-semibold hover:bg-gray-50">
        Next
      </button>
    </div>
  );
};

export default Pagination;
