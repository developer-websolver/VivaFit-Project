
import { useState } from "react";
import {  Quote, Star } from "lucide-react";
import Review1 from "./assets/AvatarImg1.jpg";
import Review2 from "./assets/AvatarImg3.jpg";
import Review3 from "./assets/AvatarImg4.jpg";

const testimonials = [
  {
    name: "Priya S",
    role: "VIVAFIT Member",
    rating: "4.8",
    image: Review1,
    review:
      "Before joining VIVAFIT, I struggled with staying consistent. The structured programs and trainer support helped me stay focused and build strength.",
  },
  {
    name: "Anitha R",
    role: "VIVAFIT Member",
    rating: "5.0",
    image: Review2,
    review:
      "The supportive environment and personalized workouts have helped me feel stronger and more confident. I genuinely enjoy being part of VIVAFIT.",
  },
  {
    name: "Meera K",
    role: "VIVAFIT Member",
    rating: "4.9",
    image: Review3,
    review:
      "I love the variety of workouts, from strength training to group classes. The trainers keep me motivated and help me stay consistent with my routine.",
  },
];

function CommentsPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = testimonials[activeIndex];

//   const previous = () => {
//     setActiveIndex(
//       (prev) => (prev - 1 + testimonials.length) % testimonials.length
//     );
//   };

//   const next = () => {
//     setActiveIndex((prev) => (prev + 1) % testimonials.length);
//   };

  return (
    <section className="overflow-hidden bg-[#0F1C1A] px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-9 md:grid-cols-2 md:gap-10 lg:gap-16">

        {/* Left Content */}
        <div className="min-w-0">
          <span className="inline-flex rounded-full bg-[#273331] px-3 py-2 text-[11px] font-semibold text-[#B6FF00]">
            Member Stories
          </span>

          <h2 className="mt-5 text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl lg:text-[38px]">
            What Our Members Say About Their{" "}
            <span className="text-[#B6FF00]">
              VIVAFIT Experience
            </span>
          </h2>

          <p className="mt-4 max-w-lg text-sm leading-7 text-gray-400 sm:text-base">
            From first-timers to experienced athletes — our members share
            their fitness journeys and how VIVAFIT supports their goals.
          </p>

          {/* Navigation */}
          {/* <div className="mt-6 flex items-center gap-3">
            <button
              type="button"
              onClick={previous}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B6FF00] text-[#061512] transition hover:bg-white sm:h-11 sm:w-11"
            >
              <ArrowLeft size={19} />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B6FF00] text-[#061512] transition hover:bg-white sm:h-11 sm:w-11"
            >
              <ArrowRight size={19} />
            </button>

            <span className="ml-2 text-xs font-medium tracking-wider text-gray-500">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(testimonials.length).padStart(2, "0")}
            </span>
          </div> */}
        </div>

        {/* Right Testimonial Card */}
        <div
          key={activeIndex}
          className="relative min-w-0 border-t border-white/15 pt-7 md:border-l md:border-t-0 md:pl-8 md:pt-0 lg:pl-12"
        >
          <Quote
            size={42}
            strokeWidth={3}
            className="fill-[#B6FF00] text-[#B6FF00]"
          />

          <p className="mt-4 text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
            {active.review}
          </p>

          {/* Member Details */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <img
              src={active.image}
              alt={active.name}
              className="h-11 w-11 shrink-0 rounded-full border border-white/15 object-cover"
            />

            <div className="min-w-0">
              <h3 className="text-sm font-bold text-white">
                {active.name}
              </h3>
              <p className="mt-1 text-xs text-gray-500">
                {active.role}
              </p>
            </div>

            <div className="ml-auto text-right">
              <div className="flex items-center justify-end gap-0.5 text-[#B6FF00]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={14}
                    className="fill-current"
                  />
                ))}
              </div>

              <p className="mt-1 text-[11px] text-gray-400">
                ({active.rating})
              </p>
            </div>
          </div>

          {/* Testimonial Indicators */}
          <div className="mt-7 flex gap-2">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`View testimonial from ${item.name}`}
                aria-current={activeIndex === index ? "true" : undefined}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-8 bg-[#B6FF00]"
                    : "w-3 bg-white/20 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CommentsPage;
