import Link from "next/link";
import Image from "next/image";
export default function ProjectCard({ info }) {
  return (
    <Link href={`/project/${info.id}`} className="px-[.35rem] pb-3 pt-[.7rem]">
      <div className=" ">
        <div className="w-full h-auto overflow-hidden">
          <Image
            src={info.imgUrl}
            alt="Final Image"
            layout="responsive"
            width={100}
            height={50} // Adjust height proportionally
            objectFit="cover"
          />
          {/* <Image
            alt="image"
            src={info.imgUrl}
            className="absolute inset-0 w-full h-full"
            // width={400}
            // height={400}
            layout="fill"
            object-fit="contain"
          /> */}
        </div>
        <div className="flex flex-row mx-1 my-3 justify-between child:leading-5 ">
          <div>
            <h4 className="text-xs text-black child:leading-5">{info.title}</h4>
            <p className="text-xs text-gray-500"> {info.tags.join(", ")} </p>
          </div>
          <p className="mx-4 text-xs  basis-[50%]  text-gray-500 ">
            {info.blurb}
          </p>
          <p className=" text-xs  text-black">{info.year}</p>
        </div>
      </div>
    </Link>
  );
}
