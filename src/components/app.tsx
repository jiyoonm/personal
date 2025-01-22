"use client";
import * as THREE from "three";
import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Billboard,
  TrackballControls,
  useVideoTexture,
} from "@react-three/drei";

function VideoSquare({ videoUrl, ...props }) {
  const texture = useVideoTexture(videoUrl, {
    start: true,
    muted: true,
    loop: true,
  });
  const ref = useRef();

  useFrame(({ camera }) => {
    ref.current.lookAt(camera.position); // Always face the camera
  });

  return (
    <Billboard {...props}>
      <mesh ref={ref}>
        <planeGeometry args={[4, 4]} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>
    </Billboard>
  );
}

function Cloud({ count = 4, radius = 20 }) {
  // Create a count x count random video squares with spherical distribution
  const videos = useMemo(() => {
    const temp: [THREE.Vector3, string][] = []; // Explicitly type the array
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    const videoUrls = [
      "/video/1.mov",
      "/video/2.mov",
      "/video/3.mov",
      "/video/4.mov",
      "/video/5.mov",
    ];

    videoUrls.forEach((videoUrl, index) => {
      const i = Math.floor(index / count) + 1;
      const j = index % count;
      const position = new THREE.Vector3().setFromSpherical(
        spherical.set(radius, phiSpan * i, thetaSpan * j)
      );
      temp.push([position, videoUrl]);
    });

    return temp;
  }, [count, radius]);

  return videos.map(([pos, videoUrl], index) => (
    <VideoSquare key={index} position={pos} videoUrl={videoUrl} />
  ));
}

export default function App() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 35], fov: 90 }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
      }}
    >
      <fog attach="fog" args={["#202025", 0, 80]} />
      <Suspense fallback={null}>
        <group rotation={[10, 10.5, 10]}>
          <Cloud count={8} radius={20} />
        </group>
      </Suspense>
      <TrackballControls />
    </Canvas>
  );
}
