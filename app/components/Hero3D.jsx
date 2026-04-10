'use client';

import { useRef, useMemo, useState, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Trail, Line, Sphere, Box } from '@react-three/drei';

// Neural Network Node
function NeuralNode({ position, color = '#00E5FF', scale = 1 }) {
    const meshRef = useRef();
    const [hovered, setHovered] = useState(false);

    useFrame((state) => {
        if (meshRef.current) {
            const time = state.clock.elapsedTime;
            meshRef.current.scale.setScalar(scale * (hovered ? 1.3 : 1) + Math.sin(time * 2 + position[0]) * 0.1);
        }
    });

    return (
        <Sphere
            ref={meshRef}
            position={position}
            args={[0.15, 16, 16]}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={hovered ? 2 : 0.8}
                transparent
                opacity={0.9}
            />
        </Sphere>
    );
}

// Connection Line between nodes
function Connection({ start, end, color = '#00E5FF' }) {
    const points = useMemo(() => {
        return [start, end];
    }, [start, end]);

    return (
        <Line
            points={points}
            color={color}
            lineWidth={1}
            transparent
            opacity={0.3}
        />
    );
}

// Data Particle flowing through network
function DataParticle({ start, end, speed = 1 }) {
    const ref = useRef();
    const [progress, setProgress] = useState(0);

    useFrame((state, delta) => {
        const newProgress = (progress + delta * speed) % 1;
        setProgress(newProgress);

        if (ref.current) {
            const x = start[0] + (end[0] - start[0]) * newProgress;
            const y = start[1] + (end[1] - start[1]) * newProgress;
            const z = start[2] + (end[2] - start[2]) * newProgress;
            ref.current.position.set(x, y, z);
        }
    });

    return (
        <Trail width={0.5} length={4} color="#00F5FF" attenuation={(t) => t * t}>
            <Sphere ref={ref} args={[0.05, 8, 8]}>
                <meshBasicMaterial color="#00F5FF" transparent opacity={0.8} />
            </Sphere>
        </Trail>
    );
}

// Floating Industrial Icon
function FloatingIcon({ icon, position, rotation = [0, 0, 0] }) {
    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <group position={position} rotation={rotation}>
                {icon === 'plc' && (
                    <Box args={[0.8, 0.5, 0.1]}>
                        <meshStandardMaterial color="#0A3D62" metalness={0.8} roughness={0.2} />
                    </Box>
                )}
                {icon === 'drone' && (
                    <group>
                        <Box args={[0.6, 0.1, 0.3]}>
                            <meshStandardMaterial color="#0A3D62" metalness={0.8} roughness={0.2} />
                        </Box>
                        <Box args={[0.1, 0.1, 0.4]} position={[0.4, 0, 0]}>
                            <meshStandardMaterial color="#0A3D62" metalness={0.8} roughness={0.2} />
                        </Box>
                        <Box args={[0.1, 0.1, 0.4]} position={[-0.4, 0, 0]}>
                            <meshStandardMaterial color="#0A3D62" metalness={0.8} roughness={0.2} />
                        </Box>
                    </group>
                )}
                {icon === 'cnc' && (
                    <Box args={[0.6, 0.4, 0.6]}>
                        <meshStandardMaterial color="#0A3D62" metalness={0.8} roughness={0.2} />
                    </Box>
                )}
                {icon === 'home' && (
                    <Box args={[0.5, 0.5, 0.5]}>
                        <meshStandardMaterial color="#0A3D62" metalness={0.8} roughness={0.2} />
                    </Box>
                )}
            </group>
        </Float>
    );
}

// Main Neural Network Scene
function NeuralNetwork() {
    const nodes = useMemo(() => {
        const positions = [];
        const nodeCount = 50;

        for (let i = 0; i < nodeCount; i++) {
            positions.push([
                (Math.random() - 0.5) * 15,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 8 - 5
            ]);
        }
        return positions;
    }, []);

    const connections = useMemo(() => {
        const conns = [];
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dist = Math.sqrt(
                    Math.pow(nodes[i][0] - nodes[j][0], 2) +
                    Math.pow(nodes[i][1] - nodes[j][1], 2) +
                    Math.pow(nodes[i][2] - nodes[j][2], 2)
                );
                if (dist < 3) {
                    conns.push({ start: nodes[i], end: nodes[j] });
                }
            }
        }
        return conns;
    }, [nodes]);

    return (
        <group>
            {/* Nodes */}
            {nodes.map((pos, i) => (
                <NeuralNode
                    key={i}
                    position={pos}
                    color={i % 3 === 0 ? '#00F5FF' : i % 3 === 1 ? '#0A3D62' : '#EA580C'}
                    scale={0.5 + Math.random() * 0.5}
                />
            ))}

            {/* Connections */}
            {connections.map((conn, i) => (
                <Connection key={i} start={conn.start} end={conn.end} />
            ))}

            {/* Data Particles on some connections */}
            {connections.slice(0, 15).map((conn, i) => (
                <DataParticle key={`particle-${i}`} start={conn.start} end={conn.end} speed={0.3 + Math.random() * 0.5} />
            ))}

            {/* Floating Icons */}
            <FloatingIcon icon="plc" position={[5, 2, -3]} rotation={[0, 0.5, 0]} />
            <FloatingIcon icon="drone" position={[-5, 3, -4]} rotation={[0.2, -0.3, 0]} />
            <FloatingIcon icon="cnc" position={[4, -2, -5]} rotation={[0, 0.8, 0]} />
            <FloatingIcon icon="home" position={[-4, -1, -3]} rotation={[0, -0.5, 0]} />
        </group>
    );
}

// Mouse interaction
function MouseInteraction() {
    const { camera, mouse } = useThree();
    const vec = { x: 0, y: 0 };

    useFrame(() => {
        vec.x = mouse.x * 5;
        vec.y = mouse.y * 3;
        camera.position.x += (vec.x - camera.position.x) * 0.02;
        camera.position.y += (vec.y - camera.position.y) * 0.02;
        camera.lookAt(0, 0, -5);
    });

    return null;
}

// Scene lighting
function SceneLighting() {
    return (
        <>
            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#00E5FF" />
            <pointLight position={[-10, -10, -5]} intensity={0.5} color="#EA580C" />
            <pointLight position={[0, 5, 0]} intensity={0.3} color="#00F5FF" />
        </>
    );
}

// Loading fallback
function LoadingFallback() {
    return (
        <mesh>
            <sphereGeometry args={[1, 16, 16]} />
            <meshBasicMaterial color="#00E5FF" wireframe />
        </mesh>
    );
}

// Main Hero3D Component
export default function Hero3D() {
    return (
        <div className="absolute inset-0 z-0">
            <Suspense fallback={<LoadingFallback />}>
                <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
                    {/* Background and fog removed so it overlays nicely over the MP4 video */}
                    <SceneLighting />
                    <NeuralNetwork />
                    <MouseInteraction />
                </Canvas>
            </Suspense>

        </div>
    );
}
