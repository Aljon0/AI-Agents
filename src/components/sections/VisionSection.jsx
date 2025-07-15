import { CheckCircle } from "lucide-react";
import React from "react";

const VisionSection = () => (
  <section className="py-20" style={{ backgroundColor: "#e4ece4" }}>
    <div className="container mx-auto px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-16 text-black">
        The Vision: AI That Learns From Your Best Staff
      </h2>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img
            src="/src/assets/AI.jpeg"
            alt="AI Technology Visualization"
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </div>
        <div className="space-y-6">
          <p className="text-lg text-gray-800 mb-6">
            Let AI take over the repetitive burden of insurance verification by:
          </p>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
              <span className="text-gray-800">
                Recording your team's most effective insurance calls
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
              <span className="text-gray-800">
                Training AI to replicate successful phrasing and workflows
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
              <span className="text-gray-800">
                Deploying agents that handle routine calls with greater speed
                and accuracy
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
              <span className="text-gray-800">
                Maintaining consistent documentation and follow-up protocols
              </span>
            </li>
          </ul>
          <div className="bg-white/40 backdrop-blur-sm border border-gray-200 p-6 rounded-xl mt-8">
            <p className="text-gray-800 font-medium">
              The result: your best staff members effectively cloned for
              insurance tasks, available 24/7 without burnout.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default VisionSection;
