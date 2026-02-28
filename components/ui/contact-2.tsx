import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface Contact2Props {
    title?: string;
    description?: string;
    phone?: string;
    email?: string;
    web?: { label: string; url: string };
}

export const Contact2 = ({
    title = "Contact Us",
    description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
    phone = "(123) 34567890",
    email = "email@example.com",
    web = { label: "shadcnblocks.com", url: "https://shadcnblocks.com" },
}: Contact2Props) => {
    return (
        <section className="py-32">
            <div className="container">
                <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
                    <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
                        <div className="text-center lg:text-left">
                            <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl text-white">
                                {title}
                            </h1>
                            <p className="text-gray-300">{description}</p>
                        </div>
                        <div className="mx-auto w-fit lg:mx-0 text-white">
                            <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left">
                                Contact Details
                            </h3>
                            <ul className="ml-4 list-disc">
                                <li className="mb-2">
                                    <span className="font-bold">Phone: </span>
                                    {phone}
                                </li>
                                <li className="mb-2">
                                    <span className="font-bold">Email: </span>
                                    <a href={`mailto:${email}`} className="text-brand-accent hover:text-brand-accent-light transition-colors">
                                        {email}
                                    </a>
                                </li>
                                <li>
                                    <span className="font-bold">Web: </span>
                                    <a href={web.url} target="_blank" className="text-brand-accent hover:text-brand-accent-light transition-colors">
                                        {web.label}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg border border-white/20 bg-white/5 p-10 shadow-lg backdrop-blur-sm">
                        <form action="https://formspree.io/f/xojjqarb" method="POST" className="flex flex-col gap-6">
                            <div className="flex flex-col gap-4 sm:flex-row">
                                <div className="grid w-full items-center gap-1.5">
                                    <Label htmlFor="firstname" className="text-white">First Name</Label>
                                    <Input type="text" id="firstname" name="firstname" placeholder="First Name" required className="bg-white/10 text-white border-white/20 placeholder:text-gray-400 focus-visible:ring-brand-accent focus-visible:border-brand-accent" />
                                </div>
                                <div className="grid w-full items-center gap-1.5">
                                    <Label htmlFor="lastname" className="text-white">Last Name</Label>
                                    <Input type="text" id="lastname" name="lastname" placeholder="Last Name" required className="bg-white/10 text-white border-white/20 placeholder:text-gray-400 focus-visible:ring-brand-accent focus-visible:border-brand-accent" />
                                </div>
                            </div>
                            <div className="grid w-full items-center gap-1.5">
                                <Label htmlFor="email" className="text-white">Email</Label>
                                <Input type="email" id="email" name="email" placeholder="Email" required className="bg-white/10 text-white border-white/20 placeholder:text-gray-400 focus-visible:ring-brand-accent focus-visible:border-brand-accent" />
                            </div>
                            <div className="grid w-full items-center gap-1.5">
                                <Label htmlFor="subject" className="text-white">Subject</Label>
                                <Input type="text" id="subject" name="subject" placeholder="Subject" required className="bg-white/10 text-white border-white/20 placeholder:text-gray-400 focus-visible:ring-brand-accent focus-visible:border-brand-accent" />
                            </div>
                            <div className="grid w-full gap-1.5">
                                <Label htmlFor="message" className="text-white">Message</Label>
                                <Textarea placeholder="Type your message here." id="message" name="message" required className="bg-white/10 text-white border-white/20 placeholder:text-gray-400 focus-visible:ring-brand-accent focus-visible:border-brand-accent min-h-[120px]" />
                            </div>
                            <Button type="submit" className="w-full bg-brand-accent hover:bg-brand-accent-light text-white font-bold py-3 text-base">Send Message</Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
