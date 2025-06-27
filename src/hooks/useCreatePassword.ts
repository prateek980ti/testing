import { useState } from 'react';
import axios from 'axios';

export const useCreatePassword = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const resetPassword = async (
    email: string,
    otp: string,
    newPassword: string
  ) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.post('http://18.171.246.223:3004/auth/reset-password', {
        email,
        otp,
        newPassword,
      });
      return res.data;
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to reset password');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { resetPassword, loading, error };
};