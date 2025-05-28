"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-4 bg-white/90 backdrop-blur-sm sticky top-0 z-30 w-full border-b border-border">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl text-primary">
          <Leaf className="h-6 w-6" />
          <span>Rick&apos;s Environmental CIC</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center">
          <a
            href="#about"
            className="text-gray-700 hover:text-primary font-medium">
            About
          </a>
          <a
            href="#services"
            className="text-gray-700 hover:text-primary font-medium">
            Services
          </a>
          <a
            href="#benefits"
            className="text-gray-700 hover:text-primary font-medium">
            Benefits
          </a>
          {/* <a
            href="#testimonials"
            className="text-gray-700 hover:text-primary font-medium">
            Impact
          </a> */}
          <Button asChild>
            <a href="#contact">Contact Us</a>
          </Button>
        </div>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation">
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true">
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg mt-2 py-2 px-4">
          <a
            href="#about"
            className="block py-2 text-gray-700 hover:text-primary font-medium">
            About
          </a>
          <a
            href="#services"
            className="block py-2 text-gray-700 hover:text-primary font-medium">
            Services
          </a>
          <a
            href="#benefits"
            className="block py-2 text-gray-700 hover:text-primary font-medium">
            Benefits
          </a>
          {/* <a
            href="#testimonials"
            className="block py-2 text-gray-700 hover:text-primary font-medium">
            Impact
          </a> */}
          <Button asChild className="mt-2 w-full">
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
