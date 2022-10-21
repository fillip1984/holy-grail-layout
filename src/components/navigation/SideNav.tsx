import { BsGear, BsHouse, BsJoystick } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  const navItems = [
    {
      label: "Home",
      icon: <BsHouse />,
      path: "/home",
    },
    {
      label: "Something else",
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
    <nav className="bg-sky-300">
      <div className="flex flex-col space-y-4 px-2 text-2xl text-white">
        {/* Handles active class of react-router-dom NavLink,
            https://ultimatecourses.com/blog/active-navlink-classes-with-react-router */}
        {navItems.map((navItem) => (
          <NavLink
            to={navItem.path}
            key={navItem.label}
            className={({ isActive }) =>
              `${
                isActive ? "bg-sky-400" : ""
              } flex space-x-2 rounded p-2 transition duration-300`
            }>
            <span className="text-4xl">{navItem.icon}</span>
            <span>{navItem.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default SideNav;
