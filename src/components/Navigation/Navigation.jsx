import {
  CheckCircle,
  Edit3,
  FileText,
  LogOut,
  Plus,
  Settings,
} from "lucide-react";
import React from "react";

const Navigation = ({ activeTab, setActiveTab, user, onLogout }) => {
  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: CheckCircle },
    { id: "new-request", label: "New Request", icon: Plus },
    { id: "call-logs", label: "Call Logs", icon: FileText },
    { id: "transcription", label: "Transcription", icon: FileText },
    { id: "manual-override", label: "Manual Override", icon: Edit3 },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Navigation Tabs */}
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* User Info and Logout */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">
                  {user?.username?.charAt(0).toUpperCase() || "U"}
                </span>
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-gray-900">
                  {user?.username || "User"}
                </p>
                <p className="text-xs text-gray-500">
                  {user?.role || "Staff Member"}
                </p>
              </div>
            </div>

            <button
              onClick={onLogout}
              className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
