import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Terminal, Menu, X } from "lucide-react";
import { NAV_LINKS, PERSONAL_INFO } from "../../utils/constants";
import { useScrollSpy, scrollToSection } from "../../hooks/useScrollSpy";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const activeSection = useScrollSpy(NAV_LINKS.map((link) => link.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      scrollToSection(sectionId);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group cursor-pointer">
            <Terminal className="w-8 h-8 text-3xl text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-all duration-300 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]" />
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-purple-400 bg-clip-text text-transparent">
              {PERSONAL_INFO.name}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative text-base font-medium transition-all duration-300 group
                  ${
                    activeSection === link.id
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-white"
                  }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              className="px-6 py-3 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-400 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
              onClick={() => handleNavClick("contact")}
            >
              Benimle Çalış
            </button>
          </div>

          <button
            className="md:hidden p-2 text-white hover:text-blue-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-screen opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div className="bg-gray-900/98 backdrop-blur-lg border-t border-gray-800 px-4 py-6 space-y-2">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300
                ${
                  activeSection === link.id
                    ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                    : "text-gray-300 hover:bg-gray-800/50 hover:text-white"
                }`}
            >
              {link.label}
            </button>
          ))}

          <button
            onClick={() => handleNavClick("contact")}
            className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-400 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
          >
            Benimle Çalış
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
