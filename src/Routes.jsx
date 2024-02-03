import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Hero = lazy(() => import("./Pages/Hero/Hero.jsx"));
const About = lazy(() => import("./Pages/About/About.jsx"));
const Contact = lazy(() => import("./Pages/Contact/Contact.jsx"));
const Events = lazy(() => import("./Pages/Events/Events.jsx"));
const Gallery = lazy(() => import("./Pages/Gallery/Gallery.jsx"));
const Team = lazy(() => import("./Pages/Team/Team.jsx"));

const AppRoute = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Gallery" element={<Gallery />} />
          {/* <Route path="/Register" element={<Register />} /> */}
          <Route path="/Team" element={<Team />} />
          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoute;
