// src/components/layout/Navbar.jsx
import React from "react";

export default function Navbar() {
  return (
    <nav dir="ltr" lang="en" className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a className="flex items-center gap-3 cursor-pointer" href="./" aria-label="Home">
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-truck w-6 h-6 text-white"
              >
                <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11" />
                <path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2" />
                <circle cx={7} cy={18} r={2} />
                <path d="M15 18H9" />
                <circle cx={17} cy={18} r={2} />
              </svg>
            </div>
            <span className="first-heading text-2xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
              Nilgoon Gulf Transport
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">About</a>
            <a href="#services" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">Services</a>
            <a href="#testimonials" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">Contact</a>
            <a className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl" href="./review">Submit Feedback</a>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button className="text-gray-700 hover:text-emerald-600 p-2" aria-label="Toggle menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu w-6 h-6"
              >
                <line x1={4} x2={20} y1={12} y2={12} />
                <line x1={4} x2={20} y1={6} y2={6} />
                <line x1={4} x2={20} y1={18} y2={18} />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}