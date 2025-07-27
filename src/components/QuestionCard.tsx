"use client";

import { FC, useState } from "react";
import { QuestionT } from "@/type/global";
import Container from "./Shared/Container";

const QuestionCard: FC<QuestionT> = ({ question, answers }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);

  return (
    <Container>
      <h2 className="text-xl font-semibold mb-4">{question}</h2>
      <div className="space-y-2">
        {answers.map((answer, index) => (
          <label key={index} className="flex items-center space-x-2">
            <input
              type="checkbox"
              value={index}
              disabled={
                selectedAnswers.length === 2 && !selectedAnswers.includes(index)
              }
              checked={selectedAnswers.includes(index)}
              onChange={() => {
                if (selectedAnswers.includes(index)) {
                  setSelectedAnswers(
                    selectedAnswers.filter((i) => i !== index)
                  );
                } else if (selectedAnswers.length < 2) {
                  setSelectedAnswers([...selectedAnswers, index]);
                }
              }}
            />
            <span>{answer}</span>
          </label>
        ))}
      </div>
    </Container>
  );
};

export default QuestionCard;
