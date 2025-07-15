import React from "react";

const ProblemSection = () => (
  <section className="py-12 sm:py-16 lg:py-20 bg-[#e4ece4]">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 lg:mb-16 text-black text-center lg:text-left">
        The Problem: Insurance Calls Drain Resources
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#d4ddd4] rounded-sm flex-shrink-0"></div>
            <h3 className="text-lg sm:text-xl font-semibold text-black">
              Time Intensive
            </h3>
          </div>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Staff spend 3-5 hours daily on repetitive calls for eligibility
            checks, pre-authorizations, and billing clarifications.
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#d4ddd4] rounded-sm flex-shrink-0"></div>
            <h3 className="text-lg sm:text-xl font-semibold text-black">
              Prone to Human Error
            </h3>
          </div>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Manual processes lead to inconsistent documentation, missed
            follow-ups, and critical information gaps.
          </p>
        </div>
        <div className="space-y-4 md:col-span-2 lg:col-span-1">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#d4ddd4] rounded-sm flex-shrink-0"></div>
            <h3 className="text-lg sm:text-xl font-semibold text-black">
              Cascading Delays
            </h3>
          </div>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Every minute spent navigating phone trees translates to postponed
            surgeries, frustrated patients, and lost revenue opportunities.
          </p>
        </div>
      </div>
      <div className="mt-8 sm:mt-10 lg:mt-12">
        <p className="text-base sm:text-lg text-gray-600 text-center lg:text-left leading-relaxed">
          These inefficiencies directly impact your bottom line while creating
          unnecessary stress for your administrative team.
        </p>
      </div>
    </div>
  </section>
);

export default ProblemSection;
