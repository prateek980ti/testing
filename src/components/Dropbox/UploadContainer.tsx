import React, { useRef, useState } from 'react';
import UploadCard from './UploadCard';

const UploadContainer: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<'idle' | 'uploading' | 'failed' | 'complete'>('idle');
  const [progress, setProgress] = useState(0);

  const simulateUpload = (file:File) => {
    setStatus('uploading');
    setProgress(0);
    let percent = 0;

    const interval = setInterval(() => {
      percent += 10;
      setProgress(percent);
      if (percent >= 100) {
        clearInterval(interval);
        const isSuccess = Math.random() > 0.2;
        setStatus(isSuccess ? 'complete' : 'failed');
      }
    }, 300);;;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) simulateUpload(file);
  };

  return (
    <div className="min-h-screen  flex justify-center items-center">
      <input
        type="file"
        ref={inputRef}
        className="hidden"
        
        onChange={handleFileChange}
      />
      <UploadCard
        status={status}
        progress={progress}
        onBrowse={() => inputRef.current?.click()}
        onCancel={() => {
          setStatus('idle');
          setProgress(0);
        }}
        onRetry={() => inputRef.current?.click()}
        onDone={() => {
          setStatus('idle');
          setProgress(0);
        }}
      />
    </div>
  );
};

export default UploadContainer;
