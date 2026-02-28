'use client';

import { Vortex } from '@/components/ui/vortex';
import { Contact2 } from '@/components/ui/contact-2';

interface ContactWithVortexProps {
    title: string;
    description: string;
    phone: string;
    email: string;
    web: { label: string; url: string };
}

export function ContactWithVortex({ title, description, phone, email, web }: ContactWithVortexProps) {
    return (
        // The outer div locks in the dark Staxxd background at CSS level
        // so no parent body/global gradient bleeds through
        <div style={{ background: '#060611', minHeight: '100vh' }}>
            <Vortex
                particleCount={500}
                baseHue={345}       // exact Staxxd hot pink (#ff2e63 ≈ 345°)
                rangeHue={25}       // stays within pink → coral → crimson only
                baseSpeed={0.4}
                rangeSpeed={1.2}
                baseRadius={1}
                rangeRadius={2.5}
                rangeY={700}
                backgroundColor="#060611"
                containerClassName="min-h-screen pt-24 pb-16"
                className="flex items-start justify-center w-full h-full"
            >
                <div className="w-full max-w-7xl px-6">
                    <Contact2
                        title={title}
                        description={description}
                        phone={phone}
                        email={email}
                        web={web}
                    />
                </div>
            </Vortex>
        </div>
    );
}
