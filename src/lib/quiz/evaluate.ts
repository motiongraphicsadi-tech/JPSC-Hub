import { QuizQuestion } from "@/types/quiz";

export interface EvaluationResult {

  correct: boolean;

  correctOptionId: string;

}

export function evaluateQuestion(

  question: QuizQuestion,

  selectedOptionId: string | null

): EvaluationResult {

  return {

    correct:
      selectedOptionId ===
      question.correctOptionId,

    correctOptionId:
      question.correctOptionId,

  };

}