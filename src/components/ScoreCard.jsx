function ScoreCard({ title, value, color }) {
  return (
    <div
      className="bg-zinc-900 rounded-xl p-6 border border-zinc-700 text-center"
    >
      <h3 className="text-gray-400">{title}</h3>

      <p
        className={`text-4xl font-bold mt-3 ${color}`}
      >
        {value}
      </p>
    </div>
  );
}

export default ScoreCard;