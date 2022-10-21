interface BottomDrawerProps {
  bottomDrawerVisible: boolean;
  setBottomDrawerVisible: (state: boolean) => void;
}

const BottomDrawer = ({
  bottomDrawerVisible,
  setBottomDrawerVisible,
}: BottomDrawerProps) => {
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[999] h-1/3 rounded-t-lg bg-red-300 p-2 transition duration-300 ease-in-out ${
        bottomDrawerVisible ? "" : "translate-y-full"
      }`}>
      <div className="flex items-center justify-between">
        <h4>Bottom Drawer</h4>
        <button
          className="text-2xl"
          onClick={() => setBottomDrawerVisible(false)}>
          X
        </button>
      </div>
    </div>
  );
};

export default BottomDrawer;
