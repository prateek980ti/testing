import { useState } from 'react';
import axios from 'axios';

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.post('http://18.171.246.223:3004/auth/login', {
        email,
        password,
      });

      const token = res.data?.data?.access_token;
      localStorage.setItem('authToken', token);
      return token;
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Login failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};
