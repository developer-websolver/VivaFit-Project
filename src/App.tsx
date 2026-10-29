
import { Routes, Route } from "react-router-dom";
import HomePage from "./home";
import AboutPage from "./about";
import Navbar from "./navbar";
import Footer from "./footer";
import AboutUsPage from "./aboutus";
import ServicePage from "./services"
import ServiceUsPage from "./serviceus";
import ContactPage from "./contact";
import ContactUsPage from "./contactus";
import BlogPage from "./blogs";
import GymsPage from "./gyms";
import Thirumangalam from "./pages/thirumangalam";
import AmbatturPage from "./pages/ambattur";
import PammalPage from "./pages/pammal";
import MadhanandpuramPage from "./pages/madhanandpuram";
import MogappairPage from "./pages/mogappair";
import RadhanagarPage from "./pages/radhanagar";
import VadapalaniPage from "./pages/vadapalani";
import AlapakamPage from "./pages/alapakam";
import CommentsPage from "./comments";
import Service1 from "./pages/service1";
import Service2 from "./pages/service2";
import Service3 from "./pages/service3";
import Service4 from "./pages/service4";
import Blog1Page from "./pages/blog1";
import Blog2Page from "./pages/blog2";
import Blog3Page from "./pages/blog3";
import Blog4Page from "./pages/blog4"
import KoratturPage from "./pages/korattur";
import FranchisePage from "./franchise";

function HomeLayout() {
  return (
    <>
      <main className="bg-[#061512] text-white">
        <Navbar />
        <HomePage />
        <AboutPage />
        <ServicePage />
        <ContactPage />
        <CommentsPage />
        <Footer />
      </main>

    </>
  );
}

function App() {
  return (
    <>
      <main className="bg-[#061512] text-white">
        <Navbar />
      </main>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/vivafit-franchise" element={<FranchisePage/>} />
        <Route path="/services" element={<ServiceUsPage />} />
        <Route path="/service-generalfitness" element={<Service1 />} />
        <Route path="/service-dietitian" element={<Service2 />} />
        <Route path="/service-personaltraining" element={<Service3 />} />
        <Route path="/service-zumbayoga" element={<Service4 />} />
        <Route path="" element={<CommentsPage />} />
        <Route path="/gyms" element={<GymsPage />} />
        <Route path="/vivafit-thirumangalam" element={<Thirumangalam />} />
        <Route path="/vivafit-ambattur" element={<AmbatturPage />} />
        <Route path="/vivafit-pammal" element={<PammalPage />} />
        <Route path="/vivafit-madhanandapuram" element={<MadhanandpuramPage />} />
        <Route path="/vivafit-mogappair" element={<MogappairPage />} />
        <Route path="/vivafit-radhanagar" element={<RadhanagarPage />} />
        <Route path="/vivafit-vadapalani" element={<VadapalaniPage />} />
        <Route path="/vivafit-alapakkam" element={<AlapakamPage />} />
        <Route path="/vivafit-korattur" element={<KoratturPage/>} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blog-1" element={<Blog1Page/>} />
        <Route path="/blog-2" element={<Blog2Page/>}/>
        <Route path="/blog-3" element={<Blog3Page/>}/>
        <Route path="/blog-4" element={<Blog4Page/>}/>
        <Route path="/contactus" element={<ContactUsPage />} />
      </Routes>
    </>
  );
}

export default App;



// import { lazy, Suspense } from "react";
// import { Routes, Route } from "react-router-dom";

// import Navbar from "./navbar";
// import Footer from "./footer";

// // Keep homepage components eager-loaded
// import HomePage from "./home";
// import AboutPage from "./about";
// import ServicePage from "./services";
// import ContactPage from "./contact";
// import CommentsPage from "./comments";

// // Lazy-load standalone pages
// const AboutUsPage = lazy(() => import("./aboutus"));
// const ServiceUsPage = lazy(() => import("./serviceus"));
// const ContactUsPage = lazy(() => import("./contactus"));
// const BlogPage = lazy(() => import("./blogs"));
// const GymsPage = lazy(() => import("./gyms"));

// // Lazy-load gym branch pages
// const Thirumangalam = lazy(() => import("./pages/thirumangalam"));
// const AmbatturPage = lazy(() => import("./pages/ambattur"));
// const PammalPage = lazy(() => import("./pages/pammal"));
// const MadhanandpuramPage = lazy(
//   () => import("./pages/madhanandpuram")
// );
// const MogappairPage = lazy(() => import("./pages/mogappair"));
// const RadhanagarPage = lazy(() => import("./pages/radhanagar"));
// const VadapalaniPage = lazy(() => import("./pages/vadapalani"));
// const AlapakamPage = lazy(() => import("./pages/alapakam"));

// // Lazy-load service pages
// const Service1 = lazy(() => import("./pages/service1"));
// const Service2 = lazy(() => import("./pages/service2"));
// const Service3 = lazy(() => import("./pages/service3"));
// const Service4 = lazy(() => import("./pages/service4"));

// // Lazy-load blog detail pages
// const Blog1Page = lazy(() => import("./pages/blog1"));
// const Blog2Page = lazy(() => import("./pages/blog2"));
// const Blog3Page = lazy(() => import("./pages/blog3"));
// const Blog4Page = lazy(() => import("./pages/blog4"));

// function PageLoader() {
//   return (
//     <div className="flex min-h-[40vh] items-center justify-center bg-[#061512] text-[#B6FF00]">
//       <p className="animate-pulse text-sm font-medium">
//         Loading VIVAFIT...
//       </p>
//     </div>
//   );
// }

// function HomeLayout() {
//   return (
//     <main className="bg-[#061512] text-white">
//       <Navbar />
//       <HomePage />
//       <AboutPage />
//       <ServicePage />
//       <ContactPage />
//       <CommentsPage />
//       <Footer />
//     </main>
//   );
// }

// function App() {
//   return (
//     <>
//       <main className="bg-[#061512] text-white">
//         <Navbar />
//       </main>

//       <Suspense fallback={<PageLoader />}>
//         <Routes>
//           <Route path="/" element={<HomeLayout />} />

//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/aboutus" element={<AboutUsPage />} />

//           <Route path="/services" element={<ServiceUsPage />} />
//           <Route path="/service-generalfitness" element={<Service1 />} />
//           <Route path="/service-dietitian" element={<Service2 />} />
//           <Route path="/service-personaltraining" element={<Service3 />} />
//           <Route path="/service-zumbayoga" element={<Service4 />} />

//           <Route path="/gyms" element={<GymsPage />} />

//           <Route
//             path="/vivafit-thirumangalam"
//             element={<Thirumangalam />}
//           />
//           <Route path="/vivafit-ambattur" element={<AmbatturPage />} />
//           <Route path="/vivafit-pammal" element={<PammalPage />} />
//           <Route
//             path="/vivafit-madhanandapuram"
//             element={<MadhanandpuramPage />}
//           />
//           <Route path="/vivafit-mogappair" element={<MogappairPage />} />
//           <Route path="/vivafit-radhanagar" element={<RadhanagarPage />} />
//           <Route path="/vivafit-vadapalani" element={<VadapalaniPage />} />
//           <Route path="/vivafit-alapakkam" element={<AlapakamPage />} />

//           <Route path="/blogs" element={<BlogPage />} />
//           <Route path="/blog-1" element={<Blog1Page />} />
//           <Route path="/blog-2" element={<Blog2Page />} />
//           <Route path="/blog-3" element={<Blog3Page />} />
//           <Route path="/blog-4" element={<Blog4Page />} />

//           <Route path="/contactus" element={<ContactUsPage />} />

//           {/* Preserve the existing empty-path route */}
//           <Route path="" element={<CommentsPage />} />
//         </Routes>
//       </Suspense>
//     </>
//   );
// }

// export default App;
