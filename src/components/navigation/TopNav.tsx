interface TopNavProps {
  setSideDrawerVisible: (state: boolean) => void;
}

// static/fixed panel across the top, useful for displaying branding, navigation/tabs, an avatar and log out button
const TopNav = ({ setSideDrawerVisible }: TopNavProps) => {
  return (
    <header className="flex h-[8vh] items-center justify-between bg-sky-300 p-2">
      <h3 className="brand text-white">HolyGrail - layout</h3>
      <button
        onClick={() => setSideDrawerVisible(true)}
        className="avatar flex h-12 w-12 items-center justify-center rounded-full bg-gray-400 p-1 text-3xl">
        P
      </button>
    </header>
  );
};

export default TopNav;
