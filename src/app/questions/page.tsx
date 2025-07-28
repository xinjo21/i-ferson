"use client";

import { useEffect, useState } from "react";
import { experimental_useObject as useObject } from "@ai-sdk/react";
import { personalitySchema } from "@/app/api/personality/schema";
import { questions } from "@/lib/questions";
import { usePersonality } from "@/context/usePersonality";
import { PersonalityT } from "@/type/global";
import { useRouter } from "next/navigation";

type SelectedAnswers = {
  [key: number]: string[];
};

const defaultPersonality: PersonalityT = {
  mbti: { type: "", description: "" },
  enneagram: { type: "", description: "" },
  insights: "",
  relation: {
    love: "",
    friendship: "",
    business: "",
  },
  summary: "",
  weaknesses: "",
  strengths: "",
  match: "",
};

export default function QuestionsPage() {
  const router = useRouter();

  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswers>({});
  const [errors, setErrors] = useState<{ [key: number]: boolean }>({});

  const { setPersonality } = usePersonality();

  const { object, submit, isLoading } = useObject({
    api: "/api/personality",
    schema: personalitySchema,
  });

  const handleNext = () => {
    if (activeQuestion < questions.length - 1) {
      setActiveQuestion(activeQuestion + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevious = () => {
    if (activeQuestion > 0) {
      setActiveQuestion(activeQuestion - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = () => {
    submit(selectedAnswers);
  };

  const handleClear = () => {
    const clearedAnswers: SelectedAnswers = {};
    questions.forEach((_, index) => {
      clearedAnswers[index + 1] = [];
    });
    setActiveQuestion(0);
    setSelectedAnswers(clearedAnswers);
    setErrors({});
  };

  const currentQuestion = questions[activeQuestion];
  const currentQuestionNumber = activeQuestion + 1;
  const isLastQuestion = activeQuestion === questions.length - 1;

  useEffect(() => {
    if (object?.personality && !isLoading) {
      setPersonality({
        ...defaultPersonality,
        ...object.personality,
        mbti: {
          ...defaultPersonality.mbti,
          ...object.personality.mbti,
        },
        enneagram: {
          ...defaultPersonality.enneagram,
          ...object.personality.enneagram,
        },
        relation: {
          ...defaultPersonality.relation,
          ...object.personality.relation,
        },
      });

      router.push("/result");
    }
  }, [isLoading, object?.personality, setPersonality, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Discover Your Personality
          </h1>
          <p className="text-xl text-gray-600">
            Answer a few questions to uncover your unique traits
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-indigo-700">
              Question {currentQuestionNumber} of {questions.length}
            </span>
            <span className="text-sm font-medium text-gray-500">
              {Math.round((currentQuestionNumber / questions.length) * 100)}%
              Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-indigo-600 h-2.5 rounded-full transition-all duration-300"
              style={{
                width: `${(currentQuestionNumber / questions.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800">
                {currentQuestion.question}
              </h2>
              <span className="text-sm text-gray-500">Select 1-2 options</span>
            </div>

            <div className="space-y-3">
              {currentQuestion.answersKey.map((answer, index) => {
                const isSelected =
                  selectedAnswers[currentQuestionNumber]?.includes(answer) ||
                  false;
                return (
                  <div
                    key={index}
                    onClick={() => {
                      const currentAnswers =
                        selectedAnswers[currentQuestionNumber] || [];
                      let newAnswers;

                      if (currentAnswers.includes(answer)) {
                        newAnswers = currentAnswers.filter((a) => a !== answer);
                      } else if (currentAnswers.length < 2) {
                        newAnswers = [...currentAnswers, answer];
                      } else {
                        // If already 2 selected, replace the first one
                        newAnswers = [currentAnswers[1], answer];
                      }

                      setSelectedAnswers((prev) => ({
                        ...prev,
                        [currentQuestionNumber]: newAnswers,
                      }));

                      if (
                        errors[currentQuestionNumber] &&
                        newAnswers.length <= 2
                      ) {
                        setErrors((prev) => ({
                          ...prev,
                          [currentQuestionNumber]: false,
                        }));
                      }
                    }}
                    className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                      isSelected
                        ? "border-indigo-500 bg-indigo-50"
                        : "border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/50"
                    }`}
                  >
                    <div className="flex items-center">
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 flex-shrink-0 ${
                          isSelected
                            ? "border-indigo-500 bg-indigo-500"
                            : "border-gray-300"
                        }`}
                      >
                        {isSelected && (
                          <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                        )}
                      </div>
                      <span className="text-gray-700">{answer}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {errors[currentQuestionNumber] && (
              <p className="mt-3 text-sm text-red-600">
                Please select 1-2 options to continue
              </p>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="bg-gray-50 px-6 py-4 flex justify-between border-t border-gray-100">
            <button
              onClick={handlePrevious}
              disabled={activeQuestion === 0}
              className={`px-6 py-2 rounded-lg font-medium ${
                activeQuestion === 0
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-indigo-600 hover:bg-indigo-50"
              }`}
            >
              Previous
            </button>

            {isLastQuestion ? (
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? "Analyzing..." : "See My Results"}
              </button>
            ) : (
              <button
                onClick={handleNext}
                disabled={!selectedAnswers[currentQuestionNumber]?.length}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  selectedAnswers[currentQuestionNumber]?.length
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Next Question
              </button>
            )}
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center space-x-2 mb-8">
          {questions.map((_, index) => (
            <button
              key={index}
              // onClick={() => setActiveQuestion(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === activeQuestion
                  ? "bg-indigo-600 w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to question ${index + 1}`}
            />
          ))}
        </div>

        {/* Clear All Button */}
        <div className="text-center">
          <button
            onClick={handleClear}
            className="text-sm text-gray-500 hover:text-indigo-600 transition-colors"
          >
            Clear all answers
          </button>
        </div>
      </div>
    </div>
  );
}
