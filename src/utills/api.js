import axios from 'axios';

const baseURL = 'development' === 'development'
  ?'http://localhost:8000':
  'http://16.171.138.72:8000';

const api = axios.create({
  baseURL,
});

export const registerUser = async (formData) => {
    try {
      const response = await api.post('/api/registration', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  };

  export const loginUser = async (formData) => {
    try {
      const response = await api.post('/api/login', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  };

  export const changeUserPassword = async (formData) => {
    try {
      const response = await api.post('/api/change-user-password', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  };
  
export default api;
