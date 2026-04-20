import { api } from './api';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password2: string;
}

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

export const authService = {
  // Register new user
  register: async (credentials: RegisterCredentials) => {
    const response = await api.post('/auth/register/', credentials);
    return response.data;
  },

  // Login user
  login: async (credentials: LoginCredentials) => {
    const response = await api.post('/auth/login/', credentials);
    if (response.data.access) {
      localStorage.setItem('access', response.data.access);
    }
    if (response.data.refresh) {
      localStorage.setItem('refresh', response.data.refresh);
    }
    return response.data;
  },

  // Get current user
  getCurrentUser: async (): Promise<User> => {
    const response = await api.get('/auth/me/');
    return response.data;
  },

  // Logout
  logout: () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    window.location.href = '/login';
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    return !!localStorage.getItem('access');
  },
};
