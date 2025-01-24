"use client";
import React, { useEffect } from "react";

import Image from "next/image";
export default function Example() {
  useEffect(() => {
    // Apply black background and white text when the component mounts
    document.body.style.backgroundColor = "#171310";
    document.body.style.color = "white";

    return () => {
      // Reset to default styles when leaving the page
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, []);
  return (
    <>
      <div className="flex w-full  lg:flex-row  flex-col md:flex-col  mt-20 align-middle gap-10">
        <h1 className=" lg:w-[57%] font-normal ">
          <div className="flex flex-col  gap-20 lg:pr-32  ">
            <div className="">
              I&apos;m Jiyoon. I&apos;m a designer and creative coder based in
              New York. I create brands, websites, and interactive experiences.
            </div>

            <div className="">
              I&apos;m currently a part of the team at Studio Elsewhere,
              developing immersive and interactive environments aimed at
              supporting mental wellness in medical settings.
            </div>
            <div>
              I graduated with a BFA in Design and Technology and a minor in
              communication design from the Parsons School of Design. During my
              degree, I developed an interest in game design, creative coding,
              and data-driven visualizations.
            </div>
          </div>
        </h1>
        {/* <div className="flex flex-col lg:basis-[50%] gap-8 lg:pr-32 text-black">
          <div className="">
            <p>Hi, I’m Jiyoon. </p>
          </div>
          <div className="basis-1/2">
            <p>
              I’m a designer and creative technologist based in NYC. I’m
              currently a part of the team at Studio Elsewhere, developing
              immersive and interactive environments aimed at supporting mental
              wellness in medical settings. Our projects are specifically
              designed to offer solace to healthcare workers, aid neuroscience
              research in brain recovery, and enhance the rehabilitation
              experience for children visiting medical centers.
            </p>
          </div>
          <div className="basis-1/2">
            <p>
              I graduated with a BFA in Design and Technology and a minor in
              communication design from the Parsons School of Design. During my
              degree, I developed an interest in game design, creative coding,
              and data-driven visualizations.
            </p>
          </div>
          <div className="basis-1/2">
            <p>
              Don&apos;t hesitate to reach out! I&apos;m always looking to
              collaborate.
            </p>
          </div>
        </div> */}
        <div className="w-full my-10 basis-[30%] max-w-lg rounded-sm">
          <Image
            src={"./e.gif"}
            alt="Main Image"
            layout="responsive"
            width={100}
            height={50} // Adjust height proportionally
            objectFit="cover"
            unoptimized={true}
            className="rounded-sm"
          />
        </div>
      </div>
    </>
  );
}
