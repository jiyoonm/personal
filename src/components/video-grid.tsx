import { ReactElement } from "react";

interface VideoGridProps {
  videos: string[]; // Array of video URLs
}

export default function VideoGrid({ videos }: VideoGridProps): ReactElement {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6  px- w-full  text-center mx-auto ">
      {videos.map((videoUrl, index) => (
        <div
          key={index}
          className="relative w-full aspect-square overflow-hidden"
        >
          <video
            src={videoUrl}
            className="absolute w-full h-full object-cover"
            autoPlay
            loop
            muted
          />
        </div>
      ))}
    </div>
  );
}
