import React from "react";

const BusinessCaseSection = () => (
  <section className="py-20 bg-[#e4ece4]">
    <div className="container mx-auto px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-16 text-black">
        Quantifiable Value: The Business Case
      </h2>
      <div className="bg-[#e4ece4] rounded-2xl p-8">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-black">
                <th className="text-left py-4 px-6 font-semibold text-black">
                  Metric
                </th>
                <th className="text-left py-4 px-6 font-semibold text-black">
                  Before AI
                </th>
                <th className="text-left py-4 px-6 font-semibold text-black">
                  With AI
                </th>
                <th className="text-left py-4 px-6 font-semibold text-black">
                  Impact
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-[#e4ece4]">
                <td className="py-4 px-6 text-black">Daily call time</td>
                <td className="py-4 px-6 text-black">3-5 hours</td>
                <td className="py-4 px-6 text-black font-medium">
                  &lt; 30 minutes
                </td>
                <td className="py-4 px-6 text-black font-medium">
                  90% reduction in staff time
                </td>
              </tr>
              <tr className="bg-white/60">
                <td className="py-4 px-6 text-black">Staffing needs</td>
                <td className="py-4 px-6 text-black">1-2 full FTEs</td>
                <td className="py-4 px-6 text-black font-medium">
                  0.5 staff + AI
                </td>
                <td className="py-4 px-6 text-black font-medium">
                  50-75% labor savings
                </td>
              </tr>
              <tr className="bg-[#e4ece4]">
                <td className="py-4 px-6 text-black">Error rates</td>
                <td className="py-4 px-6 text-black">Manual, inconsistent</td>
                <td className="py-4 px-6 text-black font-medium">
                  Tracked, consistent
                </td>
                <td className="py-4 px-6 text-black font-medium">
                  Fewer denied claims
                </td>
              </tr>
              <tr className="bg-white/60">
                <td className="py-4 px-6 text-black">Scheduling efficiency</td>
                <td className="py-4 px-6 text-black">
                  Delays from holds & recalls
                </td>
                <td className="py-4 px-6 text-black font-medium">
                  Rapid confirmation
                </td>
                <td className="py-4 px-6 text-black font-medium">
                  More surgeries booked
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-white/40 backdrop-blur-sm border border-gray-200 p-6 rounded-xl mt-8">
          <p className="text-black font-medium">
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
