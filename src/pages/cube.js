import React, { useRef, useState, useEffect, createRef } from 'react'
import { Canvas, useFrame  } from '@react-three/fiber'
import { OrbitControls, Stats, RoundedBox, OrthographicCamera  } from "@react-three/drei";



function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  

  return (
    <mesh
      {...props}
      ref={mesh}>
      <RoundedBox args={[0.9, 0.9, 0.9]} radius={0.1}>
        <meshPhysicalMaterial attach="material" color={"black"} iridescence={1} iridescenceIOR={1.3} metalness={1} />
      </RoundedBox>      
    </mesh>
  )
}

function CubeSlice(props) {
  return (
    <mesh {...props}>
        <Box position={[-1, 0, -1]} />
        <Box position={[0, 0, -1]} />
        <Box position={[1, 0, -1]} />

        <Box position={[-1, 0, 0]} />
        <Box position={[0, 0, 0]} />
        <Box position={[1, 0, 0]} />

        <Box position={[-1, 0, 1]} />
        <Box position={[0, 0, 1]} />
        <Box position={[1, 0, 1]} />

    </mesh>
  )
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Cube(props) {
  const mesh = useRef();


  const slices = [createRef(), createRef(), createRef()];

  let tick = 0;
  let targetSlice = null;

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.005;

    if (targetSlice) {
      if (tick != 0 && tick != 157) {
        tick++;
        targetSlice.current.rotation.y += 0.01;
      }else {
        tick = 0;
        targetSlice.current.rotation.y = 0;
        targetSlice = null;
      }
  
    }
   
  });

  useEffect(() => {
    setInterval(() => {
      targetSlice = slices[getRandomInt(0, 2)];
      targetSlice.current.rotation.y += 0.01;
      tick = 1;
    }, 2500);
  }, []);

  

  return (
      <mesh ref={mesh}>
        <mesh ref={slices[0]}>
          <CubeSlice  position={[0, 1, 0]} />  
        </mesh>        
        <mesh ref={slices[1]}>
          <CubeSlice position={[0, 0, 0]} />
        </mesh>
        <mesh ref={slices[2]}>
          <CubeSlice position={[0, -1, 0]} />
        </mesh>
        
      </mesh>      
  );
}

function Scene(props) {
 

  return (
    <Canvas style={{ height: 400, width: 400 }}>

      <OrbitControls />

      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <Cube />

    </Canvas>
  );
}

export default Scene;