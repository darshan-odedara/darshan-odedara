"use client";

import { MailIcon, Instagram, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/components/magicui/dock";

export type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
    email: (props: IconProps) => <MailIcon {...props} />,
    instagram: (props: IconProps) => <Instagram {...props} />,
    linkedin: (props: IconProps) => (
        <Linkedin {...props} />
    ),
    github: (props: IconProps) => (
        <Github {...props} />
    ),
};

const DATA = {
    contact: {
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/darshan-odedara",
                icon: Icons.github,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/darshan-odedara/",
                icon: Icons.linkedin,
            },
            Email: {
                name: "Send Email",
                url: "mailto:darshanodedara.official@gmail.com",
                icon: Icons.email,
            },
            Instagram: {
                name: "Follow IG",
                url: "https://www.instagram.com/darshan.odedara/",
                icon: Icons.instagram,
            },
        },
    },
};

export function Socials() {
    return (
        <TooltipProvider>
            <Dock direction="middle">
                {Object.entries(DATA.contact.social).map(([name, social]) => (
                    <DockIcon key={name}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href={social.url}
                                    target="_blank"
                                    aria-label={social.name}
                                    className={cn(
                                        buttonVariants({ variant: "ghost", size: "icon" }),
                                        "size-12 rounded-full",
                                    )}
                                >
                                    <social.icon className="size-5" />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{name}</p>
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                ))}
            </Dock>
        </TooltipProvider>
    );
}
