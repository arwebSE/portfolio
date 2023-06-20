import VideoThumb from "@/public/img/bg.png";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative">
            <div
                className="absolute left-1/2 transform -translate-x-1/2 top-12 pointer-events-none -z-1 dark:bg-gradient-to-b opacity-50 dark:opacity-100 dark:z-0 dark:transition-opacity dark:duration-500 ease-in-out dark:delay-300 dark:filter dark:brightness-75"
                aria-hidden="true"
            >
                <Image
                    src={VideoThumb}
                    alt="Video thumbnail"
                    className="object-cover w-full h-full saturate-75"
                />
            </div>

            <div className="flex min-h-screen flex-col items-center justify-between p-24 bg dark:bg-gradient-to-b from-white dark:to-black/70 dark:from-slate-900">
                {/* Hero content */}
                <div className="pt-32 pb-12 md:pt-40 md:pb-20 relative flex place-items-center before:absolute before:h-[300px] before:w-[450px] before:-translate-x-1 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:content-[''] after:absolute after:-z-20 after:h-[200px] after:w-[240px] after:translate-x-1/2 after:bg-gradient-radial after:from-sky-200 after:via-blue-200 after:content-[''] before:dark:bg-gradient-to-b before:dark:from-transparent before:dark:to-blue-700  after:dark:from-sky-900 after:dark:via-[#006AED] before:dark:opacity-30 after:dark:opacity-80 before:lg:h-[400px] before:blur-2xl after:blur-xl">
                    {/* Section header */}
                    <div className="text-center pb-12 md:pb-16 px-8 py-8 rounded-2xl backdrop-blur-md border border-gray-200/70 dark:border-gray-800/50 dark:backdrop-brightness-50">
                        <h1
                            className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                            data-aos="zoom-y-out"
                        >
                            Shape Your
                            <br />{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-400">
                                Online Presence
                            </span>
                        </h1>
                        <div className="max-w-3xl mx-auto">
                            <p
                                className="text-xl text-gray-700 mb-8 dark:text-gray-200"
                                data-aos="zoom-y-out"
                                data-aos-delay="150"
                            >
                                We precision-craft your digital platform to
                                mirror the unique spirit of your brand and
                                captivate your target audience.
                            </p>
                            <div
                                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                                data-aos="zoom-y-out"
                                data-aos-delay="300"
                            >
                                <div>
                                    <a
                                        className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
                                        href="#0"
                                    >
                                        Start a Project
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* some stuff */}
                </div>
            </div>
        </section>
    );
}
