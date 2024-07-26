"use client"

import Image from "next/image";
import heroLogo from '@/assets/images/hero-section-image.png'
import { Roboto } from 'next/font/google'
import React from "react";
import TextAnimation from "../TextAnimation";


const roboto = Roboto({subsets:["latin"],weight:"700"})

const HeroSection = ():React.JSX.Element => {
  return (
    <div className="py-4 w-full flex md:flex-row flex-col md:justify-between justify-center items-center ">
      <div className="bg h-full w-full absolute top-0 right-0 z-[-1] opacity-45"></div>
      <div className={`flex flex-col gap-4 md:gap-6`}>
        <h1 className={`${roboto.className} text-2xl md:text-5xl text-orange-500`}>BUSKAN</h1>
        <TextAnimation className="text-xl md:text-4xl"/>
        <p className="max-w-[700px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, doloribus ea deserunt nostrum laudantium voluptate nesciunt officiis dolorem nihil delectus consequuntur blanditiis exercitationem. Enim obcaecati amet veniam fuga ex. Consequatur.</p>
      </div>
      <Image src={heroLogo} alt="image" className=""/>
    </div>
  );
};

export default HeroSection;
