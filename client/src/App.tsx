import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import GeneralLayout from "./layouts/GeneralLayout";
import ScrollToTop from "./layouts/ScrollToTop";
import Loader from "./layouts/Loader";
import EasySoft from "./pages/EasySoft";
import ServiceApp from "./pages/ServiceApp";

// Lazy loaded pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const Project = lazy(() => import("./pages/Project"));
const OurClient = lazy(() => import("./pages/OurClient"));
const ServiceErp = lazy(() => import("./pages/ServiceErp"));
const ServiceWeb = lazy(() => import("./pages/ServiceWeb"));
const ServiceDigital = lazy(() => import("./pages/ServiceDigital"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));
const ServiceWebDetails = lazy(() => import("./pages/ServiceWebDetails"));
const ServiceDigitalProjectDetails = lazy(() =>
  import("./components/Serives/digital/ServiceDigitalProjectDetails")
);
const ServiceErpProjectDetails = lazy(() =>
  import("./components/Serives/sofware/ServiceErpProjectDetails")
);

const ServiceAppProjectDetails = lazy(() =>
  import("./components/Serives/app/ServiceAppProjectDetails")
);

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<GeneralLayout />}>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project" element={<Project />} />
            <Route path="/project/:productId" element={<ProjectDetails />} />
            <Route path="/our-client" element={<OurClient />} />

            {/* Services */}
            <Route path="/services" element={<Services />} />

            <Route path="/services/web" element={<ServiceWeb />} />
            <Route path="/services/web/:id" element={<ServiceWebDetails />} />

            <Route path="/services/marketing" element={<ServiceDigital />} />
            <Route path="/services/marketing/:id" element={<ServiceDigitalProjectDetails />}/>

            <Route path="/services/erp" element={<ServiceErp />} />
            <Route path="/services/erp/:id" element={<ServiceErpProjectDetails />}/>

            <Route path="/services/app" element={<ServiceApp />} />
            <Route path="/services/app/:id" element={<ServiceAppProjectDetails />}/>



            {/* Our ventures */}
            <Route path="/easysoft" element={<EasySoft />} />

          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
