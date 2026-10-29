
import { useState } from "react";
import {  Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "Which is the best ladies gym in Chennai?",
        answer:
            "VIVAFIT is a women-focused fitness centre offering strength training, personal training, weight management, body toning, Zumba, and yoga. Our supportive workout environment helps women work towards their individual fitness goals.",
    },
    {
        question: "Does VIVAFIT offer personal training for women?",
        answer:
            "Yes, VIVAFIT offers personal training options for women with workout routines tailored to individual fitness levels and goals. Whether you want to build strength, improve endurance, or work towards weight management, our training options can support your fitness journey.",
    },
    {
        question: "Does VIVAFIT provide weight loss and body toning programs?",
        answer:
            "VIVAFIT offers fitness programs that support weight management, body toning, strength development, and general fitness. Women can explore structured workouts and fitness guidance based on their individual goals and activity levels.",
    },
    {
        question: "Are Zumba and yoga classes available at VIVAFIT?",
        answer:
            "VIVAFIT offers fitness activities including Zumba and yoga, providing women with different ways to stay active, improve flexibility, and support their overall fitness. Contact your nearest branch to confirm class schedules and availability.",
    },
    {
        question: "Where can I find a VIVAFIT women's gym near me in Chennai?",
        answer:
            "VIVAFIT has women-focused gym locations across Chennai, including Thirumangalam, Ambattur, Pammal, Madhanandapuram, Mogappair, Radha Nagar, Vadapalani, and Alapakkam. Explore your nearest VIVAFIT branch to learn more about available fitness programs and membership options.",
    },
];

function FaqPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="min-h-screen bg-[#0F1C1A] px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-16 lg:py-20">
            <div className="mx-auto max-w-7xl">
                {/* Heading */}
                <div className="max-w-2xl">
                    <span className="inline-flex rounded-full bg-[#273331] px-3 py-2 text-[11px] font-semibold text-[#B6FF00]">
                        Got Questions?
                    </span>

                    <h2 className="mt-5 text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl lg:text-[38px]">
                        Frequently{" "}
                        <span className="text-[#B6FF00]">Asked Questions</span>
                    </h2>

                    <p className="mt-3 max-w-md text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
                        Have questions? Find quick answers to common queries about our
                        programs and services.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="mt-8 space-y-2 sm:mt-10">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={faq.question}
                                className={`overflow-hidden rounded-xl border transition-colors duration-300 ${isOpen
                                        ? "border-white/5 bg-[#202D2B]"
                                        : "border-white/[0.07] bg-transparent hover:bg-[#172320]"
                                    }`}
                            >
                                <button
                                    type="button"
                                    onClick={() =>
                                        setOpenIndex(isOpen ? null : index)
                                    }
                                    aria-expanded={isOpen}
                                    className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5"
                                >
                                    <span
                                        className={`text-sm font-semibold leading-6 sm:text-base ${isOpen ? "text-white" : "text-gray-200"
                                            }`}
                                    >
                                        {faq.question}
                                    </span>

                                    <span
                                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors ${isOpen
                                                ? "bg-white text-[#0F1C1A]"
                                                : "bg-white/10 text-white"
                                            }`}
                                    >
                                        {isOpen ? (
                                            <Minus size={13} strokeWidth={3} />
                                        ) : (
                                            <Plus size={13} strokeWidth={3} />
                                        )}
                                    </span>
                                </button>

                                <div
                                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="px-4 pb-4 text-xs leading-6 text-gray-400 sm:px-5 sm:pb-5 sm:text-sm sm:leading-7">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default FaqPage;
