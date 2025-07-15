import { CheckCircle, Clock, XCircle } from "lucide-react";
import React from "react";

const RecentVerifications = ({ verifications }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Failed":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Completed":
        return <CheckCircle className="w-4 h-4" />;
      case "Pending":
        return <Clock className="w-4 h-4" />;
      case "Failed":
        return <XCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">
          Recent Verifications
        </h3>
      </div>
      <div className="p-6">
        <div className="space-y-3">
          {verifications.map((verification) => (
            <div
              key={verification.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1 ${getStatusColor(
                    verification.status
                  )}`}
                >
                  {getStatusIcon(verification.status)}
                  <span>{verification.status}</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    {verification.patient}
                  </p>
                  <p className="text-sm text-gray-500">
                    {verification.provider}
                  </p>
                </div>
              </div>
              <span className="text-sm text-gray-500">{verification.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentVerifications;
