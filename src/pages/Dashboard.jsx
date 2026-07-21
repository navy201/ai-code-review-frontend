import { useEffect, useState } from "react";
import axios from "axios";
import ScoreChart from "../components/ScoreChart";
import Navbar from "../components/Navbar";

function Dashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const token = localStorage.getItem("access");

      const response = await axios.get(
        "https://ai-code-review-backend-cmhd.onrender.com/api/dashboard/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setStats(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!stats) {
    return (
      <>
        <Navbar />
        <h2 className="text-white p-8">Loading Dashboard...</h2>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-zinc-950 text-white p-8">
        <h1 className="text-4xl font-bold mb-8">
          📊 AI Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h2 className="text-gray-400">Total Reviews</h2>
            <p className="text-4xl font-bold text-cyan-400">
              {stats.total_reviews}
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h2 className="text-gray-400">Average Score</h2>
            <p className="text-4xl font-bold text-green-400">
              {stats.average_score}
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h2 className="text-gray-400">Highest Score</h2>
            <p className="text-4xl font-bold text-yellow-400">
              {stats.highest_score}
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h2 className="text-gray-400">Lowest Score</h2>
            <p className="text-4xl font-bold text-red-400">
              {stats.lowest_score}
            </p>
          </div>

        </div>

        <div className="mt-10">
          <ScoreChart stats={stats} />
        </div>
      </div>
    </>
  );
}

export default Dashboard;