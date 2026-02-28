'use client';

import React, { useEffect, useRef, ReactNode } from 'react';

interface AnimatedCardProps {
    children: ReactNode;
    className?: string;
}

const AnimatedCard = ({ children, className = "" }: AnimatedCardProps) => {
    const topRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);
    const leftRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let animationId: number;

        const animateBorder = () => {
            const now = Date.now() / 1000;
            const speed = 0.5; // Animation speed

            // Calculate positions based on time
            const topX = Math.sin(now * speed) * 100;
            const rightY = Math.cos(now * speed) * 100;
            const bottomX = Math.sin(now * speed + Math.PI) * 100;
            const leftY = Math.cos(now * speed + Math.PI) * 100;

            // Apply positions to elements
            if (topRef.current) topRef.current.style.transform = `translateX(${topX}%)`;
            if (rightRef.current) rightRef.current.style.transform = `translateY(${rightY}%)`;
            if (bottomRef.current) bottomRef.current.style.transform = `translateX(${bottomX}%)`;
            if (leftRef.current) leftRef.current.style.transform = `translateY(${leftY}%)`;

            animationId = requestAnimationFrame(animateBorder);
        };

        animationId = requestAnimationFrame(animateBorder);
        return () => cancelAnimationFrame(animationId);
    }, []);

    return (
        <div className={`relative w-full overflow-hidden ${className}`}>
            {/* Animated border elements using Staxxd brand colors */}
            <div className="absolute top-0 left-0 w-full h-0.5 overflow-hidden z-0">
                <div
                    ref={topRef}
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#ff2e63]/70 to-transparent"
                ></div>
            </div>

            <div className="absolute top-0 right-0 w-0.5 h-full overflow-hidden z-0">
                <div
                    ref={rightRef}
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#ff6b9d]/70 to-transparent"
                ></div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-0.5 overflow-hidden z-0">
                <div
                    ref={bottomRef}
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#ff2e63]/70 to-transparent"
                ></div>
            </div>

            <div className="absolute top-0 left-0 w-0.5 h-full overflow-hidden z-0">
                <div
                    ref={leftRef}
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#ff6b9d]/70 to-transparent"
                ></div>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    );
};

export default AnimatedCard;
