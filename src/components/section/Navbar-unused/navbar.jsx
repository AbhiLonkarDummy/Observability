import { Bell, Menu } from "lucide-react";
import neutrinologo from "/neutrinologo.png";

export default function Navbar() {
  return (
    <nav className="w-full h-16 bg-white shadow-sm border-b flex items-center justify-between px-6">
      {/* Left: Hamburger + Logo */}
      <div className="flex items-center gap-2">
        {/* Hamburger Menu */}
        <button className="p-2 rounded-full hover:bg-gray-100 transition">
          <Menu className="h-6 w-6 text-gray-700" />
        </button>

        {/* Logo */}
        <a href="#" className="w-36 h-4 flex items-center">
          <img
            src={neutrinologo}
            alt="Neutrino Logo"
            className="w-full h-auto block"
          />
        </a>
      </div>

      {/* Right: Icons & Buttons */}
      <div className="flex items-center gap-4">
        {/* Notification Icon */}
        <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
          <Bell className="h-5 w-5 text-gray-600" />
          {/* Notification badge (optional) */}
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
        </button>

        {/* Sign Up Button */}
        {/* <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition">
          Sign Up
        </button> */}
      </div>
    </nav>
  );
}
