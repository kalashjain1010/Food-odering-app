"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

function ProfilePage() {
  const session = useSession();
  const { status } = session;
  const [userName, setUserName] = useState("");
  const [saved, setSaved] = useState(false);
  const [saving, isSaving] = useState(false);

  useEffect(() => {
    if (status === "authenticated") {
      setUserName(session.data.user.name);
    }
  }, [session, status]);

  if (status === "loading") {
    return "loading .......";
  }

  if (status === "unauthenticated") {
    return redirect("/login");
  }

  const userImage = session?.data?.user?.image;
  // console.log("sdffds",userImage)

  async function handleProfileInfoUpdate(e) {
    setSaved(false);
    isSaving(true);
    e.preventDefault();
    const res = await fetch("/api/profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: userName }),
    });
    isSaving(false);
    setSaved(true);
  }

  async function handleFileChange(e) {
    const files = e.target.files;
    if (files?.length === 1) {
      const data = new FormData();
      data.set("file", files[0]);
      await fetch("/api/upload", {
        method: "POST",
        body: data,
        // headers: {'Content-Type': 'multipart/form-data'}
      });
    }
  }

  return (
    <section className="mt-8">
      <h1 className="text-center text-orange-500 text-4xl mb-4 ">Profile</h1>
      <div className="max-w-lg mx-auto ">
        {saved && (
          <>
            <div className="text-center bg-green-200 border border-green-300 py-4 my-3 rounded-lg ">
              Profile Saved!!
            </div>
          </>
        )}
        {saving && (
          <>
            <div className="text-center bg-blue-200 border border-blue-300 py-4 my-3 rounded-lg ">
              Saving...
            </div>
          </>
        )}
        <div className="flex gap-2 items-center">
          <div className="flex flex-col justify-center items-center ">
            <div className="w-20 h-20  flex items-center align-middle justify-center mb-2">
              <img src={userImage} alt="avatar" className="rounded-full" />
            </div>
           
          </div>
          <form className="grow" onSubmit={handleProfileInfoUpdate}>
            <input
              className=""
              type="text"
              placeholder="name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              className="cursor-not-allowed"
              disabled
              type="email"
              value={session?.data?.user?.email}
            />
            <button type="submit">submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ProfilePage;
