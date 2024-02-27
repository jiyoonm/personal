"use client";
import Link from "next/link";

import { useState } from "react";
import Image from "next/image";

export default function ProjectListItem({ info }) {
  const [isHovered, setIsHovered] = useState(false);
  // Function to handle mouse enter/leave on the content area, not the image
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  return (
    <Link href={`/project/${info.id}`} className="">
      <div className=" border-t border-gray-600  relative">
        <div
          className={`flex flex-row py-7 justify-between group ${
            isHovered ? "bg-black bg-opacity-5" : ""
          } `}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h4
            className={`pl-4 text-base text-left basis-1/5 ${
              isHovered ? "opacity-100" : "opacity-100"
            }`}
          >
            {info.title}
          </h4>
          <div className="flex flex-row basis-1/2 justify-between">
            <p
              className={`text-left basis-1/2 ${
                isHovered ? "opacity-100" : "opacity-100"
              }`}
            >
              {info.tags.join(", ")}
            </p>
            {/* <p
              className={`text-sm text-left basis-1/2 ${
                isHovered ? "opacity-100" : "opacity-100"
              }`}
            >
              {info.year}
            </p> */}
          </div>
          <div className="right-56 -top-14  z-50 absolute w-[20rem] h-56  opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <Image
              alt="image"
              src={info.imgUrl}
              layout="fill"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              objectFit="cover"
            />
          </div>
          <div
            className={`flex align-middle justify-center my-auto ${
              isHovered ? " -rotate-45" : ""
            }`}
          >
            <svg
              width="121"
              height="19"
              viewBox="0 0 121 98"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M115 50L0 50" stroke="black" stroke-width="7" />
              <path
                d="M68 3L116.5 50L68 95.5"
                stroke="black"
                stroke-width="7"
              />
            </svg>
          </div>

          {/* <p className="text-3xl text-black basis-1/3 text-right"></p> */}
        </div>
      </div>
    </Link>
  );
}
