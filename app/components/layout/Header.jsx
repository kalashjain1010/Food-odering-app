import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="flex justify-between items-center">
      <div className="text-orange-500 font-semibold text-2xl">
        <Link href={"/"}>La pilano</Link>
      </div>
      <div className="flex gap-6 items-center">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>About</Link>
        <Link href={"/"}>Menu</Link>
        <Link href={"/"}>Contact</Link>
      </div>
      <div className="flex gap-x-2">
        <Link href={"/login"}>
          <button className="px-4 py-1 font-semibold ">
            Login
          </button>
        </Link>
        <Link href={"/register"}>
          <button className="px-4 py-1  bg-orange-500 rounded-full text-white font-semibold">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
