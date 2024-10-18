import React from "react";
import { Home, Send, Wallet, User, LogOut } from "lucide-react";
import NavItem from "./NavItem";
import { useNavigate } from "react-router-dom";


const AppBar = () => {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("token");
  const navItems = [
    { name: 'Home', icon: Home, href: '/' },
    { name: 'Send', icon: Send, href: '/send' },
    { name: isAuthenticated ? name : "Profile", icon: User, href: isAuthenticated ? '/dashboard' : '/signin' },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="shadow mt-3 mx-4 rounded-xl h-14 flex justify-between items-center px-4 bg-white">
      <div className="text-black font-extrabold text-xl">VaultX</div>
      <div className="flex items-center justify-evenly">
        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
          {navItems.map((item) => (
            <NavItem key={item.href} {...item} />
          ))}
          {isAuthenticated && (
            <button
              onClick={handleLogout}
              className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 "
            >
              <LogOut className="h-5 w-5 mr-2 " />
              Logout
            </button>
          )}
        </div>
        <div className="bg-gray-200 text-black rounded-full h-10 w-10 ml-2 flex items-center justify-center">
          <span className="text-xl">U</span>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
