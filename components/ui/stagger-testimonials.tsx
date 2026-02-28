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

const testimonials = [
    {
        tempId: 0,
        testimonial: "Staxxd completely transformed our operations. We work 5x faster now.",
        by: "Alex, CEO at TechCorp",
        imgSrc: getImg(0)
    },
    {
        tempId: 1,
        testimonial: "I'm confident our processes are finally scalable with Staxxd. Incredible work.",
        by: "Dan, CTO at SecureNet",
        imgSrc: getImg(1)
    },
    {
        tempId: 2,
        testimonial: "We were drowning in admin before we found Staxxd. Can't thank you guys enough!",
        by: "Stephanie, COO at InnovateCo",
        imgSrc: getImg(2)
    },
    {
        tempId: 3,
        testimonial: "Staxxd's custom automations make planning for the future seamless. Highly recommended!",
        by: "Marie, CFO at FuturePlanning",
        imgSrc: getImg(3)
    },
    {
        tempId: 4,
        testimonial: "If I could give 11 stars, I'd give 12. Unbelievably fast turnaround.",
        by: "Andre, Head of Operations at CreativeSolutions",
        imgSrc: getImg(4)
    },
    {
        tempId: 5,
        testimonial: "SO HAPPY WE FOUND YOU GUYS!!!! I'd bet Staxxd has saved me 100 hours so far.",
        by: "Jeremy, Product Manager at TimeWise",
        imgSrc: getImg(5)
    },
    {
        tempId: 6,
        testimonial: "Took some convincing, but now that we use Staxxd's custom scripts, we're never going back.",
        by: "Pam, Marketing Director at BrandBuilders",
        imgSrc: getImg(6)
    },
    {
        tempId: 7,
        testimonial: "I would be lost without Staxxd's deep business analysis. The ROI is EASILY 10X for us.",
        by: "Daniel, Data Scientist at AnalyticsPro",
        imgSrc: getImg(7)
    },
    {
        tempId: 8,
        testimonial: "They didn't just give us software, they solved our actual business problems.",
        by: "Fernando, Director at UserFirst",
        imgSrc: getImg(8)
    },
    {
        tempId: 9,
        testimonial: "I hired them 2 years ago to fix one workflow, and they stayed to fix everything.",
        by: "Andy, Head of IT at CloudMasters",
        imgSrc: getImg(9)
    },
    {
        tempId: 10,
        testimonial: "I've been searching for an analytical partner like Staxxd for YEARS.",
        by: "Pete, Sales Director at RevenueRockets",
        imgSrc: getImg(0)
    },
    {
        tempId: 11,
        testimonial: "It's so simple and intuitive, we got the whole company up to speed in days.",
        by: "Marina, HR Manager at TalentForge",
        imgSrc: getImg(1)
    },
    {
        tempId: 12,
        testimonial: "Staxxd's problem-solving approach is unparalleled. They get it.",
        by: "Olivia, Customer Success Manager at ClientCare",
        imgSrc: getImg(2)
    },
    {
        tempId: 13,
        testimonial: "The efficiency gains we've seen since bringing in Staxxd are off the charts!",
        by: "Raj, Operations Manager at StreamlineSolutions",
        imgSrc: getImg(3)
    },
    {
        tempId: 14,
        testimonial: "Staxxd has revolutionized how we handle our data. It's a game-changer.",
        by: "Lila, Workflow Specialist at ProcessPro",
        imgSrc: getImg(4)
    },
    {
        tempId: 15,
        testimonial: "They actually listen and adapt to what we need, not what they want to sell.",
        by: "Trevor, Partner at GrowthGurus",
        imgSrc: getImg(5)
    },
    {
        tempId: 16,
        testimonial: "I appreciate how Staxxd continually finds new ways to save us time and money.",
        by: "Naomi, Innovation Lead at FutureTech",
        imgSrc: getImg(6)
    },
    {
        tempId: 17,
        testimonial: "The ROI we've seen with Staxxd in just 3 months is incredible.",
        by: "Victor, Finance Director at ProfitPeak",
        imgSrc: getImg(7)
    },
    {
        tempId: 18,
        testimonial: "Very analytical, highly professional, and they deliver exactly what they promise.",
        by: "Yuki, Managing Director at BalancedTech",
        imgSrc: getImg(8)
    },
    {
        tempId: 19,
        testimonial: "We've tried many consultants, but Staxxd stands out for actually getting things done.",
        by: "Zoe, General Manager at ReliableSystems",
        imgSrc: getImg(9)
    }
];

interface TestimonialCardProps {
    position: number;
    testimonial: typeof testimonials[0];
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
                "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
                isCenter
                    ? "z-10 bg-[#FF2E63] text-white border-[#FF2E63]"
                    : "z-0 bg-white/10 text-gray-200 border-white/20 hover:border-[#FF2E63]/50 backdrop-blur-md"
            )}
            style={{
                width: cardSize,
                height: cardSize,
                clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
                transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
                boxShadow: isCenter ? "0px 8px 0px 4px rgba(255, 255, 255, 0.1)" : "0px 0px 0px 0px transparent"
            }}
        >
            <span
                className="absolute block origin-top-right rotate-45 bg-white/20"
                style={{
                    right: -2,
                    top: 48,
                    width: SQRT_5000,
                    height: 2
                }}
            />
            <img
                src={testimonial.imgSrc}
                alt={`${testimonial.by.split(',')[0]}`}
                className="mb-4 h-14 w-12 object-cover object-top"
                style={{
                    boxShadow: isCenter ? "3px 3px 0px rgba(0,0,0,0.3)" : "3px 3px 0px rgba(255,255,255,0.1)"
                }}
            />
            <h3 className={cn(
                "text-base sm:text-xl font-medium",
                isCenter ? "text-white" : "text-gray-100"
            )}>
                "{testimonial.testimonial}"
            </h3>
            <p className={cn(
                "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
                isCenter ? "text-white/80" : "text-gray-400"
            )}>
                - {testimonial.by}
            </p>
        </div>
    );
};

export const StaggerTestimonials: React.FC = () => {
    const [cardSize, setCardSize] = useState(365);
    const [testimonialsList, setTestimonialsList] = useState(testimonials);

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
            setCardSize(matches ? 365 : 290);
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
