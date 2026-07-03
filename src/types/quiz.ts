export interface QuizOption {
  id: string;

  text: string;
}

export interface QuizExam {
  commission: string;

  stage: string;

  paper?: string;

  year: number;
}

export type QuestionType =
  | "practice"
  | "pyq";

export type Difficulty =
  | "Easy"
  | "Medium"
  | "Hard";

export type AnswerType =
  | "single"
  | "multiple";

export interface QuizQuestion {
  id: string;

  type: QuestionType;

  exam?: QuizExam;

  subject: string;

  topic: string;

  difficulty: Difficulty;

  answerType: AnswerType;

  question: string;

  options: QuizOption[];

  /*
   Single Correct
  */
  correctOptionId?: string;

  /*
   Multiple Correct
  */
  correctOptionIds?: string[];

  explanation: string;

  tags: string[];
}