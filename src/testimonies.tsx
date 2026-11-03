import { Star, Quote, Users } from "lucide-react";

const testimonials = [
    { name: "Mr.Shiva", rating: 4.5 },
    { name: "Mrs.Shanmuga Priya", rating: 4.9 },
    { name: "Mrs.Lakshmi", rating: 4.2 },
    { name: "Mrs.Rathna", rating: 4.9 },
    { name: "Mr.Senthil", rating: 5 },
    { name: "Mrs.Mala", rating: 4.8 },
    { name: "Mrs.Fathima & Mrs.Arthi", rating: 4.4 },
    { name: "Mrs.Uma Maheshwari", rating: 4.9 },
    { name: "Mr.Durai", rating: 4.5 },
    { name: "Mr.Babu", rating: 4.1 },
];

function TestimoniesPage() {
    return (
        <section className="overflow-hidden bg-[#061512] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-24">

            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <div className="mb-12 text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#B6FF00]/30 bg-[#B6FF00]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#B6FF00]">
                        <Users size={15} />
                        Franchise Testimonials
                    </span>

                    <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                        Trusted by Our
                        <span className="text-[#B6FF00]"> Franchise Partners</span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
                        Hear from the people who have partnered with VIVAFIT
                        and become part of our fitness journey.
                    </p>
                </div>

                {/* Testimonial Cards */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">

                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="group relative flex items-center justify-between gap-4 overflow-hidden rounded-xl border border-white/10 bg-[#111811] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#B6FF00]/60 hover:bg-[#151F14] hover:shadow-[0_8px_25px_rgba(182,255,0,0.08)] sm:p-6"
                        >
                            {/* Decorative Quote */}
                            <div className="absolute -right-2 -top-3 opacity-[0.04] transition-all duration-300 group-hover:opacity-10">
                                <Quote size={85} />
                            </div>

                            {/* Name */}
                            <div className="relative flex min-w-0 items-center gap-4">

                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#B6FF00]/30 bg-[#B6FF00]/10 text-lg font-bold text-[#B6FF00] transition-all duration-300 group-hover:bg-[#B6FF00] group-hover:text-black">
                                    {item.name.charAt(0)}
                                </div>

                                <div className="min-w-0">
                                    <h3 className="truncate text-base font-bold text-white sm:text-lg">
                                        {item.name}
                                    </h3>

                                    <p className="mt-1 text-xs text-gray-500">
                                        VIVAFIT Franchise Partner
                                    </p>
                                </div>
                            </div>

                            {/* Rating */}
                            <div className="relative shrink-0 rounded-lg border border-[#B6FF00]/20 bg-[#B6FF00]/5 px-3 py-2">
                                <div className="flex items-center gap-1">
                                    <Star
                                        size={16}
                                        fill="#B6FF00"
                                        className="text-[#B6FF00]"
                                    />
                                    <span className="text-base font-extrabold text-[#B6FF00]">
                                        {item.rating.toFixed(1)}
                                    </span>
                                </div>

                                <p className="mt-1 text-[10px] text-gray-500">
                                    Rating
                                </p>
                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default TestimoniesPage;