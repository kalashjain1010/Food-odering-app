"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function handleFormSubmit(e){
   e.preventDefault();
   fetch('/api/register', {
    method: 'POST',
    body: JSON.stringify({email,pass}),
    headers: {'Content-Type': 'application/json'},
   })     
  }
  return (
    <div className="mt-10">
      <div>
        <h1 className="text-3xl font-semibold text-center text-orange-500 ">
          Register
        </h1>
        <form className="block mt-5 max-w-xs mx-auto" onSubmit={handleFormSubmit} >
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
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
