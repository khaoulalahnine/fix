import create from 'zustand';
import api from '../services/axios';

export const useAuthStore = create((set) => ({
  user: null,
  loading: false,
  error: null,

  setUser: (user) => set({ user }),
  setLoading: (v) => set({ loading: v }),
  setError: (err) => set({ error: err }),

  fetchUser: async () => {
    set({ loading: true, error: null });
    try {
      await api.get('/sanctum/csrf-cookie');
      const res = await api.get('/user');
      set({ user: res.data, loading: false });
      return res.data;
    } catch (err) {
      set({ user: null, loading: false });
      return null;
    }
  },

  login: async (credentials) => {
    set({ loading: true, error: null });
    try {
      await api.get('/sanctum/csrf-cookie');
      await api.post('/login', credentials);
      const res = await api.get('/user');
      set({ user: res.data, loading: false });
      return res.data;
    } catch (err) {
      const payload = err.response?.data || { message: err.message };
      set({ error: payload, loading: false });
      throw payload;
    }
  },

  register: async (data) => {
    set({ loading: true, error: null });
    try {
      await api.get('/sanctum/csrf-cookie');
      await api.post('/register', data);
      const res = await api.get('/user');
      set({ user: res.data, loading: false });
      return res.data;
    } catch (err) {
      const payload = err.response?.data || { message: err.message };
      set({ error: payload, loading: false });
      throw payload;
    }
  },

  logout: async () => {
    set({ loading: true, error: null });
    try {
      await api.post('/logout');
      set({ user: null, loading: false });
    } catch (err) {
      const payload = err.response?.data || { message: err.message };
      set({ error: payload, loading: false });
      throw payload;
    }
  },
}));
