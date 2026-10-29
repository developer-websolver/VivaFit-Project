
import { ArrowUpRight, Dumbbell,} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "./footer";
import FaqPage from "./faq";
import Gym1 from "./assets/Thirumangalam/Image1.jpg";
import Gym2 from "./assets/Ambattur/Image2.jpg";
import Gym3 from "./assets/Pammal/Image3.jpg";
import Gym4 from "./assets/Madhanandpuram/Image2.png";
import Gym5 from "./assets/Mogapair/Image1.jpg";
import Gym6 from "./assets/Radhanagar/Image1.jpg";
import Gym7 from "./assets/Vadapalani/Image2.jpg";
import Gym8 from "./assets/Alapakkam/Image1.png";
import Gym9 from "./assets/Korratur/Image1.jpeg";

const gyms = [
  {
    name: "Thirumangalam",
    image: Gym1,
    description:
      "Looking for a ladies gym in Thirumangalam, Chennai? VIVAFIT offers strength training, weight management, personal training, Zumba, and yoga in a supportive environment.",
    path: "/vivafit-thirumangalam",
  },
  {
    name: "Ambattur",
    image: Gym2,
    description:
      "Discover VIVAFIT, a ladies gym in Ambattur offering strength training, personal training, Zumba, yoga, and women-focused fitness programs.",
    path: "/vivafit-ambattur",
  },
  {
    name: "Pammal",
    image: Gym3,
    description:
      "Looking for a ladies gym in Pammal? Explore fitness programs designed for strength development, body toning, flexibility, and general fitness.",
    path: "/vivafit-pammal",
  },
  {
    name: "Madhanandapuram",
    image: Gym4,
    description:
      "Find women-focused fitness programs at VIVAFIT Madhanandapuram, including strength training, body toning, and guided workouts.",
    path: "/vivafit-madhanandapuram",
  },
  {
    name: "Mogappair",
    image: Gym5,
    description:
      "VIVAFIT Mogappair offers personal training, strength development, body toning, Zumba, and yoga for different fitness levels.",
    path: "/vivafit-mogappair",
  },
  {
    name: "Radha Nagar",
    image: Gym6,
    description:
      "VIVAFIT Radha Nagar offers ladies' fitness programs, strength training, body toning, and flexibility workouts in a supportive environment.",
    path: "/vivafit-radhanagar",
  },
  {
    name: "Vadapalani",
    image: Gym7,
    description:
      "Explore VIVAFIT Vadapalani for women-focused fitness options, including strength training, body toning, Zumba, and yoga.",
    path: "/vivafit-vadapalani",
  },
  {
    name: "Alapakkam",
    image: Gym8,
    description:
      "Discover women's fitness programs at VIVAFIT Alapakkam, with strength development, flexibility training, body toning, and group workouts.",
    path: "/vivafit-alapakkam",
  },
   {
    name: "Korattur",
    image:Gym9 ,
    description:
      "Discover women's fitness programs at VIVAFIT Korattur, with strength development, flexibility training, body toning, and group workouts.",
    path: "/vivafit-korattur",
  },
];

function GymsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#061512] text-white">
      {/* Hero Section */}
      <section className="relative px-5 pb-12 pt-20 sm:px-8 sm:pb-16 sm:pt-28 lg:px-16 lg:pb-20 lg:pt-32">
        <div className="absolute right-0 top-10 h-48 w-48 rounded-full bg-[#B6FF00]/10 blur-[100px] sm:h-72 sm:w-72" />

        <div className="relative mx-auto max-w-7xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#B6FF00]/30 bg-[#B6FF00]/5 px-4 py-2 mt-25 text-xs font-semibold uppercase tracking-[0.2em] text-[#B6FF00] sm:text-sm">
            <Dumbbell size={15} />
            Find Your Fitness Space
          </span>

          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Find Your Nearest{" "}
            <span className="text-[#B6FF00]">Women's</span> Gym
          </h1>

          {/* <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
            Your fitness journey starts here. Explore our women-focused gyms
            and find a space to build strength, confidence, and healthier
            habits.
          </p> */}

          {/* <div className="mt-8 flex items-center gap-3 text-sm text-gray-300">
            <MapPin size={18} className="shrink-0 text-[#B6FF00]" />
            <span>Explore our locations across Chennai</span>
          </div> */}
        </div>
      </section>

      {/* Gym Grid */}
      <section className="px-5 pb-20 sm:px-8 lg:px-16 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#B6FF00]">
                Our Locations
              </p>
              {/* <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                Choose Your Gym
              </h2> */}
            </div>

            <p className="text-sm text-gray-500">
              Find a location that fits your routine.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
            {gyms.map((gym, index) => (
              <article
                key={gym.name}
                className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0D1E19] transition-all duration-300 hover:-translate-y-1 hover:border-[#B6FF00]/40 hover:shadow-[0_15px_45px_rgba(182,255,0,0.07)]"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-[#14251F] sm:h-60">
                  <img
                    src={gym.image}
                    alt={`VIVAFIT ladies gym in ${gym.name}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#061512] via-transparent to-black/10" />

                  <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/50 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                    <span className="mr-2 text-[#B6FF00]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    VIVAFIT LOCATION
                  </span>

                  {/* <div className="absolute bottom-4 left-5 flex items-center gap-2 text-sm text-white">
                    <MapPin size={16} className="text-[#B6FF00]" />
                    Chennai, Tamil Nadu
                  </div> */}
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-xl font-extrabold leading-snug sm:text-2xl">
                    VIVAFIT{" "}
                    <span className="text-[#B6FF00]">{gym.name}</span>
                  </h3>

                  <p className="mt-3 min-h-0 text-sm leading-7 text-gray-400 sm:min-h-[112px]">
                    {gym.description}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    {["Strength Training", "Women's Fitness"].map((service) => (
                      <span
                        key={service}
                        className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[11px] font-medium text-gray-300 sm:text-xs"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-white/[0.08] pt-5">
                    <Link
                      to={gym.path}
                      aria-label={`Read more about VIVAFIT ${gym.name}`}
                      className="inline-flex w-full items-center justify-between rounded-xl bg-[#B6FF00] px-5 py-3.5 text-sm font-bold text-[#061512] transition-colors duration-300 hover:bg-white sm:w-auto sm:min-w-[160px]"
                    >
                      Explore Gym
                      <ArrowUpRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-[#B6FF00]/20 bg-gradient-to-br from-[#13271C] to-[#0B1915] px-6 py-10 text-center sm:px-10 sm:py-14">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#B6FF00]">
            Your Journey Starts Here
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-2xl font-black sm:text-3xl md:text-4xl">
            Ready to Make Fitness Part of Your Life?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            Discover a supportive fitness space and take the next step towards
            your goals.
          </p>

          <Link
            to="/contactus"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#B6FF00] px-6 py-3.5 text-sm font-bold text-[#061512] transition hover:bg-white"
          >
            Get in Touch
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
      <FaqPage/>
      <Footer/>
    </main>
  );
}

export default GymsPage;
