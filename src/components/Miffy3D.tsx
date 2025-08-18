import React, { useRef, useEffect, Suspense } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';

interface Miffy3DProps {
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
}

const Miffy3D: React.FC<Miffy3DProps> = ({ 
  scale = 0, 
  position = [0, 0, 0], 
  rotation = [0, 0, 0] 
}) => {
  const meshRef = useRef<THREE.Group>(null);
  const gltf = useLoader(GLTFLoader, '/miffy.glb');

  // Remove auto-rotation
  // useFrame((state) => {
  //   if (meshRef.current) {
  //     meshRef.current.rotation.y += 0.005;
  //   }
  // });

  // Clean up the model when component unmounts
  useEffect(() => {
    return () => {
      if (gltf.scene) {
        gltf.scene.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.geometry.dispose();
            if (child.material) {
              if (Array.isArray(child.material)) {
                child.material.forEach(material => material.dispose());
              } else {
                child.material.dispose();
              }
            }
          }
        });
      }
    };
  }, [gltf]);

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      <group
        ref={meshRef}
        scale={scale}
        position={position}
        rotation={rotation}
      >
        <primitive object={gltf.scene} />
      </group>
      
      <OrbitControls
        enableZoom={false}
        enablePan={true}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.3}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        maxDistance={15}
        minDistance={1.5}
        panSpeed={1.5}
        rotateSpeed={1.2}
        zoomSpeed={1.2}
      />
    </>
  );
};

// Wrapper component with error boundary and loading state
const Miffy3DWrapper: React.FC<Miffy3DProps> = (props) => {
  return (
    <Suspense fallback={
      <Html center>
        <div className="text-center text-text-primary">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#BDD7DE] mx-auto mb-2"></div>
          <p className="text-sm">Loading 3D Model...</p>
        </div>
      </Html>
    }>
      <Miffy3D {...props} />
    </Suspense>
  );
};

export default Miffy3DWrapper;
