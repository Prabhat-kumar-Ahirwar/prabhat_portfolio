import React, { useState } from "react";
import { 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub, 
  FaWhatsapp, 
  FaChevronDown, 
  FaChevronUp 
} from "react-icons/fa";
import profileImg from '../assets/profile.JPG';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Mobile card height (compact + expanded)
  const compactHeight = 72; // in pixels
  const expandedHeight = 280; // in pixels

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex bg-[#1e1e1f] rounded-3xl p-6 sm:p-8 border border-[#383838] flex flex-col items-center text-center w-full max-w-xs">
        <div
          className="w-32 h-32 rounded-2xl overflow-hidden mb-6 bg-gray-700 cursor-pointer"
          onClick={() => window.open(profileImg, "_blank")}
        >
          <img src={profileImg} alt="Prabhat" className="w-full h-full object-cover" />
        </div>

        <h1 className="text-2xl font-semibold text-white mb-2">Prabhat Kumar Ahirwar</h1>
        <div className="bg-[#2b2b2c] px-4 py-1 rounded-full text-sm text-gray-300 mb-8">Java Backend Developer</div>

        <hr className="w-full border-[#383838] mb-6" />

        <div className="w-full space-y-4 mb-8">
          <div className="flex items-center gap-4 text-left">
            <div className="p-2 bg-[#2b2b2c] rounded-lg text-blue-400"><FaEnvelope size={14} /></div>
            <div className="truncate">
              <p className="text-xs text-gray-500 uppercase">Email</p>
              <p className="text-sm text-gray-200 truncate w-40">prabhatmmg007@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-left">
            <div className="p-2 bg-[#2b2b2c] rounded-lg text-blue-400"><FaMapMarkerAlt size={14} /></div>
            <div>
              <p className="text-xs text-gray-500 uppercase">Location</p>
              <p className="text-sm text-gray-200">Indore, India</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-auto">
          <a href="https://www.linkedin.com/in/prabhat-ahirwar-24604033a" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition"><FaLinkedin size={20} /></a>
          <a href="https://github.com/Prabhat-kumar-Ahirwar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition"><FaGithub size={20} /></a>
          <a href="https://api.whatsapp.com/send?phone=917987593265&text=Hello%20Prabhat" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition"><FaWhatsapp size={20} /></a>
        </div>
      </aside>

      {/* Mobile Collapsible Card */}
      <div className="md:hidden w-full flex justify-center z-50">
        <div className="w-[90%] max-w-sm fixed top-4">
          {/* Compact Card */}
          <div
            className="bg-[#1e1e1f] border border-[#383838] rounded-2xl p-4 flex items-center justify-between cursor-pointer shadow-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-gray-700">
                <img src={profileImg} alt="Prabhat" className="w-full h-full object-cover" />
              </div>
              <div>
                <h1 className="text-white font-semibold text-base">Prabhat Kumar Ahirwar</h1>
                <p className="text-gray-300 text-sm">Java Backend Developer</p>
              </div>
            </div>
            <div className="text-gray-400">
              {isOpen ? <FaChevronUp size={18} /> : <FaChevronDown size={18} />}
            </div>
          </div>

          {/* Expanded Info */}
          {isOpen && (
            <div className="mt-2 bg-[#1e1e1f] border border-[#383838] rounded-2xl p-4 space-y-4 shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#2b2b2c] rounded-lg text-blue-400"><FaEnvelope size={14} /></div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">Email</p>
                  <p className="text-sm text-gray-200">prabhatmmg007@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#2b2b2c] rounded-lg text-blue-400"><FaMapMarkerAlt size={14} /></div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">Location</p>
                  <p className="text-sm text-gray-200">Indore, India</p>
                </div>
              </div>

              <div className="flex gap-4 justify-center mt-2">
                <a href="https://www.linkedin.com/in/prabhat-ahirwar-24604033a" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition"><FaLinkedin size={20} /></a>
                <a href="https://github.com/Prabhat-kumar-Ahirwar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition"><FaGithub size={20} /></a>
                <a href="https://api.whatsapp.com/send?phone=917987593265&text=Hello%20Prabhat" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition"><FaWhatsapp size={20} /></a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Spacer to push page content below mobile card */}
      <div className="md:hidden" style={{ height: isOpen ? `${expandedHeight}px` : `${compactHeight}px` }} />
    </>
  );
};

export default Navbar;
