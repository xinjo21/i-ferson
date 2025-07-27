import { FC } from "react";

type PersonalityType = {
  mbti: {
    type: string;
    description: string;
  };
  enneagram: {
    type: string;
    description: string;
  };
  insights: string;
  relation: {
    love: string;
    friendship: string;
    business: string;
  };
  summary: string;
  weaknesses: string;
  strengths: string;
  match: string;
};

const personality: PersonalityType = {
  mbti: {
    type: "INTJ",
    description:
      "The Architect: INTJs are strategic thinkers who value knowledge and competence. They are independent, analytical, and often prefer to work alone or in small groups.",
  },
  enneagram: {
    type: "5",
    description:
      "The Investigator: Enneagram 5s are curious, insightful, and seek to understand the world around them. They often have a strong desire for knowledge and can be withdrawn.",
  },
  insights:
    "You possess a strong analytical mind and prefer to think things through before acting. Your inclination towards planning and structure indicates a preference for order and clarity in your life. You value independence and often find yourself in deep thought, analyzing situations rather than jumping into them impulsively.",
  relation: {
    love: "In romantic contexts, you are likely to be reserved but deeply committed. You value intellectual connection and may take time to open up emotionally.",
    friendship:
      "In friendships, you prefer a few close relationships over a large social circle. You appreciate deep conversations and shared interests.",
    business:
      "In business, you are strategic and prefer to work independently or in small teams. You value competence and efficiency, often taking the lead in planning and organizing.",
  },
  summary:
    "You are an INTJ 5, characterized by your strategic thinking, independence, and a strong desire for knowledge. You approach life with a methodical mindset, valuing logic and clarity. While you may come off as reserved, you have a rich inner world and a deep understanding of complex concepts.",
  weaknesses:
    "Your tendency to overthink can lead to analysis paralysis. You may struggle with emotional expression and can come off as aloof or detached. Additionally, your high standards can make it difficult for you to connect with others who do not share your level of commitment or understanding.",
  strengths:
    "You are highly intelligent, strategic, and capable of deep focus. Your ability to analyze situations and create structured plans makes you an effective problem-solver. You are also independent and self-sufficient, often thriving in environments that allow for autonomy.",
  match:
    "You'd vibe well with an ENFP or 7w6, who can bring spontaneity and emotional depth to your life. You might clash with an ISTJ or 1w9, as their rigid structures may conflict with your need for flexibility and independence.",
};

const ResultPage: FC<PersonalityType> = (personality) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Your Personality Profile
          </h1>
          <p className="text-xl text-gray-600">
            Discover what makes you unique
          </p>
        </div>

        {/* Summary Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="bg-indigo-600 text-white p-6">
            <h2 className="text-2xl font-bold">Your Personality Type</h2>
            <p className="text-indigo-100 text-lg">
              {personality.mbti.type} · Enneagram {personality.enneagram.type}
            </p>
          </div>
          <div className="p-6">
            <p className="text-gray-700 mb-4">{personality.summary}</p>
            <p className="text-gray-700">{personality.insights}</p>
          </div>
        </div>

        {/* Personality Types */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* MBTI Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-indigo-100 p-5">
              <h3 className="text-xl font-semibold text-gray-900">
                MBTI: {personality.mbti.type}
              </h3>
            </div>
            <div className="p-5">
              <p className="text-gray-700">{personality.mbti.description}</p>
            </div>
          </div>

          {/* Enneagram Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-indigo-100 p-5">
              <h3 className="text-xl font-semibold text-gray-900">
                Enneagram: Type {personality.enneagram.type}
              </h3>
            </div>
            <div className="p-5">
              <p className="text-gray-700">
                {personality.enneagram.description}
              </p>
            </div>
          </div>
        </div>

        {/* Strengths & Weaknesses */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Strengths */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-green-500">
            <div className="p-5">
              <h3 className="text-xl font-semibold text-green-700 mb-3">
                Strengths
              </h3>
              <p className="text-gray-700">{personality.strengths}</p>
            </div>
          </div>

          {/* Weaknesses */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-red-500">
            <div className="p-5">
              <h3 className="text-xl font-semibold text-red-700 mb-3">
                Areas for Growth
              </h3>
              <p className="text-gray-700">{personality.weaknesses}</p>
            </div>
          </div>
        </div>

        {/* Relationships */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="bg-indigo-600 text-white p-6">
            <h2 className="text-2xl font-bold">Relationships</h2>
          </div>
          <div className="p-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                <span className="mr-2">💘</span> In Love
              </h3>
              <p className="text-gray-700">{personality.relation.love}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                <span className="mr-2">👥</span> In Friendship
              </h3>
              <p className="text-gray-700">{personality.relation.friendship}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                <span className="mr-2">💼</span> In Business
              </h3>
              <p className="text-gray-700">{personality.relation.business}</p>
            </div>
          </div>
        </div>

        {/* Compatibility */}
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl shadow-md overflow-hidden">
          <div className="border-b border-purple-100 p-6">
            <h2 className="text-xl font-semibold text-purple-800">
              Compatibility
            </h2>
          </div>
          <div className="p-6">
            <div className="flex items-start">
              <span className="text-3xl mr-3">💫</span>
              <p className="text-gray-800">{personality.match}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
