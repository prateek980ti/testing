import ProfileCard, { Status } from "./ProfileCard";

interface SidebarBottomIconsProps {
  collapsed: boolean;
  notificationCount: number;
}

function SidebarBottomIcons({
  collapsed,
  notificationCount,
}: SidebarBottomIconsProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {/* ICON LIST */}
      <div className="flex flex-col from-primaryC to-accent gap-1 w-full">
        {/* Notification */}
        <button
          
          className={`flex items-center ${
            collapsed ? "justify-center" : "justify-between"
          } px-3 py-2 rounded-full hover:bg-[#444] transition w-full`}
        >
          <div className="flex items-center gap-2">
            <img
              src="src/assets/Icons/Sidebar/bell.svg"
              alt="Notifications"
              className="w-5 h-5"
            />
            {!collapsed && (
              <span className="text-sm text-gray-300">Notifications</span>
            )}
          </div>
          {!collapsed && (
            <span className="p-[1.5px] bg-gradient-to-bl from-primaryC to-accent rounded-[10px] inline-block">
              <span className="bg-backgroundInverseSecondary text-white text-xs font-semibold px-3 py-[2px] rounded-[8px] flex items-center justify-center min-h-[20px]">
                {notificationCount}
              </span>
            </span>
          )}
        </button>

        {/* Support */}
        <button
          className={`flex items-center ${
            collapsed ? "justify-center" : "justify-start"
          } px-3 py-2 rounded-full hover:bg-[#444] transition w-full gap-2`}
        >
          <img
            src="src/assets/Icons/Sidebar/support.svg"
            alt="Support"
            className="w-5 h-5"
          />
          {!collapsed && <span className="text-sm text-gray-300">Support</span>}
        </button>

        {/* Settings */}
        <button
          className={`flex items-center ${
            collapsed ? "justify-center" : "justify-start"
          } px-3 py-2 rounded-full hover:bg-[#444] transition w-full gap-2`}
        >
          <img
            src="src/assets/Icons/Sidebar/setting.svg"
            alt="Settings"
            className="w-5 h-5"
          />
          {!collapsed && (
            <span className="text-sm text-gray-300">Settings</span>
          )}
        </button>
      </div>
      {/* Profile Card */}
      <div className="pt-4 w-full">
        <ProfileCard
          collapsed={collapsed}
          username="Frisson Devhub"
          email="brooklyn@simmons.com"
          status={Status.ONLINE}
        />
      </div>
    </div>
  );
}

export default SidebarBottomIcons;
