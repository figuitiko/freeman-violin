"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export default function GoToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button when page is scrolled down
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={cn(
        "fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-medium-pink shadow-lg transition-all duration-300 hover:bg-light-pink focus:outline-none focus:ring-2 focus:ring-lavender focus:ring-offset-2 md:bottom-8 md:right-8 md:h-14 md:w-14",
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-16 opacity-0 pointer-events-none"
      )}
    >
      <ArrowUp className="h-5 w-5 text-black md:h-6 md:w-6" />
      <span className="sr-only">Go to top</span>

      {/* Ripple effect on hover */}
      <span className="absolute inset-0 -z-10 rounded-full bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>

      {/* Subtle pulse animation */}
      <span className="absolute inset-0 -z-10 animate-pulse rounded-full bg-medium-pink/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
    </button>
  );
}
