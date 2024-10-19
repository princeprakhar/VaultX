import { Home, Send, Wallet, User } from "lucide-react";
import NavItem from "./NavItem";
const Navbar = () => {
  const isAuthenticated = !!localStorage.getItem("token");
  return (
    <>
      <nav className="bg-slate-50 m-2 shadow-lg rounded-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-slate-600">
                  VaultX
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {[
                  { name: "Home", icon: Home, href: "/" },
                  ...(isAuthenticated
                    ? [
                        { name: "Send", icon: Send, href: "/send" },
                        { name: "Wallet", icon: Wallet, href: "/dashboard" },
                      ]
                    : []),
                  {
                    name: isAuthenticated ? "Profile" : "Sign In",
                    icon: User,
                    href: isAuthenticated ? "/dashboard" : "/signin",
                  },
                ].map((item) => (
                  <NavItem key={item.name} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
