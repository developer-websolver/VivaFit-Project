
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
import Footer from "../footer";
import ServiceImg1 from "../assets/ServiceImg1.png";
import ServiceImg2 from "../assets/ServiceImg2.png";


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
    "Workout support based on your fitness goals.",
    "Build strength, endurance, and muscle fitness.",
    "Support your weight loss or weight management journey.",
    "Work towards improved muscle definition and body composition.",
    "Exercise in a supportive space designed for women.",
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#061512] text-white">
      {/* Breadcrumb */}
      <div className="border-b border-white/10 bg-[#061512]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12 mt-35">
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
      <section className="px-5 pb-8 pt-12 sm:px-8 sm:pb-10 sm:pt-16 lg:px-12 lg:pt-20 mb-15">
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

      <section className="px-5 pb-16 sm:px-8 lg:px-12 lg:pb-24">
        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="max-w-7xl">
            {/* <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl">
              Transform Your Fitness{" "}
              <span className="text-[#B6FF00]">Journey</span>
            </h2> */}

            {/* First Paragraph */}
            <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
              At <span className="text-[#B6FF00]">VivaFit</span> Gym, we help women take the first step towards a
              <span className="text-[#B6FF00]"> healthier, stronger </span>, and more active lifestyle. Our general fitness
              programs focus on improving strength,<span className="text-[#B6FF00]"> stamina, flexibility </span>, and
              overall physical fitness. Whether you are a beginner or looking to
              <span className="text-[#B6FF00]"> upgrade</span> your fitness routine, VivaFiT offers a <span className="text-[#B6FF00]">supportive</span> women-only
              gym environment where you can work towards your fitness goals with
              <span className="text-[#B6FF00]"> confidence.</span>
            </p>
          </div>

          {/* Two Medium Images in a Row */}
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
            <div className="group relative overflow-hidden rounded-2xl bg-[#10211B]">
              <img
                src={ServiceImg1}
                alt="Women performing strength training at VIVAFIT Gym"
                className="h-[240px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[280px] lg:h-[320px] grayscale"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061512]/70 via-transparent to-transparent" />
              {/* <div className="absolute bottom-5 left-5">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B6FF00]">
                  Strength & Fitness
                </span>
                <h3 className="mt-1 text-xl font-extrabold text-white sm:text-2xl">
                  Build Your Strength
                </h3>
              </div> */}
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-[#10211B]">
              <img
                src={ServiceImg2}
                alt="Women working towards their fitness and body transformation goals"
                className="h-[240px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[280px] lg:h-[320px] grayscale"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061512]/70 via-transparent to-transparent" />
              {/* <div className="absolute bottom-5 left-5">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B6FF00]">
                  Body Transformation
                </span>
                <h3 className="mt-1 text-xl font-extrabold text-white sm:text-2xl">
                  Become Stronger
                </h3>
              </div> */}
            </div>
          </div>

          {/* Second Paragraph */}
          <div className="mt-8 max-w-7xl">
            <p className="text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
              Our body <span className="text-[#B6FF00]">transformation</span> programs at VivaFit are designed to help
              women work towards <span className="text-[#B6FF00]">weight management</span> ,<span className="text-[#B6FF00]"> muscle toning</span>, strength
              building, and <span className="text-[#B6FF00]">improved endurance.</span> With structured workout routines
              and fitness guidance, members can focus on their individual fitness
              goals, develop <span className="text-[#B6FF00]">healthy habits </span>, and build confidence through
              <span className="text-[#B6FF00]"> consistent</span> training.
            </p>
            <p className="text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
              Begin your fitness journey at VivaFit, a <span className="text-[#B6FF00]">women-only</span> fitness centre dedicated to empowering women through exercise and <span className="text-[#B6FF00]"> healthy lifestyle </span> choices. Whether your goal is <span className="text-[#B6FF00]">weight loss </span>, body toning, <span className="text-[#B6FF00]">muscle strengthening </span>, or general fitness improvement, our fitness programs help you <span className="text-[#B6FF00]">stay motivated </span> and consistent.
            </p>
          </div>

          {/* What You'll Get */}
          <div className="mt-8 rounded-2xl border border-[#B6FF00]/20 bg-[#0F1C1A] p-5 sm:p-7">
            <h3 className="text-xl font-extrabold sm:text-2xl">
              What You&apos;ll{" "}
              <span className="text-[#B6FF00]">Get</span>
            </h3>

            <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check
                    size={18}
                    className="mt-1 shrink-0 text-[#B6FF00]"
                  />
                  <span className="text-sm leading-6 text-gray-300 sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <div className="mt-7">
            <Link
              to="/contactus"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#B6FF00] px-6 py-3.5 text-sm font-bold text-[#061512] transition-colors duration-300 hover:bg-white sm:w-auto"
            >
              Start Your Transformation
              <ArrowUpRight size={18} />
            </Link>
          </div>

        </div>
      </section>
      <FaqPage />
      <Footer />

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
