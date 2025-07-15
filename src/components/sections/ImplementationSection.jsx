import React from "react";

const ImplementationSection = () => (
  <section className="py-20 bg-[#e4ece4]">
    <div className="container mx-auto px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-16 text-black">
        Implementation: Four Steps to AI-Powered Efficiency
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="h-4 bg-green-300 rounded-full"></div>
          <h3 className="text-xl font-semibold text-gray-900">Record Calls</h3>
          <p className="text-gray-700">
            Capture your most skilled staff handling various insurance
            scenarios. We transcribe these interactions to build a knowledge
            base of effective language patterns and workflows.
          </p>
        </div>
        <div className="space-y-4">
          <div className="h-4 bg-green-400 rounded-full"></div>
          <h3 className="text-xl font-semibold text-gray-900">Train AI</h3>
          <p className="text-gray-700">
            Your AI agent learns payer-specific protocols, procedure codes, and
            the exact phrasing that gets results with Aetna, BCBS, and other
            carriers your center regularly works with.
          </p>
        </div>
        <div className="space-y-4">
          <div className="h-4 bg-green-300 rounded-full"></div>
          <h3 className="text-xl font-semibold text-gray-900">
            Simulate Calls
          </h3>
          <p className="text-gray-700">
            We test extensively with real-world scenarios, refining responses
            and handling edge cases before deployment to ensure seamless
            performance.
          </p>
        </div>
        <div className="space-y-4">
          <div className="h-4 bg-green-400 rounded-full"></div>
          <h3 className="text-xl font-semibold text-gray-900">Go Live</h3>
          <p className="text-gray-700">
            Begin with a soft rollout where AI handles straightforward calls
            while staff manages exceptions, gradually expanding AI
            responsibilities as confidence grows.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ImplementationSection;
