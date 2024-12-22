"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import Cylinder from "../Canvas/Cylinder";
import React from "react";

const Scene = () => {
  return (
    <>
      <div className="relative w-full h-full">
        <Canvas camera={{ fov: 35 }}>
          <OrbitControls maxDistance={10} minDistance={3} enableZoom={false} />
          <ambientLight intensity={2} />
          <Cylinder gap={45} />
          <EffectComposer>
            <Bloom
              intensity={35.0}
              luminanceThreshold={0.9}
              luminanceSmoothing={5}
            />
          </EffectComposer>
        </Canvas>
      </div>
    </>
  );
};

export default Scene;
