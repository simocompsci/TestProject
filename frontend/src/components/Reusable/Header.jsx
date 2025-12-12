import { Search } from "lucide-react";

export default function Header() {
  return (
    <header className="h-30 bg-amber-200 border-b-2 border-black flex items-center fixed w-full">
      <div className="flex-1 flex justify-center">
        {/* Search bar */}
        <div className="relative w-full max-w-3xl">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            size={25}
          />
          <input
            type="text"
            placeholder="Search For Your Desired Books..."
            className="w-full text-2xl border-2 h-15 border-black bg-gray-100 pl-10 pr-4 py-2 focus:outline-none"
          />
        </div>

      </div>
    </header>
  );
}
