"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import FeaturesBg from "@/public/images/features-bg.png";
import FeaturesElement from "@/public/images/features-element.png";
import Feature1 from "@/public/img/speedy.png";
import Feature2 from "@/public/img/polify.png";
import Feature3 from "@/public/img/ng.png";
import { IoBag, IoBriefcase, IoCar, IoMusicalNotes } from "react-icons/io5";

export default function Features() {
    const [tab, setTab] = useState<number>(1);

    const tabs = useRef<HTMLDivElement>(null);

    const heightFix = () => {
        if (tabs.current && tabs.current.parentElement)
            tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
    };

    useEffect(() => {
        heightFix();
    }, []);

    return (
        <section className="relative">
            {/* Section background (needs .relative class on parent and next sibling elements) */}
            <div
                className="absolute inset-0 bg-gray-100 dark:bg-black pointer-events-none mb-16"
                aria-hidden="true"
            ></div>
            <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

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
                            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
                            data-aos="fade-right"
                        >
                            {/* Tabs buttons */}
                            <div className="mb-8 md:mb-0">
                                <a
                                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                                        tab !== 1
                                            ? "bg-white shadow-md border-gray-200 hover:shadow-lg dark:bg-gray-800 dark:border-gray-700"
                                            : "bg-gray-200 border-transparent dark:bg-gray-900 dark:border-gray-800"
                                    }`}
                                    href="#0"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setTab(1);
                                    }}
                                >
                                    <div>
                                        <div className="font-bold leading-snug tracking-tight mb-1">
                                            Speedy Bilservice
                                        </div>
                                        <div className="text-gray-600">
                                            A custom tailored website for Speedy
                                            Bilservice, aligned with their
                                            unique requirements and objectives.
                                            The result was a seamless online
                                            platform that showcased their brand
                                            and delivers an exceptional user
                                            experience.
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center w-8 h-8 bg-white dark:bg-black rounded-full shadow flex-shrink-0 ml-3">
                                        <IoCar className="w-5 h-5 fill-current" />
                                    </div>
                                </a>
                                <a
                                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                                        tab !== 2
                                            ? "bg-white shadow-md border-gray-200 hover:shadow-lg dark:bg-gray-800 dark:border-gray-700"
                                            : "bg-gray-200 border-transparent dark:bg-gray-900 dark:border-gray-800"
                                    }`}
                                    href="#0"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setTab(2);
                                    }}
                                >
                                    <div>
                                        <div className="font-bold leading-snug tracking-tight mb-1">
                                            Polify
                                        </div>
                                        <div className="text-gray-600">
                                            A custom site for Polify, a
                                            cutting-edge Web3 organization,
                                            tailored to their needs and
                                            collaboratively designed to reflect
                                            their vision. The result is a
                                            stunning digital platform that
                                            showcases their forward-thinking
                                            approach.
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center w-8 h-8 bg-white dark:bg-black rounded-full shadow flex-shrink-0 ml-3">
                                        <IoBriefcase className="w-4 h-4 fill-current" />
                                    </div>
                                </a>
                                <a
                                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                                        tab !== 3
                                            ? "bg-white shadow-md border-gray-200 hover:shadow-lg dark:bg-gray-800 dark:border-gray-700"
                                            : "bg-gray-200 border-transparent dark:bg-gray-900 dark:border-gray-800"
                                    }`}
                                    href="#0"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setTab(3);
                                    }}
                                >
                                    <div>
                                        <div className="font-bold leading-snug tracking-tight mb-1">
                                            Needle Grey
                                        </div>
                                        <div className="text-gray-600">
                                            The Needle Grey band's custom
                                            website is a stunning, clean, and
                                            simple platform. It gets straight to
                                            the point, featuring social media
                                            links and tour dates prominently.
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center w-8 h-8 bg-white dark:bg-black rounded-full shadow flex-shrink-0 ml-3">
                                        <IoMusicalNotes className="w-4 h-4 fill-current" />
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Tabs items */}
                        <div
                            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                            data-aos="zoom-y-out"
                            ref={tabs}
                        >
                            <div className="relative flex flex-col text-center lg:text-right">
                                {/* Item 1 */}
                                <Transition
                                    show={tab === 1}
                                    appear={true}
                                    className="w-full"
                                    enter="transition ease-in-out duration-700 transform order-first"
                                    enterFrom="opacity-0 translate-y-16"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in-out duration-300 transform absolute"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 -translate-y-16"
                                >
                                    <div className="relative inline-flex flex-col">
                                        <Image
                                            className="md:max-w-none mx-auto rounded"
                                            src={Feature1}
                                            width={500}
                                            height="462"
                                            alt="Features bg"
                                        />
                                    </div>
                                </Transition>
                                {/* Item 2 */}
                                <Transition
                                    show={tab === 2}
                                    appear={true}
                                    className="w-full"
                                    enter="transition ease-in-out duration-700 transform order-first"
                                    enterFrom="opacity-0 translate-y-16"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in-out duration-300 transform absolute"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 -translate-y-16"
                                >
                                    <div className="relative inline-flex flex-col">
                                        <Image
                                            className="md:max-w-none mx-auto rounded"
                                            src={Feature2}
                                            width={500}
                                            height="462"
                                            alt="Features bg"
                                        />
                                    </div>
                                </Transition>
                                {/* Item 3 */}
                                <Transition
                                    show={tab === 3}
                                    appear={true}
                                    className="w-full"
                                    enter="transition ease-in-out duration-700 transform order-first"
                                    enterFrom="opacity-0 translate-y-16"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in-out duration-300 transform absolute"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 -translate-y-16"
                                >
                                    <div className="relative inline-flex flex-col">
                                        <Image
                                            className="md:max-w-none mx-auto rounded"
                                            src={Feature3}
                                            width={500}
                                            height="462"
                                            alt="Features bg"
                                        />
                                    </div>
                                </Transition>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
