import { CheckCircle } from "lucide-react";
import React from "react";

const InvestmentSection = () => (
  <section className="py-12 sm:py-16 lg:py-20 bg-[#e4ece4]">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 lg:mb-16 text-black">
        Investment & Next Steps
      </h2>

      <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
        {/* Left side - Investment Information */}
        <div className="space-y-6 sm:space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="text-center bg-[#e4ece4] rounded-lg p-4 sm:p-6">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-700 mb-2">
                $15-30K
              </h3>
              <p className="text-lg sm:text-xl font-semibold text-stone-700 mb-2">
                Project Cost
              </p>
              <p className="text-gray-600 text-sm sm:text-base">
                One-time implementation investment
              </p>
            </div>

            <div className="text-center bg-[#e4ece4] rounded-lg p-4 sm:p-6">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-700 mb-2">
                90 Days
              </h3>
              <p className="text-lg sm:text-xl font-semibold text-stone-700 mb-2">
                ROI Timeline
              </p>
              <p className="text-gray-600 text-sm sm:text-base">
                Break-even point from labor savings
              </p>
            </div>
          </div>

          <div className="text-center bg-[#e4ece4] rounded-lg p-4 sm:p-6">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-700 mb-2">
              Minimal
            </h3>
            <p className="text-lg sm:text-xl font-semibold text-stone-700 mb-2">
              Ongoing Costs
            </p>
            <p className="text-gray-600 text-sm sm:text-base">
              Optional hosting fees only
            </p>
          </div>
        </div>

        {/* Right side - Call to Action */}
        <div className="space-y-4 sm:space-y-6">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">
            Ready to Transform Your Verification Process?
          </h3>

          <p className="text-gray-700 text-base sm:text-lg">
            Let's begin by recording 10-15 insurance calls this week to
            demonstrate the potential.
          </p>

          <div className="bg-white p-4 sm:p-6 rounded-lg lg:rounded-xl border-l-4 border-blue-500">
            <p className="text-gray-800 mb-4 font-medium text-sm sm:text-base">
              From there, we'll build your custom AI-powered insurance agent
              that delivers:
            </p>
            <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Faster approvals</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Fewer documentation errors</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>More efficiently booked surgeries</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg lg:rounded-xl transition-colors text-sm sm:text-base">
              Schedule Consultation
            </button>
            <button className="bg-white hover:bg-gray-50 text-blue-600 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg lg:rounded-xl border-2 border-blue-600 transition-colors text-sm sm:text-base">
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default InvestmentSection;
