"use client";
import React, { useState } from "react";
import Image from "next/image";
import Section from "./layout/section";
interface SSProps {
  children?: React.ReactNode;
}

export default function HeroSection({}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative pb-10">
      {/* Background Image on Hover */}

      <img
        // width={500}
        // height={300}
        src="/static/cook.png" // Change this to your actual image path
        alt="Cooking"
        className={`absolute inset-0 tr top-[60%] left-[20%] brightness-110	 transform -translate-x-1/2 -translate-y-1/2 ${
          isHovered ? "opacity-100" : "opacity-0"
        }  transition-opacity duration-200 ease-in-out pointer-events-none w-[300px] h-auto z-20`}
      />

      <div className="h-20"></div>
      <h1 className=" w-[57%] font-normal ">
        <div className="flex flex-col  gap-8 lg:pr-32 text-primary-light ">
          <div className="">
            Hi, I&apos;m
            <span className="text-black"> Jiyoon</span>🌙 👋&nbsp;I&apos;m a{" "}
            <span className="text-black">designer</span> and{" "}
            <span className="text-black"> creative coder </span>
            based in New York. I create brands, websites, and interactive
            experiences.
          </div>

          <div className="">
            In my free time, I like to{" "}
            <a
              className="rounded text-neutral-900 underline-offset-4 decoration-teal-300 focus-visible:ring-4 focus-visible:ring-blue-200 focus:underline hover:underline"
              href="https://www.goodreads.com/review/list/174360248-jiyoon-moon"
            >
              read
            </a>
            ,&nbsp;
            <a
              className="rounded text-neutral-900 underline-offset-4 decoration-red-300 focus-visible:ring-4 focus-visible:ring-blue-200 focus:underline hover:underline"
              href="https://www.strava.com/athletes/107056147"
            >
              run
            </a>
            , and{" "}
            <span
              className="rounded text-neutral-900 underline-offset-4 decoration-amber-400 focus-visible:ring-4 focus-visible:ring-blue-200 focus:underline hover:underline cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              cook
            </span>
            .
          </div>
        </div>
      </h1>
    </div>
  );
}
