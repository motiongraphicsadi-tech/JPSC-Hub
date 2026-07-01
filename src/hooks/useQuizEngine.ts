"use client";

import { useMemo, useState } from "react";

import { QuizQuestion } from "@/types/quiz";
import { evaluateQuestion } from "@/lib/quiz/evaluate";
import { calculateStatistics } from "@/lib/quiz/statistics";

export function useQuizEngine(
  questions: QuizQuestion[]
) {
  const [current, setCurrent] =
    useState(0);

  const [selected, setSelected] =
    useState<string | null>(null);

  const [submitted, setSubmitted] =
    useState(false);

  const [score, setScore] =
    useState(0);

  const finished =
    current >= questions.length;

  const question = finished
    ? null
    : questions[current];

  function selectOption(
    optionId: string
  ) {
    if (submitted || finished) return;

    setSelected(optionId);
  }

  function submit() {
    if (
      !selected ||
      !question ||
      submitted
    ) {
      return;
    }

    const result =
      evaluateQuestion(
        question,
        selected
      );

    if (result.correct) {
      setScore((prev) => prev + 1);
    }

    setSubmitted(true);
  }

  function next() {
    if (!submitted) return;

    setSelected(null);
    setSubmitted(false);
    setCurrent((prev) => prev + 1);
  }

  function restart() {
    setCurrent(0);
    setSelected(null);
    setSubmitted(false);
    setScore(0);
  }

  const statistics = useMemo(
    () =>
      calculateStatistics(
        questions.length,
        score
      ),
    [questions.length, score]
  );

  return {
    state: {
      current,
      selected,
      submitted,
      score,
      finished,
      question,
      statistics,
    },

    actions: {
      selectOption,
      submit,
      next,
      restart,
    },
  };
}