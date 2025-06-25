import { useState } from "react";
import SidebarBottomIcons from "./SidebarBottomIcons";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);

  return (
    <div
      className={`bg-backgroundInverseSecondary text-white transition-all duration-300 flex flex-col justify-between ${
        collapsed ? "w-20 items-center" : "w-64"
      } h-screen`}
    >
      {/* Top section */}
      <div className="flex flex-col justify-center gap-[7px] p-4 w-full">
        {/* Logo + Toggle */}
        <div className={`flex items-center ${!collapsed?'justify-between':"justify-center"} w-full`}>
          {!collapsed && (
            <div className="flex items-center gap-3">
              <img src="/images/logo/logo.svg" alt="Voicera" className="w-8 h-8" />
              <p className="text-xl font-bold">Voicera</p>
            </div>
          )}
          <button onClick={toggleSidebar}>
            <img src="src/assets/Icons/Sidebar/menu.svg" alt="menu" className="w-6  cursor-pointer h-6" />
          </button>
        </div>

        {/* Search */}
        <div
          className={`bg-[#333333] flex items-center gap-2 px-3 mt-1 py-1 rounded-md ${
            collapsed ? "justify-center" : ""
          }`}
        >
          <img src="src/assets/Icons/Sidebar/search.svg" alt="search" className="w-5 h-5" />
          {!collapsed && (
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-white outline-none w-full placeholder-gray-400"
            />
          )}
        </div>

        {/* Navigation buttons */}
        <div className="flex flex-col gap-2 w-full">
          <button className="flex items-center gap-3 hover:bg-[#444] px-3 py-2 rounded-full transition w-full">
            <img src="src/assets/Icons/Sidebar/home.svg" alt="Home" className="w-5 h-5" />
            {!collapsed && <span className="text-sm text-gray-300">Home</span>}
          </button>
          <button className="flex items-center gap-3 hover:bg-[#444] px-3 py-2 rounded-full transition w-full">
            <img src="src/assets/Icons/Sidebar/dashboard.svg" alt="Dashboard" className="w-5 h-5" />
            {!collapsed && <span className="text-sm text-gray-300">Dashboard</span>}
          </button>
          <button className="flex items-center gap-3 hover:bg-[#444] px-3 py-2 rounded-full transition w-full">
            <img src="src/assets/Icons/Sidebar/campaign.svg" alt="Campaign" className="w-5 h-5" />
            {!collapsed && <span className="text-sm text-gray-300">Campaign</span>}
          </button>
          <button className="flex items-center gap-3 hover:bg-[#444] px-3 py-2 rounded-full transition w-full">
            <img src="src/assets/Icons/Sidebar/task.svg" alt="Tasks" className="w-5 h-5" />
            {!collapsed && <span className="text-sm text-gray-300">Tasks</span>}
          </button>
          <button className="flex items-center gap-3 hover:bg-[#444] px-3 py-2 rounded-full transition w-full">
            <img src="src/assets/Icons/Sidebar/reporting.svg" alt="Reporting" className="w-5 h-5" />
            {!collapsed && <span className="text-sm text-gray-300">Reporting</span>}
          </button>
        </div>
      </div>

      {/* Bottom section (Notification, Support, Settings, Profile) */}
      <div className="p-4 w-full">
        <SidebarBottomIcons collapsed={collapsed} notificationCount={12} />
      </div>
    </div>
  );
}

export default Sidebar;
