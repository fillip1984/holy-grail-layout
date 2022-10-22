import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import Home from "./components/Home/Home";
import Backdrop from "./components/navigation/Backdrop";
import BottomDrawer from "./components/navigation/BottomDrawer";
import Footer from "./components/navigation/Footer";
import SideDrawer from "./components/navigation/SideDrawer";
import SideNav from "./components/navigation/SideNav";
import ToastContainer from "./components/navigation/ToastContainer";
import TopNav from "./components/navigation/TopNav";
import SomethingElse from "./components/SomethingElse/SomethingElse";
import { Toast } from "./Types";

const App = () => {
  const [sideDrawerVisible, setSideDrawerVisible] = useState(false);
  const [bottomDrawerVisible, setBottomDrawerVisible] = useState(false);

  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (toastToAdd: Toast) => {
    setToasts((state) => [...state, toastToAdd]);

    // switch state from visible = false to true to trigger animation
    setTimeout(() => {
      setToasts((state) =>
        state.map((toast) =>
          toast.id === toastToAdd.id ? { ...toast, visible: true } : toast
        )
      );
    }, 0);

    // in 10 secsswitch state from visible = true to false to trigger animation
    setTimeout(() => {
      setToasts((state) =>
        state.map((toast) =>
          toast.id === toastToAdd.id ? { ...toast, visible: false } : toast
        )
      );
    }, 8000);
  };

  const removeToast = (toastToRemove: Toast) => {
    setToasts((state) =>
      state.filter((toast) => toast.id !== toastToRemove.id)
    );
  };

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
                />
              }
            />
            <Route path="/admin" element={<Admin />} />
            <Route
              path="/something"
              element={
                <SomethingElse
                  setSideDrawerVisible={setSideDrawerVisible}
                  setBottomDrawerVisible={setBottomDrawerVisible}
                  addToast={addToast}
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
      />

      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </div>
  );
};

export default App;
