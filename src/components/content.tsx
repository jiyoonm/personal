import Image from "next/image";

export default function Content({ type, url = null }) {
  return (
    <>
      <div className="mb-10 relative h-[50vh] w-full bg-primary sm:h-[40vh] md:h-[60vh]">
        <Image alt="image" layout="fill" src={"/image.png"} objectFit="cover" />
      </div>
    </>
  );
}
