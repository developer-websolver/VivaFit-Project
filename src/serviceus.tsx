import * as MarqueeModule from "react-fast-marquee";
import type React from "react";
import { Link } from "react-router-dom";

import { ClipboardCheck, Dumbbell, NotebookPen, PersonStanding, ChevronsRight } from "lucide-react";
import {
    ArrowUpRight,
    BicepsFlexed,
    Users,
    UserRoundCheck,
    Footprints,
} from "lucide-react";
import { useState } from "react";
import Footer from "./footer";
import ServiceUsImg from "./assets/ServiceUsImg.webp";
import Service1 from "./assets/Service1.webp";
import Service2 from "./assets/Service2.webp";
import Service3 from "./assets/Service3.webp";
import Service4 from "./assets/Service4.webp";


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



function ServiceUsPage() {

    const [activeService, setActiveService] = useState(1);

    const servicelist = [
        {
            logo: BicepsFlexed,
            title: "General Fitness & Body Transformation",
            description:
                "Work towards weight management, inch loss, body toning, flexibility, and lean muscle development through fitness programs suited to your goals and fitness level.",
            image: Service1,
            path: "/service-generalfitness",
        },
        {
            logo: Users,
            title: "Dietitian, Physiotherapy & Rehabilitation",
            description:
                "Access dietitian guidance, physiotherapy, and rehabilitation services to complement your fitness journey according to your individual needs.",
            image: Service2,
            path: "/service-dietitian",
        },
        {
            logo: UserRoundCheck,
            title: "Personal Training & Strength Development",
            description: "Receive individual workout guidance to improve strength, develop lean muscle, and build consistent exercise habits based on your fitness needs.",
            image: Service3,
            path: "/service-personaltraining",
        },
        {
            logo: Footprints,
            title: "Zumba, Yoga & Outdoor Fitness Activities",
            description: "Add variety to your routine with Zumba, yoga, Aqua Zumba, beach yoga, turf activities, and terrace workouts.",
            image: Service4,
            path: "/service-zumbayoga",
        },
    ];

    return (
        <div className="min-h-screen bg-[#061512] pt-40 text-white">
            {/* Breadcrumb Header */}
            <div className="border-b border-white/10 bg-[#061512]">
                <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-12">
                    <h4 className="text-sm font-semibold tracking-wide sm:text-base">

                    </h4>

                    <nav aria-label="Breadcrumb">
                        <ul className="flex items-center gap-2 text-xs text-white/70 sm:gap-3">
                            <li>
                                <Link to="/" className="transition hover:text-[#B6FF00]">
                                    Home
                                </Link>
                            </li>

                            <li aria-hidden="true" className="text-white/40">
                                /
                            </li>

                            <li>
                                <Link
                                    to="/services"
                                    className="rounded-full bg-white/10 px-3 py-1.5 text-white transition hover:bg-white/15"
                                    aria-current="page"
                                >
                                    Our Services
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="border-b border-white/10 px-5 py-10 text-center sm:px-8 sm:py-12">
                <span className="inline-flex rounded-full bg-[#273331] px-4 py-2 text-xs font-semibold text-[#B6FF00]">
                    Our Services
                </span>

                <h2 className="mx-auto mt-4 max-w-4xl text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl lg:text-[38px]">

                    Train <span className="text-[#B6FF00]">Smarter.</span>{" "}
                    Feel <span className="text-[#B6FF00]">Stronger.</span>{" "}
                    Live <span className="text-[#B6FF00]">Healthier.</span>
                </h2>

                <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                    At VIVAFIT, our gym trainers provide personalised workout guidance to help women build strength, improve fitness, and work towards their individual goals through structured training and consistent progress.
                </p>
            </div>

            {/* Service List */}
            <div>
                {servicelist.map((service, index) => {
                    const LogoIcon = service.logo;
                    const isActive = activeService === index;

                    return (
                        <div
                            key={service.title}
                            onClick={() => setActiveService(index)}
                            onKeyDown={(event) => {
                                if (event.key === "Enter" || event.key === " ") {
                                    event.preventDefault();
                                    setActiveService(index);
                                }
                            }}
                            role="button"
                            tabIndex={0}
                            aria-pressed={isActive}
                            className={`group cursor-pointer border-b border-white/10 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#B6FF00] ${isActive
                                ? "bg-[#B6FF00] text-[#061512]"
                                : "bg-[#0F1C1A] text-white hover:bg-[#142521]"
                                }`}
                        >
                            <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-5 px-5 py-7 sm:px-8 sm:py-9 md:grid-cols-[0.85fr_1.4fr_auto] lg:grid-cols-[0.9fr_1.5fr_150px_56px] lg:gap-8 lg:px-12 lg:py-10">

                                {/* Icon and Title */}
                                <div className="flex items-center gap-4 md:block">
                                    <div
                                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-colors duration-300 md:mb-5 ${isActive
                                            ? "bg-[#061512] text-[#B6FF00]"
                                            : "bg-[#B6FF00] text-[#061512]"
                                            }`}
                                    >
                                        <LogoIcon size={25} strokeWidth={2} />
                                    </div>

                                    <h3 className="max-w-[250px] text-base font-bold leading-snug sm:text-lg">
                                        {service.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <p
                                    className={`max-w-lg text-base leading-relaxed sm:text-lg ${isActive ? "text-[#061512]" : "text-white/80"
                                        }`}
                                >
                                    {service.description}
                                </p>

                                {/* Optional Image */}
                                <div className="hidden lg:flex lg:items-center lg:justify-center">
                                    {service.image && (
                                        <img
                                            src={service.image}
                                            alt="Members participating in a group workout"
                                            className="h-[150px] w-[110px] rotate-[7deg] rounded-xl object-cover grayscale transition-transform duration-300 group-hover:rotate-0"
                                        />
                                    )}
                                </div>

                                {/* Arrow Button */}
                                <div className="flex justify-end md:col-span-3 lg:col-span-1">
                                    <Link
                                        to={service.path}
                                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-all duration-300 group-hover:scale-110 ${isActive
                                            ? "border-[#061512]"
                                            : "border-white/25 group-hover:border-[#B6FF00]"
                                            }`}
                                    >
                                        <span
                                            className={`flex h-7 w-7 items-center justify-center rounded-full transition-colors duration-300 ${isActive
                                                ? "bg-[#061512] text-[#B6FF00]"
                                                : "bg-white/50 text-[#061512] group-hover:bg-[#B6FF00]"
                                                }`}
                                        >
                                            <ArrowUpRight size={19} strokeWidth={2.5} />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

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
                            Join Us Today
                        </span>

                        <ChevronsRight
                            size={20}
                            className="shrink-0 text-[#061512] sm:h-6 sm:w-6"
                        />

                        <span className="whitespace-nowrap text-xs font-bold tracking-wider text-[#061512] sm:text-sm md:text-base">
                            Join Us Today
                        </span>

                        <ChevronsRight
                            size={20}
                            className="shrink-0 text-[#061512] sm:h-6 sm:w-6"
                        />

                        <span className="whitespace-nowrap text-xs font-bold tracking-wider text-[#061512] sm:text-sm md:text-base">

                            Join Us Today
                        </span>

                        <ChevronsRight
                            size={20}
                            className="shrink-0 text-[#061512] sm:h-6 sm:w-6"
                        />

                    </div>
                </MarqueeComponent>
            </div>

            {/* Program Benefits Section */}
            <section className="bg-[#0F1C1A] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
                <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">

                    {/* Left Content */}
                    <div className="min-w-0">
                        <span className="inline-flex rounded-full bg-[#273331] px-3 py-2 text-[10px] font-bold tracking-wide text-[#B6FF00] sm:text-xs">
                            Program Benefits
                        </span>

                        <h2 className="mt-4 max-w-xl text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl lg:text-[38px]">
                            More Than a <span className="text-[#B6FF00]">Workout </span> at
                            <span className="text-[#B6FF00]"> VivaFit?</span>
                        </h2>

                        <p className="mt-3 max-w-xl text-sm leading-6 text-white/70 sm:text-base">
                            At VIVAFIT, a ladies gym in Chennai, women can explore fitness options that support their individual goals, from weight management and strength development to group activities and wellness support.
                        </p>

                        {/* Benefits Grid */}
                        <ul className="mt-6 grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 sm:gap-4">
                            {/* Expert Trainers */}
                            <li className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-[#172320] p-3 transition-colors hover:border-[#B6FF00]/30 sm:p-4">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#B6FF00] text-[#061512] sm:h-12 sm:w-12">
                                    <PersonStanding size={22} strokeWidth={1.8} />
                                </span>

                                <div className="min-w-0">
                                    <h3 className="text-xs font-bold sm:text-sm">
                                        Fitness for Your Goals
                                    </h3>
                                    <p className="mt-1 text-[10px] leading-4 text-white/60 sm:text-xs">
                                        Work towards weight loss, weight gain, inch loss, body toning, and lean muscle development with suitable fitness programs.
                                    </p>
                                </div>
                            </li>

                            {/* Progress Tracking */}
                            <li className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-[#172320] p-3 transition-colors hover:border-[#B6FF00]/30 sm:p-4">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#B6FF00] text-[#061512] sm:h-12 sm:w-12">
                                    <ClipboardCheck size={22} strokeWidth={1.8} />
                                </span>

                                <div className="min-w-0">
                                    <h3 className="text-xs font-bold sm:text-sm">

                                        Personalised Training Support
                                    </h3>
                                    <p className="mt-1 text-[10px] leading-4 text-white/60 sm:text-xs">
                                        Get individual attention to improve strength, flexibility, and exercise consistency according to your fitness level.
                                    </p>
                                </div>
                            </li>

                            {/* Customized Plans */}
                            <li className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-[#172320] p-3 transition-colors hover:border-[#B6FF00]/30 sm:p-4">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#B6FF00] text-[#061512] sm:h-12 sm:w-12">
                                    <NotebookPen size={22} strokeWidth={1.8} />
                                </span>

                                <div className="min-w-0">
                                    <h3 className="text-xs font-bold sm:text-sm">
                                        Wellness Beyond Workouts
                                    </h3>
                                    <p className="mt-1 text-[10px] leading-4 text-white/60 sm:text-xs">
                                        Complement your fitness routine with dietitian guidance, physiotherapy, and rehabilitation services based on your needs.
                                    </p>
                                </div>
                            </li>

                            {/* Modern Equipment */}
                            <li className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-[#172320] p-3 transition-colors hover:border-[#B6FF00]/30 sm:p-4">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#B6FF00] text-[#061512] sm:h-12 sm:w-12">
                                    <Dumbbell size={22} strokeWidth={1.8} />
                                </span>

                                <div className="min-w-0">
                                    <h3 className="text-xs font-bold sm:text-sm">
                                        Fitness That Keeps You Moving
                                    </h3>
                                    <p className="mt-1 text-[10px] leading-4 text-white/60 sm:text-xs">
                                        Add variety to your routine with Zumba, yoga, Aqua Zumba, beach yoga, turf activities, and terrace workouts.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Right Image */}
                    <div className="w-full min-w-0">
                        <div className="overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[28px]">
                            <img
                                src={ServiceUsImg}
                                alt="Members training with professional gym equipment"
                                loading="lazy"
                                className="h-[280px] w-full object-cover object-center grayscale sm:h-[380px] md:h-[440px] lg:h-[360px] xl:h-[420px]"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default ServiceUsPage;