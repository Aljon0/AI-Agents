import React from "react";

const ProblemSection = () => (
  <section className="py-20 bg-[#e4ece4]">
    <div className="container mx-auto px-6 lg:px-8">
      <h2 className="text-4xl font-bold mb-16 text-black">
        The Problem: Insurance Calls Drain Resources
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-[#d4ddd4] rounded-sm"></div>
            <h3 className="text-xl font-semibold text-black">Time Intensive</h3>
          </div>
          <p className="text-gray-700">
            Staff spend 3-5 hours daily on repetitive calls for eligibility
            checks, pre-authorizations, and billing clarifications.
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-[#d4ddd4] rounded-sm"></div>
            <h3 className="text-xl font-semibold text-black">
              Prone to Human Error
            </h3>
          </div>
          <p className="text-gray-700">
            Manual processes lead to inconsistent documentation, missed
            follow-ups, and critical information gaps.
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-[#d4ddd4] rounded-sm"></div>
            <h3 className="text-xl font-semibold text-black">
              Cascading Delays
            </h3>
          </div>
          <p className="text-gray-700">
            Every minute spent navigating phone trees translates to postponed
            surgeries, frustrated patients, and lost revenue opportunities.
          </p>
        </div>
      </div>
      <div className="mt-12">
        <p className="text-lg text-gray-600">
          These inefficiencies directly impact your bottom line while creating
          unnecessary stress for your administrative team.
        </p>
      </div>
    </div>
  </section>
);

export default ProblemSection;
