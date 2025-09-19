import React from "react";
import { Activity, Share2, TrendingUp, Send } from "lucide-react";

export default function HashtagPerformance() {
  const features = [
    {
      title: "Hashtag Growth",
      description: "Follow a hashtag growth total posts, videos and images.",
      icon: <Activity className="w-6 h-6 text-white" />,
      bg: "from-red-400 to-red-500",
    },
    {
      title: "Influencers by Hashtag",
      description: "Identify the most influential people posting with your hashtag.",
      icon: <Share2 className="w-6 h-6 text-white" />,
      bg: "from-blue-400 to-blue-500",
    },
    {
      title: "Most Influental Post",
      description: "See the most influential posts on hashtag you are following on.",
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      bg: "from-yellow-400 to-yellow-500",
    },
    {
      title: "Hashtag Location",
      description: "Visualize where people are posting using your hashtag made.",
      icon: <Send className="w-6 h-6 text-white" />,
      bg: "from-teal-400 to-teal-500",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 lg:px-20 text-center min-h[80vh]">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#034D82]">
        Track any hashtag(s) Performance
      </h2>
      <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
        Don’t waste time on search manual tasks. Let Automation do it for you. <br />
        Simplify workflows, reduce errors, and save time.
      </p>

      {/* Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition text-left"
          >
            {/* Icon */}
            <div
              className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.bg} flex items-center justify-center`}
            >
              {item.icon}
            </div>
            {/* Title */}
            <h3 className="mt-4 text-lg font-semibold text-[#034D82]">
              {item.title}
            </h3>
            {/* Description */}
            <p className="text-gray-500 mt-2 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
