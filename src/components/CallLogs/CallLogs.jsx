import { Search } from "lucide-react";
import React, { useState } from "react";
import CallLogTable from "./CallLogTable";

const CallLogs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const callLogs = [
    {
      id: 1,
      patient: "John Smith",
      provider: "Blue Cross Blue Shield",
      date: "2024-01-15",
      status: "Completed",
      outcome: "Coverage Verified",
      duration: "2:45",
    },
    {
      id: 2,
      patient: "Sarah Johnson",
      provider: "Aetna",
      date: "2024-01-15",
      status: "Pending",
      outcome: "In Progress",
      duration: "1:30",
    },
    {
      id: 3,
      patient: "Mike Davis",
      provider: "UnitedHealth",
      date: "2024-01-15",
      status: "Failed",
      outcome: "Policy Not Found",
      duration: "0:45",
    },
    {
      id: 4,
      patient: "Emily Brown",
      provider: "Cigna",
      date: "2024-01-14",
      status: "Completed",
      outcome: "Coverage Verified",
      duration: "3:20",
    },
    {
      id: 5,
      patient: "David Wilson",
      provider: "Humana",
      date: "2024-01-14",
      status: "Completed",
      outcome: "Partial Coverage",
      duration: "4:15",
    },
  ];

  const filteredLogs = callLogs.filter((log) => {
    const matchesSearch =
      log.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.provider.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || log.status.toLowerCase() === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">Call Logs</h3>
          <div className="flex space-x-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search patients or providers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Status</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
            </select>
          </div>
        </div>
      </div>

      <CallLogTable logs={filteredLogs} />
    </div>
  );
};

export default CallLogs;
