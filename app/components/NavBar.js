"use client"; // Mark as Client Component

import { useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Ranyam Enterprises</div>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <div
          className={`md:flex space-x-4 ${isOpen ? "block" : "hidden"} md:block`}
        >
          <Link href="#home" className="hover:text-blue-300">
            Home
          </Link>
          <Link href="#services" className="hover:text-blue-300">
            What We Offer
          </Link>
          <Link href="#latest-projects" className="hover:text-blue-300">
            Latest Projects
          </Link>
          <Link href="#other-projects" className="hover:text-blue-300">
            Other Projects
          </Link>
          <Link href="#feedback" className="hover:text-blue-300">
            Client Feedback
          </Link>
          <Link href="#terms" className="hover:text-blue-300">
            Terms
          </Link>
          <Link href="#team" className="hover:text-blue-300">
            Our Team
          </Link>
          <Link href="#partners" className="hover:text-blue-300">
            Partners
          </Link>
          <Link href="#contact" className="hover:text-blue-300">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;