import {
  Brain,
  Download,
  Eye,
  FileText,
  Phone,
  Plus,
  Settings as SettingsIcon,
  Trash2,
  Upload,
} from "lucide-react";
import React, { useState } from "react";

const Settings = () => {
  const [uploadedFiles, setUploadedFiles] = useState([
    {
      id: 1,
      name: "call_recording_001.mp3",
      size: "2.4 MB",
      date: "2024-01-15",
      status: "processed",
    },
    {
      id: 2,
      name: "call_recording_002.mp3",
      size: "3.1 MB",
      date: "2024-01-14",
      status: "processing",
    },
    {
      id: 3,
      name: "call_recording_003.mp3",
      size: "1.8 MB",
      date: "2024-01-13",
      status: "processed",
    },
  ]);

  const [sampleTranscripts, setSampleTranscripts] = useState([
    {
      id: 1,
      name: "Blue Cross Verification",
      provider: "Blue Cross",
      status: "active",
      lastModified: "2024-01-15",
    },
    {
      id: 2,
      name: "Aetna Standard Flow",
      provider: "Aetna",
      status: "active",
      lastModified: "2024-01-14",
    },
    {
      id: 3,
      name: "UnitedHealth Complex",
      provider: "UnitedHealth",
      status: "draft",
      lastModified: "2024-01-13",
    },
  ]);

  const [showPromptFlow, setShowPromptFlow] = useState(false);

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    const newFiles = files.map((file, index) => ({
      id: uploadedFiles.length + index + 1,
      name: file.name,
      size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
      date: new Date().toISOString().split("T")[0],
      status: "uploading",
    }));
    setUploadedFiles([...uploadedFiles, ...newFiles]);
  };

  const removeFile = (id) => {
    setUploadedFiles(uploadedFiles.filter((file) => file.id !== id));
  };

  const removeTranscript = (id) => {
    setSampleTranscripts(
      sampleTranscripts.filter((transcript) => transcript.id !== id)
    );
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "processed":
      case "active":
        return "bg-green-100 text-green-800";
      case "processing":
      case "uploading":
        return "bg-yellow-100 text-yellow-800";
      case "draft":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center space-x-3 mb-2">
          <SettingsIcon className="w-6 h-6 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        </div>
        <p className="text-gray-600">
          Configure AI training data and system parameters
        </p>
      </div>

      {/* Agent Training Section */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="border-b border-gray-200 p-6">
          <div className="flex items-center space-x-3">
            <Brain className="w-5 h-5 text-purple-600" />
            <h2 className="text-lg font-semibold text-gray-900">
              Agent Training
            </h2>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Upload call recordings and manage training data
          </p>
        </div>

        {/* Upload Training Calls */}
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-md font-medium text-gray-900 mb-4">
            Upload Training Calls
          </h3>

          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-600 mb-2">
              Upload call recordings for AI training
            </p>
            <label className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 cursor-pointer">
              <Plus className="w-4 h-4 mr-2" />
              Browse Files
              <input
                type="file"
                multiple
                accept=".mp3,.wav,.m4a"
                onChange={handleFileUpload}
                className="sr-only"
              />
            </label>
            <p className="text-xs text-gray-500 mt-2">
              Supported formats: MP3, WAV, M4A
            </p>
          </div>

          {/* Uploaded Files List */}
          {uploadedFiles.length > 0 && (
            <div className="mt-6">
              <h4 className="text-sm font-medium text-gray-900 mb-3">
                Uploaded Files
              </h4>
              <div className="space-y-2">
                {uploadedFiles.map((file) => (
                  <div
                    key={file.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {file.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {file.size} • {file.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                          file.status
                        )}`}
                      >
                        {file.status}
                      </span>
                      <button
                        onClick={() => removeFile(file.id)}
                        className="text-red-500 hover:text-red-700 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sample Transcripts Management */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-md font-medium text-gray-900">
              Sample Transcripts
            </h3>
            <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              <Plus className="w-4 h-4 mr-2" />
              Add New Template
            </button>
          </div>

          <div className="space-y-3">
            {sampleTranscripts.map((transcript) => (
              <div
                key={transcript.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {transcript.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {transcript.provider} • Modified {transcript.lastModified}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                      transcript.status
                    )}`}
                  >
                    {transcript.status}
                  </span>
                  <button className="text-blue-600 hover:text-blue-800 p-1">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="text-blue-600 hover:text-blue-800 p-1">
                    <Download className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => removeTranscript(transcript.id)}
                    className="text-red-500 hover:text-red-700 p-1"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Prompt Flow */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-md font-medium text-gray-900">
                AI Prompt Flow
              </h3>
              <p className="text-sm text-gray-600">
                Internal review of AI conversation flow and prompts
              </p>
            </div>
            <button
              onClick={() => setShowPromptFlow(!showPromptFlow)}
              className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              <Eye className="w-4 h-4 mr-2" />
              {showPromptFlow ? "Hide" : "View"} Flow
            </button>
          </div>

          {showPromptFlow && (
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 border border-blue-200 rounded">
                  <h4 className="text-sm font-medium text-blue-900">
                    Initial Greeting
                  </h4>
                  <p className="text-sm text-blue-800 mt-1">
                    "Hello, I'm calling to verify insurance coverage for
                    [Patient Name]. Could you please help me with this
                    verification?"
                  </p>
                </div>
                <div className="p-3 bg-green-50 border border-green-200 rounded">
                  <h4 className="text-sm font-medium text-green-900">
                    Information Request
                  </h4>
                  <p className="text-sm text-green-800 mt-1">
                    "I have the policy number [Policy Number] and member ID. Can
                    you confirm the current coverage status and benefits?"
                  </p>
                </div>
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded">
                  <h4 className="text-sm font-medium text-yellow-900">
                    Verification Questions
                  </h4>
                  <p className="text-sm text-yellow-800 mt-1">
                    "What is the deductible amount? Are there any copayments for
                    office visits? What is the out-of-network coverage?"
                  </p>
                </div>
                <div className="p-3 bg-purple-50 border border-purple-200 rounded">
                  <h4 className="text-sm font-medium text-purple-900">
                    Closing
                  </h4>
                  <p className="text-sm text-purple-800 mt-1">
                    "Thank you for your assistance. Could you provide a
                    reference number for this verification?"
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* System Configuration */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="border-b border-gray-200 p-6">
          <div className="flex items-center space-x-3">
            <SettingsIcon className="w-5 h-5 text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-900">
              System Configuration
            </h2>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            General system settings and preferences
          </p>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Call Timeout (minutes)
              </label>
              <input
                type="number"
                defaultValue="5"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Max Retry Attempts
              </label>
              <input
                type="number"
                defaultValue="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              Save Configuration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
