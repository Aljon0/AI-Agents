import { CheckCircle } from "lucide-react";
import React from "react";

const VisionSection = () => (
  <section
    className="py-12 sm:py-16 lg:py-20"
    style={{ backgroundColor: "#e4ece4" }}
  >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 text-black">
        The Vision: AI That Learns From Your Best Staff
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
        <div className="relative order-2 lg:order-1">
          <img
            src="/src/assets/AI.jpeg"
            alt="AI Technology Visualization"
            className="w-full h-auto rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl"
          />
        </div>
        <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
          <p className="text-base sm:text-lg text-gray-800 mb-4 sm:mb-6 leading-relaxed">
            Let AI take over the repetitive burden of insurance verification by:
          </p>
          <ul className="space-y-3 sm:space-y-4">
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mt-1 flex-shrink-0" />
              <span className="text-sm sm:text-base text-gray-800 leading-relaxed">
                Recording your team's most effective insurance calls
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mt-1 flex-shrink-0" />
              <span className="text-sm sm:text-base text-gray-800 leading-relaxed">
                Training AI to replicate successful phrasing and workflows
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mt-1 flex-shrink-0" />
              <span className="text-sm sm:text-base text-gray-800 leading-relaxed">
                Deploying agents that handle routine calls with greater speed
                and accuracy
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mt-1 flex-shrink-0" />
              <span className="text-sm sm:text-base text-gray-800 leading-relaxed">
                Maintaining consistent documentation and follow-up protocols
              </span>
            </li>
          </ul>
          <div className="bg-white/40 backdrop-blur-sm border border-gray-200 p-4 sm:p-6 rounded-lg sm:rounded-xl mt-6 sm:mt-8">
            <p className="text-sm sm:text-base text-gray-800 font-medium leading-relaxed">
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
