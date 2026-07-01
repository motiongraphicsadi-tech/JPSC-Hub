"use client";

import { useMemo, useState } from "react";

import QuizModal from "./QuizModal";

import { QuizQuestion } from "@/types/quiz";
import { createAttempt } from "@/lib/quiz/createAttempt";

type Props = {
  title: string;
  description?: string;
  questions: QuizQuestion[];
  topicId: string;
};

export default function QuizCard({
  title,
  description,
  questions = [],
  topicId = "",
}: Partial<Props>) {
  const [open, setOpen] = useState(false);

  /**
   * Creates one randomized attempt.
   * A new attempt is generated every time
   * the quiz is opened.
   */
  const [attemptQuestions, setAttemptQuestions] = useState<QuizQuestion[]>([]);

  function startQuiz() {
    setAttemptQuestions(createAttempt(questions as QuizQuestion[]));
    setOpen(true);
  }

  function closeQuiz() {
    setOpen(false);
    setAttemptQuestions([]);
  }

  return (
    <>
      {/* Quiz Preview Card */}
      <div
        className="
          mt-10
          rounded-3xl
          border
          border-gray-800
          bg-gray-950
          p-8
          text-white
        "
      >
        <h2
          className="
            text-3xl
            font-bold
          "
        >
          {title}
        </h2>

        {description && (
          <p
            className="
              mt-4
              text-gray-400
            "
          >
            {description}
          </p>
        )}

        <div
          className="
            mt-6
            flex
            items-center
            justify-between
          "
        >
          <span
            className="
              text-sm
              text-gray-500
            "
          >
            {questions.length} Questions
          </span>

          <button
            onClick={startQuiz}
            className="
              rounded-xl
              bg-blue-600
              px-6
              py-3
              font-semibold
              text-white
              transition
              hover:bg-blue-700
            "
          >
            Start Quiz
          </button>
        </div>
      </div>

      {/* Quiz Modal */}
      {open && (
        <QuizModal
          questions={attemptQuestions}
          topicId={topicId}
          onClose={closeQuiz}
        />
      )}
    </>
  );
}