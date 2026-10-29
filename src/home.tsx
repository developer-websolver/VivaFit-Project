
import * as MarqueeModule from "react-fast-marquee";
import type React from "react";
import { ArrowUpRight, ChevronsRight } from "lucide-react";
import Homeimg from "./assets/Home2.webp";
import { Link } from "react-router-dom";

// React Fast Marquee export compatibility
const MarqueeModuleDefault = (
    MarqueeModule as unknown as {
        default:
        | React.ComponentType<any>
        | { default: React.ComponentType<any> };
    }
).default;

const MarqueeComponent =
    typeof MarqueeModuleDefault === "function"
        ? MarqueeModuleDefault
        : MarqueeModuleDefault.default;

function HomePage() {
    return (

        // <section className="relative flex min-h-screen flex-col overflow-hidden bg-[#061512] px-3 pt-20 sm:px-5 md:px-6">
        <section className="relative flex min-h-screen flex-col overflow-hidden bg-[#061512] px-3 pt-20 sm:px-5 md:px-6" >

            {/* Lime Glow Effects */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B6FF00]/15 blur-[100px] sm:h-[400px] sm:w-[400px] sm:blur-[120px]" />

            <div className="pointer-events-none absolute left-[45%] top-[35%] h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B6FF00]/10 blur-[100px]" />

            {/* Hero Content */}
            <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center py-10 text-center sm:py-14 md:py-16 mt-20 lg:mt-30">

                {/* Heading */}
                <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-8xl">
                    Your Trusted International{" "}
                    <span className="bg-gradient-to-r from-[#B6FF00] via-[#D4FF66] to-[#B6FF00] bg-clip-text text-transparent">
                        Women's
                    </span>{" "}
                    Gym.
                </h1>

                {/* Description */}
                <p className="mx-auto mt-5 max-w-4xl text-sm leading-7 text-gray-300 sm:mt-7 sm:text-base sm:leading-8 md:text-lg">
                    Experience world-class fitness at VIVAFIT, an international ladies
                    gym centre offering expert guidance, modern equipment, and a
                    women-only workout environment.
                </p>

                {/* Action Buttons */}
                {/* <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4" > */}
                <div className="mt-7 flex flex-row items-center justify-center gap-3 sm:mt-10 sm:gap-4">

                    <Link
                        to="/contactus"
                        className="group flex cursor-pointer items-center gap-2 rounded-full bg-[#B6FF00] px-7 py-3.5 font-bold text-[#071512] shadow-lg shadow-[#B6FF00]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl sm:px-8 sm:py-4"
                    >
                        Book Now
                        <ArrowUpRight
                            size={20}
                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                    </Link>

                    <Link
                        to="/contactus"
                        aria-label="Explore VIVAFIT"
                        className="group flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-[#B6FF00]/50 bg-[#B6FF00]/10 text-[#B6FF00] transition-all duration-300 hover:-translate-y-1 hover:border-[#B6FF00] hover:bg-[#B6FF00] hover:text-[#071512] sm:h-14 sm:w-14"
                    >
                        <ArrowUpRight
                            size={24}
                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                    </Link>

                </div>

                {/* Hero Image */}

                <div className="mt-8 w-full overflow-hidden rounded-full sm:mt-10 md:mt-12">
                    <img
                        src={Homeimg}
                        alt="VIVAFIT International Ladies Gym"
                        loading="eager"
                        fetchPriority="high"
                        className="mx-auto block h-[150px] max-h-[375px] w-[1200px] rounded-full object-cover object-center shadow-xl shadow-black/30 sm:h-[250px] md:h-[315px] lg:h-[375px] grayscale"
                    />
                </div>

            </div>

            {/* React Fast Marquee */}
            <div className="relative z-10 -mx-3 mt-auto w-auto overflow-hidden border-t border-black/10 bg-[#B6FF00] py-3 sm:-mx-5 sm:py-4 md:-mx-6 md:py-5">
                <MarqueeComponent
                    speed={45}
                    direction="left"
                    pauseOnHover={true}
                    gradient={false}
                    autoFill={true}
                >
                    <div className="flex items-center gap-5 px-3 sm:gap-8 sm:px-4">

                        <span className="whitespace-nowrap text-xs font-bold tracking-wider text-[#061512] sm:text-sm md:text-base">
                            Viva Fit
                        </span>

                        <ChevronsRight
                            size={20}
                            className="shrink-0 text-[#061512] sm:h-6 sm:w-6"
                        />

                        <span className="whitespace-nowrap text-xs font-bold tracking-wider text-[#061512] sm:text-sm md:text-base">
                            International Womens Gym
                        </span>

                        <ChevronsRight
                            size={20}
                            className="shrink-0 text-[#061512] sm:h-6 sm:w-6"
                        />

                        <span className="whitespace-nowrap text-xs font-bold tracking-wider text-[#061512] sm:text-sm md:text-base">
                            Expert Fitness Guidance
                        </span>

                        <ChevronsRight
                            size={20}
                            className="shrink-0 text-[#061512] sm:h-6 sm:w-6"
                        />

                        <span className="whitespace-nowrap text-xs font-bold tracking-wider text-[#061512] sm:text-sm md:text-base">

                            Womens Fitness
                        </span>

                        <ChevronsRight
                            size={20}
                            className="shrink-0 text-[#061512] sm:h-6 sm:w-6"
                        />

                    </div>
                </MarqueeComponent>
            </div>

        </section>
    );
}

export default HomePage;




