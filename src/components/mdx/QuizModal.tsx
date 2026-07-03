"use client";

import { X } from "lucide-react";

import { QuizQuestion } from "@/types/quiz";

import { useQuizEngine } from "@/hooks/useQuizEngine";

import { saveQuizAttempt } from "@/lib/quiz/storage";

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

  /*
  ==========================================
  Quiz Engine
  ==========================================
  */

  const {
    state,
    actions,
  } = useQuizEngine(questions);

  /*
  ==========================================
  Quiz Finished Screen
  ==========================================
  */

  if (state.finished) {

    const stats =
      state.statistics;

    saveQuizAttempt(
      topicId,
      stats.percentage
    );

    return (

      <div
        className="
          fixed
          inset-0
          z-[99999]

          flex
          items-center
          justify-center

          bg-black/80
          backdrop-blur-sm

          p-4
        "
      >

        <div
          className="
            w-full
            max-w-2xl

            rounded-3xl

            border
            border-zinc-800

            bg-zinc-950

            p-10

            text-center
            text-white
          "
        >

          <h2
            className="
              text-4xl
              font-bold
            "
          >
            Quiz Completed 🎉
          </h2>

          <p
            className="
              mt-8

              text-6xl
              font-bold

              text-green-500
            "
          >
            {state.score}
            {" / "}
            {questions.length}
          </p>

          <p
            className="
              mt-5

              text-2xl

              text-zinc-400
            "
          >
            Score :
            {" "}
            {stats.percentage}%
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

  /*
  ==========================================
  Current Question
  ==========================================
  */

  const question =
    state.question!;

  return (
  
  <div
className="
      fixed
      inset-0
      z-[99999]
  
      flex
      items-center
      justify-center
  
      bg-black/80
      backdrop-blur-sm
  
      p-4
    "
  >
  
    <div
      className="
        relative
  
        flex
        flex-col
  
        w-full
        max-w-6xl
  
        max-h-[99vh]
  
        overflow-hidden
  
        rounded-3xl
  
        border
        border-zinc-800
  
        bg-zinc-950
  
        shadow-2xl
  
        text-white
      "
    >
  
      {/* =========================================
          Header
      ========================================= */}
  
  <div
  className="
    flex
    items-center
    justify-between

    border-b
    border-zinc-800

    px-5
    py-3
  "
>

  {/* Left */}

  <h2
    className="
      text-lg
      font-semibold
      text-blue-400
    "
  >
    Quiz
  </h2>

  {/* Right */}

  <div
    className="
      flex
      items-center
      gap-5
    "
  >

    <span
      className="
        text-sm
        font-medium
        text-zinc-400
      "
    >
      Q {state.current + 1} / {questions.length}
    </span>

    <button
      onClick={onClose}
      className="
        rounded-lg
        p-1.5

        text-zinc-500

        transition

        hover:bg-zinc-800
        hover:text-white
      "
    >
      <X className="h-5 w-5" />
    </button>

  </div>

</div>
  
      {/* =========================================
          Progress Bar
      ========================================= */}
  
      <div
        className="
          h-1.5
  
          w-full
  
          bg-zinc-900
        "
      >
  
        <div
          className="
            h-full
  
            rounded-r-full
  
            bg-blue-500
  
            transition-all
            duration-500
          "
          style={{
            width: `${((state.current + 1) / questions.length) * 100}%`,
          }}
        />
  
      </div>
  
      {/* =========================================
          Scrollable Body
      ========================================= */}
  
      <div
        className="
          flex-1
  
          overflow-y-auto
  
          p-5
        "
      >
        {/* =========================================
    Meta Information
========================================= */}

<div className="space-y-6">

{/* Row 1 */}

<div className="flex flex-wrap items-center gap-3">


  {/* Exam */}

  {question.exam && (

    <span
      className="
        rounded-full
        bg-zinc-800
        px-4
        py-2
        text-sm
        text-zinc-300
      "
    >

      {question.exam.commission}

      {" • "}

      {question.exam.stage}

      {question.exam.paper && (
        <>
          {" • "}
          {question.exam.paper}
        </>
      )}

      {" • "}

      {question.exam.year}

    </span>

  )}

  {/* Difficulty */}

  <span
    className={`
      rounded-full
      px-4
      py-2
      text-sm
      font-semibold

      ${
        question.difficulty === "Easy"

          ? "bg-green-500/20 text-green-400"

          : question.difficulty === "Medium"

          ? "bg-yellow-500/20 text-yellow-400"

          : "bg-red-500/20 text-red-400"
      }
    `}
  >

    {question.difficulty}

  </span>

  

</div>

{/* Subject & Topic */}

<div
  className="
    mb-4
    text-sm
    text-zinc-400
  "
>

  {question.subject}

  {" • "}

  {question.topic}

</div>

{/* Question */}

<div
  className="
    rounded-2xl
    border
    border-zinc-800
    bg-zinc-900
    p-8
  "
>

<p
  className="
    mb-3
    text-xl
    font-semibold
    leading-tight
  "
>

  {question.question}

</p>

  <div className="mt-1">

    {question.answerType === "single" ? (

      <span
        className="
         mb-4
         text-sm
         text-zinc-400
        "
      >
        ○ Select ONE option
      </span>

    ) : (

      <span
        className="
          mb-4
          text-sm
          text-zinc-400
        "
      >
        ☑ Select ALL correct options
      </span>

    )}

  </div>

</div>

</div>

{/* =========================================
    Options
========================================= */}

<div className="mt-5 space-y-2">

  {question.options.map((option) => {

    const isSelected =
      state.selected.includes(option.id);

    const isCorrect =
      state.submitted &&
      (
        question.answerType === "single"
          ? option.id === question.correctOptionId
          : question.correctOptionIds?.includes(option.id)
      );

    const isWrong =
      state.submitted &&
      isSelected &&
      !isCorrect;

    return (

      <button
        key={option.id}

        disabled={state.submitted}

        onClick={() =>
          actions.selectOption(option.id)
        }

        className={`
          group

          w-full

          rounded-2xl

          border

          px-4
          py-3

          transition-all
          duration-200

          ${
            isSelected
              ? "border-blue-500 bg-blue-500/10"
              : "border-zinc-800 bg-zinc-900 hover:border-zinc-700 hover:bg-zinc-800/60"
          }

          ${
            isCorrect
              ? "border-green-500 bg-green-500/15"
              : ""
          }

          ${
            isWrong
              ? "border-red-500 bg-red-500/15"
              : ""
          }

          ${
            state.submitted
              ? "cursor-default"
              : "cursor-pointer hover:scale-[1.01]"
          }
        `}
      >

        <div
          className="
            flex
            items-center
            gap-5
          "
        >

          {/* Letter */}

          <div
            className="
              flex

              h-6
              w-6

              shrink-0

              items-center
              justify-center

              rounded-full

              bg-zinc-800

              text-base
              font-bold
            "
          >

            {option.id}

          </div>

          {/* Option */}

          <div
            className="
              flex-1
            "
          >

            <p
              className="
                text-left
                text-lg
                leading-relaxed
              "
            >
              {option.text}
            </p>

          </div>

          {/* Selector */}

          <div
            className="
              flex
              items-center
              justify-center

              text-3xl
            "
          >

            {

              question.answerType === "single"

                ? (

                    isSelected

                      ? "◉"

                      : "○"

                  )

                : (

                    isSelected

                      ? "☑"

                      : "☐"

                  )

            }

          </div>

        </div>

      </button>

    );

  })}

</div>

{/* =========================================
    Answer Review
========================================= */}

{state.submitted && (

<div
  className="
    mt-10
    rounded-3xl
    border
    border-zinc-800
    bg-zinc-900
    overflow-hidden
  "
>

  {/* Header */}

  <div
    className="
      border-b
      border-zinc-800
      px-6
      py-4
    "
  >

    <h2
      className="
        text-2xl
        font-bold
      "
    >
      Answer Review
    </h2>

  </div>

  <div
    className="
      space-y-8
      p-6
    "
  >

    {/* Correct Answer */}

    <div>

      <h3
        className="
          mb-4
          text-lg
          font-semibold
        "
      >
        Correct Answer
      </h3>

      {

        question.answerType === "single"

        ? (

          <div
            className="
              rounded-xl
              border
              border-green-600
              bg-green-500/10
              p-4
              text-green-400
            "
          >

            {

              question.options.find(

                option =>

                  option.id ===
                  question.correctOptionId

              )?.text

            }

          </div>

        )

        : (

          <div className="space-y-3">

            {

              question.options

                .filter(

                  option =>

                    question.correctOptionIds?.includes(
                      option.id
                    )

                )

                .map(

                  option => (

                    <div

                      key={option.id}

                      className="
                        rounded-xl
                        border
                        border-green-600
                        bg-green-500/10
                        p-4
                        text-green-400
                      "

                    >

                      ✔ {option.text}

                    </div>

                  )

                )

            }

          </div>

        )

      }

    </div>

    {/* Explanation */}

    <div>

      <h3
        className="
          mb-4
          text-lg
          font-semibold
        "
      >
        Explanation
      </h3>

      <div
        className="
          rounded-xl
          border
          border-zinc-700
          bg-zinc-950
          p-5
        "
      >

        <p
          className="
            leading-8
            text-zinc-300
          "
        >
          {question.explanation}
        </p>

      </div>

    </div>

    {/* Tags */}

    {

      question.tags.length > 0 && (

        <div>

          <h3
            className="
              mb-4
              text-lg
              font-semibold
            "
          >
            Related Topics
          </h3>

          <div
            className="
              flex
              flex-wrap
              gap-3
            "
          >

            {

              question.tags.map(

                tag => (

                  <span

                    key={tag}

                    className="
                      rounded-full
                      bg-zinc-800
                      px-3
                      py-1
                      text-sm
                      text-zinc-300
                    "

                  >

                    #{tag}

                  </span>

                )

              )

            }

          </div>

        </div>

      )

    }

    {/* PYQ Information */}

    {

      question.type === "pyq"

      &&

      question.exam && (

        <div>

          <h3
            className="
              mb-4
              text-lg
              font-semibold
            "
          >
            Previous Year Question
          </h3>

          <div
            className="
              rounded-xl
              border
              border-orange-700
              bg-orange-500/10
              p-5
            "
          >

            <div className="space-y-2">

              <p>

                <span className="font-semibold">

                  Commission :

                </span>

                {" "}

                {question.exam.commission}

              </p>

              <p>

                <span className="font-semibold">

                  Stage :

                </span>

                {" "}

                {question.exam.stage}

              </p>

              {

                question.exam.paper && (

                  <p>

                    <span className="font-semibold">

                      Paper :

                    </span>

                    {" "}

                    {question.exam.paper}

                  </p>

                )

              }

              <p>

                <span className="font-semibold">

                  Year :

                </span>

                {" "}

                {question.exam.year}

              </p>

            </div>

          </div>

        </div>

      )

    }

  </div>

</div>

)}

{/* =========================================
    Footer
========================================= */}

<div
  className="
    mt-10

    flex
    items-center
    justify-between

    border-t
    border-zinc-800

    pt-5
  "
>

  {/* Progress */}

  <div>

    <p
      className="
        text-sm
        text-zinc-500
      "
    >
      Question

      {" "}

      <span className="font-semibold text-white">
        {state.current + 1}
      </span>

      {" of "}

      <span className="font-semibold text-white">
        {questions.length}
      </span>

    </p>

  </div>

  {/* Buttons */}

  <div
    className="
      flex
      items-center
      gap-4
    "
  >

    {

      !state.submitted

      ? (

        <button

          onClick={actions.submit}

          disabled={

            state.selected.length === 0

          }

          className="
            rounded-xl

            bg-green-600

            px-8
            py-3

            font-semibold

            text-white

            transition-all

            hover:bg-green-500

            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >

          Submit Answer

        </button>

      )

      : (

        <button

          onClick={actions.next}

          className="
            rounded-xl

            bg-blue-600

            px-6
            py-2.5

            font-semibold

            text-white

            transition-all

            hover:bg-blue-500
          "
        >

          {

            state.current ===
            questions.length - 1

              ? "Finish Quiz"

              : "Next Question"

          }

        </button>

      )

    }

  </div>

</div>

</div>

</div>

</div>

);
}