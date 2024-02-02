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
    <div className="w-[99%]">
      {/* First image full width */}
      <div className="grid grid-cols-2 gap-3 my-3">
        {grid !== null &&
          grid.map((url, index) => (
            <div key={index} className="relative h-[30rem] w-full">
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
      {mainImage && (
        <div className="w-full h-auto">
          <Image
            src={mainImage}
            alt="Main Image"
            layout="responsive"
            width={100}
            height={50} // Adjust height proportionally
            objectFit="cover"
          />
        </div>
      )}

      {/* Next four images in a 2x2 grid */}

      {/* Last image full width */}
      {finalImage && (
        <div className="w-full h-auto">
          <Image
            src={finalImage}
            alt="Final Image"
            layout="responsive"
            width={100}
            height={50} // Adjust height proportionally
            objectFit="cover"
          />
        </div>
      )}
    </div>
  );
}
