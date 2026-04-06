export enum Persona {
  CODE_REVIEWER = "CODE_REVIEWER",
  SOFTWARE_ARCHITECT = "SOFTWARE_ARCHITECT",
}

export interface AnalysisResult {
  id: string;
  timestamp: number;
  persona: Persona;
  code: string;
  feedback: string;
}
