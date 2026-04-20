import { api } from './api';

export interface Application {
  id: number;
  company: string;
  role: string;
  status: 'Applied' | 'Interviewed' | 'Offer' | 'Rejected';
  date: string;
}

export interface Analytics {
  total_applications: number;
  applied: number;
  interviewed: number;
  offer: number;
  rejected: number;
}

type ApiApplication = {
  id: number;
  company_name: string;
  job_title: string;
  status: 'applied' | 'interview' | 'offer' | 'rejected';
  applied_at: string;
};

const statusFromApi: Record<ApiApplication['status'], Application['status']> = {
  applied: 'Applied',
  interview: 'Interviewed',
  offer: 'Offer',
  rejected: 'Rejected',
};

const statusToApi: Record<Application['status'], ApiApplication['status']> = {
  Applied: 'applied',
  Interviewed: 'interview',
  Offer: 'offer',
  Rejected: 'rejected',
};

function mapApplication(item: ApiApplication): Application {
  return {
    id: item.id,
    company: item.company_name,
    role: item.job_title,
    status: statusFromApi[item.status],
    date: item.applied_at?.slice(0, 10) ?? '',
  };
}

function toApiPayload(data: Partial<Omit<Application, 'id'>>) {
  return {
    ...(data.company && { company_name: data.company }),
    ...(data.role && { job_title: data.role }),
    ...(data.status && { status: statusToApi[data.status] }),
  };
}

export const applicationsService = {
  // Get all applications
  getApplications: async (): Promise<Application[]> => {
    const response = await api.get('/applications/applications/');
    return response.data.map(mapApplication);
  },

  // Create new application
  createApplication: async (data: Omit<Application, 'id'>) => {
    const response = await api.post('/applications/applications/', toApiPayload(data));
    return mapApplication(response.data);
  },

  // Update application
  updateApplication: async (id: number, data: Partial<Application>) => {
    const response = await api.patch(`/applications/applications/${id}/`, toApiPayload(data));
    return mapApplication(response.data);
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
