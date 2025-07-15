import { ArrowLeft, CheckCircle, Edit3, Save, XCircle } from "lucide-react";
import { useState } from "react";

const ManualOverride = ({ selectedCall, setSelectedCall }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [notes, setNotes] = useState(
    "Patient called back to confirm copay amount. Verified deductible calculation with supervisor."
  );
  const [editedSummary, setEditedSummary] = useState({
    eligibility: { status: true, text: "Active and eligible" },
    copay: { amount: "$50", type: "Office visits" },
    deductibleRemaining: "$300",
    priorAuthRequired: false,
    outOfNetworkCoverage: "70%",
    outOfNetworkDeductible: "$1,000",
    mentalHealthCopay: "$25",
    prescriptionCopay: "$15 (generic)",
    coverageType: "Comprehensive",
  });

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
    console.log("Saved changes:", editedSummary, notes);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset to original values
  };

  if (!selectedCall) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
        <Edit3 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          No Call Selected
        </h3>
        <p className="text-gray-600">
          Select a call from the logs to edit its summary or add notes.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => setSelectedCall(null)}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Call Logs</span>
          </button>
          <div className="flex space-x-2">
            {isEditing ? (
              <>
                <button
                  onClick={handleCancel}
                  className="flex items-center space-x-2 px-3 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                >
                  <X className="w-4 h-4" />
                  <span>Cancel</span>
                </button>
                <button
                  onClick={handleSave}
                  className="flex items-center space-x-2 px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Changes</span>
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                <Edit3 className="w-4 h-4" />
                <span>Edit Summary</span>
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <p className="text-sm text-gray-600">Patient</p>
            <p className="font-medium text-gray-900">John Smith</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Policy Number</p>
            <p className="font-medium text-gray-900">BC123456789</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Date</p>
            <p className="font-medium text-gray-900">2024-01-15</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Duration</p>
            <p className="font-medium text-gray-900">3:05</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Editable AI Summary */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">
                AI Summary
              </h3>
              {isEditing && (
                <div className="flex items-center space-x-2 text-amber-600">
                  <Edit3 className="w-4 h-4" />
                  <span className="text-sm">Edit Mode</span>
                </div>
              )}
            </div>
          </div>
          <div className="p-6 space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">
                  Eligibility
                </span>
                {isEditing ? (
                  <div className="flex items-center space-x-2">
                    <select
                      value={editedSummary.eligibility.status}
                      onChange={(e) =>
                        setEditedSummary({
                          ...editedSummary,
                          eligibility: {
                            ...editedSummary.eligibility,
                            status: e.target.value === "true",
                          },
                        })
                      }
                      className="text-sm border border-gray-300 rounded px-2 py-1"
                    >
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </select>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-green-700">Yes</span>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Copay</span>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedSummary.copay.amount}
                    onChange={(e) =>
                      setEditedSummary({
                        ...editedSummary,
                        copay: {
                          ...editedSummary.copay,
                          amount: e.target.value,
                        },
                      })
                    }
                    className="text-sm border border-gray-300 rounded px-2 py-1 w-20"
                  />
                ) : (
                  <span className="text-sm text-gray-900 font-medium">
                    {editedSummary.copay.amount}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">
                  Deductible Remaining
                </span>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedSummary.deductibleRemaining}
                    onChange={(e) =>
                      setEditedSummary({
                        ...editedSummary,
                        deductibleRemaining: e.target.value,
                      })
                    }
                    className="text-sm border border-gray-300 rounded px-2 py-1 w-20"
                  />
                ) : (
                  <span className="text-sm text-gray-900 font-medium">
                    {editedSummary.deductibleRemaining}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">
                  Prior Auth Required
                </span>
                {isEditing ? (
                  <select
                    value={editedSummary.priorAuthRequired}
                    onChange={(e) =>
                      setEditedSummary({
                        ...editedSummary,
                        priorAuthRequired: e.target.value === "true",
                      })
                    }
                    className="text-sm border border-gray-300 rounded px-2 py-1"
                  >
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                  </select>
                ) : (
                  <div className="flex items-center space-x-2">
                    <XCircle className="w-4 h-4 text-red-500" />
                    <span className="text-sm text-red-700">No</span>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">
                  Out-of-Network
                </span>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedSummary.outOfNetworkCoverage}
                    onChange={(e) =>
                      setEditedSummary({
                        ...editedSummary,
                        outOfNetworkCoverage: e.target.value,
                      })
                    }
                    className="text-sm border border-gray-300 rounded px-2 py-1 w-20"
                  />
                ) : (
                  <span className="text-sm text-gray-900 font-medium">
                    {editedSummary.outOfNetworkCoverage}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">
                  Mental Health Copay
                </span>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedSummary.mentalHealthCopay}
                    onChange={(e) =>
                      setEditedSummary({
                        ...editedSummary,
                        mentalHealthCopay: e.target.value,
                      })
                    }
                    className="text-sm border border-gray-300 rounded px-2 py-1 w-20"
                  />
                ) : (
                  <span className="text-sm text-gray-900 font-medium">
                    {editedSummary.mentalHealthCopay}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">
                  Prescription Copay
                </span>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedSummary.prescriptionCopay}
                    onChange={(e) =>
                      setEditedSummary({
                        ...editedSummary,
                        prescriptionCopay: e.target.value,
                      })
                    }
                    className="text-sm border border-gray-300 rounded px-2 py-1 w-32"
                  />
                ) : (
                  <span className="text-sm text-gray-900 font-medium">
                    {editedSummary.prescriptionCopay}
                  </span>
                )}
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-medium text-green-900">
                  Verification Complete
                </span>
              </div>
              <p className="text-sm text-green-700">
                Patient has comprehensive coverage with clear benefits
                information obtained.
              </p>
            </div>
          </div>
        </div>

        {/* Internal Notes */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">
              Internal Notes
            </h3>
          </div>
          <div className="p-6">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Staff Notes
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={8}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Add internal notes about this verification..."
              />
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                Audit Trail
              </h4>
              <div className="space-y-2">
                <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded">
                  <span className="font-medium">AI System</span> - Original
                  verification completed
                  <span className="text-gray-500 ml-2">
                    2024-01-15 10:30 AM
                  </span>
                </div>
                <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded">
                  <span className="font-medium">Sarah Johnson</span> - Added
                  note about callback
                  <span className="text-gray-500 ml-2">
                    2024-01-15 11:15 AM
                  </span>
                </div>
                <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded">
                  <span className="font-medium">Mike Davis</span> - Verified
                  deductible calculation
                  <span className="text-gray-500 ml-2">2024-01-15 2:20 PM</span>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setNotes("")}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Save Notes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ManualOverride;
