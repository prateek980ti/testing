import React, { useState } from "react";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);

  return (
    <>
      <div
        className={`bg-backgroundInverseSecondary h-screen text-white transition-all duration-300 ${
          collapsed ? "w-20 flex justify-center" : "w-64"
        }`}
      >
        <div className="flex flex-col p-2 gap-4 pt-4">
          <div
            className={`flex ${
              collapsed ? "justify-center" : "justify-between"
            }`}
          >
            <div className="flex gap-3">
              {!collapsed && <img src="/images/logo/logo.svg" alt="" />}
              {!collapsed && <p className="text-[1.5rem] font-bold">Voicera</p>}
            </div>
            <button onClick={toggleSidebar} className="cursor-pointer">
              <img src="src/assets/Icons/Sidebar/menu.svg" alt="" />
            </button>
          </div>
          <div
            className={`bg-[#333333] flex gap-2 p-2 px-2 rounded-md ${
              collapsed ? "justify-center" : ""
            }`}
          >
            <img src="src/assets/Icons/Sidebar/search.svg" alt="" />
            {!collapsed && (
              <input
                type="text"
                placeholder="Search"
                className="outline-none"
              />
            )}
          </div>
          <div className=" flex flex-col gap-1">
            <button className="flex cursor-pointer justify-center items-center p-[3px] h-12 hover:bg-borderInverseOpaque active:bg-gradient-to-tl from-accent to-primaryC rounded-[3rem]">
              <div className="flex items-center gap-2 rounded-[2.8rem] w-full h-full active:bg-black px-3">
                <img src="src/assets/Icons/Sidebar/home.svg" alt="" />
                {!collapsed && <p className="text-contentTertiary">Home</p>}
              </div>
            </button>
            <button className="flex cursor-pointer justify-center items-center p-[3px] h-12 active:bg-gradient-to-tl from-accent to-primaryC rounded-[3rem]">
              <div className="flex items-center gap-2 rounded-[2.8rem] w-full h-full active:bg-black px-3">
                <img src="src/assets/Icons/Sidebar/dashboard.svg" alt="" />
                {!collapsed && (
                  <p className="text-contentTertiary">Dashboard</p>
                )}
              </div>
            </button>
            <button className="flex cursor-pointer justify-center items-center p-[3px] h-12 active:bg-gradient-to-tl from-accent to-primaryC rounded-[3rem]">
              <div className="flex items-center gap-2 rounded-[2.8rem] w-full h-full active:bg-black px-3">
                <img src="src/assets/Icons/Sidebar/campaign.svg" alt="" />
                {!collapsed && <p className="text-contentTertiary">Campaign</p>}
              </div>
            </button>
            <button className="flex cursor-pointer justify-center items-center p-[3px] h-12 active:bg-gradient-to-tl from-accent to-primaryC rounded-[3rem]">
              <div className="flex items-center gap-2 rounded-[2.8rem] w-full h-full active:bg-black px-3">
                <img src="src/assets/Icons/Sidebar/task.svg" alt="" />
                {!collapsed && <p className="text-contentTertiary">Tasks</p>}
              </div>
            </button>
            <button className="flex cursor-pointer justify-center items-center p-[3px] h-12 active:bg-gradient-to-tl from-accent to-primaryC rounded-[3rem]">
              <div className="flex items-center gap-2 rounded-[2.8rem] w-full h-full active:bg-black px-3">
                <img src="src/assets/Icons/Sidebar/reporting.svg" alt="" />
                {!collapsed && (
                  <p className="text-contentTertiary">Reporting</p>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
