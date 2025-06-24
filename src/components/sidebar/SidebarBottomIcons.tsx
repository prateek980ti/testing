import ProfileCard, { Status } from "./ProfileCard";

interface INotification {
  notificationCount: number;
}

function SidebarBottomIcons({ notificationCount }: INotification) {
  return (
    <div className="bg-BG-tertiary flex flex-col gap-4 p-2">
      <div className="flex gap-3 w-full items-left justify-between">
        <span className="flex gap-2 items-center">
          <img src="src/assets/Icons/Sidebar/bell.svg" alt="" />
          <h1>Notifications</h1>
        </span>
        <span className="bg-[#BFB2FF] items-center text-black py-1 px-2 rounded-sm ">
          {notificationCount}
        </span>
      </div>
      <div className="flex gap-3 w-full items-left">
        <img src="src/assets/Icons/Sidebar/support.svg" alt="" />
        <h1>Support</h1>
      </div>
      <div className="flex gap-3 w-full items-left">
        <img src="src/assets/Icons/Sidebar/setting.svg" alt="" />
        <h1>Settings</h1>
      </div>
      <ProfileCard
        username="Frisson Devhub"
        email="brooklyn@simmons.com"
        status={Status.OFFLINE}
      />
    </div>
  );
}

export default SidebarBottomIcons;
