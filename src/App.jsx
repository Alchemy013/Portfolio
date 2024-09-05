import React from "react";
import Cyl from "./components/cyl";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Bloom } from "@react-three/postprocessing";
import { EffectComposer } from "@react-three/postprocessing";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div style={{ height: "100vh" }}>
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
              intensity={20}
              luminanceThreshold={0}
              luminanceSmoothing={0.7}
            />
          </EffectComposer>
        </Canvas>
      </div>
    </>
  );
};

export default App;
