import { useNavigate } from "react-router-dom";
function Hero() {
  const navigate = useNavigate();
  return (
    <section className="text-center mt-24 px-6">
      <h1 className="text-6xl font-extrabold text-white">
        AI-Powered
      </h1>

      <h1 className="text-6xl font-extrabold text-cyan-400 mt-3">
        Code Review Platform
      </h1>

      <p className="text-gray-400 text-xl mt-8 max-w-3xl mx-auto">
        Review your code, detect bugs, improve performance,
        and receive AI-powered suggestions in seconds.
      </p>

      <div className="mt-12 flex justify-center gap-6">
        <button
    onClick={() => navigate("/review")}
    className="bg-cyan-500 text-black px-8 py-4 rounded-xl font-bold hover:bg-cyan-400"
>
    Start Reviewing
</button>

        <button
    onClick={() => navigate("/dashboard")}
    className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-xl hover:bg-cyan-500 hover:text-black"
>
    View Demo
</button>
      </div>
    </section>
  );
}

export default Hero;