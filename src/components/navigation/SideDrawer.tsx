interface SideDrawerProps {
  sideDrawerVisible: boolean;
  setSideDrawerVisible: (state: boolean) => void;
}

// off canvas drawer that slides in from the left
const SideDrawer = ({
  sideDrawerVisible,
  setSideDrawerVisible,
}: SideDrawerProps) => {
  return (
    <div
      className={`fixed top-0 bottom-0 left-0 z-[999] w-1/3 rounded-r-lg bg-red-300 p-2 transition duration-300 ease-in-out ${
        sideDrawerVisible ? "" : "-translate-x-full"
      }`}>
      <div className="flex items-center justify-between">
        <h4>Side Drawer</h4>
        <button
          className="text-2xl"
          onClick={() => setSideDrawerVisible(false)}>
          X
        </button>
      </div>
    </div>
  );
};

export default SideDrawer;
