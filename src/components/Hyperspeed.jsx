import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hyperspeed({ effectOptions = {} }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const options = {
      length: 400,
      roadWidth: 10,
      islandWidth: 2,
      fov: 90,
      lightPairsPerRoadWay: 40,
      movingAwaySpeed: [60, 80],
      movingCloserSpeed: [-120, -160],
      carLightsLength: [12, 80],
      carLightsRadius: [0.05, 0.14],
      colors: {
        roadColor: 0x080808,
        islandColor: 0x0a0a0a,
        background: 0x000000,
        leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
        rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
      },
      ...effectOptions,
    };

    const container = containerRef.current;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(options.colors.background, options.length * 0.2, options.length);

    // Camera
    const camera = new THREE.PerspectiveCamera(options.fov, width / height, 0.1, options.length * 2);
    camera.position.set(0, 8, -5);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(options.colors.background, 1);
    container.appendChild(renderer.domElement);

    // Road geometry
    const roadGeometry = new THREE.PlaneGeometry(options.roadWidth, options.length, 20, 200);
    const roadMaterial = new THREE.MeshBasicMaterial({
      color: options.colors.roadColor,
      side: THREE.DoubleSide,
    });
    const road = new THREE.Mesh(roadGeometry, roadMaterial);
    road.rotation.x = -Math.PI / 2;
    road.position.z = -options.length / 2;
    scene.add(road);

    // Island
    const islandGeometry = new THREE.PlaneGeometry(options.islandWidth, options.length, 20, 200);
    const islandMaterial = new THREE.MeshBasicMaterial({
      color: options.colors.islandColor,
      side: THREE.DoubleSide,
    });
    const island = new THREE.Mesh(islandGeometry, islandMaterial);
    island.rotation.x = -Math.PI / 2;
    island.position.z = -options.length / 2;
    scene.add(island);

    // Car lights
    const leftLights = [];
    const rightLights = [];

    for (let i = 0; i < options.lightPairsPerRoadWay; i++) {
      const z = Math.random() * options.length - options.length;
      const leftCarLane = -options.roadWidth / 2 + Math.random() * (options.roadWidth / 2 - options.islandWidth / 2);
      const rightCarLane = options.roadWidth / 2 - Math.random() * (options.roadWidth / 2 - options.islandWidth / 2);

      // Left cars (red)
      const leftLightGeometry = new THREE.CylinderGeometry(
        options.carLightsRadius[0] + Math.random() * (options.carLightsRadius[1] - options.carLightsRadius[0]),
        options.carLightsRadius[0] + Math.random() * (options.carLightsRadius[1] - options.carLightsRadius[0]),
        options.carLightsLength[0] + Math.random() * (options.carLightsLength[1] - options.carLightsLength[0]),
        6
      );
      const leftLightMaterial = new THREE.MeshBasicMaterial({
        color: options.colors.leftCars[Math.floor(Math.random() * options.colors.leftCars.length)],
      });
      const leftLight = new THREE.Mesh(leftLightGeometry, leftLightMaterial);
      leftLight.position.set(leftCarLane, 0.3, z);
      leftLight.rotation.x = Math.PI / 2;
      scene.add(leftLight);
      leftLights.push({
        mesh: leftLight,
        speed: options.movingCloserSpeed[0] + Math.random() * (options.movingCloserSpeed[1] - options.movingCloserSpeed[0]),
      });

      // Right cars (cyan/blue)
      const rightLightGeometry = new THREE.CylinderGeometry(
        options.carLightsRadius[0] + Math.random() * (options.carLightsRadius[1] - options.carLightsRadius[0]),
        options.carLightsRadius[0] + Math.random() * (options.carLightsRadius[1] - options.carLightsRadius[0]),
        options.carLightsLength[0] + Math.random() * (options.carLightsLength[1] - options.carLightsLength[0]),
        6
      );
      const rightLightMaterial = new THREE.MeshBasicMaterial({
        color: options.colors.rightCars[Math.floor(Math.random() * options.colors.rightCars.length)],
      });
      const rightLight = new THREE.Mesh(rightLightGeometry, rightLightMaterial);
      rightLight.position.set(rightCarLane, 0.3, z);
      rightLight.rotation.x = Math.PI / 2;
      scene.add(rightLight);
      rightLights.push({
        mesh: rightLight,
        speed: options.movingAwaySpeed[0] + Math.random() * (options.movingAwaySpeed[1] - options.movingAwaySpeed[0]),
      });
    }

    // Animation
    const clock = new THREE.Clock();
    let animationId = null;
    
    const animate = () => {
      const delta = clock.getDelta();

      // Animate left lights (moving closer)
      leftLights.forEach((light) => {
        light.mesh.position.z += light.speed * delta;
        if (light.mesh.position.z > 10) {
          light.mesh.position.z = -options.length;
        }
      });

      // Animate right lights (moving away)
      rightLights.forEach((light) => {
        light.mesh.position.z += light.speed * delta;
        if (light.mesh.position.z < -options.length) {
          light.mesh.position.z = 10;
        }
      });

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const newWidth = container.clientWidth || window.innerWidth;
      const newHeight = container.clientHeight || window.innerHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      
      // Clean up Three.js objects
      leftLights.forEach((light) => {
        scene.remove(light.mesh);
        light.mesh.geometry.dispose();
        light.mesh.material.dispose();
      });
      rightLights.forEach((light) => {
        scene.remove(light.mesh);
        light.mesh.geometry.dispose();
        light.mesh.material.dispose();
      });
      
      scene.clear();
      
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [effectOptions]);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        width: '100%', 
        height: '100%', 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0 
      }} 
    />
  );
}
