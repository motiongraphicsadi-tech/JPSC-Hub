import { QuizQuestion } from "@/types/quiz";

/*
==========================================================
Freeze Helper

Makes quiz data immutable in development.
==========================================================
*/

function deepFreeze<T>(object: T): T {

  Object.freeze(object);

  Object.getOwnPropertyNames(object).forEach((key) => {

    const value = (object as any)[key];

    if (
      value &&
      typeof value === "object" &&
      !Object.isFrozen(value)
    ) {
      deepFreeze(value);
    }

  });

  return object;

}

/*
==========================================================
Validation
==========================================================
*/

function validateQuestion(
  question: QuizQuestion
) {

  if (!question.id) {
    throw new Error("Question ID is missing.");
  }

  if (!question.question.trim()) {
    throw new Error(
      `Question "${question.id}" has empty question text.`
    );
  }

  if (question.options.length < 2) {
    throw new Error(
      `Question "${question.id}" must have at least two options.`
    );
  }

  const optionIds = new Set<string>();

  for (const option of question.options) {

    if (!option.id) {
      throw new Error(
        `Question "${question.id}" contains an option without an ID.`
      );
    }

    if (!option.text.trim()) {
      throw new Error(
        `Question "${question.id}" contains an empty option.`
      );
    }

    if (optionIds.has(option.id)) {
      throw new Error(
        `Duplicate option ID "${option.id}" in "${question.id}".`
      );
    }

    optionIds.add(option.id);

  }

  const exists = question.options.some(
    (option) =>
      option.id === question.correctOptionId
  );

  if (!exists) {
    throw new Error(
      `Question "${question.id}" has an invalid correctOptionId "${question.correctOptionId}".`
    );
  }

}

/*
==========================================================
Quiz Validation
==========================================================
*/

function validateQuiz(
  questions: QuizQuestion[]
) {

  const ids = new Set<string>();

  for (const question of questions) {

    if (ids.has(question.id)) {
      throw new Error(
        `Duplicate Question ID "${question.id}".`
      );
    }

    ids.add(question.id);

    validateQuestion(question);

  }

}

/*
==========================================================
Factory
==========================================================
*/

export function createQuiz(
  questions: QuizQuestion[]
): ReadonlyArray<Readonly<QuizQuestion>> {

  validateQuiz(questions);

  if (
    process.env.NODE_ENV !==
    "production"
  ) {

    deepFreeze(questions);

  }

  return questions;

}