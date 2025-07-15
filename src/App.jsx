import React from "react";
import Header from "./components/Header";
import BusinessCaseSection from "./components/sections/BusinessCaseSection";
import CapabilitiesSection from "./components/sections/CapabilitiesSection";
import HeroSection from "./components/sections/HeroSection";
import ImplementationSection from "./components/sections/ImplementationSection";
import InvestmentSection from "./components/sections/InvestmentSection";
import ProblemSection from "./components/sections/ProblemSection";
import TechnicalSection from "./components/sections/TechnicalSection";
import VisionSection from "./components/sections/VisionSection";

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <div id="problem">
          <ProblemSection />
        </div>
        <div id="solution">
          <VisionSection />
        </div>
        <div id="implementation">
          <ImplementationSection />
          <CapabilitiesSection />
          <BusinessCaseSection />
          <TechnicalSection />
        </div>
        <div id="investment">
          <InvestmentSection />
        </div>
      </main>
    </div>
  );
};

export default App;
