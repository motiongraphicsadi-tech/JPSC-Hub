import { calculateMastery } from "@/lib/mastery";

/*
==========================================================
Types
==========================================================
*/

export interface StoredQuizData {
  lastScore: number;

  bestScore: number;

  attempts: number;

  revisionStage: number;

  mastery: number;

  lastQuizDate: string;
}

/*
==========================================================
Storage Key

Single source of truth.

If we ever migrate storage format,

change ONLY this function.

==========================================================
*/

function getStorageKey(
  topicId: string
): string {

  return `study-${topicId}`;

}

/*
==========================================================
Default Data

Used when no previous data exists.

==========================================================
*/

function defaultQuizData(): StoredQuizData {

  return {

    lastScore: 0,

    bestScore: 0,

    attempts: 0,

    revisionStage: 0,

    mastery: 0,

    lastQuizDate: "",

  };

}

/*
==========================================================
Load

==========================================================
*/

export function loadQuizData(
  topicId: string
): StoredQuizData {

  if (typeof window === "undefined") {

    return defaultQuizData();

  }

  const raw = localStorage.getItem(
    getStorageKey(topicId)
  );

  if (!raw) {

    return defaultQuizData();

  }

  try {

    return {

      ...defaultQuizData(),

      ...JSON.parse(raw),

    };

  } catch {

    return defaultQuizData();

  }

}

/*
==========================================================
Save

==========================================================
*/

export function saveQuizAttempt(

  topicId: string,

  percentage: number

): StoredQuizData {

  const existing =
    loadQuizData(topicId);

  const bestScore = Math.max(

    existing.bestScore,

    percentage

  );

  const quizData: StoredQuizData = {

    lastScore: percentage,

    bestScore,

    attempts:
      existing.attempts + 1,

    revisionStage:
      existing.revisionStage,

    mastery: calculateMastery(

      bestScore,

      existing.revisionStage

    ),

    lastQuizDate:
      new Date().toISOString(),

  };

  if (typeof window !== "undefined") {

    localStorage.setItem(

      getStorageKey(topicId),

      JSON.stringify(quizData)

    );

  }

  return quizData;

}

/*
==========================================================
Clear

Useful for debugging.

==========================================================
*/

export function clearQuizData(
  topicId: string
) {

  if (typeof window === "undefined") {

    return;

  }

  localStorage.removeItem(
    getStorageKey(topicId)
  );

}

/*
==========================================================
Reset Everything

Developer Utility

==========================================================
*/

export function clearAllQuizData() {

  if (typeof window === "undefined") {

    return;

  }

  Object.keys(localStorage)

    .filter((key) =>
      key.startsWith("study-")
    )

    .forEach((key) =>
      localStorage.removeItem(key)
    );

}