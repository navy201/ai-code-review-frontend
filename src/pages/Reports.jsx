import { useEffect, useState } from "react";
import axios from "axios";

function Reports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const token = localStorage.getItem("access");
      console.log("Token:", token);

      const response = await axios.get(
        "https://ai-code-review-backend-cmhd.onrender.com/api/reports/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setReports(response.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load reports.");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Reports</h1>

      <div className="bg-zinc-900 rounded-xl overflow-hidden">
        <table className="w-full text-white">
          <thead className="bg-zinc-800">
            <tr>
              <th className="p-4 text-left">Title</th>
              <th className="p-4 text-left">Language</th>
              <th className="p-4 text-left">Score</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">PDF</th>
            </tr>
          </thead>

          <tbody>
            {reports.map((report) => (
              <tr key={report.id} className="border-t border-zinc-700">
                <td className="p-4">{report.title}</td>
                <td className="p-4">{report.language}</td>
                <td className="p-4">{report.score}</td>
                <td className="p-4">
                  {new Date(report.created_at).toLocaleDateString()}
                </td>
                <td className="p-4">
                  <button
                    onClick={() =>
                      window.open(
                        `https://ai-code-review-backend-cmhd.onrender.com/api/review-pdf/${report.id}/`,
                        "_blank"
                      )
                    }
                    className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg"
                  >
                    📄 Download
                  </button>
                </td>
              </tr>
            ))}

            {reports.length === 0 && (
              <tr>
                <td
                  colSpan="5"
                  className="text-center p-6 text-gray-400"
                >
                  No reports available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Reports;