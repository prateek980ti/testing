import { useState } from 'react';
import axios from 'axios';
export const useResetPassword  = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendResetEmail = async (email: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.post('http://18.171.246.223:3004/auth/forgot-password', { email });
      return res.data;
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to send reset email');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { sendResetEmail, loading, error };
};
