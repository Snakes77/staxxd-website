'use client';

import React from 'react';

export interface AccordionItemData {
    id: string | number;
    title: string;
    imageUrl: string;
}

interface AccordionItemProps {
    item: AccordionItemData;
    isActive: boolean;
    onMouseEnter: () => void;
}

const AccordionItem = ({ item, isActive, onMouseEnter }: AccordionItemProps) => {
    return (
        <div
            className={`
        relative h-[450px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out border-2
        ${isActive ? 'w-[100%] sm:w-[350px] border-brand-accent/50 shadow-lg shadow-brand-accent/30' : 'w-[60px] border-white/10 hover:border-brand-accent/30'}
      `}
            onMouseEnter={onMouseEnter}
        >
            {/* Background Image */}
            <img
                src={item.imageUrl}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://placehold.co/400x450/2d3748/ffffff?text=Image+Error'; }}
            />
            {/* Dark overlay for better text readability */}
            <div className={`absolute inset-0 transition-colors duration-500 bg-black/40 ${isActive ? 'bg-black/20' : ''}`}></div>

            {/* Glowing effect for active */}
            <div className={`absolute -inset-0.5 bg-gradient-to-r from-brand-accent to-brand-accent-light opacity-0 transition-opacity duration-500 blur-md pointer-events-none ${isActive ? 'opacity-20' : ''}`} />

            {/* Caption Text */}
            <span
                className={`
          absolute text-white font-bold whitespace-nowrap
          transition-all duration-300 ease-in-out
          ${isActive
                        ? 'bottom-6 left-1/2 -translate-x-1/2 rotate-0 text-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]' // Active state: horizontal, bottom-center
                        // Inactive state: vertical, positioned at the bottom, for all screen sizes
                        : 'w-auto text-left bottom-24 left-1/2 -translate-x-1/2 rotate-90 text-gray-300 text-lg hover:text-white'
                    }
        `}
            >
                {item.title}
            </span>
        </div>
    );
};

interface InteractiveImageAccordionProps {
    items: AccordionItemData[];
    activeIndex: number;
    setActiveIndex: (index: number) => void;
}

export function InteractiveImageAccordion({ items, activeIndex, setActiveIndex }: InteractiveImageAccordionProps) {
    return (
        <div className="flex flex-row items-center justify-center gap-2 sm:gap-4 w-full">
            {items.map((item, index) => (
                <AccordionItem
                    key={item.id}
                    item={item}
                    isActive={index === activeIndex}
                    onMouseEnter={() => setActiveIndex(index)}
                />
            ))}
        </div>
    );
}
