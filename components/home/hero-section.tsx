"use client";

import React from "react";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-medium-pink/30">
        <div className="flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            CARLOS FREEMAN
          </h1>
          <p className="mb-8 text-xl sm:text-2xl">
            Creating unforgettable musical experiences
          </p>
          <Button
            className="bg-medium-pink text-lg text-black hover:bg-light-pink"
            onClick={() => {
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Enter Site
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
