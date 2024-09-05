import React from "react";
import Cyl from "./components/cyl";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Bloom } from "@react-three/postprocessing";
import { EffectComposer } from "@react-three/postprocessing";
import Hero from "./components/Hero";
import InfiniteScrollText from "./components/InfiniteScrollText";
import FloatingDock from "./components/Dock";

const App = () => {
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
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 flex justify-center w-full">
          <FloatingDock />
        </div>
      </div>
    </>
  );
};

export default App;
