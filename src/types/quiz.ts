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
  
  export interface QuizQuestion {
  
    id: string;
  
    type: QuestionType;
  
    exam?: QuizExam;
  
    subject: string;
  
    topic: string;
  
    difficulty: Difficulty;
  
    question: string;
  
    options: QuizOption[];
  
    correctOptionId: string;
  
    explanation: string;
  
    tags: string[];
  
  }