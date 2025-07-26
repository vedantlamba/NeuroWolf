import React from "react";

interface BentoCardProps {
  title: string;
  description: string;
  image?: React.ReactNode;
  titleColor?: string;
}

const BentoCard = ({
  title,
  description,
  image,
  titleColor = "text-red-500",
}: BentoCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
      <h3 className={`${titleColor} text-xl font-semibold mb-4`}>{title}</h3>
      <p className="text-gray-700 leading-relaxed mb-8">{description}</p>

      {/* Image/Visual Content */}
      {image ? (
        <div className="bg-gray-100 rounded-lg p-4 h-48 flex items-center justify-center">
          {image}
        </div>
      ) : (
        /* Default Mock Interface */
        <div className="bg-gray-100 rounded-lg p-4 h-48 flex items-center justify-center">
          <div className="w-full max-w-sm bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="space-y-2">
              <div className="h-2 bg-gray-200 rounded w-3/4"></div>
              <div className="h-2 bg-gray-200 rounded w-1/2"></div>
              <div className="h-2 bg-gray-200 rounded w-5/6"></div>
              <div className="h-8 bg-blue-100 rounded mt-4"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const BentoCards = () => {
  const cardsData = [
    {
      title: "Advanced AI Algorithms",
      description:
        "Our platform utilizes cutting-edge AI algorithms to provide accurate and efficient solutions for your business needs.",
      titleColor: "text-red-500",
    },
    {
      title: "Seamless Integration",
      description:
        "Easily integrate our AI solutions into your existing workflow with our comprehensive APIs and developer tools.",
      titleColor: "text-blue-500",
    },
    {
      title: "Real-time Analytics",
      description:
        "Get instant insights and analytics from your data with our powerful real-time processing capabilities.",
      titleColor: "text-green-500",
    },
    {
      title: "Customizable Solutions",
      description:
        "Tailor our AI solutions to meet your specific requirements with our flexible and customizable platform.",
      titleColor: "text-purple-500",
    },
  ];

  // Custom image components for variety
  const customImages = [
    // Chart/Analytics visual
    <div
      key="chart"
      className="w-full max-w-sm bg-white rounded-lg shadow-sm p-4"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm font-medium text-gray-600">
          Analytics Dashboard
        </div>
        <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex items-end space-x-1 h-12">
          <div className="w-4 h-8 bg-blue-200 rounded"></div>
          <div className="w-4 h-10 bg-blue-400 rounded"></div>
          <div className="w-4 h-6 bg-blue-300 rounded"></div>
          <div className="w-4 h-12 bg-blue-500 rounded"></div>
          <div className="w-4 h-7 bg-blue-300 rounded"></div>
        </div>
      </div>
    </div>,

    // API/Integration visual
    <div
      key="api"
      className="w-full max-w-sm bg-white rounded-lg shadow-sm p-4"
    >
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <div className="text-xs text-gray-600">API Connected</div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-yellow-100 rounded border-2 border-yellow-300"></div>
            <div className="h-px bg-gray-300 flex-1"></div>
            <div className="w-6 h-6 bg-blue-100 rounded border-2 border-blue-300"></div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-green-100 rounded border-2 border-green-300"></div>
            <div className="h-px bg-gray-300 flex-1"></div>
            <div className="w-6 h-6 bg-purple-100 rounded border-2 border-purple-300"></div>
          </div>
        </div>
      </div>
    </div>,

    // Settings/Customization visual
    <div
      key="settings"
      className="w-full max-w-sm bg-white rounded-lg shadow-sm p-4"
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium text-gray-600">Settings</div>
          <div className="w-8 h-4 bg-green-500 rounded-full relative">
            <div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5"></div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="h-2 bg-gray-200 rounded w-20"></div>
            <div className="w-6 h-3 bg-gray-300 rounded"></div>
          </div>
          <div className="flex items-center justify-between">
            <div className="h-2 bg-gray-200 rounded w-16"></div>
            <div className="w-6 h-3 bg-blue-500 rounded"></div>
          </div>
          <div className="flex items-center justify-between">
            <div className="h-2 bg-gray-200 rounded w-24"></div>
            <div className="w-6 h-3 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>,
  ];

  return (
    <section className="py-16 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Large Cards */}
          <div className="space-y-6">
            <BentoCard
              title={cardsData[0].title}
              description={cardsData[0].description}
              titleColor={cardsData[0].titleColor}
            />
            <BentoCard
              title={cardsData[1].title}
              description={cardsData[1].description}
              titleColor={cardsData[1].titleColor}
              image={customImages[1]}
            />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <BentoCard
              title={cardsData[2].title}
              description={cardsData[2].description}
              titleColor={cardsData[2].titleColor}
              image={customImages[0]}
            />
            <BentoCard
              title={cardsData[3].title}
              description={cardsData[3].description}
              titleColor={cardsData[3].titleColor}
              image={customImages[2]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoCards;
