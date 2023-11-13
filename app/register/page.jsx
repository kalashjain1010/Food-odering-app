import Image from "next/image";
import Link from "next/link";
import React from "react";

function RegisterPage() {
  return (
    <div className="mt-10">
      <div>
        <h1 className="text-3xl font-semibold text-center text-orange-500 ">
          Register
        </h1>
        <form className="block mt-5 max-w-xs mx-auto">
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button type="submit">Register</button>
          <div className="my-4 text-center text-gray-500">
            or login with provider
          </div>
          <button className="flex gap-4 justify-center">
            <Image src={"/google.png"} alt={""} width={24} height={24} />
            Login with google
          </button>
          <div className="text-center my-4 text-gray-500 border-t pt-4">
            Existing account?{" "}
            <Link className="underline" href={"/login"}>
              Login here &raquo;
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
