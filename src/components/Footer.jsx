import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 mt-20">
      <div className="max-w-7xl mx-auto px-8 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Logo & Description */}
          <div>
            <h2 className="text-3xl font-bold text-cyan-400">
              AI Code Review
            </h2>

            <p className="text-zinc-400 mt-4 leading-7">
              Review your code with AI, detect bugs, improve
              performance, and generate professional reports in
              seconds.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Navigation
            </h3>

            <ul className="space-y-3 text-zinc-400">

              <li>
                <Link to="/" className="hover:text-cyan-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/dashboard" className="hover:text-cyan-400 transition">
                  Dashboard
                </Link>
              </li>

              <li>
                <Link to="/review" className="hover:text-cyan-400 transition">
                  Review
                </Link>
              </li>

              <li>
                <Link to="/history" className="hover:text-cyan-400 transition">
                  History
                </Link>
              </li>

              <li>
                <Link to="/reports" className="hover:text-cyan-400 transition">
                  Reports
                </Link>
              </li>

            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Tech Stack
            </h3>

            <div className="flex flex-wrap gap-2">

              <span className="bg-zinc-900 px-3 py-2 rounded-lg text-cyan-400">
                React
              </span>

              <span className="bg-zinc-900 px-3 py-2 rounded-lg text-cyan-400">
                Django REST
              </span>

              <span className="bg-zinc-900 px-3 py-2 rounded-lg text-cyan-400">
                Tailwind CSS
              </span>

              <span className="bg-zinc-900 px-3 py-2 rounded-lg text-cyan-400">
                JWT
              </span>

              <span className="bg-zinc-900 px-3 py-2 rounded-lg text-cyan-400">
                OpenRouter AI
              </span>

            </div>
          </div>

        </div>

        <div className="border-t border-zinc-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-zinc-500 text-sm">
            © 2026 AI Code Review. All Rights Reserved.
          </p>

          <p className="text-cyan-400 text-sm mt-3 md:mt-0">
            Built with ❤️ using React & Django
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;