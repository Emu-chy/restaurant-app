import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiLockAlt } from "react-icons/bi";
import { HiOutlinePhone } from "react-icons/hi";
import { TbUserCircle } from "react-icons/tb";
import { TfiEmail } from "react-icons/tfi";
import Menu from "./menu";


const Header = () => {
  return (
    <>
      {/* <div className="top-header bg-secondary h-10 w-full z-50 hidden lg:block">
        <div className="px-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-xs gap-3">
              <span className="flex gap-1 items-center ">
                <TfiEmail className="text-sm" />
                <Link href="mailto:admin@x-grouprestaurant.com">admin@x-grouprestaurant.com</Link>
              </span>
              <span className="flex gap-1 items-center ">
                <HiOutlinePhone className="text-sm" />
                <Link href="tel:01755636335">01755636335,</Link>
                <Link href="tel:01755636304">01755636304</Link>
              </span>
            </div>
            <div className="flex items-center text-xs gap-3">
              <Link href="#">
                <span className="flex items-center gap-2 w-full h-10 px-3 bg-secondary">
                  <TbUserCircle className="text-lg" />
                  Become A Member
                </span>
              </Link>
              <Link href="/register">
                <span className="flex items-center gap-2">
                  <BiLockAlt className="text-lg" />
                  Sign Up
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div> */}
      <Menu/>
    </>
  );
};

export default Header;
