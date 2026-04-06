import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export enum Persona {
  CODE_REVIEWER = "CODE_REVIEWER",
  SOFTWARE_ARCHITECT = "SOFTWARE_ARCHITECT",
}

const SYSTEM_INSTRUCTIONS = {
  [Persona.CODE_REVIEWER]: `You are an expert Code Reviewer. 
Analyze the provided code for:
1. Structure and Organization
2. Clarity and Readability
3. Performance and Efficiency
4. Potential Bugs and Security Risks
5. Adherence to Best Practices

Provide specific, actionable suggestions for improvement. Be concise but thorough. Use Markdown for formatting.`,
  [Persona.SOFTWARE_ARCHITECT]: `You are a world-class Software Architect. 
Analyze the provided code or system description to:
1. Design modular, scalable systems.
2. Define clear component responsibilities.
3. Suggest architectural patterns (e.g., Microservices, Layered, Event-driven).
4. Identify potential bottlenecks and scalability issues.
5. Focus on long-term maintainability.

Provide high-level architectural guidance and specific design patterns. Use Markdown for formatting.`,
};

export async function analyzeCode(code: string, persona: Persona) {
  if (!code.trim()) return "Please provide some code to analyze.";

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.1-pro-preview",
      contents: `Analyze the following code:\n\n\`\`\`\n${code}\n\`\`\``,
      config: {
        systemInstruction: SYSTEM_INSTRUCTIONS[persona],
        temperature: 0.7,
      },
    });

    return response.text || "No analysis generated.";
  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    return "An error occurred during analysis. Please try again.";
  }
}
