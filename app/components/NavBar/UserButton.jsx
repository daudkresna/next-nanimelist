import Link from "next/link";
import React from "react";
import { userSession } from "@/app/libs/auth-libs";

const UserButton = async () => {
  const user = await userSession();
  const action = user ? "SIGN OUT" : "SIGN IN";
  const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin";
  return (
    <div className="flex gap-4 items-center">
      <Link href="/user/dashboard" className="font-bold text-neutral-200 ">
        Dashboard
      </Link>
      <Link
        href={actionUrl}
        className="bg-neutral-200 text-sm font-bold p-2 rounded-lg text-black transition duration-300 ease-in-out hover:text-sky-600"
      >
        {action}
      </Link>
    </div>
  );
};

export default UserButton;
