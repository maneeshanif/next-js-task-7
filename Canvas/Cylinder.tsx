"use client";
import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useFrame  } from "@react-three/fiber";
import * as THREE from "three";
// import Group from "./Group";

const Cylinder = ({ gap }: { gap: number }) => {
  const cyl = useRef<THREE.Mesh>(null);

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    const imagePaths = [
      "/3d7.png",
      // '/3d1.png',
      // '/3d2.png',
      "/img2_.jpg",
      "/3d3.png",
      "/3d8.png",
      "/3d5.png",
      // '/img1_.jpg', 
      // '/img3_.jpg',
      // '/img4_.jpg',
      // '/img5_.jpg',
      "/ai.png",
      // '/img6_.jpg',
      // '/img7_.jpg',
      // '/img8_.jpg',
      // '/img9_.jpg',
      // '/img10_.jpg',
    ];

    Promise.all(
      imagePaths.map(
        (path) =>
          new Promise((resolve, reject) => {
            loader.load(path, resolve, undefined, reject);
          })
      )
    )
      .then((textures) => {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d") as CanvasRenderingContext2D;

        // Set canvas dimensions
        const singleWidth = (textures[0] as THREE.Texture).image.width;
        const singleHeight = (textures[0] as THREE.Texture).image.height;

        const totalWidth =
          singleWidth * textures.length + gap * (textures.length - 1);
        canvas.width = totalWidth;
        canvas.height = singleHeight;

        // Draw each image with a gap
        textures.forEach((texture, index) => {
          const xPosition = index * (singleWidth + gap); 
          context.drawImage(
            (texture as THREE.Texture).image,
            xPosition,
            0,
            singleWidth,
            singleHeight
          );
        });

        // Create texture from the canvas
        const combinedTexture = new THREE.CanvasTexture(canvas);
        combinedTexture.wrapS = THREE.RepeatWrapping;
        combinedTexture.wrapT = THREE.RepeatWrapping;

        // Apply texture to the cylinder
        if (cyl.current) {
          (cyl.current.material as THREE.MeshStandardMaterial).map =
            combinedTexture;
          (cyl.current.material as THREE.MeshStandardMaterial).needsUpdate =
            true;
        }
      })
      .catch((error) => console.error("Error loading images:", error));
  }, [gap]);

  useFrame((state, delta) => {
    if (cyl.current) {
      cyl.current.rotation.y -= delta;
    }
  });

  return (
    <>
    {/* <Group ref={cyl}/> */}
    <group  rotation={[0, 1.4, 0.4]}>
            <mesh ref={cyl}>
                <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
                <meshStandardMaterial transparent side={THREE.DoubleSide} />
            </mesh>
        </group> 
    </>
  );
};

export default Cylinder;

