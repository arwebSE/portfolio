import { FaCss3, FaHtml5 } from "react-icons/fa";
import {
    SiElectron,
    SiExpress,
    SiGit,
    SiGraphql,
    SiHeadlessui,
    SiJavascript,
    SiNextdotjs,
    SiNodedotjs,
    SiReact,
    SiTailwindcss,
} from "react-icons/si";

export default function Solutions() {
    const solutionsData = [
        {
            title: "HTML",
            description:
                "HTML is the standard markup language for documents designed to be displayed in a web browser.",
            icon: <FaHtml5 className="w-5 h-5 fill-current" />,
            color: "bg-red-500",
        },
        {
            title: "CSS",
            description:
                "CSS is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.",
            icon: <FaCss3 className="w-5 h-5 fill-current" />,
            color: "bg-blue-500",
        },
        {
            title: "JavaScript",
            description:
                "JavaScript is a programming language that gives interactivity to web pages and apps.",
            icon: <SiJavascript className="w-5 h-5 fill-current" />,
            color: "bg-yellow-500",
        },
        {
            title: "Tailwind CSS",
            description:
                "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.",
            icon: <SiTailwindcss className="w-5 h-5 fill-current" />,
            color: "bg-[#38BDF8]",
        },
        {
            title: "Headless CMS",
            description:
                "A headless Content Management System is built as a repository that makes content accessible via an API for display on the target app.",
            icon: <SiHeadlessui className="w-5 h-5 fill-current" />,
        },
        {
            title: "Electron",
            description:
                "Electron is a framework for creating native applications with web technologies like JavaScript, HTML, and CSS.",
            icon: <SiElectron className="w-5 h-5 fill-current" />,
            color: "bg-[#272A37] text-[#9FEAF9]",
        },
        {
            title: "Express.js",
            description:
                "Express.js is a web application framework for Node.js, designed for building web applications and APIs.",
            icon: <SiExpress className="w-5 h-5 fill-current" />,
        },
        {
            title: "React",
            description:
                "React is a JavaScript library for building user interfaces.",
            icon: <SiReact className="w-5 h-5 fill-current" />,
        },
        {
            title: "Next.js",
            description:
                "Next.js is a hybrid static & server rendering application framework built on top of React.",
            icon: <SiNextdotjs className="w-5 h-5 fill-current" />,
        },
        {
            title: "Node.js",
            description:
                "Node.js is an cross-platform back-end JavaScript environment that can be used for building scalable network applications.",
            icon: <SiNodedotjs className="w-5 h-5 fill-current" />,
        },
        {
            title: "GraphQL",
            description:
                "GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.",
            icon: <SiGraphql className="w-5 h-5 fill-current" />,
        },
        {
            title: "Git",
            description:
                "Git is a version control system designed to handle everything from small to very large projects with speed and efficiency.",
            icon: <SiGit className="w-5 h-5 fill-current" />,
        },
    ];

    return (
        <section className="relative">
            {/* Section background (needs .relative class on parent and next sibling elements) */}
            <div
                className="absolute inset-0 bg-gray-100 dark:bg-black pointer-events-none bg-solutions bg-cover bg-no-repeat bg-center dark:brightness-75"
                aria-hidden="true"
            ></div>
            <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2 dark:bg-gray-800"></div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">
                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center py-10 mb-10 backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100/30 dark:border-gray-900/10 dark:bg-neutral-900/80 bg-gray-400 rounded shadow-xl">
                        <h2 className="h2 mb-4">Explore the Technologies</h2>
                        <p className="text-xl text-gray-600 dark:text-white">
                            These are the technologies we use to build the best
                            solutions for our clients.
                        </p>
                    </div>

                    {/* Items */}
                    <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
                        {solutionsData.map((data, index) => (
                            <div
                                key={index}
                                className="relative flex flex-col items-center p-6 rounded shadow-xl dark:bg-neutral-900/80 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100/30 dark:border-gray-900/10"
                            >
                                <div
                                    className={
                                        "flex justify-center items-center w-[3rem] h-[3rem] bg-blue-600 rounded-full shadow flex-shrink-0 text-white mb-4" +
                                        (data.color ? " " + data.color : "")
                                    }
                                >
                                    {data.icon}
                                </div>

                                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-gray-900 dark:text-gray-100">
                                    {data.title}
                                </h4>
                                <p className="text-gray-800 text-center dark:text-gray-100">
                                    {data.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
