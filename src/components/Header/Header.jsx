import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { gsap } from "gsap";

import "./header.css";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";

const nav_links = [
  { path: "#", display: "Home" },
  { path: "#", display: "Tours" },
  { path: "#", display: "About Us" },
  { path: "https://myshivambus.in", display: "Shivam", isExternal: true }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const logoRef = useRef(null);
  const menuItemsRef = useRef([]);
  const menuItemsAnimateRef = useRef([]);
  const loginBtnRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!hasAnimatedRef.current) {
      hasAnimatedRef.current = true;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      gsap.set(
        [logoRef.current, ...menuItemsAnimateRef.current, loginBtnRef.current],
        { opacity: 0, y: -50 }
      );

      tl.to(logoRef.current, { opacity: 1, y: 0, duration: 0.8 })
        .to(
          menuItemsAnimateRef.current,
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.2, ease: "power2.out" },
          "-=0.5"
        )
        .to(
          loginBtnRef.current,
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.3"
        );
    }
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      const menuTl = gsap.timeline({ defaults: { ease: "power2.out" } });

      menuTl
        .fromTo(
          menuRef.current,
          { x: "-100%", opacity: 0 },
          { x: "0%", opacity: 1, duration: 0.3 }
        )
        .fromTo(
          menuItemsRef.current,
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.3, stagger: 0.1 },
          "-=0.1"
        );

      return () => menuTl.kill();
    } else if (menuRef.current) {
      gsap.to(menuRef.current, {
        x: "-100%",
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [isMenuOpen]);

  const renderNavLink = (item, index) => {
    if (item.isExternal) {
      return (
        <a 
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="block">{item.display}</span>
        </a>
      );
    }
    return (
      <NavLink 
        to={item.path} 
        className={({ isActive }) => (isActive ? "active_link" : "")}
        onClick={() => setIsMenuOpen(false)}
      >
        <span className="block">{item.display}</span>
      </NavLink>
    );
  };

  return (
    <header className="header w-full xs:h-full lg:h-[100px] bg-none absolute">
      <div className="lg:!px-11 flex xs:flex-col lg:flex-row lg:justify-between xs:items-start lg:items-center h-full">
        <div ref={logoRef} className="logo xs:flex xs:justify-end xs:items-start">
          <img
            src='../../../assets/images/logo.png'
            className="lg:w-[130px] xs:h-[60px] xs:pt-2 lg:pt-0 lg:h-[80px]"
            alt="Logo"
          />
        </div>

        <div className="absolute right-4 top-5 z-[60] lg:hidden">
          {isMenuOpen ? (
            <RiCloseLine className="text-2xl font-extrabold cursor-pointer" onClick={() => setIsMenuOpen(false)} />
          ) : (
            <RiMenu3Fill className="text-2xl font-extrabold cursor-pointer" onClick={() => setIsMenuOpen(true)} />
          )}
        </div>

        <nav className="navlinks">
          <ul className="flex xs:hidden lg:flex gap-6 items-center">
            {nav_links.map((item, index) => (
              <li key={index} ref={(el) => (menuItemsAnimateRef.current[index] = el)}
                className="bg-gradient-to-b from-[#0E515B] via-[#2672a2] to-[#a1c5f1] bg-clip-text text-transparent font-bold">
                {renderNavLink(item, index)}
              </li>
            ))}
            <li ref={loginBtnRef}>
            <Link
  to="#"
  className="
    inline-block text-[22px] bg-[#4c9ca9] !px-6 !py-1 !pb-3 font-medium leading-tight rounded-md 
    shadow-md hover:shadow-xl
    hover:bg-[#077078] hover:scale-105 hover:shadow-lg transform transition-all duration-300
    !text-white
  "
>
  Login
</Link>

            </li>
          </ul>

          <ul ref={menuRef} className={`xs:block xs:h-dvh lg:hidden w-dvw text-center gap-2 fixed top-0 left-0 bg-white z-50 ${isMenuOpen ? "block" : "hidden"}`}>
            <div className="flex justify-between items-center px-2 py-2">
              <img src='../../../assets/images/logo.png' className="h-[60px] bg-amber-50 rounded-2xl" alt="Logo" />
            </div>

            {nav_links.map((item, index) => (
              <li key={index} ref={(el) => (menuItemsRef.current[index] = el)}
                className="bg-gradient-to-b text-4xl from-[#95e7f4] via-[#8eeaf8] to-[#2cad93] bg-clip-text text-transparent font-medium mt-5">
                {renderNavLink(item, index)}
              </li>
            ))}

            <li ref={(el) => (menuItemsRef.current[nav_links.length] = el)}>
              <Link to="#" className="inline-block text-[22px] bg-[#4c9ca9] !px-6 !py-1 font-medium leading-tight rounded-md hover:bg-[#077078] !text-white mt-5"
                onClick={() => setIsMenuOpen(false)}>
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;