import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-emerald-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            {/*  <Logo /> */}
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/home">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href="/register">
                  <p>Register</p>
                </Link>
              </li>
              <li>
                <Link href="/admin">
                  <p>Admin</p>
                </Link>
              </li>
              <li>
                <Link href="/wiki">
                  <p>Wiki</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
