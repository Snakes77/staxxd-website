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
            <div
                className={`
          absolute transition-all duration-500 ease-in-out pointer-events-none
          ${isActive
                        ? 'inset-x-0 bottom-8 px-4 flex justify-center rotate-0 opacity-100'
                        : 'inset-0 flex items-center justify-center -rotate-90 opacity-90'
                    }
        `}
            >
                <span className={`
                    whitespace-nowrap inline-block px-4 py-2 rounded-full font-bold text-white
                    backdrop-blur-md border border-white/20 text-center
                    ${isActive
                        ? 'text-lg sm:text-xl bg-black/40 shadow-xl max-w-[90%] !whitespace-normal leading-tight'
                        : 'text-xs sm:text-sm bg-black/60 shadow-lg max-w-[400px] truncate'
                    }
                `}>
                    {item.title}
                </span>
            </div>
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
