import React from "react";

const HeroSection = () => (
  <section className="min-h-screen bg-[#e4ece4] flex items-center">
    <div className="container mx-auto px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight">
            Revolutionizing Insurance Verification:
            <span className="text-black"> AI Call Agents</span> for Surgical
            Centers
          </h1>
          <p className="text-xl text-black leading-relaxed">
            Transform your surgical center's operations by implementing AI
            agents that handle time-consuming insurance calls, freeing your
            staff to focus on patient care and revenue-generating activities.
          </p>
        </div>
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="/src/assets/Nurse.jpg"
              alt="Medical professionals at surgical center"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
