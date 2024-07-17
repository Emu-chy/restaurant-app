import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiMenu } from 'react-icons/bi'
import MenuItems from './menuItems'

const Menu = () => {
  return (
    <>
      <div className="hidden lg:block header sticky top-0 bg-white w-full z-50 shadow-2xl">
        <div className="h-[100px] flex items-center justify-between">
          <div className="bg-primary w-96 h-full pl-5 flex items-center relative before:absolute before:top-0 before:-right-[121px] before:bg-white before:w-40 before:h-40 before:rotate-[35deg] overflow-hidden">
            <Link href={"/"}>
              <Image src={"https://x-grouprestaurant.com/uploads/16d393d0214287d79afdd3b28e5a069f.png"} alt="Logo" width={230} height={98} />
            </Link>
          </div>
          <div className="text-primaryText">
            <nav>
              <ul className="flex items-center gap-2">
                <li>
                  <Link href="/" className="font-bold text-sm block px-4 py-2 hover:text-secondary hover:rounded-md transition-all duration-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="font-bold text-sm block px-4 py-2 hover:text-secondary hover:rounded-md transition-all duration-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/specialities" className="font-bold text-sm block px-4 py-2 hover:text-secondary hover:rounded-md transition-all duration-300">
                    Specialities
                  </Link>
                </li>
                <li>
                  <Link href="/restaurants" className="font-bold text-sm block px-4 py-2 hover:text-secondary hover:rounded-md transition-all duration-300">
                    Restaurant
                  </Link>
                </li>
                <li>
                  <Link href="/reservations" className="font-bold text-sm block px-4 py-2 hover:text-secondary hover:rounded-md transition-all duration-300">
                    Reservation
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="font-bold text-sm block px-4 py-2 hover:text-secondary hover:rounded-md transition-all duration-300">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/career" className="font-bold text-sm block px-4 py-2 hover:text-secondary hover:rounded-md transition-all duration-300">
                    Career
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="block lg:hidden header sticky top-0 bg-primary w-full z-50 shadow-2xl">
        <div className="h-[100px] flex items-center justify-between">
          <div className="bg-primary w-80 h-full pl-5 flex items-center">
            <Link href={"/"}>
              <Image src={"https://x-grouprestaurant.com/uploads/16d393d0214287d79afdd3b28e5a069f.png"} alt="Logo" width={230} height={98} />
            </Link>
          </div>
          <MenuItems />
        </div>
      </div>
    </>
  )
}

export default Menu



