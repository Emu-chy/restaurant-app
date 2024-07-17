"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import { BiLockAlt, BiMenu } from 'react-icons/bi';
import { HiOutlinePhone } from 'react-icons/hi';
import { MdOutlineClose } from 'react-icons/md';
import { TbUserCircle } from 'react-icons/tb';
import { TfiEmail } from 'react-icons/tfi';

const MenuItems = () => {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="">
      <span className='text-3xl p-3 block cursor-pointer text-white' onClick={() => setShowMenu(!showMenu)}>
        <BiMenu />
      </span>

      <div className={`fixed flex flex-col justify-between top-0 max-w-sm w-full bg-slate-900 h-screen shadow-2xl transition-all duration-300 ${showMenu ? 'right-0' : '-right-full'}`}>
        <nav>
          <ul className="">
            <li className=''>
              <span onClick={() => setShowMenu(!showMenu)} className="font-bold text-2xl  flex justify-end px-8 py-3 hover:text-secondary hover:rounded-md transition-all duration-300">
                <MdOutlineClose />
              </span>
            </li>
            <li>
              <Link href="/" className="font-bold text-sm block px-8 py-3 hover:text-secondary hover:rounded-md transition-all duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="font-bold text-sm block px-8 py-3 hover:text-secondary hover:rounded-md transition-all duration-300">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/specialities" className="font-bold text-sm block px-8 py-3 hover:text-secondary hover:rounded-md transition-all duration-300">
                Specialities
              </Link>
            </li>
            <li>
              <Link href="/restaurants" className="font-bold text-sm block px-8 py-3 hover:text-secondary hover:rounded-md transition-all duration-300">
                Restaurant
              </Link>
            </li>
            <li>
              <Link href="/reservations" className="font-bold text-sm block px-8 py-3 hover:text-secondary hover:rounded-md transition-all duration-300">
                Reservation
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="font-bold text-sm block px-8 py-3 hover:text-secondary hover:rounded-md transition-all duration-300">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/career" className="font-bold text-sm block px-8 py-3 hover:text-secondary hover:rounded-md transition-all duration-300">
                Career
              </Link>
            </li>
            <li>
              <Link href="/career" className="font-bold text-sm block px-8 py-3 hover:text-secondary hover:rounded-md transition-all duration-300">
                <span className="flex items-center gap-2 w-full h-10 ">
                  <TbUserCircle className="text-lg" />
                  Become A Member
                </span>
              </Link>
            </li>
            <li>
              <Link href="/register" className="font-bold text-sm block px-8 py-3 hover:text-secondary hover:rounded-md transition-all duration-300">
                <span className="flex items-center gap-2">
                  <BiLockAlt className="text-lg" />
                  Sign Up
                </span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className='p-8'>
          <div className="flex gap-1 items-center ">
            <TfiEmail className="text-xs" />
            <Link href="mailto:admin@x-grouprestaurant.com" className="text-xs">admin@x-grouprestaurant.com</Link>
          </div>
          <div className="flex gap-1 items-center mt-3">
            <HiOutlinePhone className="text-xs" />
            <Link href="tel:01755636335" className="text-xs">01755636335,</Link>
            <Link href="tel:01755636304" className="text-xs">01755636304</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuItems