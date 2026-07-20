import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-zinc-900 text-white px-8 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold text-cyan-400">
        AI Code Review
      </h1>

      <div className="flex gap-6">
        <Link to="/dashboard" className="hover:text-cyan-400">
          Dashboard
        </Link>

        <Link to="/review" className="hover:text-cyan-400">
          Review
        </Link>

        <Link to="/history" className="hover:text-cyan-400">
          History
        </Link>

        <Link to="/reports" className="hover:text-cyan-400">
          Reports
        </Link>

       

        <Link to="/logout" className="text-red-400 hover:text-red-300">
          Logout
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;