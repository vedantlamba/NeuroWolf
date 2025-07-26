import React from "react";
import { PhoneCall, Plug, MessageCircle, Settings } from "lucide-react";

interface BentoCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  titleColor?: string;
}

const BentoCard = ({
  title,
  description,
  icon,
  titleColor = "text-violet-500",
}: BentoCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full flex flex-col">
      <div className="mb-4">{icon}</div>
      <h3 className={`${titleColor} text-xl font-semibold mb-2`}>{title}</h3>
      <p className="text-gray-700 leading-relaxed mb-4 flex-grow">{description}</p>
    </div>
  );
};

const BentoCards = () => {
  const cardsData = [
    {
      title: "Voice AI Agents",
      description: "Create voice agents that sound natural and handle calls like a pro.",
      icon: <PhoneCall className="w-8 h-8 text-violet-500" />,
    },
    {
      title: "Easy Integration",
      description: "Connect with your CRM and workflows seamlessly.",
      icon: <Plug className="w-8 h-8 text-violet-500" />,
    },
    {
      title: "Real-Time Chat",
      description: "Instant, human-like conversations with zero delay.",
      icon: <MessageCircle className="w-8 h-8 text-violet-500" />,
    },
    {
      title: "Fully Customizable",
      description: "Design agents with custom scripts and voice styles.",
      icon: <Settings className="w-8 h-8 text-violet-500" />,
    },
  ];

  return (
    <section className="py-16 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 auto-rows-fr">
          {cardsData.map((card, index) => (
            <BentoCard
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoCards;
