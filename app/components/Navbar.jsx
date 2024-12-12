import { useState, useEffect } from "react";
import { Link } from "@remix-run/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const links = ["popular", "india", "foreign", "gallery"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    if (isOpen) {
      const currentScrollY = window.scrollY;

      gsap.to("#menu", {
        top: currentScrollY,
        duration: 0.5,
        ease: "power2.out",
      });
    }

    if (!isOpen) {
      gsap.to("#menu", {
        top: "-100vh",
        duration: 0.5,
        ease: "power2.in",
      });
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div>
      <div className="relative">
        <div className="h-16 bg-black/40 text-gray-100 backdrop-blur-md fixed top-0 right-0 left-0 z-20">
          <div className="hidden md:flex items-center justify-between h-full px-4 sm:px-8 max-w-7xl mx-auto">
            <div className="flex items-center gap-10">
              <Link to="/" className="w-20">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="w-full h-full object-cover"
                />
              </Link>
              <ul className="flex items-center gap-6 text-gray-100">
                {links.map((link, index) => (
                  <li key={index} className="font-semibold capitalize">
                    <Link to={`/#${link}`}>{link.split("-").join(" ")}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-4">
              <Link to="tel:+919999999999">
                <div className="px-4 py-2 text-sm rounded-md border border-orange-600 hover:border-orange-700 bg-orange-600 hover:bg-orange-700 transition-colors text-gray-100 font-semibold">
                  Call Now
                </div>
              </Link>
              <Link to="#enquire">
                <div className="px-4 py-2 text-sm rounded-md border border-blue-600 hover:border-blue-700 bg-blue-600 hover:bg-blue-700 transition-colors text-gray-100 font-semibold">
                  Enquiry
                </div>
              </Link>
            </div>
          </div>
          <div className="flex md:hidden items-center justify-between h-full px-4">
            <Link to="/" className="w-20">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </Link>
            <button onClick={() => setIsOpen(true)}>
              <CiMenuFries size={24} color="#fff" />
            </button>
          </div>
        </div>
        {isOpen && (
          <div
            id="menu"
            className="absolute -top-[100vh] left-0 right-0 bottom-0 z-30 h-screen"
          >
            <OverLay setIsOpen={setIsOpen} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

const OverLay = ({ setIsOpen }) => {
  return (
    <div className="h-screen bg-teal-500">
      <div className="h-16 flex justify-between items-center px-4">
        <Link to="/" onClick={() => setIsOpen(false)} className="w-20">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-full h-full object-cover"
          />
        </Link>
        <button onClick={() => setIsOpen(false)}>
          <RxCross1 size={24} color="#fff" />
        </button>
      </div>
      <ul className="h-full w-full flex flex-col gap-8 items-center pt-16">
        {links.map((link, index) => (
          <li
            key={index}
            onClick={() => setIsOpen(false)}
            className="text-3xl font-semibold capitalize text-gray-100"
          >
            <Link to={`#${link}`}>{link}</Link>
          </li>
        ))}
        <li
          onClick={() => setIsOpen(false)}
          className="text-3xl font-semibold capitalize text-gray-100"
        >
          <Link to="tel:+919999999999">Call Now</Link>
        </li>
        <li
          onClick={() => setIsOpen(false)}
          className="text-3xl font-semibold capitalize text-gray-100"
        >
          <Link to={`/#enquire`}>Enquiry</Link>
        </li>
      </ul>
    </div>
  );
};
