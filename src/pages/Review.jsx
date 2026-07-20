import ScoreCard from "../components/ScoreCard";
import CodeEditor from "../components/CodeEditor";
import { useState } from "react";
import axios from "axios";
import AIAnalysis from "../components/AIAnalysis";
import exportPDF from "../utils/exportPDF";

function Review() {
  const [code, setCode] = useState("");
  const [review, setReview] = useState(null);
  const [reviewId, setReviewId] = useState(null);
  const [loading, setLoading] = useState(false);

  const reviewCode = async () => {
    if (!code.trim()) {
      alert("Please enter some code.");
      return;
    }

    setLoading(true);

    try {
      const token = localStorage.getItem("access");
      const response = await axios.post(
        "http://127.0.0.1:8000/api/review/",
        {
          code: code,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      );

      setReview(response.data.review);
      setReviewId(response.data.review_id);
    } catch (error) {
      console.error(error);
      alert("Error reviewing code.");
    }

    setLoading(false);
  };

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-6">
        AI Code Review
      </h1>

      {/* Score Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">

        <ScoreCard
          title="Overall"
          value={review ? review.overall_score : "--"}
          color="text-cyan-400"
        />

        <ScoreCard
          title="Security"
          value={review ? "95" : "--"}
          color="text-green-400"
        />

        <ScoreCard
          title="Performance"
          value={review ? "90" : "--"}
          color="text-yellow-400"
        />

        <ScoreCard
          title="Complexity"
          value={review ? "O(n)" : "--"}
          color="text-pink-400"
        />

      </div>

      <CodeEditor
        code={code}
        setCode={setCode}
      />

      <div className="mt-6 flex justify-center gap-4">

        <button
          onClick={reviewCode}
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-xl font-semibold"
          disabled={loading}
        >
          {loading ? "Reviewing..." : "🚀 Review Code"}
        </button>

        {review && (
          <button
            onClick={() => {
              window.open(
                `http://127.0.0.1:8000/api/review-pdf/${reviewId}/`,
                "_blank"
              );
            }}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold"
          >
            📄 Download PDF
          </button>
        )}

      </div>

      {review && (
        <div
          id="review-report"
          className="mt-8 bg-zinc-900 p-6 rounded-xl text-white"
        >

          <AIAnalysis review={review} />

          <h2 className="text-2xl font-bold mb-4 mt-6">
            🤖 AI Review
          </h2>

          <p>
            <strong>🐞 Bugs:</strong> {review.bugs}
          </p>

          <p className="mt-3">
            <strong>🔒 Security:</strong> {review.security}
          </p>

          <p className="mt-3">
            <strong>⚡ Performance:</strong> {review.performance}
          </p>

          <p className="mt-3">
            <strong>📖 Readability:</strong> {review.readability}
          </p>

          <p className="mt-3">
            <strong>💡 Best Practices:</strong> {review.best_practices}
          </p>

          <div className="mt-5">
            <h3 className="font-bold">
              ✨ Improved Code
            </h3>

            <pre className="bg-black p-4 rounded mt-2 overflow-x-auto">
              {review.improved_code}
            </pre>
          </div>

        </div>
      )}

    </div>
  );
}

export default Review;