
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Clock3,
  CalendarDays,
  Dumbbell,
  Check,
  BookOpen,
} from "lucide-react";
import FaqPage from "../faq";
import Footer from "../footer";
import Blog4 from "../assets/Blog4.webp"

function Blog4Page() {
  const takeaways = [
    "Stay active with a consistent workout routine.",
    "Combine cardio, strength training, and flexibility exercises.",
    "Choose activities that match your fitness level.",
    "Prioritize hydration, nutrition, and recovery.",
    "Set realistic goals and celebrate your progress.",
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#061512] text-white">
      {/* Breadcrumb */}
      <div className="border-b border-white/10 bg-[#061512]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-3 sm:px-8 lg:px-12 mt-35">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#B6FF00] sm:text-sm">

          </span>

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
                  to="/blogs"
                  className="transition hover:text-[#B6FF00]"
                >
                  Blogs
                </Link>
              </li>
              <li aria-hidden="true" className="hidden sm:block">
                /
              </li>
              <li className="hidden sm:block text-white">Article</li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <section className="relative overflow-hidden bg-[#061512] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#B6FF00]/10 blur-[100px]" />

        <div className="relative mx-auto max-w-5xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#273331] px-4 py-2 text-xs font-semibold text-[#B6FF00]">
            <BookOpen size={15} />
            Women's Fitness
          </span>

          <h1 className="mt-5 max-w-4xl text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Benefits of Regular {" "}
            <span className="text-[#B6FF00]"> Exercise </span>
            for Women
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
            Discover how strength training can support muscle development,
            improve physical strength, and help women build a consistent
            fitness routine.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-gray-400 sm:text-sm">
            <span className="flex items-center gap-2">
              <Clock3 size={16} className="text-[#B6FF00]" />
              5 min read
            </span>
            <span className="flex items-center gap-2">
              <CalendarDays size={16} className="text-[#B6FF00]" />
              Fitness Guide
            </span>
          </div>
        </div>
      </section>

      {/* Article + Sidebar */}
      <section className="px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 lg:grid-cols-3 lg:gap-10">
          {/* Main Article */}
          <article className="min-w-0 lg:col-span-2">
            {/* Featured Image */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0F1C1A]">
              <img
                src={Blog4}
                alt="Strength training and fitness workout for women"
                loading="eager"
                className="h-[240px] w-full object-cover sm:h-[380px] lg:h-[460px]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061512]/45 to-transparent" />
            </div>

            {/* Article Content */}
            <div className="mt-8 space-y-6 text-sm leading-7 text-gray-300 sm:text-base sm:leading-8">
              <p>
                Regular exercise is an important part of maintaining a healthy and active lifestyle. At VIVAFIT Gym, women can explore different workouts to improve strength, stamina, flexibility, and overall fitness while building consistent exercise habits.
              </p>


              <h2 className="pt-2 text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                Benefits of{" "}
                <span className="text-[#B6FF00]">Regular Exercise</span>
              </h2>


              <h3 className="text-xl font-bold text-white sm:text-2xl">
                1. Improves Cardiovascular Fitness
              </h3>

              <p>
                Activities such as walking, cycling, and Zumba can help improve heart and lung fitness while supporting overall physical health.
              </p>

              <h3 className="text-xl font-bold text-white sm:text-2xl">
                2. Builds Strength and Endurance
              </h3>

              <p>
                Strength training and resistance exercises help develop stronger muscles and improve endurance for everyday activities.
              </p>

              <h3 className="text-xl font-bold text-white sm:text-2xl">
                3. Supports Mental Well-Being
              </h3>

              <p>
                Physical activity can help reduce stress, improve mood, and contribute to better overall well-being.
              </p>
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                4. Improves Flexibility and Mobility
              </h3>
              <p>
                Yoga, stretching, and mobility exercises can help improve flexibility and support comfortable movement.
              </p>
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                5. Encourages a Healthy Lifestyle
              </h3>
              <p>
                Following a regular workout routine can help build discipline, improve energy levels, and encourage healthier daily habits.
              </p>
            </div>

            {/* Key Takeaways */}
            <div className="mt-9 rounded-2xl border border-[#B6FF00]/20 bg-[#0F1C1A] p-5 sm:p-7">
              <h2 className="text-xl font-extrabold sm:text-2xl">
                Key <span className="text-[#B6FF00]">Takeaways</span>
              </h2>

              <ul className="mt-5 space-y-3">
                {takeaways.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      size={18}
                      className="mt-1 shrink-0 text-[#B6FF00]"
                    />
                    <span className="text-sm leading-7 text-gray-300 sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Back to Blogs */}
            <Link
              to="/blogs"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#B6FF00] transition hover:text-white"
            >
              <ArrowLeft size={18} />
              Back to All Blogs
            </Link>
          </article>

          {/* Right Sidebar */}
          <aside className="min-w-0 space-y-6 lg:sticky lg:top-24">
            {/* Services */}
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0F1C1A]">
              <div className="bg-[#293532] px-5 py-4">
                <h2 className="text-lg font-bold text-[#B6FF00]">
                  Our Services
                </h2>
              </div>

              <div className="divide-y divide-white/[0.07]">
                {[
                  {
                    title: "Women's Fitness & Wellness",
                    path: "/blog-1",
                  },
                  {
                    title: "Nutrition & Healthy Eating for Women",
                    path: "/blog-2",
                    active: true,
                  },
                  {
                    title: "Fitness Tips for Women",
                    path: "/blog-3",
                  },
                  {
                    title: "Benefits of Regular Exercise for Women",
                    path: "/blog-4",
                  },
                ].map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="group flex items-center justify-between gap-3 px-4 py-4 text-white transition-colors hover:bg-[#B6FF00] hover:text-[#061512] sm:px-5"
                  >
                    <span className="text-sm font-semibold leading-5">
                      {service.title}
                    </span>

                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/50 transition group-hover:border-[#061512] group-hover:bg-[#061512] group-hover:text-[#B6FF00]">
                      <ArrowUpRight size={16} />
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Card */}
            <div className="rounded-2xl border border-[#B6FF00]/20 bg-gradient-to-br from-[#14271B] to-[#0B1915] p-5 sm:p-6">
              <Dumbbell size={28} className="text-[#B6FF00]" />

              <h2 className="mt-4 text-xl font-extrabold">
                Your Fitness Journey Starts Here
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-400">
                Explore women-focused fitness programs and find a routine
                that works for your goals.
              </p>

              <Link
                to="/contactus"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#B6FF00] px-5 py-3 text-sm font-bold text-[#061512] transition hover:bg-white"
              >
                Contact VIVAFIT
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-5 pb-14 sm:px-8 sm:pb-20 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-3xl border border-[#B6FF00]/20 bg-gradient-to-br from-[#14271B] to-[#0B1915] px-6 py-10 text-center sm:px-10 sm:py-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B6FF00]">
            Keep Moving Forward
          </p>

          <h2 className="mt-4 text-2xl font-black sm:text-3xl md:text-4xl">
            Make Fitness Part of Your Lifestyle
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Take the next step towards a stronger, healthier, and more
            confident you with VIVAFIT.
          </p>

          <Link
            to="/services"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#B6FF00] px-6 py-3.5 text-sm font-bold text-[#061512] transition hover:bg-white"
          >
            Explore Our Services
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
      <FaqPage />
      <Footer />
    </main>
  );
}

export default Blog4Page;
