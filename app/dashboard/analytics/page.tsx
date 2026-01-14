"use client";

import { useApplications } from "@/context/ApplicationsContext";

export default function AnalyticsPage() {
  const { applications } = useApplications();

  const counts = {
    Applied: applications.filter((a) => a.status === "Applied").length,
    Interviewed: applications.filter((a) => a.status === "Interviewed").length,
    Offer: applications.filter((a) => a.status === "Offer").length,
    Rejected: applications.filter((a) => a.status === "Rejected").length,
  };

  const max = Math.max(...Object.values(counts), 1);

  return (
    <div>
      <h1 className="text-3xl font-bold mt-10 mb-6">Analytics</h1>
      <div className="grid gap-4 max-w-lg">
        {Object.entries(counts).map(([status, value]) => (
          <div key={status}>
            <div className="flex justify-between mb-1">
              <span className="font-medium">{status}</span>
              <span>{value}</span>
            </div>
            <div className="w-full bg-gray-200 rounded h-3">
              <div
                className="h-3 rounded bg-black transition-all duration-300"
                style={{ width: `${(value / max) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
