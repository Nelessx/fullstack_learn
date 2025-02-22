"use client";

import {
    FacebookIcon,
    InstagramIcon,
    LinkedinIcon,
    Twitter,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import Dock from "./ui/dock";

const items = [
    {
        icon: <FacebookIcon size={18} />,
        label: "Facebook",
        onClick: () => alert("Home!"),
    },
    {
        icon: <Twitter size={18} />,
        label: "Twitter",
        onClick: () => alert("Archive!"),
    },
    {
        icon: <InstagramIcon size={18} />,
        label: "Instagram",
        onClick: () => alert("Profile!"),
    },
    {
        icon: <LinkedinIcon size={18} />,
        label: "Linkedin",
        onClick: () => alert("Settings!"),
    },
];

interface FooterLink {
    label: string;
    href: string;
}

interface FooterSection {
    title: string;
    links: FooterLink[];
}

const footerData: FooterSection[] = [
    {
        title: "Homepages",
        links: [
            { label: "Classic List", href: "#" },
            { label: "Classic Grid", href: "#" },
            { label: "Classic Overlay", href: "#" },
            { label: "Hero Slider", href: "#" },
            { label: "Featured Posts", href: "#" },
        ],
    },
    {
        title: "Categories",
        links: [
            { label: "Technology", href: "#" },
            { label: "Travel", href: "#" },
            { label: "Sport", href: "#" },
            { label: "Business", href: "#" },
        ],
    },
    {
        title: "Pages",
        links: [
            { label: "About", href: "#" },
            { label: "Categories", href: "#" },
            { label: "Contacts", href: "#" },
        ],
    },
];

export default function Footer() {
    return (
        <div className=" relative w-11/12 mx-auto py-12 border-t  flex ">
            <div className=" w-6/12 space-y-16">
                <div className=" flex flex-col gap-4">
                    <Image
                        className=" w-32 h-full"
                        src="/logo-dark.png"
                        alt="img"
                        height={500}
                        width={500}
                    />
                    <p className=" w-9/12 text-white/70 text-sm pr-16">
                        Welcome to ultimate source for fresh perspectives! Explore curated
                        content to enlighten, entertain and engage global readers.
                    </p>
                    <div className=" relative flex  text-white/80">
                        <Dock
                            items={items}
                            panelHeight={68}
                            baseItemSize={40}
                            magnification={70}
                        />
                    </div>
                </div>
                <p className=" text-white/70 text-xs pt-10">
                    © 2024 — Revision. All Rights Reserved.
                </p>
            </div>

            <div className=" w-6/12 flex flex-col items-end">
                <div className=" flex gap-16">
                    {footerData.map((data, index) => (
                        <div key={index} className=" flex flex-col gap-4">
                            <p className="font-semibold text-white/75">{data.title}</p>
                            <div className=" flex flex-col gap-3">
                                {data.links.map((category,index)=>(
                                    <p key={index} className=" text-white/60 font-semibold hover:text-white/80" >
                                        <a href={category.href}>{category.label}</a>
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
