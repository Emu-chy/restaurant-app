"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { HiVideoCamera } from "react-icons/hi";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
// import Slider from "react-slick";
import Slider from "react-slick"
import { Transition, TransitionStatus } from "react-transition-group";

const duration = 300;

const defaultStyle = {
  transition: `all ${duration}ms ease-in-out`,
  opacity: 0,
  transform: `rotateX(270deg)`,
};

const transitionStyles = {
  entering: { opacity: 1, transform: `rotateX(360deg)` },
  entered: { opacity: 1, transform: `rotateX(360deg)` },
  exiting: { opacity: 0, transform: `rotateX(270deg)` },
  exited: { opacity: 0, transform: `rotateX(270deg)` },
};

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "https://img.freepik.com/free-photo/delicious-burger-with-many-ingredients-isolated-white-background-tasty-cheeseburger-splash-sauce_90220-1266.jpg?t=st=1721221604~exp=1721225204~hmac=a95fda89583d161515bed637d7b9491facb45c629ec86b8f9266e4114ee07f77&w=740",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "https://x-grouprestaurant.com/uploads/819d45d7daf46c4b3bb87933253cd12a.jpg",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "https://x-grouprestaurant.com/uploads/de35ecfa3bb28a1965b531e0cfac89a6.jpg",
  },
];

const HeroSlider = () => {



  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  // const [inProp, setInProp] = useState(false);
  // const nodeRef = useRef(null);
  // let sliderRef = useRef<Slider | null>(null);
  // const next = () => {
  //   sliderRef.current?.slickNext();
  // };
  // const previous = () => {
  //   sliderRef.current?.slickPrev();
  // };

  // const settings = {
  //   dots: false,
  //   fade: true,
  //   infinite: true,
  //   arrows: false,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   waitForAnimate: false,
  // };

  const images = [
    "https://x-grouprestaurant.com/uploads/de35ecfa3bb28a1965b531e0cfac89a6.jpg",
    "https://x-grouprestaurant.com/uploads/819d45d7daf46c4b3bb87933253cd12a.jpg",
    "https://x-grouprestaurant.com/uploads/99d17ef4dab0bc478d8991d864003e04.jpg",
    "https://x-grouprestaurant.com/uploads/ce7c64e22a1610659e3e9b9c52efd9ca.jpg",
  ];

  // useEffect(() => {
  //   const fade = setTimeout(() => {
  //     setInProp(true);
  //   }, 800);

  //   return () => {
  //     clearTimeout(fade);
  //   };
  // }, []);



  return (
   

    <>
      <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold">
        <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white py-4 px-8">Order Now</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="w-full flex-1 relative">
        <Image
          src={data[currentSlide].image} // Make sure this URL is correct
          alt=""
          layout="fill" // Ensures the image fills its container
          objectFit="cover" // Ensures the image covers the container
        />
      </div>
    </div>
    </>
  );
};

export default HeroSlider;







