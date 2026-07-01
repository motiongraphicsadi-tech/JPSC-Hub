"use client";

import { X } from "lucide-react";

import { useQuizEngine } from "@/hooks/useQuizEngine";
import { saveQuizAttempt } from "@/lib/quiz/storage";

import { QuizQuestion } from "@/types/quiz";

type Props = {
  questions: QuizQuestion[];
  topicId: string;
  onClose: () => void;
};

export default function QuizModal({
  questions,
  topicId,
  onClose,
}: Props) {
  const { state, actions } =
    useQuizEngine(questions);

  /*
   --------------------------------
   Quiz Completed
   --------------------------------
  */

  if (state.finished) {
    const stats = state.statistics;

    saveQuizAttempt(
      topicId,
      stats.percentage
    );

    return (
      <div
        className="
          fixed inset-0
          z-[99999]
          flex items-center justify-center
          bg-black/80
          backdrop-blur-sm
        "
      >
        <div
          className="
            w-full
            max-w-2xl
            rounded-3xl
            border
            border-gray-800
            bg-gray-950
            p-10
            text-center
            text-white
          "
        >
          <h2 className="text-4xl font-bold">
            Quiz Completed
          </h2>

          <p
            className="
              mt-8
              text-6xl
              font-bold
              text-green-500
            "
          >
            {state.score} / {questions.length}
          </p>

          <p
            className="
              mt-4
              text-2xl
              text-zinc-400
            "
          >
            Score : {stats.percentage}%
          </p>

          <button
            onClick={onClose}
            className="
              mt-10
              rounded-xl
              bg-blue-600
              px-6
              py-3
              font-semibold
              text-white
            "
          >
            Close Quiz
          </button>
        </div>
      </div>
    );
  }

  // Safe because we already returned when finished.
  const question = state.question!;

  return (
    <div
      className="
        fixed inset-0
        z-[99999]
        flex items-center justify-center
        bg-black/80
        backdrop-blur-sm
        p-4
      "
    >
      <div
        className="
          relative
          w-full
          max-w-3xl
          rounded-3xl
          border
          border-gray-800
          bg-gray-950
          p-8
          text-white
        "
      >
        {/* Close */}

        <button
          onClick={onClose}
          className="absolute right-4 top-4"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Header */}

        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            Quiz
          </h2>

          <span className="text-gray-400">
            Question {state.current + 1} /{" "}
            {questions.length}
          </span>
        </div>

        {/* Exam Tag */}

        <div className="mb-6 flex flex-wrap gap-3">
          {question.type === "pyq" &&
          question.exam ? (
            <span
              className="
                rounded-full
                bg-orange-500/20
                px-3
                py-1
                text-sm
                font-medium
                text-orange-400
              "
            >
              🏷 {question.exam.commission}{" "}
              {question.exam.stage}{" "}
              {question.exam.year}
            </span>
          ) : (
            <span
              className="
                rounded-full
                bg-blue-500/20
                px-3
                py-1
                text-sm
                text-blue-300
              "
            >
              Practice Question
            </span>
          )}

          <span
            className="
              rounded-full
              bg-zinc-800
              px-3
              py-1
              text-sm
            "
          >
            {question.difficulty}
          </span>
        </div>

        {/* Question */}

        <h3
          className="
            text-3xl
            font-semibold
            leading-relaxed
          "
        >
          {question.question}
        </h3>

        {/* Options */}

        <div className="mt-8 space-y-4">
          {question.options.map((option) => {
            const isCorrect =
              state.submitted &&
              option.id ===
                question.correctOptionId;

            const isWrong =
              state.submitted &&
              option.id ===
                state.selected &&
              option.id !==
                question.correctOptionId;

            return (
              <button
                key={option.id}
                onClick={() =>
                  actions.selectOption(
                    option.id
                  )
                }
                className={`
                  w-full
                  rounded-2xl
                  border
                  px-5
                  py-4
                  text-left
                  text-lg
                  transition-all

                  ${
                    state.selected ===
                    option.id
                      ? "border-blue-500 bg-blue-500/20"
                      : "border-gray-800 bg-gray-900"
                  }

                  ${
                    isCorrect
                      ? "border-green-500 bg-green-500/20"
                      : ""
                  }

                  ${
                    isWrong
                      ? "border-red-500 bg-red-500/20"
                      : ""
                  }
                `}
              >
                {option.text}
              </button>
            );
          })}
        </div>

        {/* Footer */}

        <div className="mt-10 flex justify-end">
          {!state.submitted ? (
            <button
              onClick={actions.submit}
              disabled={!state.selected}
              className="
                rounded-xl
                bg-green-600
                px-6
                py-3
                font-semibold
                text-white
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              Submit Answer
            </button>
          ) : (
            <button
              onClick={actions.next}
              className="
                rounded-xl
                bg-blue-600
                px-6
                py-3
                font-semibold
                text-white
              "
            >
              {state.current ===
              questions.length - 1
                ? "Finish Quiz"
                : "Next Question"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}