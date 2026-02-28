"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

// Using stable Unsplash stock images for profiles
const unsplashFaces = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&q=80",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=150&q=80",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80"
];

const getImg = (idx: number) => unsplashFaces[idx % unsplashFaces.length];

interface Testimonial {
    quote: string;
    author: string;
    company: string;
}

interface TestimonialCardProps {
    position: number;
    testimonial: {
        quote: string;
        author: string;
        company: string;
        imgSrc: string;
        tempId: number;
    };
    handleMove: (steps: number) => void;
    cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
    position,
    testimonial,
    handleMove,
    cardSize
}) => {
    const isCenter = position === 0;

    return (
        <div
            onClick={() => handleMove(position)}
            className={cn(
                "absolute left-1/2 top-1/2 cursor-pointer border-2 p-6 sm:p-8 transition-all duration-500 ease-in-out",
                isCenter
                    ? "z-10 bg-[#FF2E63] text-white border-[#FF2E63] shadow-2xl"
                    : "z-0 bg-white/5 text-gray-200 border-white/10 hover:border-[#FF2E63]/30 backdrop-blur-xl"
            )}
            style={{
                width: cardSize,
                height: cardSize + 40, // Extra height for text buffer
                clipPath: `polygon(40px 0%, calc(100% - 40px) 0%, 100% 40px, 100% 100%, calc(100% - 40px) 100%, 40px 100%, 0 100%, 0 0)`,
                transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.4) * position}px)
          translateY(${isCenter ? -70 : position % 2 ? 10 : -10}px)
          scale(${isCenter ? 1 : 0.85})
          rotate(${isCenter ? 0 : position % 2 ? 2 : -2}deg)
        `,
                boxShadow: isCenter ? "0 25px 50px -12px rgba(255, 46, 99, 0.5)" : "none"
            }}
        >
            <div className="flex flex-col h-full">
                <div className="flex items-center gap-4 mb-4">
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-white/20">
                        <img
                            src={testimonial.imgSrc}
                            alt={testimonial.author}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="overflow-hidden">
                        <p className={cn(
                            "font-bold text-sm sm:text-base truncate",
                            isCenter ? "text-white" : "text-gray-100"
                        )}>
                            {testimonial.author}
                        </p>
                        <p className={cn(
                            "text-xs sm:text-sm truncate opacity-80",
                            isCenter ? "text-white/80" : "text-gray-400"
                        )}>
                            {testimonial.company}
                        </p>
                    </div>
                </div>

                <div className="flex-1 flex flex-col justify-start overflow-hidden pt-2">
                    <h3 className={cn(
                        "text-base sm:text-lg lg:text-xl font-medium leading-normal italic line-clamp-8 sm:line-clamp-none",
                        isCenter ? "text-white" : "text-gray-100/90"
                    )}>
                        "{testimonial.quote}"
                    </h3>
                </div>

                <div className="mt-auto pt-4 flex justify-end">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="opacity-20 translate-x-1">
                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 13.4477 10.017 14V18C10.017 19.1046 9.12158 20 8.017 20H5.017C4.46472 20 4.017 19.5523 4.017 19V5C4.017 3.89543 4.91243 3 6.017 3H19.017C20.1216 3 21.017 3.89543 21.017 5V15C21.017 17.2091 19.2261 19 17.017 19H14.017V21H14.017Z" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

interface StaggerTestimonialsProps {
    items: Testimonial[];
}

export const StaggerTestimonials: React.FC<StaggerTestimonialsProps> = ({ items }) => {
    const [cardSize, setCardSize] = useState(365);
    const enrichedItems = items.map((item, idx) => ({
        ...item,
        imgSrc: getImg(idx),
        tempId: idx
    }));
    const [testimonialsList, setTestimonialsList] = useState(enrichedItems);


    const handleMove = (steps: number) => {
        const newList = [...testimonialsList];
        if (steps > 0) {
            for (let i = steps; i > 0; i--) {
                const item = newList.shift();
                if (!item) return;
                newList.push({ ...item, tempId: Math.random() });
            }
        } else {
            for (let i = steps; i < 0; i++) {
                const item = newList.pop();
                if (!item) return;
                newList.unshift({ ...item, tempId: Math.random() });
            }
        }
        setTestimonialsList(newList);
    };

    useEffect(() => {
        const updateSize = () => {
            const { matches } = window.matchMedia("(min-width: 640px)");
            setCardSize(matches ? 420 : 340);
        };

        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return (
        <div
            className="relative w-full overflow-hidden bg-transparent"
            style={{ height: 600 }}
        >
            {testimonialsList.map((testimonial, index) => {
                const position = testimonialsList.length % 2
                    ? index - (testimonialsList.length + 1) / 2
                    : index - testimonialsList.length / 2;
                return (
                    <TestimonialCard
                        key={testimonial.tempId}
                        testimonial={testimonial}
                        handleMove={handleMove}
                        position={position}
                        cardSize={cardSize}
                    />
                );
            })}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                <button
                    onClick={() => handleMove(-1)}
                    className={cn(
                        "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
                        "bg-white/10 text-white border-2 border-white/20 hover:bg-[#FF2E63] hover:border-[#FF2E63] backdrop-blur-sm",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    )}
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft />
                </button>
                <button
                    onClick={() => handleMove(1)}
                    className={cn(
                        "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
                        "bg-white/10 text-white border-2 border-white/20 hover:bg-[#FF2E63] hover:border-[#FF2E63] backdrop-blur-sm",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    )}
                    aria-label="Next testimonial"
                >
                    <ChevronRight />
                </button>
            </div>
        </div>
    );
};
