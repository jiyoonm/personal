// @ts-nocheck
"use client";

import * as THREE from "three";
import { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Billboard,
  useVideoTexture,
  ScrollControls,
  useScroll,
} from "@react-three/drei";
import { easing } from "maath";
import "./util";

export default function App() {
  return (
    <Canvas
      camera={{ position: [0, 0, 100], fov: 15 }}
      //   style={{
      //     position: "absolute",
      //     top: 0,
      //     left: 0,
      //     width: "100vw",
      //     height: "100vh",
      //   }}
    >
      <ScrollControls pages={4} infinite>
        <Rig rotation={[0, 0, 0.15]}>
          <Carousel />
        </Rig>
      </ScrollControls>
    </Canvas>
  );
}

function Rig(props) {
  const ref = useRef();
  const scroll = useScroll();
  useFrame((state, delta) => {
    ref.current.rotation.y = -scroll.offset * (Math.PI * 2); // Rotate contents
    state.events.update(); // Raycasts every frame rather than on pointer-move
    easing.damp3(
      state.camera.position,
      [-state.pointer.x * 2, state.pointer.y + 1.5, 10],
      0.3,
      delta
    ); // Move camera
    state.camera.lookAt(0, 0, 0); // Look at center
  });
  return <group ref={ref} {...props} />;
}

function Carousel({ radius = 1.4, count = 5 }) {
  return Array.from({ length: count }, (_, i) => (
    <Card
      key={i}
      videoUrl={`video/${i + 1}.mov`}
      position={[
        Math.sin((i / count) * Math.PI * 2) * radius,
        0,
        Math.cos((i / count) * Math.PI * 2) * radius,
      ]}
      rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
    />
  ));
}

function Card({ videoUrl, ...props }) {
  const texture = useVideoTexture(videoUrl, {
    start: true,
    muted: true,
    loop: true,
  });
  const ref = useRef<THREE.Mesh>(null);
  const [hovered, hover] = useState(false);

  const pointerOver = (e: THREE.Event) => {
    e.stopPropagation();
    hover(true);
  };

  const pointerOut = () => hover(false);

  useFrame((state, delta) => {
    if (!ref.current) return;
    easing.damp3(ref.current.scale, hovered ? 1.15 : 1, 0.1, delta);
  });

  return (
    <Billboard {...props} onPointerOver={pointerOver} onPointerOut={pointerOut}>
      <mesh ref={ref}>
        <bentPlaneGeometry args={[0.1, 1, 1, 20, 20]} />
        <Suspense fallback={null}>
          <meshBasicMaterial map={texture} toneMapped={false} />
        </Suspense>
      </mesh>
    </Billboard>
  );
}
