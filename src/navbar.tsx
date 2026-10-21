
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Logo from "./assets/Logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [gymsOpen, setGymsOpen] = useState(false);

  const navLinks = [
    // { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Our Services", path: "/services" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact Us", path: "/contactus" },
  ];

  const gymLinks = [
    { name: "Thirumangalam", path: "/vivafit-thirumangalam" },
    { name: "Ambattur", path: "/vivafit-ambattur" },
    { name: "Vadapalani", path: "/vivafit-vadapalani" },
  ];


  const menuButtonRef = useRef(null);

  const closeMenu = () => {
    menuButtonRef.current?.focus();
    setMenuOpen(false);
    setGymsOpen(false);
  };


  const desktopLinkStyle =
    "relative py-3 text-sm font-medium transition-colors duration-300 hover:text-[#B6FF00] after:absolute after:bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#B6FF00] after:transition-all after:duration-300 hover:after:w-full";

  const mobileLinkStyle =
    "block rounded-xl px-4 py-3 font-medium text-white transition-all duration-300 ease-out hover:translate-x-1 hover:bg-white/5 hover:text-[#B6FF00] active:scale-[0.98]";

  return (


    // <div className="fixed inset-x-0 top-0 z-[9999] pt-7">
    //   <nav
    //     className="
    //   relative isolate mx-auto
    //   w-[89%] max-w-280
    //   rounded-full
    //   border border-[#B6FF00]/70
    //   px-3 py-1
    //   text-white
    //   shadow-[0_4px_20px_rgba(182,255,0,0.15)]
    //   backdrop-blur-md
    //   sm:w-[87%] sm:px-4
    //   md:w-[87%] md:px-6
    //   lg:w-[94%] lg:px-8
    //   xl:w-[88%]
    //   2xl:w-[85%]
    // "
    //   >



    //     {/* Navbar Header */}
    //     <div className="flex items-center justify-between gap-3 px-4 py-1 md:px-8 lg:px-12">

    //       {/* <Link
    //         to="/"
    //         onClick={closeMenu}
    //         className="flex h-10 w-[] shrink-0 items-center overflow-visible md:w-[]"
    //       >
    //         <img
    //           src={Logo}
    //           alt="VIVAFIT Logo"
    //           className="h-full w-full  scale-x-125 object-contain object-left"
    //         />
    //       </Link> */}


    //       <Link
    //         to="/"
    //         onClick={closeMenu}
    //         className="flex h-12 w-36 shrink-0 items-center overflow-hidden sm:w-40 md:h-14 md:w-44"
    //       >
    //         <img
    //           src={Logo}
    //           alt="VIVAFIT Logo"
    //           className="block h-full w-full object-contain object-left"
    //         />
    //       </Link>


    //       {/* Desktop Navigation */}
    //       <ul className="hidden items-center gap-7 lg:flex">
    //         {navLinks.slice(0, 3).map((link) => (
    //           <li key={link.name}>
    //             <Link to={link.path} className={desktopLinkStyle}>
    //               {link.name}
    //             </Link>
    //           </li>
    //         ))}

    //         {/* Desktop Our Gyms Dropdown */}
    //         <li className="group relative">
    //           <Link
    //             to="/gyms"
    //             className="group flex items-center gap-2 py-3 text-sm font-medium transition-colors duration-300 hover:text-[#B6FF00]"
    //           >
    //             Our Gyms
    //             <ChevronDown
    //               size={16}
    //               className="transition-transform duration-300 ease-in-out group-hover:rotate-180 group-focus-within:rotate-180"
    //             />
    //           </Link>

    //           <ul className="invisible absolute left-0 top-full z-[10000] min-w-52 translate-y-2 rounded-2xl border border-[#B6FF00]/30 bg-[#061512] py-2 opacity-0 shadow-xl transition-all duration-300 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
    //             {gymLinks.map((gym) => (
    //               <li key={gym.name}>
    //                 <Link
    //                   to={gym.path}
    //                   className="block px-5 py-3 text-sm transition-all duration-300 hover:bg-[#B6FF00]/10 hover:pl-7 hover:text-[#B6FF00]"
    //                 >
    //                   {gym.name}
    //                 </Link>
    //               </li>
    //             ))}
    //           </ul>
    //         </li>

    //         {navLinks.slice(3).map((link) => (
    //           <li key={link.name}>
    //             <Link to={link.path} className={desktopLinkStyle}>
    //               {link.name}
    //             </Link>
    //           </li>
    //         ))}
    //       </ul>

    //       {/* Mobile Menu Toggle */}
    //       <button
    //         type="button"
    //         onClick={() => {
    //           setMenuOpen((previous) => !previous);
    //           setGymsOpen(false);
    //         }}
    //         className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-[#061512] transition-all duration-300 hover:border-[#B6FF00] hover:text-[#B6FF00] active:scale-95 lg:hidden"
    //         aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
    //         aria-expanded={menuOpen}
    //         aria-controls="mobile-navigation"
    //       >
    //         {menuOpen ? (
    //           <svg
    //             className="h-6 w-6"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             stroke="currentColor"
    //             strokeWidth="2"
    //             aria-hidden="true"
    //           >
    //             <path
    //               d="M18 6 6 18M6 6l12 12"
    //               strokeLinecap="round"
    //             />
    //           </svg>
    //         ) : (
    //           <svg
    //             className="h-6 w-6"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             stroke="currentColor"
    //             strokeWidth="2"
    //             aria-hidden="true"
    //           >
    //             <path
    //               d="M4 7h16M4 12h16M4 17h16"
    //               strokeLinecap="round"
    //             />
    //           </svg>
    //         )}
    //       </button>
    //     </div>

    //     {/* Animated Mobile Navigation */}
    //     {/* <div
    //       id="mobile-navigation"
    //       aria-hidden={!menuOpen}
    //       className={`absolute left-0 right-0 top-[calc(100%+8px)] z-[10000] overflow-y-auto rounded-3xl border border-[#B6FF00]/50 bg-[#061512] shadow-[0_10px_35px_rgba(0,0,0,0.5)] transition-all duration-500 ease-out lg:hidden ${menuOpen
    //         ? "visible max-h-[75vh] translate-y-0 opacity-100"
    //         : "invisible pointer-events-none max-h-0 -translate-y-3 opacity-0"
    //         }`}
    //     > */}
    //     <div
    //       id="mobile-navigation"
    //       aria-hidden={!menuOpen}
    //       inert={!menuOpen}
    //       className={`absolute left-0 right-0 top-[calc(100%+8px)] z-[10000] overflow-y-auto rounded-3xl border border-[#B6FF00]/50 bg-[#061512] shadow-[0_10px_35px_rgba(0,0,0,0.5)] transition-all duration-500 ease-out lg:hidden ${menuOpen
    //           ? "visible max-h-[80vh] translate-y-0 opacity-100"
    //           : "invisible pointer-events-none max-h-0 -translate-y-3 opacity-0"
    //         }`}
    //     >
    //       <div className="space-y-1 p-4">

    //         {/* Mobile Main Links */}
    //         {navLinks.slice(0, 3).map((link, index) => (
    //           <Link
    //             key={link.name}
    //             to={link.path}
    //             onClick={closeMenu}
    //             tabIndex={menuOpen ? 0 : -1}
    //             style={{
    //               transitionDelay: menuOpen ? `${index * 50}ms` : "0ms",
    //             }}
    //             className={`${mobileLinkStyle} transition-[opacity,transform,background-color,color] ${menuOpen
    //               ? "translate-y-0 opacity-100"
    //               : "translate-y-2 opacity-0"
    //               }`}
    //           >
    //             {link.name}
    //           </Link>
    //         ))}

    //         {/* Animated Mobile Our Gyms Dropdown */}
    //         <div>
    //           <button
    //             type="button"
    //             onClick={() => setGymsOpen((previous) => !previous)}
    //             aria-expanded={gymsOpen}
    //             tabIndex={menuOpen ? 0 : -1}
    //             className="flex w-full items-center justify-between rounded-xl px-4 py-3 font-medium transition-all duration-300 hover:bg-white/5 hover:text-[#B6FF00]"
    //           >
    //             Our Gyms
    //             <ChevronDown
    //               size={17}
    //               className={`transition-transform duration-300 ease-in-out ${gymsOpen ? "rotate-180" : "rotate-0"
    //                 }`}
    //             />
    //           </button>

    //           <div
    //             className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${gymsOpen
    //               ? "grid-rows-[1fr] opacity-100"
    //               : "grid-rows-[0fr] opacity-0"
    //               }`}
    //           >
    //             <ul className="ml-5 overflow-hidden border-l border-[#B6FF00]/40">
    //               {gymLinks.map((gym) => (
    //                 <li key={gym.name}>
    //                   <Link
    //                     to={gym.path}
    //                     onClick={closeMenu}
    //                     tabIndex={menuOpen && gymsOpen ? 0 : -1}
    //                     className="block rounded-r-xl px-5 py-3 text-sm text-white/80 transition-all duration-300 hover:bg-white/5 hover:pl-7 hover:text-[#B6FF00]"
    //                   >
    //                     {gym.name}
    //                   </Link>
    //                 </li>
    //               ))}
    //             </ul>
    //           </div>
    //         </div>

    //         {/* Remaining Mobile Links */}
    //         {navLinks.slice(3).map((link, index) => (
    //           <Link
    //             key={link.name}
    //             to={link.path}
    //             onClick={closeMenu}
    //             tabIndex={menuOpen ? 0 : -1}
    //             style={{
    //               transitionDelay: menuOpen
    //                 ? `${(index + 3) * 50}ms`
    //                 : "0ms",
    //             }}
    //             className={`${mobileLinkStyle} transition-[opacity,transform,background-color,color] ${menuOpen
    //               ? "translate-y-0 opacity-100"
    //               : "translate-y-2 opacity-0"
    //               }`}
    //           >
    //             {link.name}
    //           </Link>
    //         ))}
    //       </div>
    //     </div>
    //   </nav>
    // </div>

    <div className="fixed inset-x-0 top-0 z-[9999] pt-7">
      <nav
        className="
          relative isolate mx-auto
          w-[89%] max-w-280
          rounded-full
          border border-[#B6FF00]/70
          px-3 py-1
          text-white
          shadow-[0_4px_20px_rgba(182,255,0,0.15)]
          bg-[#0F1C1A]
          sm:w-[87%] sm:px-4
          md:w-[87%] md:px-6
          lg:w-[94%] lg:px-8
          xl:w-[88%]
          2xl:w-[85%]
        "
      >
        {/* Navbar Header */}
        <div className="flex items-center justify-between gap-3 px-4 py-1 md:px-8 lg:px-12 ">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex h-12 w-36 shrink-0 items-center overflow-hidden sm:w-40 md:h-14 md:w-44"
          >
            <img
              src={Logo}
              alt="VIVAFIT Logo"
              className="block h-full w-full object-contain object-left"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-7 lg:flex">
            {navLinks.slice(0, 3).map((link) => (
              <li key={link.name}>
                <Link to={link.path} className={desktopLinkStyle}>
                  {link.name}
                </Link>
              </li>
            ))}

            {/* Desktop Our Gyms Dropdown */}
            <li className="group relative">
              <Link
                to="/gyms"
                className="group flex items-center gap-2 py-3 text-sm font-medium transition-colors duration-300 hover:text-[#B6FF00]"
              >
                Our Gyms
                <ChevronDown
                  size={16}
                  className="transition-transform duration-300 ease-in-out group-hover:rotate-180 group-focus-within:rotate-180"
                />
              </Link>

              <ul className="invisible absolute left-0 top-full z-[10000] min-w-52 translate-y-2 rounded-2xl border border-[#B6FF00]/30 bg-[#061512] py-2 opacity-0 shadow-xl transition-all duration-300 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                {gymLinks.map((gym) => (
                  <li key={gym.name}>
                    <Link
                      to={gym.path}
                      className="block px-5 py-3 text-sm transition-all duration-300 hover:bg-[#B6FF00]/10 hover:pl-7 hover:text-[#B6FF00]"
                    >
                      {gym.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {navLinks.slice(3).map((link) => (
              <li key={link.name}>
                <Link to={link.path} className={desktopLinkStyle}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => {
              if (menuOpen) {
                closeMenu();
              } else {
                setGymsOpen(false);
                setMenuOpen(true);
              }
            }}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-[#061512] transition-all duration-300 hover:border-[#B6FF00] hover:text-[#B6FF00] active:scale-95 lg:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? (
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  d="M18 6 6 18M6 6l12 12"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Animated Mobile Navigation */}
        <div
          id="mobile-navigation"
          aria-hidden={!menuOpen}
          inert={!menuOpen}
          className={`absolute left-0 right-0 top-[calc(100%+8px)] z-[10000] overflow-y-auto rounded-3xl border border-[#B6FF00]/50 bg-[#061512] shadow-[0_10px_35px_rgba(0,0,0,0.5)] transition-all duration-500 ease-out lg:hidden ${menuOpen
            ? "visible max-h-[80vh] translate-y-0 opacity-100"
            : "invisible pointer-events-none max-h-0 -translate-y-3 opacity-0"
            }`}
        >
          <div className="space-y-1 p-4">
            {/* Mobile Main Links */}
            {navLinks.slice(0, 3).map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                style={{
                  transitionDelay: menuOpen ? `${index * 50}ms` : "0ms",
                }}
                className={`${mobileLinkStyle} transition-[opacity,transform,background-color,color] ${menuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-2 opacity-0"
                  }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Our Gyms Dropdown */}
            <div>
              <button
                type="button"
                onClick={() => setGymsOpen((previous) => !previous)}
                aria-expanded={gymsOpen}
                className="flex w-full items-center justify-between rounded-xl px-4 py-3 font-medium transition-all duration-300 hover:bg-white/5 hover:text-[#B6FF00]"
              >
                Our Gyms

                <ChevronDown
                  size={17}
                  className={`transition-transform duration-300 ease-in-out ${gymsOpen ? "rotate-180" : "rotate-0"
                    }`}
                />
              </button>

              <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${gymsOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
                  }`}
              >
                <ul className="ml-5 overflow-hidden border-l border-[#B6FF00]/40">
                  {gymLinks.map((gym) => (
                    <li key={gym.name}>
                      <Link
                        to={gym.path}
                        onClick={closeMenu}
                        tabIndex={menuOpen && gymsOpen ? 0 : -1}
                        className="block rounded-r-xl px-5 py-3 text-sm text-white/80 transition-all duration-300 hover:bg-white/5 hover:pl-7 hover:text-[#B6FF00]"
                      >
                        {gym.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Remaining Mobile Links */}
            {navLinks.slice(3).map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                style={{
                  transitionDelay: menuOpen
                    ? `${(index + 3) * 50}ms`
                    : "0ms",
                }}
                className={`${mobileLinkStyle} transition-[opacity,transform,background-color,color] ${menuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-2 opacity-0"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>




  );
}

export default Navbar;
