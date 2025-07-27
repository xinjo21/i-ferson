"use client";

import { FC } from "react";
import { QuestionT } from "@/type/global";
import Container from "./Shared/Container";
import { getCharValue } from "@/utils/getCharValue";

interface QuestionCardProps extends QuestionT {
  questionNumber: number;
  selectedAnswers: string[];
  setSelectedAnswers: (answers: string[]) => void;
  hasError: boolean;
}

const QuestionCard: FC<QuestionCardProps> = ({
  question,
  answersKey,
  questionNumber,
  selectedAnswers,
  setSelectedAnswers,
  hasError,
}) => {
  return (
    <Container className={hasError ? "border-2 border-red-500" : ""}>
      <h2 className="text-xl font-semibold mb-4">
        {questionNumber}. {question}
      </h2>
      <div className="space-y-2">
        {answersKey.map((answerKey, index) => (
          <label key={index} className="flex items-center space-x-2">
            <input
              type="checkbox"
              value={getCharValue(index)}
              disabled={
                selectedAnswers.length === 2 &&
                !selectedAnswers.includes(getCharValue(index))
              }
              checked={selectedAnswers.includes(getCharValue(index))}
              onChange={(e) => {
                if (selectedAnswers.includes(getCharValue(index))) {
                  setSelectedAnswers(
                    selectedAnswers.filter((i) => i !== getCharValue(index))
                  );
                } else if (selectedAnswers.length < 2) {
                  setSelectedAnswers([...selectedAnswers, getCharValue(index)]);
                }
              }}
            />
            <span>{answerKey}</span>
          </label>
        ))}
      </div>
      {hasError && (
        <p className="text-sm text-red-500 mt-4">Select 1 or 2 answers</p>
      )}
    </Container>
  );
};

export default QuestionCard;
