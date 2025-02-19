import React from "react";
import Section from "./layout/section";
interface SSProps {
  children?: React.ReactNode;
}

export default function PlayHero({}) {
  return (
    <div className="pb-10">
      <div className="h-20"></div>
      <h1 className=" lg:w-[50%] font-normal ">
        <div className="flex flex-col  gap-8 lg:pr-32 text-primary-light ">
          <div className="">
            Welcome to my <span className="text-black">lab</span>✏️!
          </div>

          <div className="">
            Have a glimpse at some{" "}
            <span className="text-black"> snippets </span>
            from my design process, as well as some more{" "}
            <span className="text-black">artistic research </span>
            projects.{" "}
          </div>
        </div>
      </h1>
    </div>
  );
}
