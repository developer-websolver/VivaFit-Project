
import { useState } from "react";
import {
    ArrowRight,
    CheckCircle2,
    Dumbbell,
    Heart,
    Users,
    TrendingUp,
    Target,

    Send,
    MapPin,
    Handshake,
    Building2,
} from "lucide-react";
import Footer from "./footer";
import emailjs from "@emailjs/browser";

const benefits = [
    {
        icon: Heart,
        title: "Women-Focused Fitness",
        description:
            "VIVAFIT promotes women's health and wellness through a supportive fitness environment designed to encourage strength, confidence, and active living.",
    },
    {
        icon: TrendingUp,
        title: "Business Opportunity",
        description:
            "Explore women's gym franchise opportunities in India and discover the potential to build a fitness business with the VIVAFIT brand.",
    },
    {
        icon: Users,
        title: "Community Building",
        description:
            "Create a welcoming women's fitness community that encourages consistency, healthy habits, and long-term wellness.",
    },
    {
        icon: Target,
        title: "A Shared Vision",
        description:
            "Partner with VIVAFIT to explore a women's fitness franchise and help make quality fitness experiences accessible to more women.",
    },
];

const steps = [
    {
        number: "01",
        title: "Submit an Enquiry",
        description:
            "Tell us about yourself, your preferred location, and your interest in a VIVAFIT franchise.",
    },
    {
        number: "02",
        title: "Connect With Our Team",
        description:
            "Discuss your goals and learn more about the franchise opportunity.",
    },
    {
        number: "03",
        title: "Evaluate the Opportunity",
        description:
            "Discuss location, investment capacity, and business requirements.",
    },
    {
        number: "04",
        title: "Plan Your Next Steps",
        description:
            "Review the proposed terms and proceed through the agreed franchise process.",
    },
];

interface Form {
    name: string;
    phone: string;
    email: string;
    city: string;
    budget: string;
    business: string;
    message: string;
}

const initialForm: Form = {
    name: "",
    phone: "",
    email: "",
    city: "",
    budget: "",
    business: "",
    message: "",
};

export default function Franchise() {
    const [form, setForm] = useState<Form>(initialForm);
    const [submitting, setSubmitting] = useState(false);
    const [status, setStatus] = useState("");

    const serviceid = import.meta.env.VITE_EMAILJS_SERVICE_ID_VIVAFIT
    const templateid = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_VIVAFIT
    const publickey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY_VIVAFIT


    const updateField = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;

        setForm((previous) => ({
            ...previous,
            [name]: value,
        }));

        setStatus("");
    };


    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
        setSubmitting(true);
        setStatus("");

        if (!serviceid || !templateid || !publickey) {
            setStatus("Email service configuration is missing. Please try again later.");
            setSubmitting(false);
            return;
        }

        try {
            await emailjs.send(
                serviceid,
                templateid,
                {
                    name: form.name,
                    phone: form.phone,
                    email: form.email,
                    city: form.city,
                    budget: form.budget || "Not specified",
                    business: form.business || "Not specified",
                    message: form.message || "No additional details",
                },
                {
                    publicKey: publickey,
                }
            );

            setStatus(
                "Thank you! Your franchise enquiry has been submitted successfully."
            );

            setForm(initialForm);
        } catch (error) {
            console.error("EmailJS error:", error);

            setStatus(
                "Unable to submit your enquiry right now. Please try again."
            );
        } finally {
            setSubmitting(false);
        }
    };

    const inputClass =
        "w-full rounded-xl border border-white/10 bg-[#101810] px-4 py-3.5 text-sm text-white placeholder:text-gray-500 outline-none transition focus:border-[#B6FF00]";

    return (
        <main className="min-h-screen overflow-hidden bg-[#080B08] text-white">

            {/* Hero */}
            <section className="relative flex min-h-[720px] items-center pt-24 sm:min-h-[780px]">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=85"
                        alt="Modern fitness gym interior"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#080B08] via-[#080B08]/90 to-[#080B08]/30" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080B08] via-transparent to-[#080B08]/30" />
                </div>

                <div className="relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
                    <div className="max-w-3xl">
                        <span className="inline-flex items-center gap-2 rounded-full border border-[#B6FF00]/30 bg-[#B6FF00]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#B6FF00]">
                            <span className="h-2 w-2 rounded-full bg-[#B6FF00]" />
                            Franchise Opportunities
                        </span>

                        <h1 className="mt-7 text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                            Bring
                            <span className="text-[#B6FF00]"> VIVAFIT </span>
                            <br />
                            to Your Community.
                        </h1>

                        <p className="mt-7 max-w-xl text-base leading-8 text-gray-300 sm:text-lg">
                            Partner with VIVAFIT and explore exciting women's gym franchise opportunities in India. Build a fitness business focused on women's health, wellness, and strength while bringing a women-focused fitness experience to more communities through the VIVAFIT franchise.
                        </p>

                        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                            <a
                                href="#enquiry"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B6FF00] px-7 py-4 font-bold text-black transition hover:scale-[1.02] hover:bg-white"
                            >
                                Become a Franchise Partner
                                <ArrowRight size={19} />
                            </a>
                            <a
                                href="#why-vivafit"
                                className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-4 font-semibold transition hover:border-[#B6FF00] hover:text-[#B6FF00]"
                            >
                                Discover the Opportunity

                            </a>
                        </div>

                        <div className="mt-12 flex items-center gap-3 text-sm text-gray-400">
                            <Heart size={18} className="text-[#B6FF00]" />
                            Empowering Women Through Fitness
                        </div>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="px-5 py-20 sm:px-8 sm:py-28">
                <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#B6FF00]">
                            The VIVAFIT Vision
                        </p>
                        <h2 className="mt-5 text-3xl font-black leading-tight sm:text-5xl">
                            Build a Business That
                            <span className="text-[#B6FF00]"> Empowers Women.</span>
                        </h2>
                    </div>
                    <div className="space-y-5 text-base leading-8 text-gray-400">
                        <p>
                            VIVAFIT offers an exciting opportunity for entrepreneurs looking to enter the women's fitness industry. Our vision is to create welcoming fitness spaces where women can focus on strength, health, and overall wellness. Through our women's gym franchise opportunities in India,
                        </p>
                        <p>
                            we aim to connect with passionate business owners who want to build a fitness business while making a positive impact on women's lives. If you are exploring a gym franchise, fitness business opportunity, or women's wellness franchise, VIVAFIT invites you to discover the possibilities of bringing our women-focused fitness concept to your city.
                        </p>

                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section id="why-vivafit" className="bg-[#0D130D] px-5 py-20 sm:px-8 sm:py-28">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#B6FF00]">
                            Why VIVAFIT?
                        </p>
                        <h2 className="mt-4 text-3xl font-black sm:text-5xl">
                            More Than a Gym.
                            <span className="text-[#B6FF00]"> A Purpose.</span>
                        </h2>
                        <p className="mt-5 leading-7 text-gray-400">
                            VIVAFIT offers exciting women's gym franchise opportunities in India, combining a women-focused fitness concept with a commitment to health, strength, and wellness. Explore a fitness franchise business with VIVAFIT and bring a supportive women's fitness experience to your city.
                        </p>
                    </div>

                    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {benefits.map((benefit) => {
                            const Icon = benefit.icon;

                            return (
                                <article
                                    key={benefit.title}
                                    className="group rounded-2xl border border-white/10 bg-[#101810] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#B6FF00]/50"
                                >
                                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#B6FF00]/10 text-[#B6FF00] transition group-hover:bg-[#B6FF00] group-hover:text-black">
                                        <Icon size={27} />
                                    </div>
                                    <h3 className="mt-6 text-xl font-bold">{benefit.title}</h3>
                                    <p className="mt-3 text-sm leading-7 text-gray-400">
                                        {benefit.description}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Franchise process */}
            <section className="px-5 py-20 sm:px-8 sm:py-28">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-2xl">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#B6FF00]">
                            Your Journey
                        </p>
                        <h2 className="mt-4 text-3xl font-black sm:text-5xl">
                            Four Steps to Explore
                            <span className="text-[#B6FF00]"> Your Opportunity.</span>
                        </h2>
                    </div>

                    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {steps.map((step) => (
                            <article
                                key={step.number}
                                className="rounded-2xl border border-white/10 p-6 transition hover:border-[#B6FF00]/50"
                            >
                                <span className="text-4xl font-black text-[#B6FF00]">
                                    {step.number}
                                </span>
                                <h3 className="mt-6 text-lg font-bold">{step.title}</h3>
                                <p className="mt-3 text-sm leading-7 text-gray-400">
                                    {step.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who can apply */}
            <section className="bg-[#0D130D] px-5 py-20 sm:px-8 sm:py-24">
                <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#B6FF00]">
                            Let's Connect
                        </p>
                        <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
                            Is VIVAFIT the
                            <span className="text-[#B6FF00]"> Right Opportunity </span>
                            for You?
                        </h2>
                        <p className="mt-5 leading-8 text-gray-400">
                            If you are interested in fitness, wellness, and building a
                            business that serves women, start a conversation with our team.
                        </p>
                    </div>

                    <div className="space-y-5">
                        {[
                            {
                                icon: Building2,
                                title: "Entrepreneurs",
                                text: "Explore opportunities in the fitness industry.",
                            },
                            {
                                icon: TrendingUp,
                                title: "Business Owners & Investors",
                                text: "Discuss your goals and potential investment plans.",
                            },
                            {
                                icon: Handshake,
                                title: "Fitness Enthusiasts",
                                text: "Explore a business aligned with your passion for wellness.",
                            },
                            {
                                icon: MapPin,
                                title: "Future Franchise Partners",
                                text: "Tell us where you would like to bring VIVAFIT.",
                            },
                        ].map((item) => {
                            const Icon = item.icon;

                            return (
                                <div key={item.title} className="flex gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#B6FF00]/10 text-[#B6FF00]">
                                        <Icon size={22} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold">{item.title}</h3>
                                        <p className="mt-1 text-sm leading-6 text-gray-400">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Enquiry form */}
            <section id="enquiry" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
                <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#B6FF00]">
                            Franchise Enquiry
                        </p>
                        <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
                            Let's Bring
                            <span className="text-[#B6FF00]"> VIVAFIT </span>
                            to Your City.
                        </h2>
                        <p className="mt-6 leading-8 text-gray-400">
                            Share a few details with us. Our team can learn more about your
                            interest and discuss the next steps with you.
                        </p>

                        <div className="mt-9 space-y-4">
                            <div className="flex items-center gap-3 text-sm text-gray-300">
                                <CheckCircle2 className="text-[#B6FF00]" size={20} />
                                Share your preferred location
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-300">
                                <CheckCircle2 className="text-[#B6FF00]" size={20} />
                                Tell us about your business interests
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-300">
                                <CheckCircle2 className="text-[#B6FF00]" size={20} />
                                Start a conversation with VIVAFIT
                            </div>
                        </div>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="rounded-3xl border border-white/10 bg-[#0D130D] p-5 sm:p-9"
                    >
                        <h3 className="text-2xl font-bold">Franchise Enquiry Form</h3>
                        <p className="mt-2 text-sm text-gray-400">
                            Fields marked with * are required.
                        </p>

                        <div className="mt-8 grid gap-5 sm:grid-cols-2">
                            <div>
                                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                                    Full Name *
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    value={form.name}
                                    onChange={updateField}
                                    placeholder="Enter your full name"
                                    className={inputClass}
                                    autoComplete="name"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                                    Phone Number *
                                </label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={form.phone}
                                    onChange={updateField}
                                    placeholder="Enter your phone number"
                                    className={inputClass}
                                    autoComplete="tel"
                                    maxLength={10}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                                    Email Address *
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={updateField}
                                    placeholder="Enter your email"
                                    className={inputClass}
                                    autoComplete="email"

                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="city" className="mb-2 block text-sm font-medium">
                                    Preferred City *
                                </label>
                                <input
                                    id="city"
                                    name="city"
                                    value={form.city}
                                    onChange={updateField}
                                    placeholder="City you are interested in"
                                    className={inputClass}
                                    autoComplete="address-level2"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="budget" className="mb-2 block text-sm font-medium">
                                    Approximate Investment Budget
                                </label>
                                <select
                                    id="budget"
                                    name="budget"
                                    value={form.budget}
                                    onChange={updateField}
                                    className={inputClass}
                                >
                                    <option value="">Select your budget</option>
                                    <option value="Below ₹25 lakhs">Below ₹75 lakhs</option>
                                    <option value="₹25–50 lakhs">₹75–150 lakhs</option>
                                    <option value="₹50 lakhs–₹1 crore">₹150 lakhs–₹200 lakhs</option>
                                    <option value="Above ₹1 crore">Above ₹200 lakhs</option>
                                    <option value="Need guidance">Need guidance</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="business" className="mb-2 block text-sm font-medium">
                                    Do you own a business?
                                </label>
                                <select
                                    id="business"
                                    name="business"
                                    value={form.business}
                                    onChange={updateField}
                                    className={inputClass}
                                >
                                    <option value="">Select an option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                                    Additional Details
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={form.message}
                                    onChange={updateField}
                                    rows={4}
                                    placeholder="Tell us more about your plans..."
                                    className={`${inputClass} resize-y`}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={submitting}
                            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#B6FF00] px-6 py-4 font-bold text-black transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {submitting ? "Submitting..." : "Submit"}
                            <Send size={18} />
                        </button>

                        {status && (
                            <p role="status" className="mt-4 text-sm leading-6 text-[#B6FF00]">
                                {status}
                            </p>
                        )}

                        <p className="mt-4 text-center text-xs leading-5 text-gray-500">
                            By submitting this form, you agree to be contacted about your
                            franchise enquiry.
                        </p>
                    </form>
                </div>
            </section>

            {/* Final CTA */}
            <section className="px-5 pb-20 sm:px-8 sm:pb-28">
                <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-[#B6FF00]/20 bg-gradient-to-br from-[#172719] to-[#090D09] px-6 py-16 text-center sm:px-12 sm:py-20">
                    <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#B6FF00]/10 blur-3xl" />
                    <div className="relative">
                        <Dumbbell className="mx-auto text-[#B6FF00]" size={42} />
                        <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-black sm:text-5xl">
                            Let's Make Women's Fitness
                            <span className="text-[#B6FF00]"> More Accessible.</span>
                        </h2>
                        <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
                            Take the first step towards exploring a VIVAFIT franchise
                            opportunity in your city.
                        </p>
                        <a
                            href="#enquiry"
                            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#B6FF00] px-7 py-4 font-bold text-black transition hover:bg-white"
                        >
                            Enquire Now <ArrowRight size={19} />
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
