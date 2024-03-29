"use client";
import { useState, useRef, useEffect } from "react";
import { TabButton, TabItem } from "./ShowcaseTab";
import { IoBriefcase, IoCar, IoMusicalNotes } from "react-icons/io5";
import { GiHoneypot } from "react-icons/gi";
import { AiFillAndroid } from "react-icons/ai";

import Polify from "@/public/img/polify.png";
import NeedleGrey from "@/public/img/ng.png";
import Speedy from "@/public/img/speedy.png";
import miWeather from "@/public/img/miweather.png";

export default function Showcase() {
    const [tab, setTab] = useState<number>(1);
    const tabs = useRef<HTMLDivElement>(null);

    const heightFix = () => {
        if (tabs.current && tabs.current.parentElement)
            tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
    };

    useEffect(() => {
        heightFix();
    }, []);

    const tabsData = [
        {
            title: "Polify",
            description:
                "A site for Web3 organization Polify, tailored to their needs and collaboratively designed to reflect their vision.",
            icon: <IoBriefcase className="w-4 h-4 fill-current" />,
            image: Polify,
            link: "https://polify.xyz",
            linkText: "Visit site",
        },
        {
            title: "Needle Grey",
            description:
                "The Needle Grey band's custom website is a stunning, clean, and simple platform.",
            icon: <IoMusicalNotes className="w-4 h-4 fill-current" />,
            image: NeedleGrey,
            link: "https://needlegrey.com",
            linkText: "Visit site",
        },
        {
            title: "Speedy Bilservice",
            description:
                "A custom tailored website for Speedy Bilservice, aligned with their unique requirements and objectives.",
            icon: <IoCar className="w-4 h-4 fill-current" />,
            image: Speedy,
        },
        {
            title: "miel 🍯",
            description:
                "A weather widget application built for Windows with Electron.js. Built together with a backend API built with Express.js.",
            icon: <GiHoneypot className="w-4 h-4 fill-current" />,
            image: "https://i.imgur.com/9OKMxJs.png",
            link: "https://github.com/arwebSE/miel",
        },
        {
            title: "miWeather",
            description: "A weather AppWidget written in Kotlin for Android.",
            icon: <AiFillAndroid className="w-4 h-4 fill-current" />,
            image: miWeather,
            link: "https://github.com/arwebSE/miWeather",
            height: 300,
        },
    ];

    return (
        <section className="relative pb-12">
            {/* Section background (needs .relative class on parent and next sibling elements) */}
            <div
                className="absolute inset-0 bg-gray-50 dark:bg-gray-900/10 pointer-events-none"
                aria-hidden="true"
            ></div>
            <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-300 transform -translate-y-1/2 dark:bg-gray-800"></div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-12 md:pt-20">
                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h1 className="h2 mb-4">
                            Experience Our Diverse Project Showcase
                        </h1>
                        <p className="text-xl text-gray-600">
                            Get inspired by the outstanding results we've
                            achieved for our clients.
                        </p>
                    </div>

                    {/* Section content */}
                    <div className="md:grid md:grid-cols-12 md:gap-6">
                        {/* Content */}
                        <div
                            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                            data-aos="fade-right"
                        >
                            {/* Tabs buttons */}
                            <div className="mb-8 md:mb-0">
                                {tabsData.map((tabData, index) => (
                                    <TabButton
                                        key={index}
                                        isActive={tab === index + 1}
                                        title={tabData.title}
                                        description={tabData.description}
                                        icon={tabData.icon}
                                        onClick={() => setTab(index + 1)}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Tabs items */}
                        <div
                            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                            data-aos="zoom-y-out"
                            ref={tabs}
                        >
                            <div className="relative flex flex-col text-center lg:text-right">
                                {/* Tabs items */}
                                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
                                    <div className="transition-all">
                                        <div
                                            className="relative flex flex-col text-center lg:text-right"
                                            data-aos="zoom-y-out"
                                            ref={tabs}
                                        >
                                            {tabsData.map((tabData, index) => (
                                                <TabItem
                                                    key={index}
                                                    title={tabData.title}
                                                    isActive={tab === index + 1}
                                                    image={tabData.image}
                                                    link={tabData.link}
                                                    height={tabData.height}
                                                    linkText={tabData.linkText}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
