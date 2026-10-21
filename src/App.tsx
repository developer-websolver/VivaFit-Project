
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

function HomeLayout() {
  return (
    <>
      <main className="bg-[#061512] text-white">
        <Navbar />
        <HomePage />
        <AboutPage />
        <ServicePage />
        <ContactPage/>
        <CommentsPage/>
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
        <Route path="/services" element={<ServiceUsPage />} />
        <Route path="" element={<CommentsPage/>} />
        <Route path="/gyms" element={<GymsPage/>} />
        <Route path="/vivafit-thirumangalam" element={<Thirumangalam/>}/>
        <Route path="/vivafit-ambattur" element={<AmbatturPage/>}/>
        <Route path="/vivafit-pammal" element={<PammalPage/>} />
        <Route path="/vivafit-madhanandapuram" element={<MadhanandpuramPage/>} />
        <Route path="/vivafit-mogappair" element={<MogappairPage/>}/>
        <Route path="/vivafit-radhanagar" element={<RadhanagarPage/>} />
        <Route path="/vivafit-vadapalani" element={<VadapalaniPage/>} />
        <Route path="/vivafit-alapakkam" element={<AlapakamPage/>}/>
        <Route path="/blogs" element={<BlogPage/>} />
        <Route path="/contactus" element={<ContactUsPage/>}/>
      </Routes>
    </>
  );
}

export default App;
