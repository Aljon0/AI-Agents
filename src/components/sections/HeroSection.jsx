import React from "react";

const HeroSection = () => (
  <section className="min-h-screen bg-[#e4ece4] flex items-center pt-16 sm:pt-20 lg:pt-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
            Revolutionizing Insurance Verification:
            <span className="text-black block sm:inline">
              {" "}
              AI Call Agents
            </span>{" "}
            for Surgical Centers
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Transform your surgical center's operations by implementing AI
            agents that handle time-consuming insurance calls, freeing your
            staff to focus on patient care and revenue-generating activities.
          </p>
        </div>

        {/* Image */}
        <div className="relative order-first lg:order-last">
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl">
            <img
              src="/src/assets/Nurse.jpg"
              alt="Medical professionals at surgical center"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
