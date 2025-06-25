import React from "react";
import { twMerge } from "tailwind-merge";

export enum Status {
  ONLINE = "online",
  OFFLINE = "offline",
}

interface ProfileCardProps {
  username?: string;
  email?: string;
  avatar?: string;
  status?: Status;
}
 
const ProfileCard: React.FC<ProfileCardProps> = ({
  username = "Brooklyn Simmons",
  email = "brooklyn@simmons.com",
  avatar = "src/assets/Icons/Sidebar/usericon.svg",
  status = Status.OFFLINE,
}) => {
  const statusDotClass = twMerge(
    "absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full ",
    status === Status.ONLINE ? "bg-green-400" : "bg-red-500"
  );

  return (
    
    <div className="flex items-center justify-between w-full max-w-[276px] shadow-2xl border border-BG-tertiary/80 py-4 bg-[#333]  p-2 rounded-lg">
      {/* Avatar + Status */}
      <div className="relative w-12 h-12 shrink-0 mr-3 sm:mr-4">
        <img
          src={avatar}
          alt="User Avatar"
          className="w-12 h-12 object-cover rounded-full "
        />
        <span className={statusDotClass}></span>
      </div>

      {/* User Info */}
      <div className="flex flex-col text-left w-[10vw] overflow-hidden">
        <span className="text-white font-medium text-sm sm:text-base">
          {username}
        </span>
        <span className="text-gray-400 text-xs sm:text-sm">{email}</span>
      </div>

      {/* Dots Icon */}
      <div className="text-gray-400 hover:text-white cursor-pointer ml-3 sm:ml-4 shrink-0">
        <img src="src/assets/Icons/Sidebar/verticalDots.svg" alt="" />
      </div>
    </div>
  );
};

export default ProfileCard;
