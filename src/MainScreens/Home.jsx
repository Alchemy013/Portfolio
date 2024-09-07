import React from "react";
import Cyl from "../components/Cyl";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Bloom } from "@react-three/postprocessing";
import { EffectComposer } from "@react-three/postprocessing";
import InfiniteScrollText from "../components/InfiniteScrollText";
const Home = () => {
  return (
    <>
      <div style={{ height: "100vh", position: "relative" }}>
        <Canvas
          flat
          camera={{ position: [0, 0, 20] }}
          style={{ display: "block" }}
        >
          <OrbitControls enableZoom={false} />

          <ambientLight />
          <Cyl />
          <EffectComposer>
            <Bloom
              intensity={13}
              luminanceThreshold={0}
              luminanceSmoothing={0.1}
              height={500}
            />
          </EffectComposer>
        </Canvas>
        <div style={{ position: "absolute", bottom: 150, width: "100%" }}>
          <InfiniteScrollText />
        </div>
      </div>
    </>
  );
};

export default Home;
