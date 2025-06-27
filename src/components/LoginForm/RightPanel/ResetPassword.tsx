

import { useState } from 'react';
import { InputField, InputSize, IconStatus, InputType } from '../../utils/InputField';
import { Button } from '../../utils/MainButton/Button';
import { useResetPassword } from '../../../hooks/useResetPassword';

type Props = {
  onNext: () => void;
};

const ResetPassword: React.FC<Props> = ({ onNext }) => {
  const [email, setEmail] = useState('');
  const { sendResetEmail, loading, error } = useResetPassword();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      alert('Please enter your email');
      return;
    }

    try {
      await sendResetEmail(email);
      alert('OTP sent to your email');
      onNext();
    } catch {
      alert(error);
    }
  };

  return (
    <div className="w-full max-w-[428px] border border-borderInverseOpaque px-6 py-2 rounded-xl bg-backgroundInverseSecodnary/75">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-center gap-4 h-[52px]">
          <img src="/images/logo/logo.png" alt="logo" className="w-8 h-8" />
          <h1 className="text-2xl font-bold text-primaryB">Voicera</h1>
        </div>

        <h2 className="text-xl font-bold">Reset your password</h2>
        <p className="text-sm text-primaryB">
          We'll send reset instructions to your registered email.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <InputField
            label="Your Email ID here"
            type={InputType.EMAIL}
            size={InputSize.MD}
            iconStatus={email ? IconStatus.COMPLETE : undefined}
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button variant="primary" size="md" className="w-[380px] mt-6" disabled={loading}>
            {loading ? 'Sending...' : 'Next'}
          </Button>
        </form>

        <div className="text-center underline">
          <a href="#">Return to Log in</a>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
