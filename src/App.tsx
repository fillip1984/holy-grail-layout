import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import SomethingElse from "./components/SomethingElse/SomethingElse";
import TopNav from "./components/navigation/TopNav";
import SideNav from "./components/navigation/SideNav";
import { useRef, useState } from "react";
import Footer from "./components/navigation/Footer";
import SideDrawer from "./components/navigation/SideDrawer";
import BottomDrawer from "./components/navigation/BottomDrawer";

const App = () => {
  const [sideDrawerVisible, setSideDrawerVisible] = useState(false);
  const [bottomDrawerVisible, setBottomDrawerVisible] = useState(false);

  return (
    <div className="flex h-screen flex-col">
      <TopNav />

      <div className="flex flex-1 overflow-hidden">
        <nav className="w-[15vw] bg-green-100 p-2">Side</nav>
        {/* view height (vh) and view width (vw) are key to forcing flex containers to grow to their full height/width. */}
        <Router>
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
  /*
  return (
    <div className="App">
      <Router>
        <TopNav />
        <div className="flex">
          <SideNav />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/something" element={<SomethingElse />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
  */
};

export default App;
