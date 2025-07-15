import React, { useEffect, useState } from "react";
import CallLogs from "./components/CallLogs/CallLogs";
import CallRequestForm from "./components/CallRequestForm/CallRequestForm";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header";
import Login from "./components/LoginPage/Login";
import ManualOverride from "./components/ManualOverride/ManualOverride";
import Navigation from "./components/Navigation/Navigation";
import Settings from "./components/Settings/Settings";
import TranscriptionViewer from "./components/Transcription/TranscriptionViewer";

const App = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [selectedCall, setSelectedCall] = useState(null);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing authentication on app load
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error("Error parsing saved user:", error);
        localStorage.removeItem("user");
      }
    }
    setIsLoading(false);
  }, []);

  // Handle login
  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // Handle logout
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    setActiveTab("dashboard");
    setSelectedCall(null);
  };

  // Show loading spinner while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Show login page if user is not authenticated
  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  // Main app content for authenticated users
  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "new-request":
        return <CallRequestForm />;
      case "call-logs":
        return (
          <CallLogs
            setSelectedCall={(call) => {
              setSelectedCall(call);
              setActiveTab("transcription");
            }}
          />
        );
      case "transcription":
        return (
          <TranscriptionViewer
            selectedCall={selectedCall}
            setSelectedCall={setSelectedCall}
          />
        );
      case "manual-override":
        return <ManualOverride />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        user={user}
        onLogout={handleLogout}
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
