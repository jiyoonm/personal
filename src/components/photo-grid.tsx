import Image from "next/image";
import { ReactElement } from "react";

interface PhotoGridProps {
  count?: number | null; // Optional prop with a default value
  mainImage?: string | null; // Optional prop, can be undefined
  grid?: string[] | null; // Can be an array of strings, null, or undefined
  finalImage?: string | null; // Optional prop, can be undefined
}

export default function PhotoGrid({
  count = 7,
  mainImage,
  grid = null,
  finalImage,
}: PhotoGridProps): ReactElement {
  return (
    <div className="w-full lg:w-[97%] text-center mx-auto my-10">
      {/* {mainImage && (
        <div className="w-[60%] h-auto text-center mx-auto m-10">
          <Image
            src={mainImage}
            alt="Main Image"
            layout="responsive"
            width={100}
            height={50} // Adjust height proportionally
            objectFit="cover"
          />
        </div>
      )} */}
      {/* First image full width */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-3">
        {grid !== null &&
          grid.map((url, index) => (
            <div
              key={index}
              className="relative  h-[15rem] lg:h-[30rem] w-full"
            >
              <Image
                src={url}
                alt={`Image ${index + 2}`}
                layout="fill"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                objectFit="cover"
              />
            </div>
          ))}
      </div>

      {/* Next four images in a 2x2 grid */}

      {/* Last image full width */}
      {/* {finalImage && (
        <div className="w-full h-auto mx-auto">
          <Image
            src={finalImage}
            alt="Final Image"
            layout="responsive"
            width={100}
            height={50} // Adjust height proportionally
            objectFit="cover"
          />
        </div>
      )} */}
    </div>
  );
}
