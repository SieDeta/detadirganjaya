import { MouseEvent, useState } from "react";
import { HiMiniXMark, HiOutlineBars3 } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

const navbarItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Research",
    link: "/research",
  },
  {
    name: "Publications",
    link: "/publications",
  },
];

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>();

  const handleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (e.target instanceof HTMLElement && !e.target.closest(".sidebar")) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-10">
      {/* desktop */}
      <nav className="bg-gray-50 md:p-6 p-4 border border-gray-200">
        <div className="flex items-center justify-between container mx-auto max-w-5xl">
          {/* logo */}
          <div className="text-xl font-light tracking-wide">
            Deta Dirganjaya
          </div>

          {/* hamburger mobile */}
          <button
            onClick={handleSidebar}
            className="md:hidden flex items-center justify-center p-2 "
          >
            {isSidebarOpen ? (
              <HiMiniXMark className="text-3xl text-gray-800" />
            ) : (
              <HiOutlineBars3 className="text-3xl text-gray-800" />
            )}
          </button>

          {/* nav items */}
          <div className="hidden md:flex items-center space-x-4 text-gray-800 hover:text-gray-600 text-lg font-light">
            {navbarItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.link}
                className={({ isActive }) =>
                  isActive ? "text-black" : "text-gray-500"
                }
              >
                {item.name}
              </NavLink>
            ))}
            <a href="" target="_blank" className="text-gray-500 font-light">
              CV
            </a>
          </div>
        </div>
      </nav>

      {/* mobile sidebar */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black/50 transition-opacity duration-300 ease-in-out md:hidden ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleOutsideClick}
      >
        <div
          className={`fixed top-0 left-0 w-64 h-full bg-gray-100 transform transition-transform duration-300 ease-in-out sidebar ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-4 mt-5 flex">
            <div className="text-xl font-light">Deta Dirganjaya</div>
          </div>

          <div className="flex flex-col space-y-4 p-4">
            {navbarItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.link}
                className={({ isActive }) =>
                  isActive ? "text-black" : "text-gray-500"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
