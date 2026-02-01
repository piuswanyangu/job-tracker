import api from "../api/axios";

export const getJobs = () => api.get("/applications/");
export const createJob = (data) => api.post("/applications/", data);
export const updateJob = (id, data) => api.patch(`/applications/${id}/`, data);
export const deleteJob = (id) => api.delete(`/applications/${id}/`);
export const getAnalytics = () => api.get("/applications/analytics/");
