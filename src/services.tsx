import { useState } from "react";
import {
  ArrowUpRight,
  BicepsFlexed,
  Users,
  UserRoundCheck,
  Footprints,
} from "lucide-react";
import ServiceHomeImg from "./assets/ServiceHomeImg.png"
import Service1 from "./assets/Service1.png";
import Service2 from "./assets/Service2.png";
import Service3 from "./assets/Service3.png";
import Service4 from "./assets/Service4.png";

function ServicePage() {
  const [activeService, setActiveService] = useState(1);

  const servicelist = [
    {
      logo: BicepsFlexed,
      title: "General Fitness & Body Transformation",
      description:
        "Work towards weight management, inch loss, body toning, flexibility, and lean muscle development through fitness programs suited to your goals and fitness level.",
      image: Service1,
    },
    {
      logo: Users,
      title: "Dietitian, Physiotherapy & Rehabilitation",
      description:
        "Access dietitian guidance, physiotherapy, and rehabilitation services to complement your fitness journey according to your individual needs.",
      image: Service2,
    },
    {
      logo: UserRoundCheck,
      title: "Personal Training & Strength Development",
      description:"Receive individual workout guidance to improve strength, develop lean muscle, and build consistent exercise habits based on your fitness needs.",
      image: Service3,
    },
    {
      logo: Footprints,
      title: "Zumba, Yoga & Outdoor Fitness Activities",
      description:"Add variety to your routine with Zumba, yoga, Aqua Zumba, beach yoga, turf activities, and terrace workouts.",
      image: Service4,
    },
  ];

  return (
    <section className="overflow-hidden bg-[#0F1C1A] text-white">
      {/* Section Heading */}
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
                  <span
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
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-[#061512] px-5 py-12 text-white sm:px-8 sm:py-16 lg:px-14 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">

            {/* Left Content */}
            <div>
              <span className="inline-flex rounded-full bg-[#273331] px-4 py-2 text-xs font-bold text-[#B6FF00]">
                Why VivaFit
              </span>

              <h2 className="mt-5 max-w-xl text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl lg:text-[38px]">
                Proven <span className="text-[#B6FF00]">Numbers.</span>
                {" "}
                
              </h2>
              <h2 className=" max-w-xl text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl lg:text-[38px]">
                
            
                Powerful <span className="text-[#B6FF00]">Results.</span>{" "}
              </h2>

              <p className="mt-3 max-w-lg text-sm leading-6 text-gray-300 sm:text-base">
                Our impact is measured in sweat, strength, and the success of
                thousands who’ve trained with us.
              </p>

              {/* Statistics */}
              <ul className="mt-7 grid grid-cols-2">
                <li className="border-b border-r border-white/15 px-3 py-5 text-center sm:py-6">
                  <span className="text-4xl font-light tracking-tight text-transparent [-webkit-text-stroke:1px_#e5e7eb] sm:text-5xl">
                    10+
                  </span>
                  <h3 className="mt-2 text-xs font-semibold sm:text-sm">
                    Years of Coaching
                  </h3>
                </li>

                <li className="border-b border-white/15 px-3 py-5 text-center sm:py-6">
                  <span className="text-4xl font-light tracking-tight text-transparent [-webkit-text-stroke:1px_#e5e7eb] sm:text-5xl">
                    5K+
                  </span>
                  <h3 className="mt-2 text-xs font-semibold sm:text-sm">
                    Members Transformed
                  </h3>
                </li>

                <li className="border-r border-white/15 px-3 py-5 text-center sm:py-6">
                  <span className="text-4xl font-light tracking-tight text-transparent [-webkit-text-stroke:1px_#e5e7eb] sm:text-5xl">
                    250+
                  </span>
                  <h3 className="mt-2 text-xs font-semibold sm:text-sm">
                    Group Sessions Monthly
                  </h3>
                </li>

                <li className="px-3 py-5 text-center sm:py-6">
                  <span className="text-4xl font-light tracking-tight text-transparent [-webkit-text-stroke:1px_#e5e7eb] sm:text-5xl">
                    98%
                  </span>
                  <h3 className="mt-2 text-xs font-semibold sm:text-sm">
                    Client Satisfaction
                  </h3>
                </li>
              </ul>
            </div>

            {/* Right Image */}
            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div className="overflow-hidden rounded-[28px] sm:rounded-[36px]">
                <img
                  src={ServiceHomeImg}
                  alt="Women and men strength training at VivaFit"
                  className="h-[320px] w-full object-cover object-center sm:h-[420px] lg:h-[440px] xl:h-[480px]"
                />
              </div>

              {/* Play Button */}
              <button
                type="button"
                aria-label="Watch VivaFit introduction video"
                className="absolute -left-2 -top-3 flex h-[68px] w-[68px] items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-105 sm:-left-4 sm:-top-4 sm:h-[82px] sm:w-[82px]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B6FF00] sm:h-12 sm:w-12">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ml-1 h-5 w-5 text-black"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicePage;