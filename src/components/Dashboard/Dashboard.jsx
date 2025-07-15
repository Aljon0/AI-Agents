import { CheckCircle, Clock, Phone } from "lucide-react";
import React from "react";
import RecentVerifications from "./RecentVerifications";
import StatsCard from "./StatsCard";

const Dashboard = () => {
  const stats = [
    {
      label: "Total Calls Today",
      value: "42",
      icon: Phone,
      color: "bg-blue-500",
    },
    {
      label: "Success Rate",
      value: "89%",
      icon: CheckCircle,
      color: "bg-green-500",
    },
    {
      label: "Avg Call Time",
      value: "3.2m",
      icon: Clock,
      color: "bg-purple-500",
    },
  ];

  const recentVerifications = [
    {
      id: 1,
      patient: "John Smith",
      provider: "Blue Cross",
      status: "Completed",
      time: "2m ago",
    },
    {
      id: 2,
      patient: "Sarah Johnson",
      provider: "Aetna",
      status: "Pending",
      time: "5m ago",
    },
    {
      id: 3,
      patient: "Mike Davis",
      provider: "UnitedHealth",
      status: "Failed",
      time: "8m ago",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            label={stat.label}
            value={stat.value}
            icon={stat.icon}
            color={stat.color}
          />
        ))}
      </div>

      {/* Recent Verifications */}
      <RecentVerifications verifications={recentVerifications} />
    </div>
  );
};

export default Dashboard;
