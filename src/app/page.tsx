import Image from "next/image";
import Grid from "../components/layout/grid";
import HeroSection from "../components/hero-section";
import archiveInfo from "../dummy-data/archive-grid-info";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <HeroSection>
        <div>s</div>
      </HeroSection>
      <div className="container-expand">
        <Grid GridData={archiveInfo}></Grid>
      </div>
    </main>
  );
}
