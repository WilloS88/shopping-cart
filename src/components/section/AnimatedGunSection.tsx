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
    <div className="flex justify-center items-center mb-20 h-[200px]">
      <Canvas>
        <OrbitControls autoRotate enableZoom={false} />
        <ambientLight intensity={1} />
        <directionalLight position={[20, 20, 5]} intensity={1} />
        <SpinningGun />
      </Canvas>
    </div>
  );
};
