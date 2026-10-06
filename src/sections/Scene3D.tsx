import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useMotionPreference } from '../context/MotionPreferenceContext';

export const Scene3D: React.FC = () => {
  const { prefersReducedMotion } = useMotionPreference();
  const containerRef = useRef<HTMLDivElement>(null);
  const [webglSupported, setWebglSupported] = useState(true);
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL support
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglSupported(false);
        return;
      }
    } catch {
      setWebglSupported(false);
      return;
    }

    const isMobile = window.innerWidth < 768;
    setIsLowPerformance(isMobile);

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030712, 0.035);

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = isMobile ? 12 : 9.5;
    camera.position.y = 0.5;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: !isMobile,
        alpha: true,
        powerPreference: 'high-performance'
      });
    } catch {
      setWebglSupported(false);
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.25 : 1.75));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Group for the entire digital sphere and network
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // 1. Digital Wireframe Sphere (Futuristic Core)
    const sphereRadius = isMobile ? 2.4 : 3.0;
    const sphereSegments = isMobile ? 14 : 22;

    const sphereGeom = new THREE.IcosahedronGeometry(sphereRadius, isMobile ? 2 : 3);
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.28
    });
    const digitalSphere = new THREE.Mesh(sphereGeom, wireframeMat);
    masterGroup.add(digitalSphere);

    // Inner glowing sphere core
    const innerGeom = new THREE.SphereGeometry(sphereRadius * 0.65, 16, 16);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.14
    });
    const innerSphere = new THREE.Mesh(innerGeom, innerMat);
    masterGroup.add(innerSphere);

    // 2. Vertex Points on the Digital Sphere (Glowing Nodes)
    const pointCount = sphereGeom.attributes.position.count;
    const nodePositions = new Float32Array(pointCount * 3);
    const nodeColors = new Float32Array(pointCount * 3);
    const basePos = sphereGeom.attributes.position;

    const cyanColor = new THREE.Color(0x06b6d4);
    const blueColor = new THREE.Color(0x3b82f6);
    const violetColor = new THREE.Color(0xa855f7);

    for (let i = 0; i < pointCount; i++) {
      nodePositions[i * 3] = basePos.getX(i);
      nodePositions[i * 3 + 1] = basePos.getY(i);
      nodePositions[i * 3 + 2] = basePos.getZ(i);

      const mixVal = Math.random();
      const pointCol = mixVal > 0.6 ? cyanColor : mixVal > 0.3 ? blueColor : violetColor;
      nodeColors[i * 3] = pointCol.r;
      nodeColors[i * 3 + 1] = pointCol.g;
      nodeColors[i * 3 + 2] = pointCol.b;
    }

    const nodeGeom = new THREE.BufferGeometry();
    nodeGeom.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));
    nodeGeom.setAttribute('color', new THREE.BufferAttribute(nodeColors, 3));

    // Simple circular glowing particle texture via Canvas
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.3, 'rgba(6, 182, 212, 0.8)');
      gradient.addColorStop(0.8, 'rgba(59, 130, 246, 0.2)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const nodeMat = new THREE.PointsMaterial({
      size: isMobile ? 0.16 : 0.22,
      map: particleTexture,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const nodes = new THREE.Points(nodeGeom, nodeMat);
    masterGroup.add(nodes);

    // 3. Floating Surrounding Ambient Particles
    const ambientCount = isMobile ? 90 : 220;
    const ambientPositions = new Float32Array(ambientCount * 3);
    const ambientSpeeds: { vx: number; vy: number; vz: number }[] = [];

    for (let i = 0; i < ambientCount; i++) {
      const spread = isMobile ? 12 : 16;
      ambientPositions[i * 3] = (Math.random() - 0.5) * spread;
      ambientPositions[i * 3 + 1] = (Math.random() - 0.5) * spread;
      ambientPositions[i * 3 + 2] = (Math.random() - 0.5) * (spread * 0.8);

      ambientSpeeds.push({
        vx: (Math.random() - 0.5) * 0.003,
        vy: (Math.random() - 0.5) * 0.003,
        vz: (Math.random() - 0.5) * 0.003
      });
    }

    const ambientGeom = new THREE.BufferGeometry();
    ambientGeom.setAttribute('position', new THREE.BufferAttribute(ambientPositions, 3));
    const ambientMat = new THREE.PointsMaterial({
      size: isMobile ? 0.12 : 0.18,
      map: particleTexture,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color: 0x38bdf8
    });
    const ambientPoints = new THREE.Points(ambientGeom, ambientMat);
    scene.add(ambientPoints);

    // 4. Subtle Orbital Tech Ring with Glowing Lines
    const ringGeom = new THREE.RingGeometry(sphereRadius * 1.35, sphereRadius * 1.37, isMobile ? 32 : 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.25
    });
    const orbitalRing = new THREE.Mesh(ringGeom, ringMat);
    orbitalRing.rotation.x = Math.PI / 3;
    masterGroup.add(orbitalRing);

    const secondRingGeom = new THREE.RingGeometry(sphereRadius * 1.7, sphereRadius * 1.715, isMobile ? 32 : 64);
    const secondRingMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.16
    });
    const secondOrbitalRing = new THREE.Mesh(secondRingGeom, secondRingMat);
    secondOrbitalRing.rotation.x = -Math.PI / 4;
    secondOrbitalRing.rotation.y = Math.PI / 6;
    masterGroup.add(secondOrbitalRing);

    // 5. Small Floating Tech Elements (Hexagonal micro prisms)
    const techElementsGroup = new THREE.Group();
    const techCount = isMobile ? 4 : 7;
    const techMeshes: THREE.Mesh[] = [];

    const hexGeom = new THREE.CylinderGeometry(0.18, 0.18, 0.06, 6);
    const hexMat = new THREE.MeshBasicMaterial({
      color: 0x67e8f9,
      wireframe: true,
      transparent: true,
      opacity: 0.5
    });

    for (let i = 0; i < techCount; i++) {
      const mesh = new THREE.Mesh(hexGeom, hexMat);
      const angle = (i / techCount) * Math.PI * 2;
      const dist = sphereRadius * (1.2 + (i % 3) * 0.2);
      mesh.position.set(
        Math.cos(angle) * dist,
        (Math.sin(angle * 2) * dist) * 0.4,
        Math.sin(angle) * dist
      );
      techMeshes.push(mesh);
      techElementsGroup.add(mesh);
    }
    masterGroup.add(techElementsGroup);

    // Interactive mouse tracking with smooth lerp
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 0.45;
      targetY = y * 0.35;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        const x = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -(((touch.clientY - rect.top) / rect.height) * 2 - 1);
        targetX = x * 0.25;
        targetY = y * 0.2;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera / group rotation via mouse lerp (disabled or muted if user prefers reduced motion)
      if (prefersReducedMotion) {
        masterGroup.rotation.y += 0.0006;
        masterGroup.rotation.x = 0;
        masterGroup.rotation.z = 0;
        camera.position.x = 0;
        camera.position.y = 0.5;
      } else {
        mouseX += (targetX - mouseX) * 0.05;
        mouseY += (targetY - mouseY) * 0.05;

        masterGroup.rotation.y += 0.0035;
        masterGroup.rotation.x = mouseY * 0.6;
        masterGroup.rotation.z = mouseX * 0.3;

        camera.position.x = mouseX * 0.8;
        camera.position.y = 0.5 + mouseY * 0.5;
      }

      digitalSphere.rotation.y = elapsedTime * (prefersReducedMotion ? 0.015 : 0.08);
      digitalSphere.rotation.x = Math.sin(elapsedTime * 0.05) * (prefersReducedMotion ? 0.02 : 0.1);

      orbitalRing.rotation.z = -elapsedTime * (prefersReducedMotion ? 0.01 : 0.04);
      secondOrbitalRing.rotation.z = elapsedTime * (prefersReducedMotion ? 0.008 : 0.03);

      // Small floating tech element orbits
      techMeshes.forEach((mesh, index) => {
        mesh.rotation.x += prefersReducedMotion ? 0.003 : 0.015;
        mesh.rotation.y += prefersReducedMotion ? 0.004 : 0.02;
        mesh.position.y += Math.sin(elapsedTime * 1.5 + index) * (prefersReducedMotion ? 0.0008 : 0.003);
      });

      // Ambient particle drift (skipped or muted on reduced motion)
      if (!prefersReducedMotion) {
        const positions = ambientGeom.attributes.position.array as Float32Array;
        for (let i = 0; i < ambientCount; i++) {
          const idx = i * 3;
          positions[idx] += ambientSpeeds[i].vx;
          positions[idx + 1] += ambientSpeeds[i].vy;
          positions[idx + 2] += ambientSpeeds[i].vz;

          // Wrap around boundaries
          const limit = isMobile ? 8 : 10;
          if (positions[idx] > limit) positions[idx] = -limit;
          if (positions[idx] < -limit) positions[idx] = limit;
          if (positions[idx + 1] > limit) positions[idx + 1] = -limit;
          if (positions[idx + 1] < -limit) positions[idx + 1] = limit;
        }
        ambientGeom.attributes.position.needsUpdate = true;
      }

      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Context Lost / Restored handling
    const handleContextLost = (event: Event) => {
      event.preventDefault();
      cancelAnimationFrame(animationFrameId);
    };

    const handleContextRestored = () => {
      animate();
    };

    const canvasElem = renderer.domElement;
    canvasElem.addEventListener('webglcontextlost', handleContextLost, false);
    canvasElem.addEventListener('webglcontextrestored', handleContextRestored, false);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
      canvasElem.removeEventListener('webglcontextlost', handleContextLost);
      canvasElem.removeEventListener('webglcontextrestored', handleContextRestored);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      // Dispose Three.js objects
      sphereGeom.dispose();
      wireframeMat.dispose();
      innerGeom.dispose();
      innerMat.dispose();
      nodeGeom.dispose();
      nodeMat.dispose();
      ambientGeom.dispose();
      ambientMat.dispose();
      ringGeom.dispose();
      ringMat.dispose();
      secondRingGeom.dispose();
      secondRingMat.dispose();
      hexGeom.dispose();
      hexMat.dispose();
      particleTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {/* 3D WebGL Canvas Container */}
      <div 
        ref={containerRef} 
        className="w-full h-full opacity-90 transition-opacity duration-1000"
        aria-hidden="true"
      />

      {/* Graceful Fallback if WebGL is unavailable */}
      {!webglSupported && (
        <div className="absolute inset-0 flex items-center justify-center bg-radial from-cyan-950/20 to-transparent">
          <div className="relative w-72 h-72 rounded-full border border-cyan-500/20 bg-cyan-950/10 backdrop-blur-sm flex items-center justify-center animate-pulse">
            <div className="w-48 h-48 rounded-full border border-blue-500/30 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-cyan-500/10 blur-xl"></div>
            </div>
          </div>
        </div>
      )}

      {/* Soft Vignette & Depth Mask: keeps text crystal clear while 3D flows through */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/50 via-transparent to-[#030712] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#030712_95%)] pointer-events-none" />
    </div>
  );
};
