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
        // Apply the brand's primary color as the background
        <div style={{ background: 'var(--primary-color)', minHeight: '100vh', position: 'relative' }}>
            <Vortex
                particleCount={400}
                baseHue={345}       // exact Staxxd hot pink (#ff2e63 ≈ 345°)
                rangeHue={25}       // stays within pink → coral → crimson only
                baseSpeed={0.3}
                rangeSpeed={1.0}
                baseRadius={0.7}
                rangeRadius={2.0}
                rangeY={700}
                backgroundColor="transparent"
                containerClassName="min-h-screen"
                className="flex items-center justify-center w-full h-full"
            >
                <div className="w-full max-w-7xl px-4 sm:px-6">
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
