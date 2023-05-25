"use client;";

import { useState, useEffect, use } from "react";
import { useTheme } from "next-themes";
import { IoSunny, IoMoon } from "react-icons/io5";

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const light = theme === "light";

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <button className="fixed z-40 top-5 right-5 dark:bg-gray-900 dark:text-yellow-400 bg-gray-100 text-gray-900 w-10 h-10 rounded-full flex justify-center items-center">
            {light ? (
                <IoMoon onClick={() => setTheme("dark")} size={27} />
            ) : (
                <IoSunny onClick={() => setTheme("light")} size={27} />
            )}
        </button>
    );
}
