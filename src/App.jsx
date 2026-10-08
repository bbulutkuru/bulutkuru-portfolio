import React, { Suspense, lazy, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Loading from "./components/ui/Loading";
import ProfileCard from "./components/ui/ProfileCard";
import { SITE } from "./utils/constants";

const ProjectDetail = lazy(() => import("./components/sections/ProjectDetail"));
const NotFound = lazy(() => import("./components/sections/NotFound"));

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setIsNavigating(true);
    window.scrollTo(0, 0);
    if (location.pathname === "/") {
      document.title = SITE.title;
    }

    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (isLoading || isNavigating) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-black">
      <ProfileCard />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <main>
                  <Hero />
                  <About />
                  <Skills />
                  <Experience />
                  <Projects />
                  <Contact />
                </main>
              </>
            }
          />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
