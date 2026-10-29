
import { ArrowUpRight, LocateIcon, Mail, MapPin, Phone, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "../footer";
import FaqPage from "../faq";
import Image1 from "../assets/Mogapair/Image1.webp";
import Image2 from "../assets/Mogapair/Image2.webp";
import Image3 from "../assets/Mogapair/Image3.webp";
import Image4 from "../assets/Mogapair/Image4.webp";
import Image5 from "../assets/Mogapair/Image5.webp";
import Image6 from "../assets/Mogapair/Image6.webp";
import Image7 from "../assets/Mogapair/Image7.webp";
import Image8 from "../assets/Mogapair/Image8.webp";
import Image9 from "../assets/Mogapair/Image9.webp";

const gymImages = [
   Image1,
   Image2,
   Image3,
   Image4,
   Image5,
   Image6,
   Image7,
   Image9,
   Image8,
];

function MogappairPage() {

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % gymImages.length);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    const previousImage = () => {
        setCurrentImage(
            (prev) => (prev - 1 + gymImages.length) % gymImages.length
        );
    };

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % gymImages.length);
    };

    return (
        <main className="min-h-screen overflow-hidden bg-[#061512] text-white">
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
                                    to="/gyms"
                                    className="rounded-full bg-white/10 px-3 py-1.5 text-white transition hover:bg-white/15"
                                >
                                    Our Gyms
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            {/* Hero Section */}
            <section className="relative px-5 pb-12 pt-20 sm:px-8 sm:pb-16 sm:pt-28 lg:px-16 lg:pt-32 mb-17">
                <div className="absolute -right-20 top-10 h-64 w-64 rounded-full bg-[#B6FF00]/10 blur-[100px]" />

                <div className="relative mx-auto max-w-7xl">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B6FF00]/25 bg-[#B6FF00]/5 px-4 py-2  text-xs font-semibold uppercase tracking-[0.18em] text-[#B6FF00]">
                        <MapPin size={15} />
                        VIVAFIT Chennai
                    </div>


                    <h1 className="max-w-4xl text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                        Ladies Gym in{" "}
                        <span className="text-[#B6FF00]">Mogappair </span>, Chennai
                    </h1>

                    <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                        Discover women-focused fitness at VIVAFIT Mogappair. Explore strength training, personal training, Zumba, yoga, and fitness programs designed to support your individual fitness goals.
                    </p>
                </div>
            </section>

            {/* About Section */}
            <section className="px-5 pb-16 sm:px-8 lg:px-16 lg:pb-24">
                <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">

                    {/* Automatic Gym Image Slider */}
                    <div className="group relative min-w-0">
                        <div className="absolute -inset-2 rounded-3xl border border-[#B6FF00]/15 transition-colors duration-300 group-hover:border-[#B6FF00]/40" />

                        <div className="relative h-[280px] overflow-hidden rounded-2xl bg-[#10211B] sm:h-[380px] lg:h-[470px]">

                            {gymImages.map((image, index) => (
                                <img
                                    key={image}
                                    src={image}
                                    alt={`VIVAFIT ladies gym in Thirumangalam, Chennai - image ${index + 1}`}
                                    loading={index === 0 ? "eager" : "lazy"}
                                    className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${currentImage === index
                                        ? "scale-100 opacity-100"
                                        : "pointer-events-none opacity-0"
                                        }`}
                                />
                            ))}

                            {/* Image Overlay */}
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061512]/85 via-[#061512]/10 to-transparent" />

                            {/* Image Text */}
                            <div className="absolute bottom-16 left-5 right-5 sm:bottom-20 sm:left-7">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B6FF00]">
                                    Your Fitness Space
                                </p>

                                <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                                    VIVAFIT Mogappair
                                </h2>
                            </div>

                            {/* Navigation Arrows */}
                            <button
                                type="button"
                                onClick={previousImage}
                                aria-label="Previous gym image"
                                className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm transition hover:bg-[#B6FF00] hover:text-[#061512] sm:left-5 sm:h-11 sm:w-11"
                            >
                                <ArrowLeft size={19} />
                            </button>

                            <button
                                type="button"
                                onClick={nextImage}
                                aria-label="Next gym image"
                                className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm transition hover:bg-[#B6FF00] hover:text-[#061512] sm:right-5 sm:h-11 sm:w-11"
                            >
                                <ArrowRight size={19} />
                            </button>

                            {/* Slider Dots */}
                            <div className="absolute bottom-5 left-5 flex items-center gap-2 sm:bottom-7 sm:left-7">
                                {gymImages.map((_, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        onClick={() => setCurrentImage(index)}
                                        aria-label={`Show gym image ${index + 1}`}
                                        aria-current={currentImage === index ? "true" : undefined}
                                        className={`h-2 rounded-full transition-all duration-300 ${currentImage === index
                                            ? "w-8 bg-[#B6FF00]"
                                            : "w-2 bg-white/60 hover:bg-white"
                                            }`}
                                    />
                                ))}
                            </div>

                            {/* Image Counter */}
                            <span className="absolute bottom-5 right-5 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm sm:bottom-7 sm:right-7">
                                {String(currentImage + 1).padStart(2, "0")} /{" "}
                                {String(gymImages.length).padStart(2, "0")}
                            </span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="min-w-0">
                        <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
                            A Fitness Space Designed for{" "}
                            <span className="text-[#B6FF00]">Women</span>
                        </h2>

                        <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                            VIVAFIT is a ladies gym in Mogappair offering women-focused fitness programs for general fitness, weight management, inch loss, body toning, and lean muscle development.
                        </p>

                        <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                            Women can explore personal training, strength development, and flexibility exercises to support their individual fitness objectives. These training options help members build a consistent routine around their personal goals.
                        </p>

                        <Link
                            to="/contactus"
                            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#B6FF00] px-6 py-3.5 text-sm font-bold text-[#061512] transition hover:bg-white sm:w-auto"
                        >
                            Start Your Fitness Journey
                            <ArrowUpRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Additional Fitness Activities */}
            <section className="border-y border-white/[0.06] bg-[#0A1915] px-5 py-14 sm:px-8 sm:py-16 lg:px-16 lg:py-20">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-14">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B6FF00]">
                            More Ways to Move
                        </p>

                        <h2 className="mt-3 text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
                            Fitness Beyond the{" "}
                            <span className="text-[#B6FF00]">Gym Floor</span>
                        </h2>

                        <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                            Beyond regular workouts, VIVAFIT offers Zumba, yoga, Aqua Zumba, beach yoga, turf activities, and terrace workouts. Dietitian guidance, physiotherapy, and rehabilitation services provide further wellness support.
                        </p>

                        <div className="mt-6 rounded-2xl border border-[#B6FF00]/20 bg-[#B6FF00]/5 p-5 sm:p-6">
                           <h3 className="mb-5 text-lg font-bold text-white">
                                Contact <span className="text-[#B6FF00]">Us</span>
                            </h3>

                            <div className="space-y-4">
                                {/* Location */}
                                <div className="flex items-center gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#B6FF00]/10 text-[#B6FF00]">
                                        <LocateIcon size={21} />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                                            Location
                                        </p>
                                        <p className="mt-1 text-sm font-medium text-gray-200 sm:text-base">
                                            3rd Floor, Rajapriya Complex, Plot No. 2, PC No. 7, Mogappair West, Mogappair, Chennai, Tamil Nadu 600037
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-center gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#B6FF00]/10 text-[#B6FF00]">
                                        <Phone size={20} />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                                            Phone
                                        </p>
                                        <Link
                                            to="tel:+91 96000 06855"
                                            className="mt-1 block break-all text-sm font-medium text-gray-200 transition hover:text-[#B6FF00] sm:text-base"
                                        >
                                            +91 96000 06855

                                        </Link>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-center gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#B6FF00]/10 text-[#B6FF00]">
                                        <Mail size={20} />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                                            Email
                                        </p>
                                        <Link
                                            to="mogappair@vivafit.life"
                                            className="mt-1 block break-all text-sm font-medium text-gray-200 transition hover:text-[#B6FF00] sm:text-base"
                                        >
                                            mogappair@vivafit.life
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Map */}
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#10211B]">
                        <div className="flex items-center gap-3 border-b border-white/10 p-4 sm:p-5">
                            <div className="rounded-xl bg-[#B6FF00]/10 p-2.5">
                                <LocateIcon size={21} className="text-[#B6FF00]" />
                            </div>
                            <div>
                                <h3 className="font-bold">Find VIVAFIT Mogappair </h3>
                                <p className="mt-1 text-xs text-gray-400">
                                    Mogappair , Chennai
                                </p>
                            </div>
                        </div>

                        <iframe
                            title="Map showing Mogappair , Chennai"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.251619947687!2d80.16782167512476!3d13.083233287242454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52638c3702089f%3A0x36a2310e895b6f0c!2sVivafit%20-%20International%20Ladies%20gym%2C%20Mogappair!5e0!3m2!1sen!2sin!4v1792561534901!5m2!1sen!2sin"
                            className="h-[280px] w-full sm:h-[350px] lg:h-[400px]"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                        />

                        <div className="p-4 sm:p-5">
                            <Link
                                to="https://www.google.com/maps/dir//Vivafit+-+International+Ladies+gym,+Mogappair,+3rd+Floor,+Rajapriya+Complex,+Plot+No.+2,+PC+No.+7,+Mogappair+West,+Mogappair,+Chennai,+Tamil+Nadu+600037/@13.0903406,80.1986642,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a52638c3702089f:0x36a2310e895b6f0c!2m2!1d80.1703966!2d13.0832333?entry=ttu&g_ep=EgoyMDI2MTAxOC4wIKXMDSoASAFQAw%3D%3D"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-bold text-[#B6FF00] transition hover:text-white"
                            >
                                Get Directions
                                <ArrowUpRight size={17} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-16">
                <div className="mx-auto max-w-7xl rounded-3xl border border-[#B6FF00]/20 bg-gradient-to-br from-[#14271B] to-[#0B1915] px-6 py-10 text-center sm:px-10 sm:py-14">
                    <h2 className="text-2xl font-black sm:text-3xl md:text-4xl">
                        Take the First Step Towards Your Goals
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
                        Explore women-focused fitness at VIVAFIT Mogappair  and find
                        the right way to get started.
                    </p>

                    <Link
                        to="/contactus"
                        className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#B6FF00] px-6 py-3.5 text-sm font-bold text-[#061512] transition hover:bg-white"
                    >
                        Contact VIVAFIT
                        <ArrowUpRight size={18} />
                    </Link>
                </div>
            </section>
            <FaqPage />
            <Footer />
        </main>
    );
}

export default MogappairPage;
