import z from "zod";

export const personalitySchema = z.object({
  personality: z.object({
    mbti: z.object({
      type: z
        .string()
        .describe("Myers-Briggs Type Indicator (MBTI) personality type"),
      description: z
        .string()
        .describe("Description of my MBTI personality type"),
    }),
    enneagram: z.object({
      type: z.string().describe("Enneagram personality type"),
      description: z.string().describe("Description of my Enneagram type"),
    }),
    insights: z.string().describe("Insights about my personality"),
    relation: z.object({
      love: z.string().describe("How I relate to others in romantic contexts"),
      friendship: z.string().describe("How I relate to others in friendships"),
      business: z
        .string()
        .describe("How I relate to others in business contexts"),
    }),
    summary: z.string().describe("Summary of my personality"),
    weaknesses: z.string().describe("My weaknesses"),
    strengths: z.string().describe("My strengths"),
    match: z.string().describe("Ideal match for my personality"),
  }),
});
