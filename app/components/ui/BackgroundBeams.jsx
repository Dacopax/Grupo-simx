"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const BackgroundBeams = ({ className }) => {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        if (canvasRef.current && containerRef.current) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
            const container = containerRef.current;

            const resizeCanvas = () => {
                const { width, height } = container.getBoundingClientRect();
                canvas.width = width;
                canvas.height = height;
            };

            resizeCanvas();
            window.addEventListener("resize", resizeCanvas);

            let animationFrameId;

            const render = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                // Simplified beam animation for performance and reliability
                // Real Aceternity implementation is more complex, but this gives the effect
                ctx.strokeStyle = "rgba(0, 229, 255, 0.1)";
                ctx.lineWidth = 1;

                ctx.beginPath();
                for (let i = 0; i < 5; i++) {
                    const y = (Date.now() / 20 + i * 200) % canvas.height;
                    ctx.moveTo(0, y);
                    ctx.lineTo(canvas.width, y + 100);
                }
                ctx.stroke();

                animationFrameId = window.requestAnimationFrame(render);
            };
            render();

            return () => {
                window.removeEventListener("resize", resizeCanvas);
                window.cancelAnimationFrame(animationFrameId);
            };
        }
    }, []);

    return (
        <div
            ref={containerRef}
            className={cn(
                "absolute inset-0 z-0 h-full w-full pointer-events-none",
                className
            )}
        >
            <canvas
                ref={canvasRef}
                className="h-full w-full opacity-[0.4]"
            />
        </div>
    );
};
