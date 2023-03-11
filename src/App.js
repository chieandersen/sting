import "./App.css";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { OrthographicCamera } from "@react-three/drei";

import Octahedron from "./octahedron";
import Floor from "./floor";

function App() {
  const frustumDefault = {
    top: window.innerHeight / 2,
    bottom: -window.innerHeight / 2,
    left: -window.innerWidth / 2,
    right: window.innerWidth / 2,
    near: 200,
    far: -200,
    zoom: 1,
  };

  const [frustum, setFrustum] = useState(frustumDefault);
  const setCameraFrustum = (e) => {
    setFrustum(frustumDefault);
  };

  useEffect(() => {
    window.addEventListener("resize", setCameraFrustum);
    return () => {
      document.removeEventListener("resize", setCameraFrustum);
    };
  });

  return (
    <div id="canvas-container">
      <Canvas>
        <OrthographicCamera makeDefault {...frustum} />
        <ambientLight intensity={0.1} />
        <pointLight position={[0, 0, 10]} intensity={0.9} />
        <Octahedron />
        <Floor />
      </Canvas>
    </div>
  );
}

export default App;
