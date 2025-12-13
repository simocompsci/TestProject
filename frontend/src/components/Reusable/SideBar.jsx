import { Home, Book, Heart, Settings, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="h-full fixed z-1 w-52 bg-white text-black flex flex-col justify-between border-r-2 border-black">
      
      {/* Top section - Logo */}
      <div className="flex flex-col items-center mt-6">
        <div className="text-4xl font-bold mb-10">LOGO</div>

        {/* Navigation items */}
        <nav className="flex flex-col gap-4 w-full">
          <Link to="/" className="flex items-center px-4 py-2 hover:bg-gray-200">
            <Home className="mr-3 font-semibold" size={35}/>
            <span className="text-2xl font-semibold">Home</span>
          </Link>

          <Link to="/library" className="flex items-center px-4 py-2 hover:bg-gray-200">
            <Book className="mr-3" size={35} />
            <span className="text-2xl font-semibold">Library</span>
          </Link>

          <Link to="/whishlist" className="flex items-center px-4 py-2 hover:bg-gray-200">
            <Heart className="mr-3" size={35} />
            <span className="text-2xl font-semibold">Wishlist</span>
          </Link>
        </nav>
      </div>

      {/* Bottom section - Settings & Logout */}
      <div className="flex flex-col gap-4 mb-6">
        <Link to="/settings" className="flex items-center px-4 py-2 hover:bg-gray-200">
          <Settings className="mr-3" size={35} />
          <span className="text-2xl font-semibold">Settings</span>
        </Link>

        <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-200">
          <LogOut className="mr-3" size={35} />
          <span className="text-2xl font-semibold">Logout</span>
        </a>
      </div>
    </div>
  );
}
