import { api } from './api';

export interface Application {
  id: number;
  company: string;
  role: string;
  status: 'Applied' | 'Interviewed' | 'Offer' | 'Rejected';
  date: string;
}

export interface Analytics {
  total: number;
  applied: number;
  interviewed: number;
  offer: number;
  rejected: number;
}

export const applicationsService = {
  // Get all applications
  getApplications: async (): Promise<Application[]> => {
    const response = await api.get('/applications/applications/');
    return response.data;
  },

  // Create new application
  createApplication: async (data: Omit<Application, 'id'>) => {
    const response = await api.post('/applications/applications/', data);
    return response.data;
  },

  // Update application
  updateApplication: async (id: number, data: Partial<Application>) => {
    const response = await api.put(`/applications/applications/${id}/`, data);
    return response.data;
  },

  // Delete application
  deleteApplication: async (id: number) => {
    await api.delete(`/applications/applications/${id}/`);
  },

  // Get analytics
  getAnalytics: async (): Promise<Analytics> => {
    const response = await api.get('/applications/analytics/');
    return response.data;
  },
};