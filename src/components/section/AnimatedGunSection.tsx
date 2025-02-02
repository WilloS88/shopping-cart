import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const SpinningGun = () => {
  const { scene } = useGLTF("/pistol-cz.glb");

  return (
    <mesh rotation={[0, 0, 0]} scale={[20, 20, 20]} position={[0, 0.8, 1]}>
      <primitive object={scene} />
    </mesh>
  );
};

export const AnimatedGunSection = () => {
  return (
    <div className="mb-20 flex w-full items-center justify-center">
      <div className="flex h-[200px] w-[300px] items-center justify-center">
        <Canvas className="h-full w-full">
          <OrbitControls autoRotate enableZoom={false} />
          <ambientLight intensity={1} />
          <directionalLight position={[20, 20, 5]} intensity={1} />
          <SpinningGun />
        </Canvas>
      </div>
    </div>
  );
};
