import { useState, type ChangeEvent, type FormEvent } from "react";

import {
    ArrowRight,
    BadgeCheck,
    Building2,
    ChartLine,
    CheckCircle2,
    Dumbbell,
    GraduationCap,
    Handshake,
    HeartPulse,
    MapPin,
    Megaphone,
    Settings,
    Target,
    Users,
    Wallet,
    Wrench,
    TrendingUp,
    Send,
} from "lucide-react";
import Footer from "./footer";
import FranchiseImage from "./assets/Franchise Image.webp";
import FranchiseImg from "./assets/Franchise Img.webp";

const investorBenefits = [
    {
        icon: ChartLine,
        title: "Attractive ROI Potential",
        description:
            "Explore a projected ROI of 30–40%. Actual returns depend on location, operating costs, membership sales and overall business performance.",
    },
    {
        icon: HeartPulse,
        title: "An Evergreen Industry",
        description:
            "Health, fitness and wellness remain important parts of everyday life, creating long-term relevance for fitness businesses.",
    },
    {
        icon: Target,
        title: "A Specialized Market Opportunity",
        description:
            "Build a business around a dedicated women's fitness concept, with services and experiences designed for women's health and wellness.",
    },
    {
        icon: Handshake,
        title: "Structured Business Support",
        description:
            "Get guidance across location selection, equipment, recruitment, training, marketing and operations as you build your franchise.",
    },
];

const investmentHighlights = [
    { value: "30–40%", label: "Projected ROI*", icon: ChartLine },
    { value: "₹70L–₹1Cr", label: "Investment Range**", icon: Wallet },
    { value: "2,000–3,000", label: "Space Requirement (Sq. Ft.)", icon: Building2 },
    { value: "3 Models", label: "FOFO, FICO & FOCO", icon: Handshake },
];

const franchiseModels = [
    {
        title: "FOFO",
        subtitle: "Franchise Owned, Franchise Operated",
        description:
            "A franchise model for partners who plan to own and operate their VIVAFIT business.",
    },
    {
        title: "FICO",
        subtitle: "Franchise Invested, Company Operated",
        description:
            "An option for partners interested in investing while the company manages operations, subject to agreed terms.",
    },
    {
        title: "FOCO",
        subtitle: "Franchise Owned, Company Operated",
        description:
            "A model where the franchise partner owns the business and the company supports its operation, subject to agreed terms.",
    },
];

const supportServices = [
    { icon: MapPin, title: "Location Assistance", description: "Guidance in identifying a suitable location for your gym." },
    { icon: Wallet, title: "Commercial Guidance", description: "Support in understanding the commercial requirements of the franchise." },
    { icon: Wrench, title: "Equipment Assistance", description: "Equipment ordering support with cost-effective options and EMI availability, subject to terms." },
    { icon: Building2, title: "Interior Guidance", description: "Assistance in planning a functional and welcoming gym space." },
    { icon: Users, title: "Recruitment Support", description: "Guidance with team selection and staffing requirements." },
    { icon: GraduationCap, title: "Training Support", description: "Training assistance for your team and fitness operations." },
    { icon: Megaphone, title: "Marketing & Sales", description: "Marketing and sales guidance to help promote your centre." },
    { icon: Settings, title: "Operations Support", description: "Operational guidance to help maintain service standards." },
];

const franchiseSteps = [
    {
        number: "01",
        title: "Submit an Enquiry",
        description: "Share your details, preferred location and interest in a VIVAFIT franchise.",
    },
    {
        number: "02",
        title: "Connect With Our Team",
        description: "Discuss the franchise opportunity, business models and your goals.",
    },
    {
        number: "03",
        title: "Evaluate the Opportunity",
        description: "Review location suitability, investment requirements and proposed terms.",
    },
    {
        number: "04",
        title: "Plan Your Franchise",
        description: "Move forward with the agreed process, planning and launch requirements.",
    },
];

const investmentFacts = [
    "Investment range: ₹70 Lakhs to ₹1 Crore (excluding GST)",
    "Space requirement: 2,000 to 3,000 Sq. Ft.",
    "Franchise models: FOFO, FICO and FOCO",
    "Projected ROI: 30–40%, subject to business performance",
    "Equipment ordering assistance and EMI options, subject to terms",
    "Recruitment, training and operational guidance",
    "Marketing and sales support",
    "Pre-sales assistance and launch guidance",
];

const marketPoints = [
    "Growing Demand for Women’s Fitness: Increasing awareness of health, fitness, and preventive wellness is creating strong demand for women-focused fitness facilities.",
    "Underserved Market Opportunity: Many women prefer exclusive fitness spaces that offer privacy, comfort, and a supportive environment.",
    "A Differentiated Business Model: A ladies-only gym stands out from conventional unisex gyms by addressing women's specific fitness needs and preferences.",
    "Recurring Revenue Potential: Membership subscriptions, personal training, group classes, and wellness programs create multiple revenue streams.",
    "Strong Community & Customer Loyalty: A welcoming, women-centric environment encourages long-term memberships, referrals, and repeat business.",
    "Flexible Investment Models: Franchise and managed-gym models offer investors different levels of operational involvement and business ownership.",
    "Scalable Business Opportunity: A successful gym can be replicated across multiple locations, creating opportunities for portfolio expansion.",
    "Beyond Fitness: Additional services such as nutrition counselling, weight management, yoga, and wellness programs can expand revenue opportunities.",
    "Social Impact with Commercial Potential: Investing in women's fitness contributes to healthier communities while building a sustainable business.",

];

type FranchiseFormData = {
    name: string;
    phone: string;
    email: string;
    qualification: string;
    source: string;
    investment: string;
    timeline: string;
};

const initialFormData: FranchiseFormData = {
    name: "",
    phone: "",
    email: "",
    qualification: "",
    source: "",
    investment: "",
    timeline: "",
};

export default function Franchise() {
    const [formData, setFormData] = useState<FranchiseFormData>({
        ...initialFormData,
    });

    const [submitted, setSubmitted] = useState(false);
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwYhPlWexOMetasSRU0pFQdThmtkKyltCAmOfxT2_0DOta1XAHV6Dl84MJ7_4LC5qbR/exec";

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setSubmitted(false);

        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8",
                },
                body: JSON.stringify({
                    ...formData,
                    submittedAt: new Date().toISOString(),
                }),
            });

            setSubmitted(true);
            setFormData({ ...initialFormData });

        } catch (error) {
            console.error("Franchise enquiry submission failed:", error);
            alert("Unable to submit your enquiry. Please try again.");
        }
    };

    const inputStyle =
        "w-full rounded-lg border border-white/15 bg-[#172622] px-4 py-3.5 text-sm text-white outline-none transition duration-300 focus:border-[#B6FF00] focus:ring-1 focus:ring-[#B6FF00]/30 placeholder:text-white/40";

    return (
        <main className="min-h-screen overflow-hidden bg-[#080B08] text-white">
            {/* Hero */}
            <section className="relative flex min-h-[680px] items-center pt-24 sm:min-h-[740px]">
                <div className="absolute inset-0">
                    <img
                        src={FranchiseImage}
                        alt="Modern fitness gym interior"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#080B07] via-[#080B07]/60 to-[#080B08]/25" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080B07] via-transparent to-[#080B08]/15" />
                </div>

                <div className="relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
                    <div className="max-w-3xl">
                        <span className="inline-flex items-center gap-2 rounded-full border border-[#B6FF00]/30 bg-[#B6FF00]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#B6FF00]">
                            <span className="h-2 w-2 rounded-full bg-[#B6FF00]" />
                            VIVAFIT Franchise Opportunities
                        </span>

                        <h1 className="mt-7 text-4xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
                            Invest in Fitness.
                            <br />
                            Build a <span className="text-[#B6FF00]">Stronger</span>
                            <br />
                            Business Future.
                        </h1>

                        <p className="mt-7 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
                            Explore a business opportunity in the growing fitness and wellness industry with VIVAFIT. Partner with a women-focused fitness brand and build a business supported by structured franchise models, operational guidance and a clear market focus.
                        </p>

                        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                            <a
                                href="#enquiry"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B6FF00] px-7 py-4 font-bold text-black transition duration-300 hover:scale-[1.02] hover:bg-white"
                            >
                                Explore Franchise Opportunities
                                <ArrowRight size={19} />
                            </a>
                            <a
                                href="#investment"
                                className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-4 font-semibold transition duration-300 hover:border-[#B6FF00] hover:text-[#B6FF00]"
                            >
                                View Investment Details
                            </a>
                        </div>

                        <div className="mt-12 flex items-center gap-3 text-sm text-gray-400">
                            <HeartPulse size={19} className="text-[#B6FF00]" />
                            Empowering Women Through Fitness
                        </div>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
                <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-16">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#B6FF00]">
                            The Business Opportunity
                        </p>
                        <h2 className="mt-5 text-3xl font-black leading-tight sm:text-5xl">
                            Your Investment.
                            <br />
                            A <span className="text-[#B6FF00]">Growing Industry.</span>
                        </h2>
                    </div>
                    <div className="space-y-5 text-sm leading-8 text-gray-400 sm:text-base">
                        <p>
                            Health, fitness and wellness continue to be important parts of modern living. This creates opportunities for entrepreneurs who want to build a business in a sector with lasting relevance.
                        </p>
                        <p>
                            VIVAFIT brings a specialized women-focused fitness concept together with fitness services, a supportive community and structured franchise options. Our aim is to help partners explore the opportunity with guidance across key stages of setting up and operating a fitness centre.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why invest */}
            <section id="why-vivafit" className="bg-[#0D130D] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#B6FF00]">
                            The Investment Advantage
                        </p>
                        <h2 className="mt-4 text-3xl font-black sm:text-5xl">
                            Why Invest in <span className="text-[#B6FF00]">VIVAFIT?</span>
                        </h2>
                        <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
                            Explore a specialized fitness concept with industry relevance, a defined audience and support across important business functions.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {investorBenefits.map((benefit) => {
                            const Icon = benefit.icon;
                            return (
                                <article
                                    key={benefit.title}
                                    className="group rounded-2xl border border-white/10 bg-[#101810] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#B6FF00]/60 hover:shadow-[0_0_25px_rgba(182,255,0,0.08)] sm:p-7"
                                >
                                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#B6FF00]/10 text-[#B6FF00] transition duration-300 group-hover:bg-[#B6FF00] group-hover:text-black">
                                        <Icon size={27} />
                                    </div>
                                    <h3 className="mt-6 text-lg font-bold sm:text-xl">{benefit.title}</h3>
                                    <p className="mt-3 text-sm leading-7 text-gray-400">{benefit.description}</p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Investment highlights */}
            <section id="investment" className="bg-[#080B08] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#B6FF00]">
                            Investment Overview
                        </p>
                        <h2 className="mt-4 text-3xl font-black sm:text-5xl">
                            The Opportunity, <span className="text-[#B6FF00]">At a Glance.</span>
                        </h2>
                        <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
                            Get a quick overview of the investment range, space requirement and franchise models available.
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {investmentHighlights.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={item.label}
                                    className="group rounded-2xl border border-white/10 bg-[#111811] p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#B6FF00] hover:shadow-[0_0_25px_rgba(182,255,0,0.10)] sm:p-7"
                                >
                                    <Icon size={29} className="mx-auto text-[#B6FF00] transition-transform duration-300 group-hover:scale-110" />
                                    <h3 className="mt-5 text-2xl font-black text-[#B6FF00] sm:text-3xl">{item.value}</h3>
                                    <p className="mt-2 text-xs text-gray-400 sm:text-sm">{item.label}</p>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-6 rounded-xl border border-[#B6FF00]/20 bg-[#101810] p-5 sm:p-6">
                        <div className="flex items-start gap-3">
                            <BadgeCheck className="mt-0.5 shrink-0 text-[#B6FF00]" size={22} />
                            <div>
                                <h3 className="font-bold text-white">Investment information</h3>
                                <p className="mt-2 text-xs leading-6 text-gray-400 sm:text-sm">
                                    *The 30–40% ROI is a projected figure shared for franchise discussions, not a guaranteed return. Actual results may vary based on location, investment structure, operating expenses, sales and other business factors. **Investment range is ₹70 Lakhs to ₹1 Crore, excluding GST. Final costs and terms must be confirmed with the VIVAFIT franchise team.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Market opportunity */}
            <section className="bg-[#0D130D] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
                <div className="mx-auto max-w-7xl">

                    {/* Section Heading */}
                    <div className="mx-auto mb-12 max-w-3xl text-center">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#B6FF00]">
                            Industry Opportunity
                        </p>

                        <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                            Why Invest in a
                            <span className="text-[#B6FF00]"> Ladies - Only Gym </span>
                            Today?
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
                            Explore the growing opportunities in women's fitness and wellness
                            with a specialized business concept.
                        </p>
                    </div>

                    {/* Image + Points */}
                    <div className="grid items-stretch gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">

                        {/* Image */}
                        <div className="relative min-h-[300px] overflow-hidden rounded-2xl sm:min-h-[400px] lg:min-h-full">
                            <img
                                // src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=85"
                                src={FranchiseImg}
                                alt="Fitness training in a modern gym"
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                                loading="lazy"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#080B08]/90 via-[#080B08]/10 to-transparent" />

                            <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B6FF00]">
                                    A Focused Fitness Concept
                                </span>

                                <h3 className="mt-3 max-w-sm text-2xl font-black leading-tight text-white sm:text-3xl">
                                    Empowering Women Through Fitness & Wellness.
                                </h3>
                            </div>
                        </div>

                        {/* Opportunity Points */}
                        <div className="flex flex-col justify-center">

                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                {marketPoints.map((point, index) => (
                                    <div
                                        key={index}
                                        className="group flex items-start gap-3 rounded-xl border border-white/10 bg-[#111A11] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#B6FF00]/60 hover:bg-[#172217] sm:p-5"
                                    >
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#B6FF00]/10 text-[#B6FF00] transition-all duration-300 group-hover:bg-[#B6FF00] group-hover:text-black">
                                            <CheckCircle2 size={17} />
                                        </div>

                                        <p className="text-sm font-medium leading-6 text-gray-300 transition-colors duration-300 group-hover:text-white">
                                            {point}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Bottom Highlight */}
                            <div className="mt-6 rounded-xl border-l-4 border-[#B6FF00] bg-[#B6FF00]/5 px-5 py-4">
                                <p className="text-sm font-semibold leading-6 text-white sm:text-base">
                                    Invest in women's wellness today.
                                    <span className="text-[#B6FF00]">
                                        {" "}Build a stronger fitness business for tomorrow.
                                    </span>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Franchise models */}
            <section className="bg-[#080B08] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#B6FF00]">Choose Your Approach</p>
                        <h2 className="mt-4 text-3xl font-black sm:text-5xl">
                            Franchise <span className="text-[#B6FF00]">Models.</span>
                        </h2>
                        <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
                            Explore the available franchise structures and discuss which model aligns with your investment goals and level of involvement.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-5 md:grid-cols-3">
                        {franchiseModels.map((model, index) => (
                            <article key={model.title} className="group rounded-2xl border border-white/10 bg-[#101810] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#B6FF00]/60 hover:shadow-[0_0_25px_rgba(182,255,0,0.08)]">
                                <span className="text-sm font-bold tracking-[0.2em] text-[#B6FF00]">MODEL 0{index + 1}</span>
                                <h3 className="mt-5 text-3xl font-black">{model.title}</h3>
                                <p className="mt-2 text-sm font-semibold text-[#B6FF00]">{model.subtitle}</p>
                                <p className="mt-5 text-sm leading-7 text-gray-400">{model.description}</p>
                            </article>
                        ))}
                    </div>
                    <p className="mt-5 text-center text-xs leading-6 text-gray-500">
                        Franchise model roles, responsibilities, fees and operating terms are subject to the final agreement with VIVAFIT.
                    </p>
                </div>
            </section>

            {/* Investment facts */}
            <section className="bg-[#0D130D] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#B6FF00]">Your Investment</p>
                        <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
                            Your Franchise <span className="text-[#B6FF00]">Facts.</span>
                        </h2>
                        <p className="mt-5 text-sm leading-8 text-gray-400 sm:text-base">
                            Understand the key requirements and available provisions as you evaluate a VIVAFIT franchise opportunity.
                        </p>
                        <a href="#enquiry" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#B6FF00] px-6 py-3.5 text-sm font-bold text-black transition hover:bg-white">
                            Discuss Your Investment <ArrowRight size={18} />
                        </a>
                    </div>

                    <div className="rounded-2xl border border-[#B6FF00]/30 bg-[#151B13] p-5 transition-all duration-300 hover:border-[#B6FF00] hover:shadow-[0_0_25px_rgba(182,255,0,0.08)] sm:p-8">
                        <ul className="grid grid-cols-1 gap-x-7 gap-y-4 sm:grid-cols-2">
                            {investmentFacts.map((fact) => (
                                <li key={fact} className="group flex items-start gap-3 text-sm leading-7 text-gray-300 transition duration-300 hover:translate-x-1 hover:text-white">
                                    <span className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-[#B6FF00] transition group-hover:scale-125 group-hover:shadow-[0_0_8px_#B6FF00]" />
                                    <span>{fact}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Business support */}
            <section className="bg-[#080B08] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#B6FF00]">Partner Support</p>
                        <h2 className="mt-4 text-3xl font-black sm:text-5xl">
                            We Support You <span className="text-[#B6FF00]">At Every Step.</span>
                        </h2>
                        <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
                            From planning your gym to preparing your team, explore the support areas available through the VIVAFIT franchise system.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {supportServices.map((service) => {
                            const Icon = service.icon;
                            return (
                                <article key={service.title} className="group rounded-xl border border-white/10 bg-[#101810] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B6FF00]/60">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#B6FF00]/10 text-[#B6FF00] transition group-hover:bg-[#B6FF00] group-hover:text-black">
                                        <Icon size={23} />
                                    </div>
                                    <h3 className="mt-5 font-bold">{service.title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-gray-400">{service.description}</p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Franchise process */}
            <section className="bg-[#0D130D] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-2xl">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#B6FF00]">Your Journey</p>
                        <h2 className="mt-4 text-3xl font-black sm:text-5xl">
                            Four Steps to Explore <span className="text-[#B6FF00]">Your Opportunity.</span>
                        </h2>
                    </div>

                    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {franchiseSteps.map((step) => (
                            <article key={step.number} className="rounded-2xl border border-white/10 bg-[#101810] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B6FF00]/60">
                                <span className="text-4xl font-black text-[#B6FF00]">{step.number}</span>
                                <h3 className="mt-6 text-lg font-bold">{step.title}</h3>
                                <p className="mt-3 text-sm leading-7 text-gray-400">{step.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who can apply */}
            <section className="bg-[#080B08] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
                <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#B6FF00]">Who Can Partner With Us?</p>
                        <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
                            Is VIVAFIT the <span className="text-[#B6FF00]">Right Opportunity</span> for You?
                        </h2>
                        <p className="mt-5 text-sm leading-8 text-gray-400 sm:text-base">
                            Whether you are an entrepreneur, an existing business owner or an investor exploring the fitness industry, connect with our team to understand the opportunity and requirements.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {[
                            { icon: Building2, title: "Entrepreneurs", text: "Explore business ownership in the fitness and wellness sector." },
                            { icon: TrendingUp, title: "Business Owners & Investors", text: "Discuss your investment goals and potential franchise plans." },
                            { icon: Dumbbell, title: "Fitness Enthusiasts", text: "Explore a business connected to your interest in health and wellness." },
                            { icon: MapPin, title: "Future Franchise Partners", text: "Share the city or location where you would like to establish VIVAFIT." },
                        ].map((item) => {
                            const Icon = item.icon;
                            return (
                                <div key={item.title} className="group flex gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#B6FF00]/10 text-[#B6FF00] transition group-hover:bg-[#B6FF00] group-hover:text-black">
                                        <Icon size={22} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold">{item.title}</h3>
                                        <p className="mt-1 text-sm leading-6 text-gray-400">{item.text}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Enquiry form */}
            <section id="enquiry" className="relative scroll-mt-24 overflow-hidden bg-[#0F1C1A] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12">

                <div className="mx-auto max-w-4xl">

                    {/* Section Heading */}
                    <div className="mb-10 text-center">
                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#B6FF00]">
                            Franchise Opportunities
                        </span>

                        <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                            Become a VIVAFIT{" "}
                            <span className="text-[#B6FF00]">Partner</span>
                        </h2>

                        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                            Take the first step towards owning a successful women-only fitness business.
                            Submit your details and our franchise team will connect with you.
                        </p>
                    </div>

                    {/* Enquiry Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="rounded-2xl border border-white/10 bg-[#061512] p-5 shadow-2xl sm:p-8 lg:p-10"
                    >

                        <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">

                            {/* Name */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-white/80">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    className={inputStyle}
                                    required
                                />
                            </div>

                            {/* Contact Number */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-white/80">
                                    Contact Number *
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter 10-digit mobile number"
                                    pattern="[0-9]{10}"
                                    maxLength={10}
                                    className={inputStyle}
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-white/80">
                                    Email ID *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email address"
                                    className={inputStyle}
                                    required
                                />
                            </div>

                            {/* Qualification */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-white/80">
                                    Qualification *
                                </label>
                                <select
                                    name="qualification"
                                    value={formData.qualification}
                                    onChange={handleChange}
                                    className={inputStyle}
                                    required
                                >
                                    <option value="">Select Qualification</option>
                                    <option value="UG">UG</option>
                                    <option value="PG">PG</option>
                                    <option value="Professional Courses">Professional Courses</option>
                                </select>
                            </div>

                            {/* Source */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-white/80">
                                    How Did You Hear About This Opportunity? *
                                </label>
                                <select
                                    name="source"
                                    value={formData.source}
                                    onChange={handleChange}
                                    className={inputStyle}
                                    required
                                >
                                    <option value="">Select an Option</option>
                                    <option value="Online">Online</option>
                                    <option value="Signage">Signage</option>
                                    <option value="Friends">Friends</option>
                                </select>
                            </div>

                            {/* Investment */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-white/80">
                                    Investment Range *
                                </label>
                                <select
                                    name="investment"
                                    value={formData.investment}
                                    onChange={handleChange}
                                    className={inputStyle}
                                    required
                                >
                                    <option value="">Select Investment Range</option>
                                    <option value="50 Lakhs to 70 Lakhs">₹50 Lakhs – ₹70 Lakhs</option>
                                    <option value="70 Lakhs to 1 Crore">₹70 Lakhs – ₹1 Crore</option>
                                    <option value="1 Crore and Above">₹1 Crore and Above</option>
                                </select>
                            </div>

                            {/* Business Start Timeline */}
                            <div className="sm:col-span-2">
                                <label className="mb-2 block text-sm font-medium text-white/80">
                                    When Are You Planning to Start the Business? *
                                </label>
                                <select
                                    name="timeline"
                                    value={formData.timeline}
                                    onChange={handleChange}
                                    className={inputStyle}
                                    required
                                >
                                    <option value="">Select Your Timeline</option>
                                    <option value="Immediate">Immediate</option>
                                    <option value="Within 3 Months">Within 3 Months</option>
                                    <option value="Within 6 Months">Within 6 Months</option>
                                    <option value="Maybe Later">Maybe Later</option>
                                </select>
                            </div>

                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="mt-8 flex w-full items-center justify-center gap-3 rounded-lg bg-[#B6FF00] px-6 py-4 text-sm font-bold uppercase tracking-wider text-black transition-all duration-300 hover:bg-white"
                        >
                            Submit Franchise Enquiry
                            <Send size={18} />
                        </button>

                        {submitted && (
                            <p className="mt-4 text-center text-sm font-medium text-[#B6FF00]">
                                Thank you! Your enquiry has been submitted.
                            </p>
                        )}

                    </form>
                </div>
            </section>

            {/* Final CTA */}
            <section className="px-5 pb-12 sm:px-8 sm:pb-16 lg:px-12 mt-10">
                <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-[#B6FF00]/20 bg-gradient-to-r from-[#172719] to-[#090D09] px-5 py-8 sm:px-8 sm:py-10">

                    <div className="relative flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">

                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#B6FF00]/10">
                                <Dumbbell className="text-[#B6FF00]" size={25} />
                            </div>

                            <div>
                                <h2 className="text-xl font-bold sm:text-2xl">
                                    Build with <span className="text-[#B6FF00]">VIVAFIT.</span>
                                </h2>

                                <p className="mt-1 max-w-md text-xs leading-6 text-gray-400 sm:text-sm">
                                    Explore a women's fitness franchise opportunity with us.
                                </p>
                            </div>
                        </div>

                        <a
                            href="#enquiry"
                            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#B6FF00] px-6 py-3 text-sm font-bold text-black transition duration-300 hover:bg-white"
                        >
                            Become a Partner
                            <ArrowRight size={17} />
                        </a>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
