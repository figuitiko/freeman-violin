"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";

interface MenuItem {
  name: string;
  href: string;
}

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const menuItems: MenuItem[] = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Media", href: "#media" },
    { name: "Events", href: "#events" },
    { name: "Booking", href: "#booking" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Add shadow and background when scrolled
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section
      const sections = menuItems.map((item) => item.href.substring(1));

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuItems]);

  const handleMenuClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <div
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/70 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="text-xl font-bold text-black">CARLOS FREEMAN</div>

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex space-x-1">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleMenuClick(item.href)}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium transition-colors",
                      activeSection === item.href.substring(1)
                        ? "text-black"
                        : "text-gray-600 hover:text-black"
                    )}
                  >
                    {item.name}
                    {activeSection === item.href.substring(1) && (
                      <span className="absolute bottom-0 left-0 right-0 mx-auto h-0.5 w-1/2 rounded-full bg-medium-pink" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full bg-lavender/20 p-2 text-black md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobile && (
        <div
          className={cn(
            "absolute left-0 right-0 bg-white/90 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out",
            isOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          )}
        >
          <div className="container mx-auto px-4 py-2">
            <ul className="flex flex-col space-y-2 pb-4">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleMenuClick(item.href)}
                    className={cn(
                      "block w-full rounded-md px-4 py-2 text-left text-sm font-medium transition-colors",
                      activeSection === item.href.substring(1)
                        ? "bg-medium-pink/20 text-black"
                        : "text-gray-600 hover:bg-lavender/10 hover:text-black"
                    )}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
