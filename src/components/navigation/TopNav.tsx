import React from "react";

const TopNav = () => {
  return (
    <nav className="flex items-center justify-between bg-sky-300 p-4">
      <h3 className="brand text-white">HolyGrail</h3>
      <div className="avatar flex h-12 w-12 items-center justify-center rounded-full bg-gray-400 p-1 text-3xl">
        P
      </div>
    </nav>
  );
};

export default TopNav;
