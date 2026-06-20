"use client";

import * as React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-index/40 backdrop-blur-md border-b border-primary-alt/20 shadow-lg"
          : "bg-index backdrop-blur-sm border-b border-primary-alt/10"
      }`}
    >
      <nav className="w-full max-w-screen-xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link
            href="/"
            className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? "text-white" : "text-secondary-alt"
            }`}
          >
            Vito
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-medium transition-colors duration-200 ${
                isScrolled
                  ? "text-white/90 hover:text-white"
                  : "text-secondary hover:text-secondary-alt"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <Link
            href="#contact"
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
              isScrolled
                ? "bg-secondary text-white hover:bg-secondary-alt"
                : "bg-secondary-alt text-white hover:bg-secondary"
            }`}
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col space-y-1.5"
          aria-label="Toggle menu"
        >
          <div
            className={`w-6 h-0.5 transition-all duration-300 ${
              isScrolled ? "bg-white" : "bg-secondary-alt"
            } ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <div
            className={`w-6 h-0.5 transition-all duration-300 ${
              isScrolled ? "bg-white" : "bg-secondary-alt"
            } ${isOpen ? "opacity-0" : ""}`}
          />
          <div
            className={`w-6 h-0.5 transition-all duration-300 ${
              isScrolled ? "bg-white" : "bg-secondary-alt"
            } ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          className={`md:hidden transition-colors duration-300 ${
            isScrolled
              ? "bg-primary/90 backdrop-blur-md border-t border-primary-alt/20"
              : "bg-primary/60 backdrop-blur border-t border-primary-alt/10"
          }`}
        >
          <div className="flex flex-col space-y-3 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium py-2 transition-colors duration-200 ${
                  isScrolled ? "text-white/90" : "text-secondary-alt"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className={`px-6 py-2 rounded-lg font-medium text-center transition-all duration-200 ${
                isScrolled
                  ? "bg-secondary text-white hover:bg-secondary-alt"
                  : "bg-secondary-alt text-white hover:bg-secondary"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
