
import { Dumbbell, Link as LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";
import FooterLogo from "./assets/Logo.png";
import { FaInstagram, FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#061512] px-5 py-10 text-white sm:px-8 sm:py-12 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Main heading */}
        <div className="flex items-center justify-between gap-4 border-b border-white/15 pb-8 sm:pb-10">
          <h3 className="max-w-3xl text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
            Ready to <span className="text-[#B6FF00]">Transform?</span>
            <br className="hidden sm:block" />  Start Your Fitness  {" "}
            <span className="text-[#B6FF00]">Journey</span> Today.
          </h3>

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#B6FF00] sm:h-20 sm:w-20">
            <Dumbbell size={26} className="text-[#061512] sm:h-8 sm:w-8" />
          </div>
        </div>

        {/* Footer information */}
        <div className="grid grid-cols-1 gap-8 border-b border-white/15 py-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-12">

          {/* Brand */}
          {/* <div>
            <div className="mb-4 flex items-center gap-3">
                <Link to="/">
              <img
                src={FooterLogo}
                alt="VIVAFIT"
                className="h-full w-full shrink-0 rounded-full object-contain "
              />
              </Link>
              
            </div>

            <p className="text-sm leading-7 text-white/80 sm:text-base">
              Embrace Progress.
              <br />
              Empower Your Strength.
            </p>
          </div> */}
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center">
              <Link to="/" className="inline-block w-full max-w-[390px]">
                <img
                  src={FooterLogo}
                  alt="VIVAFIT Fitness For Women"
                  className="block h-auto w-55 object-contain object-left"
                />
              </Link>
            </div>

            <p className="text-sm leading-7 text-white/80 sm:text-base">
              Embrace Progress.
              <br />
              Empower Your Strength.
            </p>
          </div>

          {/* Gym hours */}
          {/* <div>
            <h3 className="mb-5 flex items-center gap-2 text-base font-bold sm:text-lg">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#B6FF00]/15">
                <Clock size={18} className="text-[#B6FF00]" />
              </span>
              Gym Hours
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <div className="border-r border-white/15 pr-3">
                <h4 className="mb-2 text-sm font-semibold sm:text-base">
                  Mon–Sat
                </h4>
                <p className="text-xs leading-6 text-white/80 sm:text-sm">
                  6:00 AM – 10:00 PM
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-sm font-semibold sm:text-base">
                  Sunday
                </h4>
                <p className="text-xs leading-6 text-white/80 sm:text-sm">
                  8:00 AM – 2:00 PM
                </p>
              </div>
            </div>
          </div> */}



          {/* Quick links */}
          <div>
            <h3 className="mb-5 flex items-center gap-2 text-base font-bold sm:text-lg">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#B6FF00]/15">
                <LinkIcon size={18} className="text-[#B6FF00]" />
              </span>
              Quick Links
            </h3>

            <ul className="flex flex-wrap gap-x-5 gap-y-4 text-sm text-white/85 sm:gap-x-6 sm:text-base">
              <li>
                <Link to="/" className="transition-colors hover:text-[#B6FF00]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/aboutus" className="transition-colors hover:text-[#B6FF00]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition-colors hover:text-[#B6FF00]">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/gyms" className="transition-colors hover:text-[#B6FF00]">
                  Our Gyms
                </Link>
              </li>
              <li>
                <Link to="/blog" className="transition-colors hover:text-[#B6FF00]">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contactus" className="transition-colors hover:text-[#B6FF00]">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>


          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
              Ready to Start
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              required
              className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 outline-none transition focus:border-[#B6FF00] focus:ring-1 focus:ring-[#B6FF00]"
            />
          </div>


        </div>



        {/* Copyright and social media */}
        <div className="flex flex-col gap-5 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/75 sm:text-base">
            © 2026 VIVAFIT. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
            
               to="https://www.instagram.com/vivafitindiaofficial"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-2.5 text-xs font-medium transition hover:border-[#B6FF00] hover:text-[#B6FF00] sm:text-sm"
            >
              <FaInstagram size={14} />
              Instagram
            </Link>

            <Link
                to="https://www.facebook.com/vivafitindiaofficial"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-2.5 text-xs font-medium transition hover:border-[#B6FF00] hover:text-[#B6FF00] sm:text-sm"
            >
              <FaFacebookF size={14} />
              Facebook
            </Link>

            <Link
              to="https://in.linkedin.com/company/vivafit-india"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-2.5 text-xs font-medium transition hover:border-[#B6FF00] hover:text-[#B6FF00] sm:text-sm"
            >
              <FaLinkedin size={14} />
              Linkedin
            </Link>
            <Link
              to="https://www.youtube.com/@Vivafiteu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-2.5 text-xs font-medium transition hover:border-[#B6FF00] hover:text-[#B6FF00] sm:text-sm"
            >
              <FaYoutube size={14} />
              YouTube
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
