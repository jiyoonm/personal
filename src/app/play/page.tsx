import Image from "next/image";
import PlayHero from "../../components/play-hero";
import Grid from "../../components/layout/grid";
import App from "../../components/cards";
import archiveInfo from "../../dummy-data/archive-grid-info";
import VideoGrid from "../../components/video-grid";
export default function Home() {
  const videoUrls = [
    "/video/1.mov",
    "/video/2.mov",
    "/video/3.mov",
    "/video/4.mov",
    "/video/5.mov",
 
  ];
  
  return (

    <main className="main flex min-h-screen flex-col items-center justify-between ">
      <PlayHero /> 
      <VideoGrid videos={videoUrls} />
    </main>
  );
}
