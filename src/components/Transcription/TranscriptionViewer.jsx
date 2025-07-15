import { FileText } from "lucide-react";
import { useState } from "react";

const TranscriptionViewer = ({ selectedCall, setSelectedCall }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(185); // 3:05 in seconds

  // Mock transcription data with timestamps
  const transcriptionData = [
    {
      id: 1,
      speaker: "AI Assistant",
      text: "Hello, this is the automated verification system calling on behalf of Dr. Smith's office. I need to verify insurance coverage for patient John Smith.",
      timestamp: "00:00",
      timeInSeconds: 0,
    },
    {
      id: 2,
      speaker: "Insurance Rep",
      text: "Hello, I can help you with that. Can you please provide the patient's date of birth and policy number?",
      timestamp: "00:08",
      timeInSeconds: 8,
    },
    {
      id: 3,
      speaker: "AI Assistant",
      text: "The patient's date of birth is January 15, 1985, and the policy number is BC123456789.",
      timestamp: "00:15",
      timeInSeconds: 15,
    },
    {
      id: 4,
      speaker: "Insurance Rep",
      text: "Thank you. I can see the patient is active and eligible for services. The copay for office visits is $50, and the deductible remaining is $300.",
      timestamp: "00:25",
      timeInSeconds: 25,
      highlights: [
        "active and eligible",
        "copay",
        "$50",
        "deductible remaining",
        "$300",
      ],
    },
    {
      id: 5,
      speaker: "AI Assistant",
      text: "Does this patient require prior authorization for the scheduled procedure?",
      timestamp: "00:35",
      timeInSeconds: 35,
    },
    {
      id: 6,
      speaker: "Insurance Rep",
      text: "No, prior authorization is not required for routine office visits. The patient has full coverage for preventive care.",
      timestamp: "00:42",
      timeInSeconds: 42,
      highlights: [
        "prior authorization",
        "not required",
        "full coverage",
        "preventive care",
      ],
    },
    {
      id: 7,
      speaker: "AI Assistant",
      text: "What is the patient's out-of-network coverage percentage?",
      timestamp: "00:52",
      timeInSeconds: 52,
    },
    {
      id: 8,
      speaker: "Insurance Rep",
      text: "The patient has 70% coverage for out-of-network providers after meeting the out-of-network deductible of $1,000.",
      timestamp: "01:02",
      timeInSeconds: 62,
      highlights: ["70% coverage", "out-of-network", "deductible", "$1,000"],
    },
    {
      id: 9,
      speaker: "AI Assistant",
      text: "Thank you for the information. Is there anything else I should know about this patient's coverage?",
      timestamp: "01:15",
      timeInSeconds: 75,
    },
    {
      id: 10,
      speaker: "Insurance Rep",
      text: "The patient's coverage is comprehensive. Mental health services have a separate $25 copay, and prescription coverage is included with a $15 generic copay.",
      timestamp: "01:25",
      timeInSeconds: 85,
      highlights: [
        "comprehensive",
        "mental health",
        "$25 copay",
        "prescription coverage",
        "$15 generic copay",
      ],
    },
  ];

  const aiSummary = {
    patientName: "John Smith",
    policyNumber: "BC123456789",
    callDate: "2024-01-15",
    callDuration: "3:05",
    verificationStatus: "Completed",
    details: {
      eligibility: { status: true, text: "Active and eligible" },
      copay: { amount: "$50", type: "Office visits" },
      deductibleRemaining: "$300",
      priorAuthRequired: false,
      outOfNetworkCoverage: "70%",
      outOfNetworkDeductible: "$1,000",
      mentalHealthCopay: "$25",
      prescriptionCopay: "$15 (generic)",
      coverageType: "Comprehensive",
    },
  };

  const keyPhrases = [
    "copay",
    "deductible",
    "prior authorization",
    "eligible",
    "coverage",
    "out-of-network",
    "mental health",
    "prescription",
    "comprehensive",
  ];

  const highlightText = (text, highlights = []) => {
    if (!highlights || highlights.length === 0) return text;

    let highlightedText = text;
    highlights.forEach((phrase) => {
      const regex = new RegExp(`(${phrase})`, "gi");
      highlightedText = highlightedText.replace(
        regex,
        '<mark class="bg-yellow-200 px-1 rounded">$1</mark>'
      );
    });

    return highlightedText;
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const copyTranscription = () => {
    const text = transcriptionData
      .map((item) => `${item.speaker}: ${item.text}`)
      .join("\n\n");
    navigator.clipboard.writeText(text);
  };

  if (!selectedCall) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
        <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          No Call Selected
        </h3>
        <p className="text-gray-600">
          Select a call from the logs to view its transcription and AI summary.
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
            <button className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
            <button
              onClick={copyTranscription}
              className="flex items-center space-x-2 px-3 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
            >
              <Copy className="w-4 h-4" />
              <span>Copy</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <p className="text-sm text-gray-600">Patient</p>
            <p className="font-medium text-gray-900">{aiSummary.patientName}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Policy Number</p>
            <p className="font-medium text-gray-900">
              {aiSummary.policyNumber}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Date</p>
            <p className="font-medium text-gray-900">{aiSummary.callDate}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Duration</p>
            <p className="font-medium text-gray-900">
              {aiSummary.callDuration}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* AI Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 sticky top-6">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                AI Summary
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">
                    Eligibility
                  </span>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-green-700">Yes</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">
                    Copay
                  </span>
                  <span className="text-sm text-gray-900 font-medium">
                    {aiSummary.details.copay.amount}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">
                    Deductible Remaining
                  </span>
                  <span className="text-sm text-gray-900 font-medium">
                    {aiSummary.details.deductibleRemaining}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">
                    Prior Auth Required
                  </span>
                  <div className="flex items-center space-x-2">
                    <XCircle className="w-4 h-4 text-red-500" />
                    <span className="text-sm text-red-700">No</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">
                    Out-of-Network
                  </span>
                  <span className="text-sm text-gray-900 font-medium">
                    {aiSummary.details.outOfNetworkCoverage}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">
                    Mental Health Copay
                  </span>
                  <span className="text-sm text-gray-900 font-medium">
                    {aiSummary.details.mentalHealthCopay}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">
                    Prescription Copay
                  </span>
                  <span className="text-sm text-gray-900 font-medium">
                    {aiSummary.details.prescriptionCopay}
                  </span>
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
        </div>

        {/* Transcription */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  Call Transcription
                </h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Highlight className="w-4 h-4 text-yellow-600" />
                    <span className="text-sm text-gray-600">
                      Key phrases highlighted
                    </span>
                  </div>
                </div>
              </div>

              {/* Audio Player */}
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-blue-700"
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5" />
                    ) : (
                      <Play className="w-5 h-5" />
                    )}
                  </button>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">
                        {formatTime(currentTime)}
                      </span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{
                            width: `${(currentTime / duration) * 100}%`,
                          }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">
                        {formatTime(duration)}
                      </span>
                    </div>
                  </div>
                  <Volume2 className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="p-6 max-h-96 overflow-y-auto">
              <div className="space-y-4">
                {transcriptionData.map((item) => (
                  <div key={item.id} className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {item.timestamp}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="mb-1">
                        <span
                          className={`text-sm font-medium ${
                            item.speaker === "AI Assistant"
                              ? "text-blue-600"
                              : "text-green-600"
                          }`}
                        >
                          {item.speaker}
                        </span>
                      </div>
                      <p
                        className="text-gray-800 leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: highlightText(item.text, item.highlights),
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranscriptionViewer;
