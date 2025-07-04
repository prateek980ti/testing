import React, { useState, useRef, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

export const UploadStatus = {
  Idle: 0,
  Uploading: 1,
  Failed: 2,
  Complete: 3,
} as const;
export type UploadStatus = typeof UploadStatus[keyof typeof UploadStatus];

export const UploadCardVariant = {
  Document: "document",
  Media: "media",
  Minimal: "minimal",
} as const;
export type UploadCardVariant = typeof UploadCardVariant[keyof typeof UploadCardVariant];

export const UploadCardSize = {
  Sm: "sm",
  Md: "md",
  Lg: "lg",
  Xl: "xl",
} as const;
export type UploadCardSize = typeof UploadCardSize[keyof typeof UploadCardSize];

interface UploadCardProps {
  variant?: UploadCardVariant;
  className?: string;
  size?: UploadCardSize;
  buttonLabel?: string;
}

const variantClass: Record<UploadCardVariant, string> = {
  [UploadCardVariant.Document]: ' bg-borderbg border-dashed border-contentSecondary p-4 ',
  [UploadCardVariant.Media]: ' px-6 py-6 border-none bg-borderbg rounded-xl ',
  [UploadCardVariant.Minimal]: ' bg-borderbg border-dashed border-contentSecondary px-3 py-2 rounded-xl',
};

const sizeClass: Record<UploadCardSize, string> = {
  [UploadCardSize.Sm]: 'w-[250px] h-[100px]',
  [UploadCardSize.Md]: 'w-[372px] h-[136px]',
  [UploadCardSize.Lg]: 'w-[510px] h-[120px]',
  [UploadCardSize.Xl]: 'w-[600px] h-[220px]',
};

const UploadCard: React.FC<UploadCardProps> = ({
  variant = UploadCardVariant.Document,
  className,
  size = UploadCardSize.Md,
  buttonLabel = 'Browse files',
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<UploadStatus>(UploadStatus.Idle);
  const [progress, setProgress] = useState<number>(0);

  const handleBrowse = () => inputRef.current?.click();
  const handleCancel = () => {
    setStatus(UploadStatus.Idle);
    setProgress(0);
  };
  const handleRetry = () => inputRef.current?.click();
  const handleDone = () => {
    setStatus(UploadStatus.Idle);
    setProgress(0);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) simulateUpload();
  };

  const simulateUpload = () => {
    setStatus(UploadStatus.Uploading);
    setProgress(0);
    let percent = 0;
    const interval = setInterval(() => {
      percent += 10;
      setProgress(percent);
      if (percent >= 100) {
        clearInterval(interval);
        const isSuccess = Math.random() > 0.2;
        setStatus(isSuccess ? UploadStatus.Complete : UploadStatus.Failed);
      }
    }, 300);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && status === UploadStatus.Complete) {
        handleDone();
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [status]);

  const baseClass = 'border-2 flex flex-col justify-center items-center text-sm text-primaryB transition-all duration-300';

  const renderIdleContent = () => {
    switch (variant) {
      case UploadCardVariant.Media:
        return (
          <>
            <img src="/images/UploadFile.svg" alt="upload" className="w-6 h-6 mb-2" />
            <p className="mb-2 text-[14px] text-contentTertiary font-poppins">
              <span className="underline">Link</span> or drag and drop
            </p>
            <button
              onClick={handleBrowse}
              className="px-4 py-2 text-[12px] leading-[16px] rounded-full text-primaryB border-primaryB/30 border-2 bg-primaryA/10"
            >
              {buttonLabel}
            </button>
          </>
        );
      case UploadCardVariant.Minimal:
        return (
          <>
            <p className="mb-4 text-[14px] text-contentTertiary font-poppins">Drop files here to upload…</p>
            <button
              onClick={handleBrowse}
              className="px-4 py-2 text-[12px] leading-[16px] rounded-full text-primaryB border-primaryB/30 border-2 bg-primaryA/10"
            >
              {buttonLabel}
            </button>
          </>
        );
      default:
        return (
          <>
            <p className="mb-2 text-[14px] text-contentTertiary font-poppins">
              Drop files here to upload…
            </p>
            <button
              onClick={handleBrowse}
              className="bg-backgroundTertiary rounded-3xl h-[36px] w-[120px] flex items-center justify-center"
            >
              <span className="text-[14px] font-medium text-contentPrimary">{buttonLabel}</span>
            </button>
          </>
        );
    }
  };

  return (
    <div className={twMerge(baseClass, variantClass[variant], sizeClass[size], className)}>
      <input ref={inputRef} onChange={handleFileChange} type="file" className="hidden" />

      {status === UploadStatus.Idle && renderIdleContent()}

      {status === UploadStatus.Uploading && (
        <>
          <div className="w-[292px] flex flex-col gap-[14px] justify-center items-center">
            <div className="h-[4px] bg-borderAccent" style={{ width: `${progress}%` }} />
            <span className="text-primaryB font-medium text-[16px]">{progress}% complete</span>
          </div>
          <button
            onClick={handleCancel}
            className="mt-4 bg-backgroundTertiary rounded-3xl h-[36px] w-[100px] flex items-center justify-center"
          >
            <span className="text-[14px] font-medium p-3 text-contentPrimary">Cancel</span>
          </button>
        </>
      )}

      {status === UploadStatus.Failed && (
        <>
          <div className="w-[292px] flex flex-col gap-[14px] justify-center items-center">
            <div className="h-[4px] bg-contentTertiary w-1/2" />
            <span className="text-primaryB font-medium text-[16px]">Upload failed</span>
          </div>
          <button
            onClick={handleRetry}
            className="mt-4 bg-backgroundTertiary rounded-3xl h-[36px] w-[100px] flex items-center justify-center"
          >
            <span className="text-[14px] p-3 font-medium text-contentPrimary">Try again</span>
          </button>
        </>
      )}

      {status === UploadStatus.Complete && (
        <>
          <div className="w-[292px] flex flex-col gap-[14px] justify-center items-center">
            <div className="h-[4px] bg-accent w-[292px]" />
            <span className="text-primaryB font-normal text-[16px]">Upload complete</span>
          </div>
          <button
            onClick={handleDone}
            className="mt-4 bg-backgroundTertiary rounded-3xl h-[36px] w-[70px] flex items-center justify-center"
          >
            <span className="text-[14px] font-medium p-3 text-contentPrimary">OK</span>
          </button>
        </>
      )}
    </div>
  );
};

export default UploadCard;
