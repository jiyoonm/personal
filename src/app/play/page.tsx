import Image from "next/image";
import PlayHero from "../../components/play-hero";
import Grid from "../../components/layout/grid";
import App from "../../components/app";
import archiveInfo from "../../dummy-data/archive-grid-info";
export default function Home() {
  return (
    <main className="main relative w-full h-screen flex flex-col items-center justify-between">
      <App /> {/* Fullscreen Canvas */}
      <div className="absolute top-0 left-0 z-10 w-full p-8">
        <PlayHero /> {/* Positioned above Canvas */}
      </div>
    </main>
  );
}
