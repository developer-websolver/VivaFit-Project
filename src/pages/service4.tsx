
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Check,
  Dumbbell,

} from "lucide-react";
import FaqPage from "../faq";
import Footer from "../footer";
import ServiceImg1 from "../assets/Service4Img1.webp";
import ServiceImg2 from "../assets/Service4Img2.webp";

function ServiceZumbaPage() {

  const highlights = [
    "Dance-based workouts to improve stamina and cardiovascular fitness.",
    "Support flexibility, balance, and relaxation.",
    "Enjoy fitness activities in a motivating group environment.",
    "Movement sessions designed to support everyday fitness.",
    "Stay motivated through engaging group activities.",
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
            Zumba, Yoga &amp;{" "}
            <span className="text-[#B6FF00]">Outdoor Fitness </span>
            Activities.
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
              At VivaFit Gym, our <span className="text-[#B6FF00]"> Zumba </span> classes offer women an enjoyable way to stay active through <span className="text-[#B6FF00]">energetic dance </span> workouts. Combining music, dance movements, and <span className="text-[#B6FF00]">cardio exercises </span>, Zumba helps improve cardiovascular fitness,<span className="text-[#B6FF00]"> coordination, and stamina </span> while making workouts fun and engaging. Whether you are a beginner or an experienced dancer, <span className="text-[#B6FF00]">Zumba</span> is a great way to add movement and excitement to your fitness routine.
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
              Our yoga sessions at VivaFit focus on improving <span className="text-[#B6FF00]">flexibility, balance, mobility, and relaxation </span>. Through guided yoga poses, breathing techniques, and<span className="text-[#B6FF00]"> mindful</span> movement, women can develop a consistent wellness routine that supports both physical fitness and <span className="text-[#B6FF00]">mental well-being </span>. Yoga is suitable for different fitness levels, with exercises adapted to individual abilities.
            </p>
            <p className="text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
              VivaFit encourages women to stay <span className="text-[#B6FF00]">active </span> beyond the gym with <span className="text-[#B6FF00]">outdoor</span> fitness activities that make exercise more <span className="text-[#B6FF00]">enjoyable and engaging </span>. From group workouts and functional fitness sessions to outdoor movement activities, these experiences can help build<span className="text-[#B6FF00]"> stamina</span>, encourage <span className="text-[#B6FF00]">consistency </span>, and create a sense of community. Discover new ways to <span className="text-[#B6FF00]">stay fit </span>, connect with others, and maintain an active lifestyle.
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

export default ServiceZumbaPage;
