
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Clock3,
  BookOpen,
  Dumbbell,
} from "lucide-react";
import FaqPage from "./faq";
import Footer from "./footer";
import Blog1 from "./assets/Blog1.webp";
import Blog2 from "./assets/Blog2.webp";
import Blog3 from "./assets/Blog3.webp";
import Blog4 from "./assets/Blog4.webp";

const blogs = [
  {
    category: "Women's Fitness",
    title: "Women's Fitness & Wellness",
    description:
      "VIVAFIT is a women-only gym promoting women's fitness and wellness through strength training, body transformation, Zumba, yoga, and healthy lifestyle programs.",
    image: Blog1,
    readTime: "5 min read",
    path: "/blog-1",
  },
  {
    category: "Nutrition",
    title: "Nutrition & Healthy Eating for Women",
    description:
      "VIVAFIT promotes women's nutrition and wellness through healthy eating habits, balanced nutrition, and fitness guidance to support energy, muscle recovery, weight management, and overall health.",
    image:Blog2,
    readTime: "4 min read",
    path: "/blog-2",
  },
  {
    category: "Fitness Tips",
    title: "Fitness Tips for Women",
    description:
      "VIVAFIT offers fitness tips for women, including strength training, cardio workouts, balanced nutrition, and healthy lifestyle habits to support women's fitness and overall wellness.",
    image:Blog3,
    readTime: "6 min read",
    path: "/blog-3",
  },
  {
    category: "Exercise",
    title: "Benefits of Regular Exercise for Women",
    description:
      "Discover the benefits of regular exercise for women at VIVAFIT Gym, including strength training, cardio workouts, flexibility, and overall wellness in a supportive women-only fitness environment.",
    image:Blog4,
    readTime: "5 min read",
    path: "/blog-4",
  },
];

const services = [
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
];

function BlogPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#061512] text-white">
      {/* Breadcrumb */}
      {/* <div className="border-b border-white/10 bg-[#0F1C1A]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-3 sm:px-8 lg:px-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#B6FF00] sm:text-sm">
            VIVAFIT Journal
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
                <span
                  aria-current="page"
                  className="rounded-full bg-white/10 px-3 py-1.5 text-white"
                >
                  Our Blogs
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div> */}

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0F1C1A] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#B6FF00]/10 blur-[100px] sm:h-80 sm:w-80" />

        <div className="relative mx-auto max-w-7xl mt-30">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#273331] px-4 py-2 text-xs font-semibold text-[#B6FF00]">
            <BookOpen size={15} />
            The VIVAFIT Blog
          </span>

          <h1 className="mt-5 max-w-4xl text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Knowledge for{" "}
            <span className="text-[#B6FF00]">Stronger</span> You.
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
            Explore practical fitness advice, women's wellness insights,
            nutrition tips, and workout guidance to support your fitness
            journey at every stage.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-gray-400 sm:gap-4 sm:text-sm">
            <span className="flex items-center gap-2">
              <Dumbbell size={16} className="text-[#B6FF00]" />
              Fitness &amp; Training
            </span>

            <span className="h-1 w-1 rounded-full bg-[#B6FF00]" />

            <span>Nutrition &amp; Wellness</span>
          </div>
        </div>
      </section>

      {/* Blog Grid + Right Sidebar */}
      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 lg:grid-cols-3 lg:gap-10">

          {/* LEFT SIDE — BLOG GRID */}
          <div className="min-w-0 lg:col-span-2">
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B6FF00]">
                Explore &amp; Learn
              </p>

              <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
                Latest Fitness Insights
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-gray-400">
                Explore fitness advice, nutrition tips, and women's wellness
                insights to support your fitness journey.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
              {blogs.map((blog) => (
                <article
                  key={blog.path}
                  className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0F1C1A] transition-all duration-300 hover:-translate-y-1 hover:border-[#B6FF00]/35 hover:shadow-[0_15px_40px_rgba(182,255,0,0.06)]"
                >
                  {/* Blog Image */}
                  <Link
                    to={blog.path}
                    aria-label={`Read ${blog.title}`}
                    className="relative block h-48 overflow-hidden bg-[#172520] sm:h-52"
                  >
                    <img
                      src={blog.image}
                      alt={blog.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#061512]/50 to-transparent" />

                    <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-[#061512]/85 px-3 py-1.5 text-[11px] font-semibold text-[#B6FF00] backdrop-blur-sm">
                      {blog.category}
                    </span>
                  </Link>

                  {/* Blog Content */}
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Clock3 size={14} />
                      {blog.readTime}
                    </div>

                    <h3 className="mt-3 text-lg font-bold leading-snug transition-colors group-hover:text-[#B6FF00]">
                      <Link to={blog.path}>{blog.title}</Link>
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-6 text-gray-400">
                      {blog.description}
                    </p>

                    <div className="mt-5 border-t border-white/[0.08] pt-4">
                      <Link
                        to={blog.path}
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#B6FF00] transition-colors hover:text-white"
                      >
                        Read Article
                        <ArrowUpRight
                          size={17}
                          className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE — OUR SERVICES */}
          <aside className="min-w-0 lg:sticky lg:top-24  lg:mt-40">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0F1C1A]">
              {/* Sidebar Heading */}
              <div className="bg-[#293532] px-5 py-4 sm:px-6 sm:py-5">
                <h2 className="text-lg font-bold text-[#B6FF00] sm:text-xl">
                  Our Blogs
                </h2>
              </div>

              {/* Service Links */}
              <div className="divide-y divide-white/[0.07]">
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className={`group flex min-h-[58px] items-center justify-between gap-3 px-4 py-4 transition-colors duration-300 sm:px-5 ${service.active
                        ? "bg-[#B6FF00] text-[#061512]"
                        : "text-white hover:bg-[#B6FF00] hover:text-[#061512]"
                      }`}
                  >
                    <span className="text-sm font-semibold leading-5 sm:text-base">
                      {service.title}
                    </span>

                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${service.active
                          ? "border-[#061512] bg-[#061512] text-[#B6FF00]"
                          : "border-white/70 text-white group-hover:border-[#061512] group-hover:bg-[#061512] group-hover:text-[#B6FF00]"
                        }`}
                    >
                      <ArrowUpRight size={16} strokeWidth={2.5} />
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="mt-6 rounded-2xl border border-[#B6FF00]/20 bg-[#0F1C1A] p-5 sm:p-6">
              <Dumbbell size={28} className="text-[#B6FF00]" />

              <h3 className="mt-4 text-lg font-bold">
                Ready to Start Your Fitness Journey?
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                Discover women-focused fitness programs at VIVAFIT and find
                the right workout for your goals.
              </p>

              <Link
                to="/contactus"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#B6FF00] px-4 py-3 text-sm font-bold text-[#061512] transition hover:bg-white"
              >
                Contact Us
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </aside>
        </div>
      </section>
      <FaqPage />
      <Footer />
      {/* 
      Bottom CTA
      <section className="px-5 pb-14 sm:px-8 sm:pb-20 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-3xl border border-[#B6FF00]/20 bg-gradient-to-br from-[#14271B] to-[#0B1915] px-6 py-10 text-center sm:px-10 sm:py-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B6FF00]">
            Keep Learning
          </p>

          <h2 className="mt-4 text-2xl font-black sm:text-3xl md:text-4xl">
            Your Next Step Starts With Knowledge
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Explore the world of fitness and discover new ways to work
            towards your health and wellness goals.
          </p>

          <Link
            to="/services"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#B6FF00] px-6 py-3.5 text-sm font-bold text-[#061512] transition hover:bg-white"
          >
            Explore Our Services
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section> */}
    </main>
  );
}

export default BlogPage;
