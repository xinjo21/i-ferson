"use client";

import { PersonalityT } from "@/type/global";
import { createContext, FC, useContext, useState } from "react";

export interface PersonalityContextType {
  personality: PersonalityT | undefined;
  setPersonality: (value: PersonalityT) => void;
}

const PersonalityContext = createContext<PersonalityContextType | undefined>(
  undefined
);

export const PersonalityProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [personality, setPersonality] = useState<PersonalityT>({
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
  });

  return (
    <PersonalityContext.Provider value={{ personality, setPersonality }}>
      {children}
    </PersonalityContext.Provider>
  );
};

export const usePersonality = () => {
  const context = useContext(PersonalityContext);
  if (!context) {
    throw new Error("usePersonality must be used within a PersonalityProvider");
  }
  return context;
};
