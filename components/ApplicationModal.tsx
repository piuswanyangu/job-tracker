"use client";

import { useState, useEffect } from "react";

type Status = "Applied" | "Interviewed" | "Offer" | "Rejected";

type Props = {
  open: boolean;
  onClose: () => void;
  onSave: (data: { company: string; role: string; status: Status }) => void;
  initialData?: { company: string; role: string; status: Status };
};

export default function ApplicationModal({
  open,
  onClose,
  onSave,
  initialData,
}: Props) {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState<Status>("Applied");

  useEffect(() => {
    if (initialData) {
      setCompany(initialData.company);
      setRole(initialData.role);
      setStatus(initialData.status);
    } else {
      setCompany("");
      setRole("");
      setStatus("Applied");
    }
  }, [initialData]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[90%] max-w-md p-6">
        <h2 className="text-xl font-bold mb-4">
          {initialData ? "Edit Application" : "Add Application"}
        </h2>

        <input
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="border p-2 rounded w-full mb-3"
        />
        <input
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border p-2 rounded w-full mb-3"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as Status)}
          className="border p-2 rounded w-full mb-4"
        >
          <option>Applied</option>
          <option>Interviewed</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onSave({ company, role, status });
              onClose();
            }}
            className="px-4 py-2 bg-black text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
