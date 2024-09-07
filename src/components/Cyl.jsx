import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";

const Cyl = () => {
  let tex = useTexture("./3.png");
  let cyl = useRef(null);
  useFrame((state, delta) => {
    cyl.current.rotation.y += delta;
  });
  return (
    <group rotation={[0, 0, 0.1]}>
      <mesh ref={cyl} position={[0, 2, 0]} scale={[2, 2, 2]}>
        <cylinderGeometry args={[4, 4, 12, 30, 30, true]} />
        <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

export default Cyl;
