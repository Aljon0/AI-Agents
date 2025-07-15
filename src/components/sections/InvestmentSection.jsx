import { CheckCircle } from "lucide-react";
import React from "react";

const InvestmentSection = () => (
  <section className="py-20 bg-[#e4ece4]">
    <div className="container mx-auto px-6 lg:px-8">
      <h2 className="text-4xl font-bold mb-16 text-black">
        Investment & Next Steps
      </h2>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left side - Investment Information */}
        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center">
              <h3 className="text-5xl font-bold text-stone-700 mb-2">
                $15-30K
              </h3>
              <p className="text-xl font-semibold text-stone-700 mb-2">
                Project Cost
              </p>
              <p className="text-gray-600">
                One-time implementation investment
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl font-bold text-stone-700 mb-2">
                90 Days
              </h3>
              <p className="text-xl font-semibold text-stone-700 mb-2">
                ROI Timeline
              </p>
              <p className="text-gray-600">
                Break-even point from labor savings
              </p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold text-stone-700 mb-2">Minimal</h3>
            <p className="text-xl font-semibold text-stone-700 mb-2">
              Ongoing Costs
            </p>
            <p className="text-gray-600">Optional hosting fees only</p>
          </div>
        </div>

        {/* Right side - Call to Action */}
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-black">
            Ready to Transform Your Verification Process?
          </h3>

          <p className="text-gray-700 text-lg">
            Let's begin by recording 10-15 insurance calls this week to
            demonstrate the potential.
          </p>

          <div className="bg-white p-6 rounded-xl border-l-4 border-blue-500">
            <p className="text-gray-800 mb-4 font-medium">
              From there, we'll build your custom AI-powered insurance agent
              that delivers:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>Faster approvals</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>Fewer documentation errors</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>More efficiently booked surgeries</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-colors">
              Schedule Consultation
            </button>
            <button className="bg-white hover:bg-gray-50 text-blue-600 font-semibold py-4 px-8 rounded-xl border-2 border-blue-600 transition-colors">
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default InvestmentSection;
