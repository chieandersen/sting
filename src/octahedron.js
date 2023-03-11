import { useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";

export default function Octahedron() {
  const [rotation, setRotation] = useState(0);
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const [speedX, setSpeedX] = useState(0);
  const [speedY, setSpeedY] = useState(0);
  const velocity = 15;

  useEffect(() => {
    const keyDown = (e) => {
      if (e.code === "KeyW") setSpeedY(velocity);
      if (e.code === "KeyS") setSpeedY(-velocity);

      if (e.code === "KeyD") setSpeedX(velocity);
      if (e.code === "KeyA") setSpeedX(-velocity);
    };

    const keyUp = (e) => {
      if (e.code === "KeyW") setSpeedY(0);
      if (e.code === "KeyS") setSpeedY(0);

      if (e.code === "KeyD") setSpeedX(0);
      if (e.code === "KeyA") setSpeedX(0);
    };

    document.addEventListener("keydown", keyDown);
    document.addEventListener("keyup", keyUp);
    return () => {
      document.removeEventListener("keydown", keyDown);
      document.removeEventListener("keyup", keyUp);
    };
  });

  useFrame(() => {
    //setRotation(rotation + 1 / 180);
    setPosX(posX + speedX);
    setPosY(posY + speedY);
  });

  return (
    <mesh scale={30} rotation={[0, 0, rotation]} position={[posX, posY, -30]}>
      <octahedronGeometry />
      <meshStandardMaterial color="green" />
    </mesh>
  );
}
