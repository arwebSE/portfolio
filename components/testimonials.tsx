import Image from "next/image";
import TestimonialImage from "@/public/img/stefan.jpg";
import Logo1 from "@/public/img/speedylogo.png";
import Logo2 from "@/public/img/polifylogo.png";

export default function Testimonials() {
    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">
                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h2 className="h2 mb-4">
                            Feedback from Satisfied Customers
                        </h2>
                        <p
                            className="text-xl text-gray-600"
                            data-aos="zoom-y-out"
                        >
                            Our commitment to excellence shines through in every
                            project, as reflected in the glowing testimonials
                            from our happy clients.
                        </p>
                    </div>

                    {/* LOGOS */}
                    <div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-5">
                        {/* Item */}
                        <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
                            <Image
                                src={Logo1}
                                alt="Speedy Bilservice"
                                width={120}
                            />
                        </div>

                        {/* Item */}
                        <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
                            <Image
                                src={Logo2}
                                alt="Speedy Bilservice"
                                width={110}
                            />
                        </div>

                        {/* Item */}
                        <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
                            <Image
                                src={Logo2}
                                alt="Speedy Bilservice"
                                width={110}
                            />{" "}
                            asd
                        </div>
                    </div>

                    {/* Testimonials */}
                    <div
                        className="max-w-3xl mx-auto mt-20"
                        data-aos="zoom-y-out"
                    >
                        <div className="relative flex items-start border-2 border-gray-200 rounded bg-white shadow-xl dark:bg-neutral-900/80 backdrop-blur-xl dark:border-neutral-800">
                            {/* Testimonial */}
                            <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                                    <Image
                                        className="relative rounded-full"
                                        src={TestimonialImage}
                                        width={96}
                                        height={96}
                                        alt="Testimonial 01"
                                    />
                                </div>
                                <blockquote className="text-xl font-medium mb-4">
                                    “ARWeb exceeded all expectations in
                                    developing our website. Their excellent
                                    communication skills and ability to tailor
                                    the site to our needs resulted in a
                                    remarkable online presence. Highly
                                    recommended!“
                                </blockquote>
                                <cite className="block font-bold text-lg not-italic mb-1">
                                    Stefan Jacobsson
                                </cite>
                                <div className="text-gray-600">
                                    <span>CEO</span>{" "}
                                    <a
                                        className="text-blue-600 hover:underline"
                                        href="#0"
                                    >
                                        @Speedy Bilservice
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
