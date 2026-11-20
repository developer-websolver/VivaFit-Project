
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Check,
  Dumbbell,
//   Flame,
//   Target,
//   TrendingUp,
} from "lucide-react";
import FaqPage from "../faq";

function ServiceGFPage() {
//   const benefits = [
//     {
//       icon: Flame,
//       title: "Personalized Fitness Goals",
//       description:
//         "Work towards weight management, body toning, and overall fitness.",
//     },
//     {
//       icon: Dumbbell,
//       title: "Strength Development",
//       description:
//         "Build strength, improve endurance, and develop healthy exercise habits.",
//     },
//     {
//       icon: Target,
//       title: "Structured Workout Plans",
//       description:
//         "Follow workout routines suited to your fitness level and goals.",
//     },
//     {
//       icon: TrendingUp,
//       title: "Progress-Focused Training",
//       description:
//         "Stay motivated and track your fitness journey consistently.",
//     },
//   ];

  const highlights = [
    "Full-body strength and conditioning workouts",
    "Weight management and body toning support",
    "Fitness routines for different experience levels",
    "Strength, stamina, and endurance development",
    "Supportive training environment for women",
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#061512] text-white">
      {/* Breadcrumb */}
      <div className="border-b border-white/10 bg-[#0F1C1A]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B6FF00] sm:text-sm">
            
          </p>

          <nav aria-label="Breadcrumb">
            <ul className="flex items-center gap-2 text-xs text-white/60 sm:gap-3 sm:text-sm">
              <li>
                <Link to="/" className="transition hover:text-[#B6FF00]">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  to="/services"
                  className="rounded-full bg-white/10 px-3 py-1.5 text-white transition hover:bg-white/15"
                >
                  Our Services
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Page Heading */}
      <section className="px-5 pb-8 pt-12 sm:px-8 sm:pb-10 sm:pt-16 lg:px-12 lg:pt-20">
        <div className="mx-auto max-w-7xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#B6FF00]/20 bg-[#B6FF00]/5 px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-[#B6FF00] sm:text-xs">
            <Dumbbell size={15} />
            Build Strength. Transform Yourself.
          </span>

          <h1 className="mt-5 max-w-4xl text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            General Fitness &amp;{" "}
            <span className="text-[#B6FF00]">Body Transformation</span>
          </h1>

          {/* <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
            Discover fitness programs designed to help women build strength,
            improve stamina, work towards body toning goals, and develop
            healthier exercise habits.
          </p> */}
        </div>
      </section>

      {/* Main Content */}
      <section className="px-5 pb-16 sm:px-8 lg:px-12 lg:pb-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12">
          {/* Image */}
          <div className="group relative lg:col-span-3">
            <div className="absolute -inset-1.5 rounded-2xl border border-[#B6FF00]/15 transition-colors duration-300 group-hover:border-[#B6FF00]/40" />

            <div className="relative h-[250px] overflow-hidden rounded-xl bg-[#10211B] sm:h-[380px] md:h-[440px] lg:h-[500px]">
              <img
                src="/images/general-fitness.jpg"
                alt="General fitness and body transformation workout at VIVAFIT"
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#061512]/90 via-[#061512]/10 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B6FF00]">
                  Your Fitness Journey
                </span>
                <h2 className="mt-2 max-w-xl text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl">
                  Stronger Every Day. Better Every Step.
                </h2>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="min-w-0 lg:col-span-2">
            <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl">
              Transform Your Fitness{" "}
              <span className="text-[#B6FF00]">Journey</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
              VIVAFIT offers general fitness and body transformation programs
              for women looking to improve their overall fitness. Whether
              your goal is weight management, body toning, strength building,
              or improved endurance, our workout options help you work
              towards your individual goals.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
              With structured exercise routines and a supportive workout
              environment, women can explore fitness activities suited to
              different experience levels and build a more consistent
              exercise routine.
            </p>

            <div className="mt-6 rounded-2xl border border-[#B6FF00]/20 bg-[#0F1C1A] p-5 sm:p-6">
              <h3 className="text-lg font-bold">
                What You&apos;ll <span className="text-[#B6FF00]">Get</span>
              </h3>

              <ul className="mt-4 space-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      size={17}
                      className="mt-0.5 shrink-0 text-[#B6FF00]"
                    />
                    <span className="text-sm leading-6 text-gray-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to="/contactus"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#B6FF00] px-6 py-3.5 text-sm font-bold text-[#061512] transition hover:bg-white sm:w-auto"
            >
              Start Your Transformation
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      <FaqPage/>

      {/* Benefits Grid
      <section className="border-t border-white/[0.06] bg-[#0F1C1A] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B6FF00]">
              Fitness That Fits You
            </p>

            <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl lg:text-4xl">
              Your Goals. Your Pace.{" "}
              <span className="text-[#B6FF00]">Your Progress.</span>
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className="group rounded-2xl border border-white/[0.08] bg-[#061512] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#B6FF00]/40 sm:p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#B6FF00]/10 text-[#B6FF00] transition group-hover:bg-[#B6FF00] group-hover:text-[#061512]">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold">{benefit.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-gray-400">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section> */}
    </main>
  );
}

export default ServiceGFPage;
