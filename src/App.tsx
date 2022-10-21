import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import SomethingElse from "./components/SomethingElse/SomethingElse";
import TopNav from "./components/navigation/TopNav";
import SideNav from "./components/navigation/SideNav";
import { useRef, useState } from "react";

const App = () => {
  const [sideDrawerVisible, setSideDrawerVisible] = useState(false);
  const [bottomDrawerVisible, setBottomDrawerVisible] = useState(false);

  return (
    <div className="flex h-screen flex-col bg-indigo-500">
      {/* above bg-indigo-500 class is just to see what areas of the screen are streched 
          beyond other components and isn't necessary in final product */}
      <header className="h-[8vh] bg-red-100 p-2">Top</header>

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

      <div className="h-[6vh] bg-gray-200 p-1">footer</div>

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
