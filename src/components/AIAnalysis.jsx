function AIAnalysis({ review }) {
  return (
    <div className="mt-8 bg-zinc-900 rounded-2xl p-6 border border-zinc-700">

      <h2 className="text-2xl font-bold text-cyan-400 mb-6">
        🤖 AI Analysis
      </h2>

      {!review ? (
        <p className="text-gray-400">
          Review your code to see AI analysis.
        </p>
      ) : (
        <div className="space-y-6">

          <div>
            <h3 className="text-green-400 font-semibold">
              ✅ Summary
            </h3>
            <p className="text-gray-300">
  Overall Score: {review.overall_score}/100
</p>
          </div>

          <div>
  <h3 className="text-red-400 font-semibold">🔒 Security</h3>
  <p className="text-gray-300">{review.security}</p>
</div>

<div>
  <h3 className="text-yellow-400 font-semibold">⚡ Performance</h3>
  <p className="text-gray-300">{review.performance}</p>
</div>

<div>
  <h3 className="text-blue-400 font-semibold">💡 Best Practices</h3>
  <p className="text-gray-300">{review.best_practices}</p>
</div>

          <div>
            <h3 className="text-blue-400 font-semibold">
              💡 Suggestions
            </h3>

            <p className="text-gray-400">
              AI recommendations will appear here.
            </p>
          </div>

        </div>
      )}

    </div>
  );
}

export default AIAnalysis;