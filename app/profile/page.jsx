"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { useState } from "react";

function ProfilePage() {
  const session = useSession();
  const { status } = session;
  const [userName , setUserName] = useState(session?.data?.user?.name || '')

  if (status === "loading") {
    return "loading .......";
  }

  if (status === "unauthenticated") {
    return redirect("/login");
  }

  const userImage = session?.data?.user?.image;

  return (
    <section className="mt-8">
      <h1 className="text-center text-orange-500 text-4xl mb-4 ">Profile</h1>
      <form className="max-w-lg mx-auto ">
        <div className="flex gap-2 items-center">
          <div className="flex flex-col justify-center items-center ">
            <div className="w-20 h-20  flex items-center align-middle justify-center mb-2">
              <img src={userImage} alt="avatar" className="rounded-full" />
            </div>
            <div ><button className="text-sm max-w-xs whitespace-nowrap " type="button" > Change Image </button> </div>
          </div>
          <div className="grow">
            <input className="" type="text" placeholder="name" value={userName}  onChange={e=> setUserName(e.target.value)} />
            <input className="cursor-not-allowed" disabled type="email" value={session?.data?.user?.email}/>
            <button type="submit">submit</button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default ProfilePage;
