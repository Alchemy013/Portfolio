import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import logo from "../assets/logo.jpeg";
import { LINKS } from "../constants";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <div className="fixed bottom-0 left-0 right-0 w-[400px] z-50 mx-auto flex flex-col items-center justify-center mb-4">
      <nav className="w-full transition-transform duration-300">
        <div className="w-full mx-auto bg-black backdrop-blur-3xl p-4 rounded-full shadow-sm">
          <div className="flex items-center justify-between">
            <img
              src={logo}
              alt="logo"
              width={40} // Adjusted logo width
              height={10} // Adjusted logo height
              className="ml-4 rounded-full"
            />
            <div className="hidden space-x-6 lg:flex">
              {LINKS.map((link, index) => (
                <a
                  key={index}
                  href={`#${link.targetId}`}
                  className={`text-sm text-white ${
                    // Smaller font size
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
