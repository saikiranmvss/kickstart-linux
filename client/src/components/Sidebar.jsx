import { Home, Users, Briefcase, Calendar } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-lg h-screen p-4">
      <h2 className="text-lg font-bold mb-6">KICKSTARTER</h2>
      <nav className="space-y-4">
        <NavLink
          to="/dashboard"
          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-200"
        >
          <Home />
          <span>Dashboard</span>
        </NavLink>
        <NavLink
          to="/entrepreneur"
          className="flex items-center space-x-3 p-3 rounded-lg bg-blue-100 text-blue-600"
        >
          <Users />
          <span>Entrepreneur</span>
        </NavLink>
        <NavLink
          to="/investors"
          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-200"
        >
          <Briefcase />
          <span>Investors</span>
        </NavLink>
        <NavLink
          to="/events"
          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-200"
        >
          <Calendar />
          <span>Events</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
