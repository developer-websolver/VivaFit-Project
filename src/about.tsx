
import { ChevronRight, Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";
import Member1 from "./assets/AvatarImg1.jpg";
import Member2 from "./assets/AvatarImg2.jpg";
import Member3 from "./assets/AvatarImg3.jpg";

const avatars = [Member1,Member2,Member3];

function AboutPage() {
  return (
    <section
      id="about"
      className="relative bg-[#061512] px-5 py-16 text-white sm:px-8 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 md:grid-cols-2 lg:grid-cols-[1fr_0.75fr_1.65fr] lg:gap-8">

        {/* Left: Heading */}
        <div className="flex flex-col items-start">
          <span className="mb-5 rounded-full bg-[#273331] px-4 py-2 text-xs font-semibold text-[#B6FF00]">
            About VIVAFIT
          </span>

          <h2 className="max-w-md text-3xl font-extrabold leading-tight sm:text-4xl lg:text-3xl xl:text-4xl">
            Stronger Women,{" "}
            <span className="text-[#B6FF00]">
              Healthier
            </span>{" "}
            Lives, Greater{" "}
            <span className="text-[#B6FF00]">Confidence.</span>
          </h2>
        </div>



        {/* Center: Members Card */}
        <div className="flex w-full flex-row items-center justify-between gap-4 bg-[#B6FF00] px-5 py-5 text-[#061512] sm:justify-center sm:gap-6 lg:flex-col lg:gap-0 lg:px-5 lg:py-6 lg:text-center">

          <div className="flex min-w-0 flex-1 flex-col items-start lg:items-center">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#063D31] text-[#B6FF00] sm:h-12 sm:w-12">
              <Dumbbell size={26} strokeWidth={2.5} />
            </div>

            <h3 className="text-sm font-extrabold leading-snug sm:text-base lg:mb-4 lg:text-lg">
              Trusted by Over
              <br />
              10,000 + Members
            </h3>
          </div>

          <div className="flex shrink-0 items-center -space-x-3 lg:justify-center">
            {avatars.map((avatar, index) => (
              <img
                key={avatar}
                src={avatar}
                alt={`VIVAFIT member ${index + 1}`}
                className="h-8 w-8 rounded-full border-2 border-white object-cover sm:h-9 sm:w-9"
              />
            ))}

            <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#061512] text-[9px] font-bold text-white sm:h-9 sm:w-9">
              +10K
            </div>
          </div>
        </div>


        {/* Right: Description and CTA */}
        <div className="flex flex-col items-start gap-6 md:col-span-2 lg:col-span-1">
          <p className="max-w-xl text-sm leading-6 text-white/85 sm:text-base sm:leading-7">
            VIVAFIT is an international ladies gym helping women build strength and confidence through guided workouts and modern fitness facilities. Find your ideal women’s gym near me and start your fitness journey with us.
          </p>

          <Link
            to="/aboutus"
            className="inline-flex items-center gap-3 rounded-full border border-white/80 px-5 py-3 text-xs font-semibold transition-all duration-300 hover:border-[#B6FF00] hover:bg-[#B6FF00] hover:text-[#061512] sm:text-sm"
          >
            Read More About Us
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white text-[#061512]">
              <ChevronRight size={12} strokeWidth={3} />
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default AboutPage;
