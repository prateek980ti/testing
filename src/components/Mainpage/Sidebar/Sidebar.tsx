import { useState } from "react";
import SidebarBottomIcons from "./SidebarBottomIcons";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);

  return (
    <div
      className={`bg-backgroundInverseSecondary text-white transition-all duration-300 flex flex-col justify-between ${collapsed ? "w-20 items-center" : "w-64"
        } h-screen`}
    >
      {/* Top section */}
      <div className="flex flex-col justify-center gap-4 p-4 w-full">
        {/* Logo + Toggle */}
        <div
          className={`flex items-center ${!collapsed ? "justify-between" : "justify-center"
            } w-full`}
        >
          {!collapsed && (
            <div className="flex items-center gap-3">
              <img
                src="/images/logo/logo.svg"
                alt="Voicera"
                className="w-8 h-8"
              />
              <p className="text-xl font-bold">Voicera</p>
            </div>
          )}
          <button onClick={toggleSidebar} className={`group relative w-10 h-10 cursor-pointer ${!collapsed ? "flex items-center justify-center" : "flex justify-center items-center"}`}>
            {/* Shown when NOT collapsed */}
            {!collapsed && (
              <div className="hover:bg-[#444] h-10 w-10 rounded-sm flex items-center justify-center">

                <img
                  src="/assets/Icons/Sidebar/menu.svg"
                  alt="menu"
                  className="w-6 h-6"
                />
              </div>
            )}

            {/* Shown when collapsed but NOT hovered */}
            {collapsed && (
              <img
                src="/images/logo/logo.svg"
                alt="menu-hover"
                className="w-6 h-6 transition-opacity duration-200 opacity-100 group-hover:opacity-0"
              />
            )}

            {/* Shown when collapsed AND hovered */}
            {collapsed && (
              <img
                src="/assets/Icons/Sidebar/menu.svg"
                alt="menu"
                className="w-6 h-6 absolute transition-opacity duration-200 opacity-0 group-hover:opacity-100"
              />
            )}
          </button>
        </div>

        {/* Search */}
        <div
          className={`bg-[#333333] flex items-center gap-2 px-3 mt-1 py-1.5 rounded-md ${collapsed ? "justify-center" : ""
            }`}
        >
          <img
            src="/assets/Icons/Sidebar/search.svg"
            alt="search"
            className="w-5 h-5"
          />
          {!collapsed && (
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-white outline-none w-full placeholder-gray-400"
            />
          )}
        </div>

        {/* Navigation buttons */}
        <div className="flex flex-col gap-1 w-full">
          <button className="flex cursor-pointer justify-center items-center p-[2px] h-9 active:bg-gradient-to-tl from-accent to-primaryC rounded-[3rem] hover:bg-[#444]">
            <div className="flex items-center gap-3 rounded-[2.8rem] w-full h-full active:bg-black px-3">
              <img src="/assets/Icons/Sidebar/home.svg" alt="" />
              {!collapsed && <p className="text-gray-300 text-sm">Home</p>}
            </div>
          </button>
          <button className="flex cursor-pointer justify-center items-center p-[2px] h-9 active:bg-gradient-to-tl from-accent to-primaryC rounded-[3rem] hover:bg-[#444]">
            <div className="flex items-center gap-3 rounded-[2.8rem] w-full h-full active:bg-black px-3">
              <img src="/assets/Icons/Sidebar/dashboard.svg" alt="" />
              {!collapsed && <p className="text-gray-300 text-sm">Dashboard</p>}
            </div>
          </button>
          <button className="flex cursor-pointer justify-center items-center p-[2px] h-9 active:bg-gradient-to-tl from-accent to-primaryC rounded-[3rem] hover:bg-[#444]">
            <div className="flex items-center gap-3 rounded-[2.8rem] w-full h-full active:bg-black px-3">
              <img src="/assets/Icons/Sidebar/campaign.svg" alt="" />
              {!collapsed && <p className="text-gray-300 text-sm">Campaign</p>}
            </div>
          </button>
          <button className="flex cursor-pointer justify-center items-center p-[2px] h-9 active:bg-gradient-to-tl from-accent to-primaryC rounded-[3rem] hover:bg-[#444]">
            <div className="flex items-center gap-3 rounded-[2.8rem] w-full h-full active:bg-black px-3">
              <img src="/assets/Icons/Sidebar/task.svg" alt="" />
              {!collapsed && <p className="text-gray-300 text-sm">Task</p>}
            </div>
          </button>
          <button className="flex cursor-pointer justify-center items-center p-[2px] h-9 active:bg-gradient-to-tl from-accent to-primaryC rounded-[3rem] hover:bg-[#444]">
            <div className="flex items-center gap-3 rounded-[2.8rem] w-full h-full active:bg-black px-3">
              <img src="/assets/Icons/Sidebar/reporting.svg" alt="" />
              {!collapsed && <p className="text-gray-300 text-sm">Reporting</p>}
            </div>
          </button>
        </div>
      </div>

      {/* Bottom section (Notification, Support, Settings, Profile) */}
      <div className="px-4 py-2 w-full">
        <SidebarBottomIcons collapsed={collapsed} notificationCount={12} />
      </div>
    </div>
  );
}

export default Sidebar;
