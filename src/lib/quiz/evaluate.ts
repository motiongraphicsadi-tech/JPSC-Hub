import { QuizQuestion } from "@/types/quiz";

type EvaluationResult = {
  correct: boolean;
};

export function evaluateQuestion(
  question: QuizQuestion,
  selected: string[]
): EvaluationResult {

  /*
   -------------------------
   Single Correct
   -------------------------
  */

  if (question.answerType === "single") {

    return {

      correct:
        selected.length === 1 &&
        selected[0] === question.correctOptionId,

    };

  }

  /*
   -------------------------
   Multiple Correct
   -------------------------
  */

  const correctAnswers =
    [...(question.correctOptionIds ?? [])]
      .sort();

  const userAnswers =
    [...selected]
      .sort();

  const correct =
    correctAnswers.length ===
      userAnswers.length &&
    correctAnswers.every(
      (optionId, index) =>
        optionId === userAnswers[index]
    );

  return {

    correct,

  };

}