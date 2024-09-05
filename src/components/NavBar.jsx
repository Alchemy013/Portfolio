import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import logo from "../assets/logo.jpeg";
import { LINKS } from "../constants";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // If scrolling down, partially hide the navbar
      setIsNavbarVisible(false);
    } else {
      // If scrolling up, fully show the navbar
      setIsNavbarVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  const handleMouseEnter = () => {
    // Show navbar when hovering over the area
    setIsNavbarVisible(true);
  };

  const handleMouseLeave = () => {
    // Partially hide the navbar when not hovering and still scrolling down
    if (window.scrollY > lastScrollY) {
      setIsNavbarVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="fixed top-0 w-full z-50 flex flex-col items-center justify-center mt-4"
    >
      <nav
        className={`w-full transition-transform duration-300 ${
          isNavbarVisible ? "translate-y-0" : "translate-y-[-90%]"
        }`}
      >
        <div className="w-full max-w-[50rem] mx-auto bg-transparent backdrop-blur-md p-4 rounded-full shadow-lg">
          <div className="flex items-center justify-between">
            <img
              src={logo}
              alt="logo"
              width={60}
              height={15}
              className="ml-4 rounded-full"
            />
            <div className="hidden space-x-6 lg:flex">
              {LINKS.map((link, index) => (
                <a
                  key={index}
                  href={`#${link.targetId}`}
                  className={`text-base text-white ${
                    index !== 0 ? "border-l-2 border-white pl-2" : ""
                  } hover:opacity-80`}
                  onClick={(e) => handleScroll(e, link.targetId)}
                >
                  {link.text}
                </a>
              ))}
            </div>
            <div className="lg:hidden">
              <button onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="w-full bg-transparent backdrop-blur-md lg:hidden">
            {LINKS.map((link, index) => (
              <a
                key={index}
                href={`#${link.targetId}`}
                className="block p-4 uppercase tracking-tighter text-white font-bold hover:bg-gray-200 border-b border-white shadow-white shadow-xl"
                onClick={(e) => handleScroll(e, link.targetId)}
              >
                {link.text}
              </a>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
