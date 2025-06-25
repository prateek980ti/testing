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
  collapsed: Boolean;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  username = "Brooklyn Simmons",
  email = "brooklyn@simmons.com",
  avatar = "src/assets/Icons/Sidebar/usericon.svg",
  status = Status.OFFLINE,
  collapsed,
}) => {
  const statusDotClass = twMerge(
    "absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full",
    status === Status.ONLINE ? "bg-green-400" : "bg-red-500"
  );

  return (
    <>
      {collapsed ? (
        <div className="relative w-12 h-12">
          <img
            src={avatar}
            alt="Avatar"
            className="w-full h-full rounded-full object-cover"
          />
          <span className={statusDotClass}></span>
        </div>
      ) : (
        <div className="flex items-center justify-between bg-[#2D2D2F] text-white p-3 rounded-xl shadow-lg w-full">
          {/* Avatar */}
          <div className="relative w-12 h-12">
            <img
              src={avatar}
              alt="Avatar"
              className="w-full h-full rounded-full object-cover"
            />
            <span className={statusDotClass}></span>
          </div>

          {/* Info */}
          <div className="flex flex-col overflow-hidden mx-3">
            <span className="text-sm font-semibold truncate">{username}</span>
            <span className="text-xs text-gray-400 truncate">{email}</span>
          </div>

          {/* Dots */}
          <img
            src="src/assets/Icons/Sidebar/verticalDots.svg"
            alt="Menu"
            className="w-4 h-4 cursor-pointer"
          />
        </div>
      )}
    </>
  );
};

export default ProfileCard;
