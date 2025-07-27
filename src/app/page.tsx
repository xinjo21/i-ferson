"use client";

import QuestionCard from "@/components/QuestionCard";
import Button from "@/components/Shared/Button";
import Container from "@/components/Shared/Container";
import { questions } from "@/lib/questions";

export default function Home() {
  return (
    <div className="p-8 bg-blue-50">
      <Container className="flex flex-col gap-4 w-full md:w-1/2 m-auto">
        <h1>Imong Ferson?!</h1>
        <div className="flex flex-col gap-4">
          {questions.map(({ question, answers }, index) => (
            <QuestionCard key={index} question={question} answers={answers} />
          ))}
        </div>

        <Button onClick={() => alert("Button clicked!")}>hello world</Button>
      </Container>
    </div>
  );
}
