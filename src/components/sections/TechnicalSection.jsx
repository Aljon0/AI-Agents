import { Zap } from "lucide-react";
import React from "react";

const TechnicalSection = () => (
  <section className="py-20 bg-[#e4ece4]">
    <div className="container mx-auto px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-16 text-black">
        Technical Implementation & Timeline
      </h2>
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Simple Tech Stack
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <Zap className="w-5 h-5 text-green-600 mt-1" />
              <span className="text-gray-800">
                Call recording via Zoom Phone or Twilio
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <Zap className="w-5 h-5 text-green-600 mt-1" />
              <span className="text-gray-800">
                Transcription using Whisper or Deepgram
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <Zap className="w-5 h-5 text-green-600 mt-1" />
              <span className="text-gray-800">
                AI logic powered by GPT-4 or Claude
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <Zap className="w-5 h-5 text-green-600 mt-1" />
              <span className="text-gray-800">
                Integration with your EMR/billing systems
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <Zap className="w-5 h-5 text-green-600 mt-1" />
              <span className="text-gray-800">
                Optional phone agent tools from HumanFirst or Vocode
              </span>
            </li>
          </ul>
          <div className="bg-green-100 p-6 rounded-xl mt-6">
            <p className="text-green-800">
              The system works with your existing infrastructure without major
              IT investments.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            5-Week Timeline
          </h3>
          <div className="relative max-w-md mx-auto">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-400 transform -translate-x-px"></div>

            <div className="space-y-12">
              {/* Week 1 - Left */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <h4 className="font-semibold text-gray-900 text-lg">
                    Week 1
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Record 50+ real insurance calls
                  </p>
                </div>
                <div className="absolute left-1/2 w-8 h-8 bg-[#d4dcd4] rounded-sm flex items-center justify-center text-gray-900 font-bold text-sm z-10 transform -translate-x-1/2">
                  1
                </div>
              </div>

              {/* Week 2 - Right */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right"></div>
                <div className="absolute left-1/2 w-8 h-8 bg-[#d4dcd4] rounded-sm flex items-center justify-center text-gray-900 font-bold text-sm z-10 transform -translate-x-1/2">
                  2
                </div>
                <div className="w-1/2 pl-8">
                  <h4 className="font-semibold text-gray-900 text-lg">
                    Week 2
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Transcribe and tag key conversation moments
                  </p>
                </div>
              </div>

              {/* Week 3 - Left */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <h4 className="font-semibold text-gray-900 text-lg">
                    Week 3
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Train AI agent and run simulations
                  </p>
                </div>
                <div className="absolute left-1/2 w-8 h-8 bg-[#d4dcd4] rounded-sm flex items-center justify-center text-gray-900 font-bold text-sm z-10 transform -translate-x-1/2">
                  3
                </div>
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* Week 4 - Right */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right"></div>
                <div className="absolute left-1/2 w-8 h-8 bg-[#d4dcd4] rounded-sm flex items-center justify-center text-gray-900 font-bold text-sm z-10 transform -translate-x-1/2">
                  4
                </div>
                <div className="w-1/2 pl-8">
                  <h4 className="font-semibold text-gray-900 text-lg">
                    Week 4
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Pilot with 10-20 calls to real payers
                  </p>
                </div>
              </div>

              {/* Week 5 - Left */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <h4 className="font-semibold text-gray-900 text-lg">
                    Week 5
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Scale to handle all routine insurance calls
                  </p>
                </div>
                <div className="absolute left-1/2 w-8 h-8 bg-[#d4dcd4] rounded-sm flex items-center justify-center text-gray-900 font-bold text-sm z-10 transform -translate-x-1/2">
                  5
                </div>
                <div className="w-1/2 pl-8"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TechnicalSection;
