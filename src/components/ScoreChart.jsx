import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function ScoreChart({ stats }) {
  const data = {
    labels: ["Highest", "Average", "Lowest"],
    datasets: [
      {
        label: "AI Scores",
        data: [
          stats.highest_score,
          stats.average_score,
          stats.lowest_score,
        ],
        backgroundColor: [
          "#22c55e",
          "#06b6d4",
          "#ef4444",
        ],
      },
    ],
  };

  return (
    <div className="bg-zinc-900 p-6 rounded-xl mt-8">
      <Bar data={data} />
    </div>
  );
}

export default ScoreChart;