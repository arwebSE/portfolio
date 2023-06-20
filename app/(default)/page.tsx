export const metadata = {
    title: "home | arweb",
    description: "Shaping Your Online Presence",
};

import Hero from "@/components/hero";
import Features from "@/components/showcase";
import FeaturesBlocks from "@/components/solutions";
import Testimonials from "@/components/testimonials";
export default function Home() {
    return (
        <>
            <Hero />
            <Features />
            <FeaturesBlocks />
            <Testimonials />
        </>
    );
}
