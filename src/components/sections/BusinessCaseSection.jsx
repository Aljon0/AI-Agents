import React from "react";

const BusinessCaseSection = () => (
  <section className="py-12 sm:py-16 lg:py-20 bg-[#e4ece4]">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 text-black">
        Quantifiable Value: The Business Case
      </h2>
      <div className="bg-[#e4ece4] rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8">
        {/* Mobile Card Layout */}
        <div className="block sm:hidden space-y-4">
          <div className="bg-white/60 rounded-lg p-4 border border-gray-200">
            <div className="font-semibold text-black mb-2">Daily call time</div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="text-gray-600">Before:</span>
                <div className="text-black">3-5 hours</div>
              </div>
              <div>
                <span className="text-gray-600">With AI:</span>
                <div className="text-black font-medium">&lt; 30 minutes</div>
              </div>
            </div>
            <div className="mt-2 p-2 bg-green-50 rounded text-sm">
              <span className="font-medium text-green-800">
                90% reduction in staff time
              </span>
            </div>
          </div>

          <div className="bg-white/60 rounded-lg p-4 border border-gray-200">
            <div className="font-semibold text-black mb-2">Staffing needs</div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="text-gray-600">Before:</span>
                <div className="text-black">1-2 full FTEs</div>
              </div>
              <div>
                <span className="text-gray-600">With AI:</span>
                <div className="text-black font-medium">0.5 staff + AI</div>
              </div>
            </div>
            <div className="mt-2 p-2 bg-green-50 rounded text-sm">
              <span className="font-medium text-green-800">
                50-75% labor savings
              </span>
            </div>
          </div>

          <div className="bg-white/60 rounded-lg p-4 border border-gray-200">
            <div className="font-semibold text-black mb-2">Error rates</div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="text-gray-600">Before:</span>
                <div className="text-black">Manual, inconsistent</div>
              </div>
              <div>
                <span className="text-gray-600">With AI:</span>
                <div className="text-black font-medium">
                  Tracked, consistent
                </div>
              </div>
            </div>
            <div className="mt-2 p-2 bg-green-50 rounded text-sm">
              <span className="font-medium text-green-800">
                Fewer denied claims
              </span>
            </div>
          </div>

          <div className="bg-white/60 rounded-lg p-4 border border-gray-200">
            <div className="font-semibold text-black mb-2">
              Scheduling efficiency
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="text-gray-600">Before:</span>
                <div className="text-black">Delays from holds & recalls</div>
              </div>
              <div>
                <span className="text-gray-600">With AI:</span>
                <div className="text-black font-medium">Rapid confirmation</div>
              </div>
            </div>
            <div className="mt-2 p-2 bg-green-50 rounded text-sm">
              <span className="font-medium text-green-800">
                More surgeries booked
              </span>
            </div>
          </div>
        </div>

        {/* Tablet and Desktop Table Layout */}
        <div className="hidden sm:block">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="text-left py-3 sm:py-4 px-3 sm:px-4 lg:px-6 font-semibold text-black text-sm sm:text-base">
                    Metric
                  </th>
                  <th className="text-left py-3 sm:py-4 px-3 sm:px-4 lg:px-6 font-semibold text-black text-sm sm:text-base">
                    Before AI
                  </th>
                  <th className="text-left py-3 sm:py-4 px-3 sm:px-4 lg:px-6 font-semibold text-black text-sm sm:text-base">
                    With AI
                  </th>
                  <th className="text-left py-3 sm:py-4 px-3 sm:px-4 lg:px-6 font-semibold text-black text-sm sm:text-base">
                    Impact
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-[#e4ece4]">
                  <td className="py-3 sm:py-4 px-3 sm:px-4 lg:px-6 text-black text-sm sm:text-base">
                    Daily call time
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-4 lg:px-6 text-black text-sm sm:text-base">
                    3-5 hours
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-4 lg:px-6 text-black font-medium text-sm sm:text-base">
                    &lt; 30 minutes
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-4 lg:px-6 text-black font-medium text-sm sm:text-base">
                    90% reduction in staff time
                  </td>
                </tr>
                <tr className="bg-white/60">
                  <td className="py-3 sm:py-4 px-3 sm:px-4 lg:px-6 text-black text-sm sm:text-base">
                    Staffing needs
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-4 lg:px-6 text-black text-sm sm:text-base">
                    1-2 full FTEs
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-4 lg:px-6 text-black font-medium text-sm sm:text-base">
                    0.5 staff + AI
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-4 lg:px-6 text-black font-medium text-sm sm:text-base">
                    50-75% labor savings
                  </td>
                </tr>
                <tr className="bg-[#e4ece4]">
                  <td className="py-3 sm:py-4 px-3 sm:px-4 lg:px-6 text-black text-sm sm:text-base">
                    Error rates
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-4 lg:px-6 text-black text-sm sm:text-base">
                    Manual, inconsistent
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-4 lg:px-6 text-black font-medium text-sm sm:text-base">
                    Tracked, consistent
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-4 lg:px-6 text-black font-medium text-sm sm:text-base">
                    Fewer denied claims
                  </td>
                </tr>
                <tr className="bg-white/60">
                  <td className="py-3 sm:py-4 px-3 sm:px-4 lg:px-6 text-black text-sm sm:text-base">
                    Scheduling efficiency
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-4 lg:px-6 text-black text-sm sm:text-base">
                    Delays from holds & recalls
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-4 lg:px-6 text-black font-medium text-sm sm:text-base">
                    Rapid confirmation
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-4 lg:px-6 text-black font-medium text-sm sm:text-base">
                    More surgeries booked
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white/40 backdrop-blur-sm border border-gray-200 p-4 sm:p-6 rounded-lg lg:rounded-xl mt-6 sm:mt-8">
          <p className="text-black font-medium text-sm sm:text-base">
            The transition to AI-powered verification directly improves your
            center's operational efficiency while significantly reducing
            administrative overhead costs.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default BusinessCaseSection;
