import { IoLogoGithub, IoLogoTwitter } from "react-icons/io5";
import Logo from "./logo";

export default function Footer() {
    return (
        <footer>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Top area: Blocks */}
                <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200 dark:border-gray-800">
                    {/* 1st block */}
                    <div className="sm:col-span-12 lg:col-span-3">
                        <div className="mb-2">
                            <Logo />
                        </div>
                        <div className="text-sm text-gray-600">
                            <a
                                href="#0"
                                className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out"
                            >
                                Terms
                            </a>{" "}
                            ·{" "}
                            <a
                                href="#0"
                                className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out"
                            >
                                Privacy Policy
                            </a>
                        </div>
                    </div>

                    {/* 2nd block */}
                    <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
                        <h6 className="text-gray-800 font-medium mb-2 dark:text-gray-100">
                            Products
                        </h6>
                        <ul className="text-sm">
                            <li className="mb-2">
                                <a
                                    href="#0"
                                    className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                                >
                                    Web Solutions
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#0"
                                    className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                                >
                                    iOS / Android Apps
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#0"
                                    className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                                >
                                    Backend Programming
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="https://arwebse.github.io"
                                    className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                                >
                                    iOS Tweaks (Cydia)
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* 3rd block */}
                    <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
                        <h6 className="text-gray-800 font-medium mb-2 dark:text-gray-100">
                            Resources
                        </h6>
                        <ul className="text-sm">
                            <li className="mb-2">
                                <a
                                    href="#0"
                                    className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                                >
                                    Blog
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#0"
                                    className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                                >
                                    Support
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#0"
                                    className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                                >
                                    Partners
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* 4th block */}
                    <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
                        <h6 className="text-gray-800 font-medium mb-2 dark:text-gray-100">
                            Company
                        </h6>
                        <ul className="text-sm">
                            <li className="mb-2">
                                <a
                                    href="#0"
                                    className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                                >
                                    Home
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="/about"
                                    className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                                >
                                    About us
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#0"
                                    className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                                >
                                    Company values
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#0"
                                    className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* 5th block */}
                    <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
                        <h6 className="text-gray-800 font-medium mb-2 dark:text-gray-100">
                            Contact Us
                        </h6>
                        <p className="text-sm text-gray-600 mb-4">
                            Contact us today to discuss your project and let us
                            bring your vision to life!
                        </p>
                        <form>
                            <div className="flex flex-wrap mb-4">
                                <div className="w-full">
                                    <label
                                        className="block text-sm sr-only"
                                        htmlFor="newsletter"
                                    >
                                        Email
                                    </label>
                                    <div className="relative flex items-center max-w-xs">
                                        <input
                                            id="newsletter"
                                            type="email"
                                            className="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-500 dark:border-gray-700 "
                                            placeholder="Your email"
                                            required
                                        />
                                        <button
                                            type="submit"
                                            className="absolute inset-0 left-auto"
                                            aria-label="Subscribe"
                                        >
                                            <span
                                                className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300"
                                                aria-hidden="true"
                                            ></span>
                                            <svg
                                                className="w-3 h-3 fill-current text-blue-600 mx-3 shrink-0"
                                                viewBox="0 0 12 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                                                    fillRule="nonzero"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                    {/* Success message */}
                                    {/* <p className="mt-2 text-green-600 text-sm">Thanks for subscribing!</p> */}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Bottom area */}
                <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200 dark:border-gray-800">
                    {/* Social as */}
                    <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
                        <li className="mr-4">
                            <a
                                href="https://github.com/arwebSE"
                                className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out p-1 dark:bg-gray-800 dark:text-gray-100"
                                aria-label="Github"
                            >
                                <IoLogoGithub className="w-5 h-5 fill-current" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://twitter.com/ARWeb_SE"
                                className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out p-1 dark:bg-gray-800 dark:text-gray-100"
                                aria-label="Twitter"
                            >
                                <IoLogoTwitter className="w-5 h-5 fill-current" />
                            </a>
                        </li>
                    </ul>

                    {/* Copyrights note */}
                    <div className="text-sm text-gray-600 mr-4 dark:text-gray-100">
                        &copy; arweb.dev - All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
