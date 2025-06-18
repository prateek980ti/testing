import React from "react";

type UploadStatus = "idle" | "uploading" | "failed" | "complete";

type Props = {
  status: UploadStatus;
  progress: number;
  onBrowse: () => void;
  onCancel: () => void;
  onRetry: () => void;
  onDone: () => void;
};

const UploadCard: React.FC<Props> = ({
  status,
  progress,
  onBrowse,
  onCancel,
  onRetry,
  onDone,
}) => {
  return (
    <div className="w-[372px] h-[136px] bg-BG-tertiary rounded-2xl border-2 border-dashed border-backgroundTertiary p-4 flex flex-col justify-center  text-sm text-primaryB items-center">
      {status === "idle" && (
        <>
          <p className="font-bold text-contentSecondary mb-3 text-">
            Drop files here to upload…
          </p>

          <button
            onClick={onBrowse}
            className=" bg-backgroundTertiary flex items-center text-center justify-center  rounded-3xl px-10 py-0 flex-col h-[36px] w-[98px]"
          >
            <div className="  text-[14px] font-medium leading-[16px]  w-[103px]  text-contentPrimary ">
              Browse files
            </div>
          </button>
        </>
      )}

      {status === "uploading" && (
        <>
          <div className="w-[292px]  flex gap-[14px]  flex-col  justify-center  items-center ">
            <div
              className="h-[4px] flex items-center self-stretch  bg-borderAccent"
              style={{ width: `${progress}%` }}

            />
            <span className="text-primaryB leading-[20px] font-medium not-italic text-[16px]">{progress}% complete</span>
          </div>
            
            <button
              onClick={onCancel}
              className=" bg-backgroundTertiary flex items-center text-center justify-center  rounded-4xl px-10 py-0 flex-col h-[36px] w-[98px] mt-4"
            >
              <div className="  text-[14px] font-medium leading-[16px]  w-[103px]  text-contentPrimary ">
                Cancel
              </div>
            </button>
          
        </>
      )}

      {status === "failed" && (
        <>
          <div className="w-[292px] flex gap-[15px] flex-col justify-center items-center">
            <div className="h-[4px]  bg-contentTertiary w-1/2" />
            <span className="text-primaryB leading-[20px] font-medium not-italic text-[16px]">Upload failed</span>
          </div>
            <button
              onClick={onRetry}
              className=" bg-backgroundTertiary flex items-center text-center justify-center  rounded-2xl px-10 py-0 flex-col h-[36px] w-[70px]"
            >
              <div className="  text-[14px] font-medium leading-[16px] w-[70px] text-contentPrimary  mt-[10px]">
                Try again
              </div>
            </button>
          
        </>
      )}

      {status === "complete" && (
        <>
          <div className="w-[292px] flex gap-[17px] flex-col justify-center items-center">
            <div className="h-[4px]  bg-purple w-full" />
            <span className="text-primaryB leading-[20px] font-medium not-italic text-[16px] mb-4">Upload complete</span>
          </div>
            <button
              onClick={onDone}
              className=" bg-backgroundTertiary flex items-center text-center justify-center  rounded-2xl px-4 py-0 flex-col h-[36px] w-[70px]"
            >
              <div className="  text-[14px] font-medium leading-[16px] w-[19px] text-contentPrimary mt-[10px] ">
                OK
              </div>
            </button>
          
        </>
      )}
    </div>
  );
};

export default UploadCard;
