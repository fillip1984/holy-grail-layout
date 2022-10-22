import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import Home from "./components/Home/Home";
import Backdrop from "./components/navigation/Backdrop";
import BottomDrawer from "./components/navigation/BottomDrawer";
import Footer from "./components/navigation/Footer";
import SideDrawer from "./components/navigation/SideDrawer";
import SideNav from "./components/navigation/SideNav";
import TopNav from "./components/navigation/TopNav";
import SomethingElse from "./components/SomethingElse/SomethingElse";

const App = () => {
  const [sideDrawerVisible, setSideDrawerVisible] = useState(false);
  const [bottomDrawerVisible, setBottomDrawerVisible] = useState(false);

  return (
    <div className="flex h-screen flex-col">
      <TopNav />

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
    </div>
  );
};

export default App;
