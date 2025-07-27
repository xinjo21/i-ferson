import { openai } from "@ai-sdk/openai";
import { streamObject } from "ai";
import { personalitySchema } from "./schema";
import { questions } from "@/lib/questions";
import { personalityPrompt } from "./prompt";

export async function POST(req: Request) {
  try {
    const context = await req.json();

    const response = streamObject({
      model: openai("gpt-4o-mini", { structuredOutputs: true }),
      schema: personalitySchema,
      prompt: `
        Do not repeat or echo the user's input.

        ${personalityPrompt}

        Here are the questions and multiple choices answers where you will be basing to identify the person's personality:
        ${JSON.stringify(questions)}

        User's answers to the questions:
        ${JSON.stringify(context)}
      `,
    });

    return response.toTextStreamResponse();
  } catch (error) {
    console.error("Error in POST request:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
