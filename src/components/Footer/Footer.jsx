import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`bg-gradient-to-b from-white via-[#A2ECF7] to-[#286974] text-white py-10 px-8 transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Important Links Section */}
        <div>
          <h2 className="text-2xl font-bold text-[#0E515B] font-MosafinExtraBold mb-4 relative">
            Important Links
            <span className="absolute left-0 bottom-0 w-[40%] h-[1px] top-[34px] bg-[#3EE5FF]"></span>
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="hover:text-green-400 transition-colors text-transparent bg-clip-text bg-gradient-to-b from-[#0E515B] via-[#0E515B] font-MosafinSemiBold to-[#454545]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/destination"
                className="hover:text-green-400 transition-colors text-transparent bg-clip-text bg-gradient-to-b from-[#0E515B] via-[#0E515B] font-MosafinSemiBold to-[#454545]"
              >
                Destination
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-green-400 transition-colors text-transparent bg-clip-text bg-gradient-to-b from-[#0E515B] via-[#0E515B] font-MosafinSemiBold to-[#454545]"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-green-400 transition-colors text-transparent bg-clip-text bg-gradient-to-b from-[#0E515B] via-[#0E515B] font-MosafinSemiBold to-[#454545]"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h2 className="text-2xl font-bold text-[#0E515B] font-MosafinExtraBold mb-4 relative">
            Services
            <span className="absolute left-0 bottom-0 w-[40%] h-[1px] top-[34px] bg-[#3EE5FF]"></span>
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                to="/tour-planning"
                className="hover:text-green-400 transition-colors text-transparent bg-clip-text bg-gradient-to-b from-[#0E515B] via-[#0E515B] font-MosafinSemiBold to-[#454545]"
              >
                Tour Planning
              </Link>
            </li>
            <li>
              <Link
                to="/travel-guides"
                className="hover:text-green-400 transition-colors text-transparent bg-clip-text bg-gradient-to-b from-[#0E515B] via-[#0E515B] font-MosafinSemiBold to-[#454545]"
              >
                Travel Guides
              </Link>
            </li>
            <li>
              <Link
                to="/custom-packages"
                className="hover:text-green-400 transition-colors text-transparent bg-clip-text bg-gradient-to-b from-[#0E515B] via-[#0E515B] font-MosafinSemiBold to-[#454545]"
              >
                Custom Packages
              </Link>
            </li>
            <li>
              <Link
                to="/support"
                className="hover:text-green-400 transition-colors text-transparent bg-clip-text bg-gradient-to-b from-[#0E515B] via-[#0E515B] font-MosafinSemiBold to-[#454545]"
              >
                24/7 Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold text-[#0E515B] font-MosafinExtraBold mb-4 relative">
            Contact Us
            <span className="absolute left-0 bottom-0 w-[40%] h-[1px] top-[34px] bg-[#3EE5FF]"></span>
          </h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#0E515B] via-[#0E515B] font-MosafinSemiBold to-[#454545]">
                technoclare@sol.in
              </span>
            </li>
            <li className="flex items-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#0E515B] via-[#0E515B] font-MosafinSemiBold to-[#454545]">
                +91 5478274924
              </span>
            </li>
            <li className="flex items-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#0E515B] via-[#0E515B] font-MosafinSemiBold to-[#454545]">
                BBSR, Odisha, 765022
              </span>
            </li>
          </ul>
        </div>

        {/* Map Section */}
        <div>
          <h2 className="text-2xl font-bold text-[#0E515B] font-MosafinExtraBold mb-4 relative">
            Our Location
            <span className="absolute left-0 bottom-0 w-[40%] h-[1px] top-[34px] bg-[#3EE5FF]"></span>
          </h2>
          <div className="w-full h-56 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.373398549994!2d83.82847747480561!3d19.047313582151332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c96658f8652ad%3A0x7dafcb1b8586f019!2sGIET%20University!5e0!3m2!1sen!2sin!4v1738155301883!5m2!1sen!2sin"
              className="w-full h-full border-0"
              loading="lazy"
              title="GIET University Location"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

{/*--------------- for Modifying the copyright section ---------------------------------*/}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-sm text-black font-MosafinBold">
           Copyright@{new Date().getFullYear()}. All right reserved
        </p>
        <p className="text-black font-MosafinBold">Developed by Technoclare</p>
      </div>
{/*--------------------------------------------------------------------------------------*/}

    </footer>
  );
};

export default Footer;
