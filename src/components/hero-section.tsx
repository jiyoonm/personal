import React from "react";
import Section from "./layout/section";
interface SSProps {
  children?: React.ReactNode;
}

export default function HeroSection({ children }) {
  return (
    <Section fullWidth height="h-100">
      <div className="bg-cover bg-center mb-20 h-[30vh] lg:h-[30vh] ">
        <div className="z-20   p-8 w-[100%] lg:w-[50%]">
          <h1 className="mb-5">HI IM JIYOON AND THIS IS MY PORTFOLIO</h1>
          <br />
          <p className="w-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </Section>
  );
}
