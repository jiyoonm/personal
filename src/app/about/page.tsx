import Image from "next/image";
export default function Example() {
  return (
    <>
      <div className="w-full flex flex-row p-20 min-h-[85vh] justify-end	">
        <div className=" w-full lg:basis-[30%] h-auto  mx-auto m-10">
          <Image
            src={"./e.gif"}
            alt="Main Image"
            layout="responsive"
            width={100}
            height={50} // Adjust height proportionally
            objectFit="cover"
            unoptimized={true}
          />
        </div>
        <div className="flex flex-col lg:basis-[50%] gap-10 lg:pr-32">
          <div className="">Hi, I’m Jiyoon.</div>
          <div className="basis-1/2">
            I’m a designer and creative technologist based in NYC. I’m currently
            a part of the team at Studio Elsewhere, developing immersive and
            interactive environments aimed at supporting mental wellness in
            medical settings. Our projects are specifically designed to offer
            solace to healthcare workers, aid neuroscience research in brain
            recovery, and enhance the rehabilitation experience for children
            visiting medical centers.
          </div>
          <div className="basis-1/2">
            I graduated with a BFA in Design and Technology and a minor in
            communication design from the Parsons School of Design. During my
            degree, I developed an interest in game design, creative coding, and
            data-driven visualizations.
          </div>
          <div className="basis-1/2">
            Don&apos;t hesitate to reach out! I&apos;m always looking to
            collaborate.
          </div>
        </div>
      </div>
    </>
  );
}
