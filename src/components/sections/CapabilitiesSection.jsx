import { Database, FileText, Phone } from "lucide-react";
import React from "react";

const CapabilitiesSection = () => (
  <section className="py-20 bg-[#e4ece4]">
    <div className="container mx-auto px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-16 text-black">
        Capabilities: What Your AI Agent Will Handle
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-[#e4ece4] p-8 rounded-2xl shadow-lg">
          <div className="flex items-center mb-6">
            <Phone className="w-12 h-12 text-blue-500 mr-4" />
            <h3 className="text-xl font-semibold text-gray-900">
              Provider Outreach
            </h3>
          </div>
          <p className="text-gray-700">
            Automatically dial insurance companies and navigate phone trees to
            reach the right department, handling hold times without human
            intervention.
          </p>
        </div>
        <div className="bg-[#e4ece4] p-8 rounded-2xl shadow-lg">
          <div className="flex items-center mb-6">
            <FileText className="w-12 h-12 text-green-500 mr-4" />
            <h3 className="text-xl font-semibold text-gray-900">
              Verification Processes
            </h3>
          </div>
          <p className="text-gray-700">
            Check patient eligibility, verify coverage details, determine
            co-pays and deductibles, and request pre-approvals for upcoming
            procedures.
          </p>
        </div>
        <div className="bg-[#e4ece4] p-8 rounded-2xl shadow-lg">
          <div className="flex items-center mb-6">
            <Database className="w-12 h-12 text-purple-500 mr-4" />
            <h3 className="text-xl font-semibold text-gray-900">
              Documentation
            </h3>
          </div>
          <p className="text-gray-700">
            Automatically log all verification details into your existing
            systems or send comprehensive summaries for staff review, ensuring
            perfect documentation.
          </p>
        </div>
      </div>
      <div className="mt-12 text-center">
        <p className="text-lg text-gray-600">
          Each capability directly addresses pain points in your current
          workflow, replacing hours of tedious staff work with automated
          precision.
        </p>
      </div>
    </div>
  </section>
);

export default CapabilitiesSection;
