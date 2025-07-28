"use client";

import { usePersonality } from "@/context/usePersonality";
import { FC } from "react";

const ResultPage: FC = () => {
  const { personality } = usePersonality();

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
              {personality?.mbti.type} · Enneagram {personality?.enneagram.type}
            </p>
          </div>
          <div className="p-6">
            <p className="text-gray-700 mb-4">{personality?.summary}</p>
            <p className="text-gray-700">{personality?.insights}</p>
          </div>
        </div>

        {/* Personality Types */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* MBTI Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-indigo-100 p-5">
              <h3 className="text-xl font-semibold text-gray-900">
                MBTI: {personality?.mbti.type}
              </h3>
            </div>
            <div className="p-5">
              <p className="text-gray-700">{personality?.mbti.description}</p>
            </div>
          </div>

          {/* Enneagram Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-indigo-100 p-5">
              <h3 className="text-xl font-semibold text-gray-900">
                Enneagram: Type {personality?.enneagram.type}
              </h3>
            </div>
            <div className="p-5">
              <p className="text-gray-700">
                {personality?.enneagram.description}
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
              <p className="text-gray-700">{personality?.strengths}</p>
            </div>
          </div>

          {/* Weaknesses */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-red-500">
            <div className="p-5">
              <h3 className="text-xl font-semibold text-red-700 mb-3">
                Areas for Growth
              </h3>
              <p className="text-gray-700">{personality?.weaknesses}</p>
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
              <p className="text-gray-700">{personality?.relation.love}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                <span className="mr-2">👥</span> In Friendship
              </h3>
              <p className="text-gray-700">
                {personality?.relation.friendship}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                <span className="mr-2">💼</span> In Business
              </h3>
              <p className="text-gray-700">{personality?.relation.business}</p>
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
              <p className="text-gray-800">{personality?.match}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
