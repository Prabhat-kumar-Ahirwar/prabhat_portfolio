import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "About", path: "/about" },
  { label: "Resume", path: "/resume" },
  { label: "Projects", path: "/projects" },
  { label: "Skills", path: "/skills" },
  { label: "Contact", path: "/contact" },
];

const TopNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      {/* Desktop / Tablet Nav */}
      <nav className="hidden md:flex justify-end mb-8 px-4 sm:px-6">
        <ul className="flex gap-6 bg-[#1e1e1f] border border-[#383838] rounded-full px-6 py-3">
          {navLinks.map((item) => (
            <li
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`text-sm sm:text-base font-medium cursor-pointer transition
                ${location.pathname === item.path
                  ? "text-blue-400"
                  : "text-gray-400 hover:text-white"
                }`}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 w-full md:hidden backdrop-blur-sm bg-[#1e1e1f]/70 border-t border-[#383838] z-50">
        <ul className="flex justify-around py-2">
          {navLinks.map((item) => (
            <li
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`text-xs sm:text-sm font-medium cursor-pointer transition flex-1 text-center py-2
                ${location.pathname === item.path
                  ? "text-blue-400"
                  : "text-gray-400 hover:text-white"
                }`}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default TopNav;
