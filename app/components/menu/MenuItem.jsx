import React from "react";
import Righticon from "../icons/Righticon";

function MenuItem() {
  return (
    <div>
      <div className="bg-gray-200 h-auto w-11/12 p-3 rounded-md hover:bg-white hover:shadow-xl cursor-default transition-all ">
        <div className="h-1/3 w-1/3 italic flex justify-center text-center mx-auto">
          <img src="/pizza.png" alt="pizza img" />
        </div>
        <div className=" flex mx-auto justify-center text-2xl font-bold mt-3">
          Pizza
        </div>
        <div className="flex mt-4 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quibusdam
          adipisci perspiciatis ver praesentium!
        </div>
        <div className="mt-5 mb-2">
          <button className="flex text-center mx-auto bg-orange-500 text-white px-6 py-2 rounded-full ">
            add to cart $12
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
