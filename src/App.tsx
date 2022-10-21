import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import Home from "./components/Home/Home";
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
              path="/home"
              element={
                <Home
                  setSideDrawerVisible={setSideDrawerVisible}
                  setBottomDrawerVisible={setBottomDrawerVisible}
                />
              }
            />
            <Route path="/admin" element={<Admin />} />
            <Route path="/something" element={<SomethingElse />} />
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

      <div
        className={`backdrop fixed top-0 left-0 right-0 bottom-0 z-[900] select-none bg-white/50 backdrop-invert backdrop-opacity-30 ${
          sideDrawerVisible || bottomDrawerVisible ? "visible" : "hidden"
        }`}
        onClick={() => {
          // TODO: would be nice if you didn't have to close every drawer here
          setSideDrawerVisible(false);
          setBottomDrawerVisible(false);
        }}></div>
    </div>
  );
};

export default App;
