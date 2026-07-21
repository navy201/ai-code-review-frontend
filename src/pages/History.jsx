import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function History() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const token = localStorage.getItem("access");

      const response = await axios.get(
        "https://ai-code-review-backend-cmhd.onrender.com/api/history/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setReviews(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="p-8 text-white">
        <h1 className="text-3xl font-bold mb-6">
          📜 Review History
        </h1>

        {reviews.length === 0 ? (
          <p>No reviews found.</p>
        ) : (
          reviews.map((review) => (
            <div
              key={review.id}
              className="bg-zinc-900 p-6 rounded-xl mb-6"
            >
              <h2 className="text-xl font-bold text-cyan-400">
                Score: {review.overall_score}/100
              </h2>

              <p className="mt-3">
                <strong>Bugs:</strong> {review.bugs}
              </p>

              <p className="mt-2">
                <strong>Security:</strong> {review.security}
              </p>

              <p className="mt-2">
                <strong>Performance:</strong> {review.performance}
              </p>

              <p className="mt-2">
                <strong>Readability:</strong> {review.readability}
              </p>

              <p className="mt-2">
                <strong>Best Practices:</strong> {review.best_practices}
              </p>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default History;