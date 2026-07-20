import { Shield, Zap, Brain } from "lucide-react";

function FeatureCard() {
  const features = [
    {
      icon: <Brain size={40} />,
      title: "AI Review",
      description: "Get instant AI-powered feedback on your code.",
    },
    {
      icon: <Shield size={40} />,
      title: "Security Analysis",
      description: "Detect vulnerabilities and risky coding practices.",
    },
    {
      icon: <Zap size={40} />,
      title: "Performance",
      description: "Receive suggestions to optimize speed and efficiency.",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 px-10 mt-24">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-cyan-400 transition duration-300"
        >
          <div className="text-cyan-400 mb-4">{feature.icon}</div>

          <h2 className="text-white text-2xl font-bold">
            {feature.title}
          </h2>

          <p className="text-gray-400 mt-3">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default FeatureCard;