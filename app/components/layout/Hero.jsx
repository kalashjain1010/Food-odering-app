import Image from "next/image";
import React from "react";
import Righticon from "../icons/Righticon";

function Hero() {
  return (
    <div className="flex justify-between mt-20">
      <div>
        <div className="text-6xl">
          Everything you <br /> want is
          <span className="text-orange-500"> pizza</span>
        </div>
        <div className="w-2/3 mt-5 z-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          voluptatum quis nihil provident libero earum, cumque perspiciatis
          enim, reiciendis, magnam dolores. Ad, incidunt! Officiis architecto ut
          fuga earum minus! Aliquid.
        </div>
        <div className="flex mt-2  ">
          <button className="flex text-white items-center bg-orange-500 rounded-full px-10 py-2 z-50 hover:justify-between ">
            <div className="flex flex-nowrap">Order Now</div>
            <div><Righticon /></div>
          </button>
          <button className="flex items-center rounded-full px-4 py-2">
            Learn more
            <Righticon />
          </button>
        </div>
      </div>
      <div className=" pr-20">
        <Image src={"/pizza.png"} height={"600"} width={"800"} />
      </div>
    </div>
  );
}

export default Hero;
