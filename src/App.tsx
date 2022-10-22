import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import Home from "./components/Home/Home";
import Backdrop from "./components/navigation/Backdrop";
import BottomDrawer from "./components/navigation/BottomDrawer";
import Footer from "./components/navigation/Footer";
import Modal from "./components/navigation/Modal";
import SideDrawer from "./components/navigation/SideDrawer";
import SideNav from "./components/navigation/SideNav";
import ToastContainer from "./components/navigation/ToastContainer";
import TopNav from "./components/navigation/TopNav";
import SomeWhere from "./components/SomeWhere/SomeWhere";
import { Toast } from "./Types";

const App = () => {
  const [sideDrawerVisible, setSideDrawerVisible] = useState(false);
  const [bottomDrawerVisible, setBottomDrawerVisible] = useState(false);

  const [toasts, setToasts] = useState<Toast[]>([]);
  const timeToLive = 5000;

  const addToast = (toastToAdd: Toast) => {
    setToasts((state) => [...state, { ...toastToAdd }]);

    // switch state from visible = false to true to trigger animation
    setTimeout(() => {
      setToasts((state) =>
        state.map((toast) =>
          toast.id === toastToAdd.id ? { ...toast, visible: true } : toast
        )
      );
    }, 0);

    // in 10 secs switch state from visible = true to false to trigger animation
    setTimeout(() => {
      setToasts((state) =>
        state.map((toast) =>
          toast.id === toastToAdd.id ? { ...toast, visible: false } : toast
        )
      );
    }, timeToLive);
  };

  const removeToast = (toastToRemove: Toast) => {
    setToasts((state) =>
      state.filter((toast) => toast.id !== toastToRemove.id)
    );
  };

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div className="flex h-screen flex-col">
      <TopNav setSideDrawerVisible={setSideDrawerVisible} />

      <div className="flex flex-1 overflow-hidden">
        <Router>
          <SideNav />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  setSideDrawerVisible={setSideDrawerVisible}
                  setBottomDrawerVisible={setBottomDrawerVisible}
                  addToast={addToast}
                  setModalVisible={setModalVisible}
                />
              }
            />
            <Route path="/admin" element={<Admin />} />
            <Route
              path="/something"
              element={
                <SomeWhere
                  setSideDrawerVisible={setSideDrawerVisible}
                  setBottomDrawerVisible={setBottomDrawerVisible}
                  addToast={addToast}
                  setModalVisible={setModalVisible}
                />
              }
            />
          </Routes>
        </Router>
      </div>

      <Footer />

      <SideDrawer
        sideDrawerVisible={sideDrawerVisible}
        setSideDrawerVisible={setSideDrawerVisible}
      />

      <BottomDrawer
        bottomDrawerVisible={bottomDrawerVisible}
        setBottomDrawerVisible={setBottomDrawerVisible}
      />

      <Backdrop
        sideDrawerVisible={sideDrawerVisible}
        bottomDrawerVisible={bottomDrawerVisible}
        setSideDrawerVisible={setSideDrawerVisible}
        setBottomDrawerVisible={setBottomDrawerVisible}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />

      <ToastContainer toasts={toasts} removeToast={removeToast} />

      <Modal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </div>
  );
};

export default App;
