"use client";

import { Transition } from "@headlessui/react";
import Image, { StaticImageData } from "next/image";
import { ReactNode, useEffect, useRef, useState } from "react";

interface TabButtonProps {
    isActive: boolean;
    title: string;
    description: string;
    icon: ReactNode;
    onClick: () => void;
}

interface TabItemProps {
    title: string;
    isActive: boolean;
    image: string | StaticImageData;
    link?: string;
    height?: number;
    linkText?: string;
}

const TabButton = ({
    isActive,
    title,
    description,
    icon,
    onClick,
}: TabButtonProps) => {
    return (
        <a
            className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                isActive
                    ? "bg-gray-200 border-transparent dark:bg-gray-900 dark:border-gray-800"
                    : "bg-white shadow-md border-gray-200 hover:shadow-lg dark:bg-gray-800 dark:border-gray-700"
            }`}
            href="#0"
            onClick={onClick}
        >
            <div>
                <div className="font-bold leading-snug tracking-tight mb-1">
                    {title}
                </div>
                <div className="text-gray-600">{description}</div>
            </div>
            <div className="flex justify-center items-center w-8 h-8 bg-white dark:bg-black rounded-full shadow flex-shrink-0 ml-3">
                {icon}
            </div>
        </a>
    );
};

const TabItem = ({
    title,
    isActive,
    image,
    link,
    height,
    linkText,
}: TabItemProps) => {
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
        <Transition
            show={isActive}
            appear={true}
            className="w-full"
            enter="transition ease-in-out duration-700 transform order-first"
            enterFrom="opacity-0 translate-y-16"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in-out duration-300 transform absolute"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-16"
            beforeEnter={() => heightFix()}
            unmount={false}
        >
            <div className="relative inline-flex flex-col">
                <Image
                    className="md:max-w-none mx-auto rounded"
                    src={image}
                    width={height || 500}
                    height={height || 462}
                    alt={title + " screenshot"}
                />
                {link ? (
                    <a
                        className="flex items-center justify-center mt-5 text-lg font-bold leading-snug tracking-tight text-white transition duration-300 ease-in-out bg-gray-700 dark:bg-gray-900 bg-opacity-80 hover:bg-opacity-70 rounded py-3 px-5"
                        href={link}
                    >
                        {linkText || "See more about this project"} &rarr;
                    </a>
                ) : (
                    ""
                )}
            </div>
        </Transition>
    );
};

export { TabButton, TabItem };
