import VideoThumb from "@/public/images/hero-image.png";
import ModalVideo from "@/components/modal-video";

export default function Hero() {
    return (
        <section className="relative">
            <div className="flex min-h-screen flex-col items-center justify-between p-24 bg bg-gradient-to-b from-white to-gray-400 dark:to-neutral-950 dark:from-slate-900">
                {/* Hero content */}
                <div className="pt-32 pb-12 md:pt-40 md:pb-20 relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/2 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
                    {/* Section header */}
                    <div className="text-center pb-12 md:pb-16">
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
                                className="text-xl text-gray-600 mb-8"
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
                                <div>
                                    <a
                                        className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                                        href="#0"
                                    >
                                        Check Our Work
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
