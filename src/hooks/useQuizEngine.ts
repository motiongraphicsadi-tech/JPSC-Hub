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

  /*
   Multiple selections are always stored.
   For single-answer questions this array
   will contain only one option.
  */
  const [selected, setSelected] =
    useState<string[]>([]);

  const [submitted, setSubmitted] =
    useState(false);

  const [score, setScore] =
    useState(0);

  const finished =
    current >= questions.length;

  const question =
    finished
      ? null
      : questions[current];

  /*
  ------------------------------------
  Select / Unselect Option
  ------------------------------------
  */

  function selectOption(
    optionId: string
  ) {

    if (
      submitted ||
      finished ||
      !question
    ) {
      return;
    }

    /*
    -------------------------
    Single Correct
    -------------------------
    */

    if (
      question.answerType ===
      "single"
    ) {

      setSelected([
        optionId,
      ]);

      return;
    }

    /*
    -------------------------
    Multiple Correct
    -------------------------
    */

    setSelected((previous) => {

      if (
        previous.includes(optionId)
      ) {

        return previous.filter(
          (id) =>
            id !== optionId
        );

      }

      return [
        ...previous,
        optionId,
      ];

    });

  }

  /*
  ------------------------------------
  Submit
  ------------------------------------
  */

  function submit() {

    if (
      !question ||
      submitted ||
      selected.length === 0
    ) {
      return;
    }

    const result =
      evaluateQuestion(
        question,
        selected
      );

    if (
      result.correct
    ) {

      setScore(
        (previous) =>
          previous + 1
      );

    }

    setSubmitted(true);

  }

  /*
  ------------------------------------
  Next Question
  ------------------------------------
  */

  function next() {

    if (!submitted)
      return;

    setSelected([]);

    setSubmitted(false);

    setCurrent(
      (previous) =>
        previous + 1
    );

  }

  /*
  ------------------------------------
  Restart
  ------------------------------------
  */

  function restart() {

    setCurrent(0);

    setSelected([]);

    setSubmitted(false);

    setScore(0);

  }

  const statistics =
    useMemo(
      () =>
        calculateStatistics(
          questions.length,
          score
        ),
      [
        questions.length,
        score,
      ]
    );

  return {

    state: {

      current,

      score,

      selected,

      submitted,

      question,

      finished,

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