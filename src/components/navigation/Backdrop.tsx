interface BackdropProps {
  sideDrawerVisible: boolean;
  bottomDrawerVisible: boolean;
  setSideDrawerVisible: (state: boolean) => void;
  setBottomDrawerVisible: (state: boolean) => void;
  modalVisible: boolean;
  setModalVisible: (state: boolean) => void;
}

// blurs/obscures page whenever a drawer is opened
const Backdrop = ({
  sideDrawerVisible,
  bottomDrawerVisible,
  setSideDrawerVisible,
  setBottomDrawerVisible,
  modalVisible,
  setModalVisible,
}: BackdropProps) => {
  return (
    <div
      className={`backdrop fixed top-0 left-0 right-0 bottom-0 z-[900] select-none bg-white/50 backdrop-invert backdrop-opacity-30 ${
        sideDrawerVisible || bottomDrawerVisible || modalVisible
          ? "visible"
          : "hidden"
      }`}
      onClick={() => {
        // TODO: would be nice if you didn't have to close every drawer here
        setSideDrawerVisible(false);
        setBottomDrawerVisible(false);
        setModalVisible(false);
      }}
    />
  );
};

export default Backdrop;
