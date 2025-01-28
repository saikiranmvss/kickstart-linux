import { Bell, User, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Entrepreneur</h1>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-2 top-2 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Search by Account ID, Name, Mobile"
            className="pl-8 pr-4 py-2 border rounded-md text-sm"
          />
        </div>
        <Bell className="text-gray-600" />
        <User className="text-gray-600" />
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <span className="text-sm">Radha Krishna</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
