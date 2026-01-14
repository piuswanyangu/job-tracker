"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Status = "Applied" | "Interviewed" | "Offer" | "Rejected";

export type JobApplication = {
  id: number;
  company: string;
  role: string;
  status: Status;
  date: string;
};

type ApplicationsContextType = {
  applications: JobApplication[];
  setApplications: React.Dispatch<React.SetStateAction<JobApplication[]>>;
};

const ApplicationsContext = createContext<ApplicationsContextType | undefined>(
  undefined
);

export const ApplicationsProvider = ({ children }: { children: ReactNode }) => {
  const [applications, setApplications] = useState<JobApplication[]>([
    { id: 1, company: "Google", role: "Frontend Developer", status: "Applied", date: "2025-01-10" },
    { id: 2, company: "Meta", role: "Backend Engineer", status: "Interviewed", date: "2025-01-12" },
  ]);

  return (
    <ApplicationsContext.Provider value={{ applications, setApplications }}>
      {children}
    </ApplicationsContext.Provider>
  );
};

export const useApplications = () => {
  const context = useContext(ApplicationsContext);
  if (!context) throw new Error("useApplications must be used within ApplicationsProvider");
  return context;
};
