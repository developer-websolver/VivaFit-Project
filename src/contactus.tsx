
import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  ChevronDown,
  Send,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "./footer";
import { sendEmail } from "./components/email";

function ContactPage() {
  const [subject, setSubject] = useState("");

  const [Loading, setLoading] = useState(false);
  const [status, setstatus] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    setLoading(true);
    setstatus("");

    try {
      await sendEmail({
        fullName: String(formData.get("fullName") || ""),
        email: String(formData.get("email") || ""),
        phone: Number(formData.get("phone") || ""),
        subject: String(formData.get("subject") || ""),
        message: String(formData.get("message") || ""),
      });

      setstatus("Email sent successfully!");
      form.reset();
      setSubject("");
    } catch (error) {
      console.error("EmailJS error:", error);
      setstatus(
        "Email not sent. Please check your EmailJS settings and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0F1C1A] text-white ">
      {/* Breadcrumb Header */}
      <div className="border-b border-white/10 bg-[#061512]" >
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-12 pt-40">
          <h1 className="text-sm font-semibold tracking-wide sm:text-base">
            
          </h1>

          <nav aria-label="Breadcrumb">
            <ul className="flex items-center gap-2 text-xs text-white/70 sm:gap-3">
              <li>
                <Link
                  to="/"
                  className="transition hover:text-[#B6FF00]"
                >
                  Home
                </Link>
              </li>
              <li className="text-white/40">/</li>
              <li>
                <Link
                  aria-current="page"
                  className="rounded-full bg-white/10 px-3 py-1.5 text-white"
                  to="/contactus"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Contact Section */}
      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-12">

          {/* Left: Contact Form */}
          <div className="min-w-0">
            <span className="inline-flex rounded-full bg-[#273331] px-3 py-2 text-[10px] font-bold text-[#B6FF00] sm:text-xs">
              Book Your Session
            </span>

            <h2 className="mt-5 text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl lg:text-[38px]">
              Get in <span className="text-[#B6FF00]">Touch</span> with Us
            </h2>

            <p className="mt-3 max-w-lg text-sm leading-6 text-white/65 sm:text-base">
              Want to join or have a question? Fill out the form and
              we’ll get back to you soon.
            </p>

            <div className="mt-6 border-t border-white/10 pt-5">
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2"
              >
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-xs font-semibold"
                  >
                    Full Name <span className="text-[#B6FF00]">*</span>
                  </label>

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    maxLength={25}
                    placeholder="e.g. Kristian John"
                    autoComplete="name"
                    required
                    className="w-full rounded-md border border-white/5 bg-[#111E1B] px-3 py-3 text-sm outline-none placeholder:text-white/35 focus:border-[#B6FF00] focus:ring-1 focus:ring-[#B6FF00]/30"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-semibold"
                  >
                    Email Address <span className="text-[#B6FF00]">*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    maxLength={100}
                    placeholder="e.g. john@example.com"
                    autoComplete="email"
                    required
                    className="w-full rounded-md border border-white/5 bg-[#111E1B] px-3 py-3 text-sm outline-none placeholder:text-white/35 focus:border-[#B6FF00] focus:ring-1 focus:ring-[#B6FF00]/30"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-xs font-semibold"
                  >
                    Phone Number <span className="text-[#B6FF00]">*</span>
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    placeholder="Enter phone number"
                    autoComplete="tel"
                    maxLength={10}
                    pattern="[0-9]{10}"
                    title="Enter a valid 10-digit phone number"
                    required
                    className="w-full rounded-md border border-white/5 bg-[#111E1B] px-3 py-3 text-sm outline-none placeholder:text-white/35 focus:border-[#B6FF00] focus:ring-1 focus:ring-[#B6FF00]/30"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-xs font-semibold"
                  >
                    Subject <span className="text-[#B6FF00]">*</span>
                  </label>

                  <div className="relative">
                    <select
                      id="subject"
                      name="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                      className="w-full appearance-none rounded-md border border-white/5 bg-[#111E1B] px-3 py-3 pr-9 text-sm text-white outline-none focus:border-[#B6FF00] focus:ring-1 focus:ring-[#B6FF00]/30"
                    >
                      <option value="" disabled>
                        Select a subject
                      </option>
                      <option value="Membership">Membership</option>
                      <option value="Franchise Enquiry">Franchise Enquiry</option>
                      <option value="Job Enquiry" >Job Enquiry</option>
                      <option value="Personal Training">
                        Personal Training
                      </option>
                      <option value="Group Classes">Group Classes</option>
                      <option value="General Enquiry">
                        General Enquiry
                      </option>
                    </select>

                    <ChevronDown
                      size={16}
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/50"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-semibold"
                  >
                    Message <span className="text-[#B6FF00]">*</span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    maxLength={1000}
                    placeholder="Tell us how we can help..."
                    required
                    className="w-full resize-y rounded-md border border-white/5 bg-[#111E1B] px-3 py-3 text-sm outline-none placeholder:text-white/35 focus:border-[#B6FF00] focus:ring-1 focus:ring-[#B6FF00]/30"
                  />
                </div>

                {/* Submit */}
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={Loading}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B6FF00] px-6 py-3 text-sm font-bold text-[#061512] transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#B6FF00] focus:ring-offset-2 focus:ring-offset-[#061512] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {Loading ? "Sending..." : "Send Message"}
                    <Send size={15} />
                  </button>

                  {status && (
                    <p
                      role="status"
                      aria-live="polite"
                      className={`mt-3 text-sm ${status.startsWith("Email sent")
                        ? "text-[#B6FF00]"
                        : "text-red-400"
                        }`}
                    >
                      {status}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Right: Contact Information Card */}
          <aside className="w-full rounded-2xl bg-[#B6FF00] p-5 text-[#061512] sm:p-7 lg:mt-2">
            <h3 className="max-w-xs text-xl font-extrabold leading-snug sm:text-2xl">
              Visit or Contact Us Directly
            </h3>

            <div className="mt-5 border-t border-[#061512]/10 pt-5">
              <ul className="space-y-5">

                {/* Location */}
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
                    <MapPin size={19} />
                  </span>

                  <div className="min-w-0 pt-0.5">
                    <h4 className="text-sm font-bold">Location</h4>
                    <p className="mt-1 break-words text-xs leading-5 text-[#061512]/75">
                      Chennai.
                    </p>
                  </div>
                </li>

                {/* Phone */}
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
                    <Phone size={19} />
                  </span>

                  <div className="min-w-0 pt-0.5">
                    <h4 className="text-sm font-bold">Phone Number</h4>
                    <a
                      href="tel:+91 99866 19475"
                      className="mt-1 block break-words text-xs text-[#061512]/75 hover:underline"
                    >
                      +91 - 99866 19475
                    </a>
                  </div>
                </li>

                {/* Email */}
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
                    <Mail size={19} />
                  </span>

                  <div className="min-w-0 pt-0.5">
                    <h4 className="text-sm font-bold">Email</h4>
                    <Link
                      to="mailto:hello@vivafit.life"
                      className="mt-1 block break-all text-xs text-[#061512]/75 hover:underline"
                    >
                      hello@vivafit.life
                    </Link>
                  </div>
                </li>

              </ul>
            </div>

            {/* Social Media */}
            <div className="mt-6 border-t border-[#061512]/10 pt-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm font-bold">Follow Us:</span>

                <div className="flex items-center gap-2">
                  <Link
                    to="https://www.facebook.com/vivafitindiaofficial"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#061512] text-white transition hover:bg-white hover:text-[#061512]"
                  >
                    <FaFacebookF size={15} />
                  </Link>

                  <Link
                    to="https://www.instagram.com/vivafitindiaofficial"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#061512] text-white transition hover:bg-white hover:text-[#061512]"
                  >
                    <FaInstagram size={15} />
                  </Link>

                  <Link
                    to="https://in.linkedin.com/company/vivafit-india"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#061512] text-white transition hover:bg-white hover:text-[#061512]"
                  >
                    <FaLinkedin size={15} />
                  </Link>

                  <Link
                    to="https://www.youtube.com/@vivafitindia"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="YouTube"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#061512] text-white transition hover:bg-white hover:text-[#061512]"
                  >
                    <FaYoutube size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ContactPage;