import React from "react";
import Section from "./layout/section";
interface SSProps {
  children?: React.ReactNode;
}

export default function HeroSection({}) {
  return (
    <div className="border-b border-gray-300 mx-3 pb-10">
      <div className="h-40"></div>
      <h1 className=" w-1/2 font-normal">
        Jiyoon Moon is a Software Engineer and Creative Technologist currently
        based in New York City.
      </h1>
    </div>
  );
}
