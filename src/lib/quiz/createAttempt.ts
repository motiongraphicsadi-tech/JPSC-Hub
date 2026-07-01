import { QuizQuestion } from "@/types/quiz";

import { shuffle } from "./shuffle";

export function createAttempt(
  quiz: ReadonlyArray<Readonly<QuizQuestion>>
): QuizQuestion[] {

  return shuffle([...quiz]).map(
    (question) => ({

      ...question,

      options: shuffle(
        [...question.options]
      ),

    })
  );

}