import { useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { Box } from "@react-three/drei";

export default function Floor() {
  useEffect(() => {});

  useFrame(() => {});

  return (
    <mesh>
      <boxGeometry args={[800, 800, 1]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}
