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

const HeroSlider = () => {
  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null);
  let sliderRef = useRef<Slider | null>(null);
  const next = () => {
    sliderRef.current?.slickNext();
  };
  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };

  const images = [
    "https://x-grouprestaurant.com/uploads/de35ecfa3bb28a1965b531e0cfac89a6.jpg",
    "https://x-grouprestaurant.com/uploads/819d45d7daf46c4b3bb87933253cd12a.jpg",
    "https://x-grouprestaurant.com/uploads/99d17ef4dab0bc478d8991d864003e04.jpg",
    "https://x-grouprestaurant.com/uploads/ce7c64e22a1610659e3e9b9c52efd9ca.jpg",
  ];

  useEffect(() => {
    const fade = setTimeout(() => {
      setInProp(true);
    }, 800);

    return () => {
      clearTimeout(fade);
    };
  }, []);

  return (
    // <div className="home-slider">
    //   <div className="slider-container relative">
    //     <Slider ref={sliderRef} {...settings}>
    //       {images.map((image, index) => (
    //         <div key={index} className="w-full h-[calc(100vh-140px)]">
    //           <Image alt="x-group" width={0} height={0} sizes="100vw" className="w-full h-full object-cover" src={image} />
    //           <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-black bg-opacity-40">
    //             <div className="px-5 md:px-0">
    //               <Transition nodeRef={nodeRef} in={inProp} timeout={duration}>
    //                 {(state: TransitionStatus) => (
    //                   <div
    //                     ref={nodeRef}
    //                     style={{
    //                       ...defaultStyle,
    //                       //@ts-ignore
    //                       ...transitionStyles[state],
    //                     }}
    //                   >
    //                     <span className="text-3xl lg:text-6xl font-extra-bold font-signature inline-block mb-2 text-white">Welcome To</span>
    //                   </div>
    //                 )}
    //               </Transition>
    //               <Transition nodeRef={nodeRef} in={inProp} timeout={duration}>
    //                 {(state: TransitionStatus) => (
    //                   <div
    //                     ref={nodeRef}
    //                     style={{
    //                       ...defaultStyle,
    //                       //@ts-ignore
    //                       ...transitionStyles[state],
    //                     }}
    //                   >
    //                     <h2 className="font-bold text-2xl lg:text-4xl uppercase mb-3 text-white">
    //                       <span className="bg-primary px-2 rounded-lg">X-group</span> Chain Restaurant & Hospitality Managment
    //                     </h2>
    //                   </div>
    //                 )}
    //               </Transition>
    //               <Transition nodeRef={nodeRef} in={inProp} timeout={duration}>
    //                 {(state: TransitionStatus) => (
    //                   <div
    //                     ref={nodeRef}
    //                     style={{
    //                       ...defaultStyle,
    //                       //@ts-ignore
    //                       ...transitionStyles[state],
    //                     }}
    //                   >
    //                     <div className="flex gap-3">
    //                       <Link
    //                         href="#"
    //                         className="w-max h-10 px-4 z-0 flex items-center text-sm text-white font-medium uppercase bg-primary rounded-md shadow-lg"
    //                       >
    //                         Get Reservation
    //                       </Link>
    //                       {/* <Link
    //                         href="#"
    //                         className="uppercase inline-block border-2 px-5 py-2 overflow-hidden relative before:absolute before:-z-10 before:w-0 before:h-0 before:inset-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-primary hover:before:w-[100%] hover:before:h-[100%] before:transition-all before:duration-300 text-sm font-medium tracking-widest text-white"
    //                       >
    //                         Get Reservation
    //                       </Link> */}
    //                       <div className="flex gap-2 items-center overflow-hidden cursor-pointer border relative px-3 pl-0 rounded-full before:absolute before:left-0 before:w-0 before:h-full hover:before:w-full before:-z-10 before:rounded-full before:bg-secondary before:transition-all before:duration-300 text-white">
    //                         <span className="flex w-8 h-8 bg-secondary rounded-full items-center justify-center">
    //                           <HiVideoCamera />
    //                         </span>
    //                         <span className="text-sm font-medium">Watch Video</span>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 )}
    //               </Transition>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </Slider>
    //     <div className="absolute inset-1/2 w-full -translate-x-1/2">
    //       <button className="button left-0 lg:left-5 absolute opacity-55 hover:opacity-100 text-white" onClick={previous}>
    //         <MdArrowBackIos size={40} />
    //       </button>
    //       <button className="button right-0 lg:right-5 absolute opacity-55 hover:opacity-100 text-white" onClick={next}>
    //         <MdArrowForwardIos size={40} />
    //       </button>
    //     </div>
    //   </div>
    // </div>

    <>
     <div className="min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Text content section */}
          <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
            <h4
              data-aos="fade-up"
              data-aos-once="true"
              className="text-5xl sm:text-6xl lg:text-4xl font-bold"
            >
               <span className="bg-primary px-2 rounded-lg">X-group</span> Chain Restaurant & Hospitality Managment
              
            </h4>
            <div data-aos="fade-up" data-aos-delay="400">
              <button className="bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                Online Order
              </button>
            </div>
          </div>
          {/* Image section */}
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2"
          >
            <img
              data-aos-once="true"
              src="https://x-grouprestaurant.com/uploads/de35ecfa3bb28a1965b531e0cfac89a6.jpg"
              alt="Coffee"
              className="w-[250px] sm:w-[350px] sm:scale-125 mx-auto spin"
            />
            <div
              data-aos="fade-left"
              className="bg-gradient-to-r from-primary to-secondary p-3 rounded-xl absolute top-10 left-10"
            >
              {/* <h1 className="text-white">Hey Coder</h1> */}
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="0"
              className="bg-gradient-to-r from-primary to-secondary p-3 rounded-xl absolute bottom-10 right-10"
            >
              {/* <h1 className="text-white">Best Coffee</h1> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default HeroSlider;
