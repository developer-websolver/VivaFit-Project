import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import Footer from "./footer";
import Image1 from "./assets/Mogapair/Image9.webp";
import Image2 from "./assets/Mogapair/Image1.webp";
import Image3 from "./assets/AboutUs3.webp";
import Image4 from "./assets/AboutUs4.webp";
import { ArrowUpRight, } from "lucide-react";
import Founder from "./assets/Founder & Ceo.jpeg";
import { Smartphone, Apple, ExternalLink } from "lucide-react";

function AboutUsPage() {
    return (
        <div className="min-h-screen bg-[#0F1C1A] text-white pt-35">
            {/* Navbar */}
            <header className="border-b border-white/10 ">
                <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12 ">
                    <h4 className="text-sm font-semibold tracking-wide sm:text-base">

                    </h4>

                    <nav aria-label="Breadcrumb">
                        <ul className="flex items-center gap-3 text-xs text-white/70">
                            <li>
                                <Link
                                    to="/"
                                    className="transition hover:text-[#B6FF00]"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="text-white/40">/</li>
                            <li>
                                <Link
                                    to="/aboutus"
                                    className="rounded-full bg-white/10 px-3 py-1 text-white"
                                    aria-current="page"
                                >
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* About Section */}
            <section className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-10 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-2 lg:gap-14 lg:px-12 lg:py-16 ">
                {/* Left Content */}
                <div className="flex min-w-0 flex-col">
                    <span className="mb-5 w-fit rounded-full bg-[#273331] px-4 py-2 text-xs font-semibold text-[#B6FF00]">
                        About Us
                    </span>

                    <h1 className="max-w-xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
                        Your Fitness, Your{" "}
                        <span className="text-[#B6FF00]">VivaFit,</span>{" "}
                        Built for Every{" "}
                        <span className="text-[#B6FF00]">Woman.</span>
                    </h1>

                    <p className="mt-4 max-w-lg border border-[#B6FF00] px-3 py-2 text-sm leading-relaxed text-white/85 sm:text-base">
                        VIVAFIT helps women build strength and confidence with modern equipment and personalised fitness support. Looking for a women’s gym near me? Find your fit with VIVAFIT.
                    </p>
                    {/* Small Gym Image */}
                    <div className="relative mt-6">
                        <img
                            src={Image1}
                            alt="Members training together at the gym"
                            className="h-[220px] w-full rounded-xl object-cover object-center  sm:h-[280px] lg:h-[290px]"
                        />

                        {/* Image Overlay Button */}
                        <Link
                            to="https://www.youtube.com/watch?v=f0CvGENZsHA"
                            className="absolute bottom-3 left-3 flex min-w-[190px] items-center justify-between gap-5 rounded-xl bg-white p-3 text-[#061512] shadow-lg transition hover:bg-[#B6FF00] sm:bottom-4 sm:left-4"
                        >
                            <span className="text-xs font-semibold leading-relaxed">
                                Get a Glimpse of
                                <br />
                                Our Gym
                            </span>

                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#B6FF00]">
                                <Play
                                    size={15}
                                    fill="currentColor"
                                    strokeWidth={1.5}
                                    className="ml-0.5"
                                />
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Right Large Image */}
                <div className="min-w-0    ">
                    <img
                        src={Image2}
                        alt="VIVAFIT women's fitness gym reception"
                        className="h-[320px] w-full rounded-2xl object-cover sm:h-[420px]  lg:h-[560px]"

                    />
                </div>
            </section>

            <div className="bg-[#061512] px-5 py-12 text-white sm:px-8 lg:px-12 lg:py-16">
                <div className="mx-auto max-w-[1280px]">

                    {/* Heading and Statistics */}
                    <div className="mb-6 grid grid-cols-1 items-center gap-6 md:grid-cols-2">

                        {/* Left Content */}
                        <div>
                            <span className="mb-5 inline-flex rounded-full bg-[#273331] px-4 py-2 text-xs font-semibold text-[#B6FF00]">
                                Why Choose Us
                            </span>

                            <h3 className="text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
                                Why Do Women{" "}
                                <span className="text-[#B6FF00]">Choose</span> VivaFit?
                            </h3>

                            <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/75 sm:text-base">
                                Every woman’s fitness journey is different. At VIVAFIT, we make it easier to find a women’s gym near me where you can focus on your goals, build healthy habits, and progress at your own pace.
                            </p>
                        </div>

                        {/* Statistics Cards */}
                        <div className="grid grid-cols-2 gap-3">
                            <div className="rounded-lg bg-[#1B2927] p-3 sm:p-4">
                                <span className="text-xl font-extrabold sm:text-2xl">100+</span>
                                <p className="mt-1 text-xs text-white/75">Certified Trainers</p>
                            </div>

                            <div className="rounded-lg bg-[#1B2927] p-3 sm:p-4">
                                <span className="text-xl font-extrabold sm:text-2xl">10,000+</span>
                                <p className="mt-1 text-xs text-white/75">Happy Members</p>
                            </div>

                            <div className="rounded-lg bg-[#1B2927] p-3 sm:p-4">
                                <span className="text-xl font-extrabold sm:text-2xl">95%</span>
                                <p className="mt-1 text-xs text-white/75">
                                    Client Retention Rate
                                </p>
                            </div>

                            <div className="rounded-lg bg-[#1B2927] p-3 sm:p-4">
                                <span className="text-xl font-extrabold sm:text-2xl">25+</span>
                                <p className="mt-1 text-xs text-white/75">Weekly Classes</p>
                            </div>
                        </div>
                    </div>

                    {/* Main Image */}
                    <div className="group relative overflow-hidden rounded-xl">

                        <img
                            src={Image3}
                            alt="Our dedicated fitness team"
                            className="h-[240px] w-full object-cover object-center grayscale transition-transform duration-700 group-hover:scale-105 sm:h-[320px] md:h-[380px] lg:h-[420px]"
                        />

                        {/* Dark Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#080B08]/90 via-[#080B08]/20 to-transparent" />

                        {/* Image Text */}
                        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">

                            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#B6FF00] sm:text-sm">
                                Results
                            </p>

                            <h3 className="mt-2 text-1xl font-black uppercase leading-tight tracking-wide text-white sm:text-4xl lg:text-4xl">
                                Right in Front
                                <br />
                                of Your <span className="text-[#B6FF00]">Eyes.</span>
                            </h3>

                            <div className="mt-4 h-1 w-16 rounded-full bg-[#B6FF00] transition-all duration-500 group-hover:w-28" />

                        </div>
                    </div>



                </div>
            </div>

            {/* <div className="bg-[#0F1C1A] px-5 py-12 text-white sm:px-8 sm:py-16 lg:px-12 lg:py-20">
                <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-16">

                    
                    <div className="order-2 min-w-0 md:order-1">
                        <span className="mb-5 inline-flex rounded-full bg-[#273331] px-4 py-2 text-xs font-semibold text-[#B6FF00]">
                            Our Vision
                        </span>

                        <h3 className="text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl lg:text-[38px]">
                            Redefining Women’s Fitness,{" "}
                            <span className="text-[#B6FF00]">Empowering</span>{" "}
                            Every{" "}
                            <span className="text-[#B6FF00]">Women</span>
                        </h3>

                        <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/80 sm:text-base">
                            Our vision is to make quality fitness accessible to every women. At VIVAFIT, we aim to create a welcoming women’s gym near me where women can develop lasting fitness habits and feel confident in their progress.
                        </p>
                    </div>

                  
                    <div className="order-1 flex justify-center md:order-2 md:justify-end">
                        <div className="relative w-full max-w-[300px] sm:max-w-[360px]">

                          
                            <div className="absolute -bottom-2 -left-2 right-4 top-4 overflow-hidden bg-[#B6FF00]">
                                <div className="absolute inset-0 opacity-90">
                                    <svg
                                        viewBox="0 0 240 300"
                                        preserveAspectRatio="none"
                                        className="h-full w-full"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M0 0 Q60 0 60 30 T120 60 T180 90 T240 120
                   M0 35 Q60 35 60 65 T120 95 T180 125 T240 155
                   M0 70 Q60 70 60 100 T120 130 T180 160 T240 190
                   M0 105 Q60 105 60 135 T120 165 T180 195 T240 225
                   M0 140 Q60 140 60 170 T120 200 T180 230 T240 260
                   M0 175 Q60 175 60 205 T120 235 T180 265 T240 295"
                                            fill="none"
                                            stroke="#061512"
                                            strokeWidth="10"
                                        />
                                    </svg>
                                </div>
                            </div>

                     
                            <img
                                src={Image4}
                                alt="Athlete focused on fitness and training"
                                className="relative z-10 h-[280px] w-full rounded-xl object-cover object-center grayscale sm:h-[340px] md:h-[380px]"
                            />
                        </div>
                    </div>

                </div>
            </div> */}

            <div className="overflow-hidden bg-[#0F1C1A] px-5 py-14 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-24">
                <div className="mx-auto max-w-[1200px]">



                    {/* Main Layout */}
                    <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-14 lg:gap-20">

                        {/* Image */}
                        <div className="relative">
                            <div className="absolute -left-2 top-5 h-[85%] w-1 bg-[#B6FF00] sm:-left-4" />

                            <img
                                src={Image4}
                                alt="Women pursuing strength and wellness"
                                className="h-[440px] w-full rounded-r-2xl object-cover object-center grayscale sm:h-[440px] md:h-[440px] lg:h-[500px]"
                            />

                            <div className="absolute bottom-4 left-4 rounded-lg border border-white/20 bg-black/50 px-4 py-3 backdrop-blur-md sm:bottom-6 sm:left-6">
                                <p className="text-xs font-medium uppercase tracking-widest text-[#B6FF00]">
                                    Strength. Confidence. Growth.
                                </p>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="py-2 md:py-8">
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B6FF00] sm:text-sm mb-15">
                                Our Vision
                            </p>

                            <h2 className="text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
                                Every Woman.
                                <br />
                                Every Goal.
                                <br />
                                <span className="text-[#B6FF00]">
                                    A Stronger Future.
                                </span>
                            </h2>

                            <p className="mt-6 max-w-lg text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                                We envision a future where every woman feels confident in her
                                strength and supported in her journey. At VIVAFIT, we aim to make
                                fitness a positive, sustainable part of everyday life.
                            </p>

                            <div className="mt-8 flex items-center gap-4 border-t border-white/15 pt-6">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#B6FF00]">
                                    <ArrowUpRight size={22} className="text-[#061512]" />
                                </div>

                                <div>
                                    <p className="text-sm font-semibold text-white">
                                        Your Journey, Your Strength
                                    </p>
                                    <p className="mt-1 text-xs text-white/50 sm:text-sm">
                                        Move forward with confidence.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <section className="relative overflow-hidden bg-[#0F1C1A] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-24">

                <div className="mx-auto max-w-7xl">

                    {/* Section Heading */}
                    <div className="mb-12 max-w-3xl">
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#B6FF00]">
                            Leadership & Vision
                        </span>

                        <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                            A Vision for
                            <span className="text-[#B6FF00]"> Stronger Women </span>
                            and a Healthier World.
                        </h2>
                    </div>

                    {/* Main Layout */}
                    <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

                        {/* Founder Profile */}
                        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#172622] p-5 sm:p-7">

                            {/* Founder Image */}
                            <div className="relative overflow-hidden rounded-xl bg-[#0D130D]">
                                <img
                                    src={Founder}
                                    alt="Mohammed Shahul Hameed, Founder and CEO of VIVAFIT India"
                                    className="h-[320px] w-full object-cover object-top transition-transform duration-700 hover:scale-105 sm:h-[420px]"
                                    loading="lazy"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1C1A]/70 via-transparent to-transparent" />

                                <div className="absolute bottom-4 left-4">
                                    <span className="rounded-full bg-[#B6FF00] px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-black">
                                        Founder & CEO
                                    </span>
                                </div>
                            </div>

                            {/* Founder Details */}
                            <div className="mt-7">
                                <h3 className="text-2xl font-black sm:text-3xl">
                                    Mohammed Shahul Hameed
                                </h3>

                                <p className="mt-2 text-sm font-semibold leading-6 text-[#B6FF00]">
                                    Founder & CEO
                                </p>

                                <p className="mt-1 text-sm leading-6 text-gray-400">
                                    Yora Fitness Private Limited
                                </p>

                                <p className="text-sm leading-6 text-gray-400">
                                    The Master Franchisee – VIVAFIT India
                                </p>

                                {/* Experience Highlight */}
                                <div className="mt-6 flex items-center gap-4 rounded-xl border border-[#B6FF00]/20 bg-[#0F1C1A] p-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#B6FF00]/10 text-[#B6FF00]">
                                        <span className="text-xl font-black">13+</span>
                                    </div>

                                    <div>
                                        <p className="font-bold text-white">
                                            Years of Experience
                                        </p>
                                        <p className="mt-1 text-xs leading-5 text-gray-400">
                                            Franchise sales, business development,
                                            operations and strategic growth.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Founder Biography */}
                            <p className="mt-6 border-t border-white/10 pt-6 text-sm leading-7 text-gray-300 sm:text-base">
                                With a postgraduate qualification in Retail Management
                                and a professional background in hospitality, I bring
                                over 13 years of hands-on experience in franchise sales,
                                business development, operations, and strategic growth.
                                My journey has been driven by a deep belief that successful
                                businesses are built on trust, transparency, and mutually
                                rewarding partnerships.
                            </p>

                        </div>

                        {/* Vision Content */}
                        <div className="flex flex-col justify-center lg:py-5">

                            <div className="mb-8">
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B6FF00]">
                                    A Message from Our Founder
                                </span>

                                <h3 className="mt-4 text-2xl font-black leading-tight sm:text-3xl lg:text-4xl">
                                    Building More Than Gyms.
                                    <span className="text-[#B6FF00]">
                                        {" "}Creating a Movement.
                                    </span>
                                </h3>
                            </div>

                            {/* Vision Paragraphs */}
                            <div className="space-y-6 text-sm leading-8 text-gray-300 sm:text-base">

                                <p className="border-l-2 border-[#B6FF00] pl-5">
                                    At VIVAFIT, our vision goes beyond building gyms.
                                    We are passionate about transforming the women's
                                    fitness landscape in India by bringing world-class
                                    fitness practices, international standards, and
                                    innovative wellness solutions to the niche
                                    women-only fitness market.
                                </p>

                                <p>
                                    As franchise veterans, we understand the value of
                                    every investor's money. We are committed to creating
                                    sustainable, profitable, and mutually beneficial
                                    franchise opportunities that empower our partners
                                    to grow with confidence while making a meaningful
                                    difference in their communities.
                                </p>

                                <p>
                                    Our mission is to create a healthier society by
                                    making fitness accessible, empowering women to
                                    prioritise their wellbeing, and generating meaningful
                                    employment opportunities for women across the fitness
                                    industry. From fitness professionals and trainers
                                    to leadership and entrepreneurial roles, we believe
                                    in creating an ecosystem where women can thrive
                                    both professionally and personally.
                                </p>

                                <p>
                                    At VIVAFIT, we are not simply building fitness
                                    centres; we are building stronger women, healthier
                                    communities, and a future where every woman has
                                    the opportunity to lead a healthier, happier,
                                    and more empowered life.
                                </p>

                            </div>

                            {/* Closing Highlight */}
                            <div className="mt-9 rounded-xl border border-[#B6FF00]/20 bg-[#B6FF00]/5 p-5 sm:p-6">
                                <p className="text-lg font-bold leading-relaxed text-white sm:text-xl">
                                    "Stronger Women. Healthier Communities.
                                    <span className="text-[#B6FF00]">
                                        {" "}A Better Future."
                                    </span>
                                </p>
                                <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-gray-500">
                                    The VIVAFIT Vision
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
            {/* Our Mobile Apps */}
            <section className="bg-[#061512] px-5 py-10 text-white sm:px-8 lg:px-12">
                <div className="mx-auto flex max-w-[1280px] flex-col gap-6 rounded-2xl border border-white/10 bg-[#172622] p-6 sm:p-8 md:flex-row md:items-center md:justify-between">

                    {/* Section Heading */}
                    <div className="text-center md:text-left">
                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#B6FF00]">
                            Stay Connected
                        </span>

                        <h2 className="mt-2 text-xl font-bold sm:text-2xl">
                            Our Mobile Apps
                        </h2>

                        <p className="mt-2 text-sm text-white/60">
                            Experience VIVAFIT wherever you go.
                        </p>
                    </div>

                    {/* App Download Links */}
                    <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">

                        {/* Android App */}
                        <Link
                            to="https://play.google.com/store/apps/details?id=com.yoactiv.yorafitness"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex w-full items-center justify-center gap-3 rounded-xl border border-white/15 bg-[#0F1C1A] px-5 py-4 transition-all duration-300 hover:border-[#B6FF00] hover:bg-[#B6FF00] sm:w-auto"
                        >
                            <Smartphone
                                size={22}
                                className="text-[#B6FF00] transition-colors group-hover:text-black"
                            />

                            <span className="text-sm font-semibold text-white transition-colors group-hover:text-black">
                                Android App
                            </span>

                            <ExternalLink
                                size={15}
                                className="text-white/50 transition-colors group-hover:text-black"
                            />
                        </Link>

                        {/* iOS App */}
                        <Link
                            to="https://apps.apple.com/us/app/viva-fit/id6475255690"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex w-full items-center justify-center gap-3 rounded-xl border border-white/15 bg-[#0F1C1A] px-5 py-4 transition-all duration-300 hover:border-[#B6FF00] hover:bg-[#B6FF00] sm:w-auto"
                        >
                            <Apple
                                size={22}
                                className="text-[#B6FF00] transition-colors group-hover:text-black"
                            />

                            <span className="text-sm font-semibold text-white transition-colors group-hover:text-black">
                                iOS App
                            </span>

                            <ExternalLink
                                size={15}
                                className="text-white/50 transition-colors group-hover:text-black"
                            />
                        </Link>

                    </div>
                </div>
            </section>

            <Footer />

        </div>
    );
}

export default AboutUsPage;