export type QuestionT = {
  question: string;
  answersKey: [string, string, string, string];
};

export type PersonalityT = {
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
