
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Check,
  Dumbbell,

} from "lucide-react";
import FaqPage from "../faq";
import Footer from "../footer";
import SeriviceImg1 from "../assets/Service2Img1.webp";
import ServiceImg2 from "../assets/Service2Img2.webp";

function ServiceDietPage() {

  const highlights = [
    "Nutrition support tailored to individual wellness and fitness goals.",
    "Healthy eating habits to complement your fitness routine.",
    "Professional guidance to improve mobility and physical function.",
    "Structured exercises to support strength, movement, and recovery.",
    "Activities that support comfortable movement and physical performance.",
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
            Dietitian, Physiotherapy  &amp;{" "}
            <span className="text-[#B6FF00]">Rehabilitation</span>
          </h1>


        </div>
      </section>

      {/* Main Content */}
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
              At VivaFit Gym, we support women's fitness journeys with <span className="text-[#B6FF00]"> nutrition </span> guidance and healthy lifestyle habits. Our <span className="text-[#B6FF00]">dietitian</span> services focus on helping women understand<span className="text-[#B6FF00]"> balanced nutrition </span>,<span className="text-[#B6FF00]"> healthy eating</span>, <span className="text-[#B6FF00]">weight management</span>, and dietary choices that complement their fitness goals. Whether your goal is <span className="text-[#B6FF00]"> weight loss </span>, muscle building, or overall<span className="text-[#B6FF00]"> wellness </span>, proper nutrition can help support your progress.
            </p>
          </div>

          {/* Two Medium Images in a Row */}
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
            <div className="group relative overflow-hidden rounded-2xl bg-[#10211B]">
              <img
                src={SeriviceImg1}
                alt="Women performing strength training at VIVAFIT Gym"
                className="h-[240px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[280px] lg:h-[320px] grayscale"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061512]/70 via-transparent to-transparent" />
              
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-[#10211B]">
              <img
                src={ServiceImg2}
                alt="Women working towards their fitness and body transformation goals"
                className="h-[240px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[280px] lg:h-[320px] grayscale"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061512]/70 via-transparent to-transparent" />
             
            </div>
          </div>

          {/* Second Paragraph */}
          <div className="mt-8 max-w-7xl">
            <p className="text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
              VivaFit promotes a <span className="text-[#B6FF00]">holistic </span> approach to women's health and fitness through <span className="text-[#B6FF00]">physiotherapy </span> support. Physiotherapy can help address movement limitations,<span className="text-[#B6FF00]"> improve mobility, build strength </span>, and support recovery from certain injuries. With appropriate <span className="text-[#B6FF00]"> professional </span> guidance, women can work towards better movement, physical function, and <span className="text-[#B6FF00]">confidence </span>in their everyday activities.
            </p>
            <p className="text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
              Our <span className="text-[#B6FF00]">physiotherapy</span> and rehabilitation focus supports women who want to improve mobility,<span className="text-[#B6FF00]"> regain strength </span>, and return to physical activities <span className="text-[#B6FF00]"> safely </span>. Rehabilitation may include guided exercises,<span className="text-[#B6FF00]"> mobility training, flexibility work </span>, and progressive strengthening based on individual needs.
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


    </main>
  );
}

export default ServiceDietPage;
