import { useState } from "react";
import { BsArrowLeft, BsGear, BsHouse, BsJoystick } from "react-icons/bs";
import { NavLink } from "react-router-dom";

// side navigation with locations to get around the site, should be responsive enough
// On smaller and mobile devices a better approach to to switch to a bottom nav or to have the nav shrunk with responsive (smaller) icons and when expanded
// it is absolute positioning and covers everything until a location is selected then it shrinks back. There are examples of both online if you look
const SideNav = () => {
  const [shrunk, setShrunk] = useState(false);

  const navItems = [
    {
      label: "Home",
      icon: <BsHouse />,
      path: "/",
    },
    {
      label: "Somewhere",
      icon: <BsJoystick />,
      path: "/something",
    },
    {
      label: "Admin",
      icon: <BsGear />,
      path: "/admin",
    },
  ];

  return (
    <nav
      className={`bg-sky-300 pt-6 transition-all duration-300 ${
        shrunk ? "w-[72px]" : "md:w-1/3 lg:w-1/4 xl:w-1/6"
      }`}>
      <div className="flex flex-col space-y-4 px-2 text-2xl text-white">
        {/* Handles active class of react-router-dom NavLink,
            https://ultimatecourses.com/blog/active-navlink-classes-with-react-router */}
        {navItems.map((navItem) => (
          <NavLink
            end
            to={navItem.path}
            key={navItem.label}
            className={({ isActive }) =>
              `${
                isActive ? "bg-sky-400" : ""
              } flex space-x-2 rounded p-2 transition duration-300`
            }>
            <span className="pr-3 text-4xl">{navItem.icon}</span>
            <span>{navItem.label}</span>
          </NavLink>
        ))}
        <button
          onClick={() => setShrunk(!shrunk)}
          className={`ml-auto px-2 text-3xl text-white transition duration-300 ease-in-out ${
            shrunk ? "rotate-180" : ""
          }`}>
          <BsArrowLeft />
        </button>
      </div>
    </nav>
  );
};

export default SideNav;
