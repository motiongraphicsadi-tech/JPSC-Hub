"use client";

import { useEffect, useState } from "react";

type Props = {
  topicId: string;
};

export default function StudyTracker({
  topicId,
}: Props) {

  console.log(
    "TOPIC ID:",
    topicId
  );

  const [completed, setCompleted] =
    useState(false);

  const [confidence, setConfidence] =
    useState(3);

  const [revisionNeeded, setRevisionNeeded] =
    useState(false);

  const [pyqsSolved, setPyqsSolved] =
    useState(0);

  const [lastUpdated, setLastUpdated] =
    useState("");

    const [loaded, setLoaded] =
    useState(false);

    useEffect(() => {

      const saved =
        localStorage.getItem(
          `study-${topicId}`
        );
    
      if (saved) {
    
        const data =
          JSON.parse(saved);
    
        setCompleted(
          data.completed ?? false
        );
    
        setConfidence(
          data.confidence ?? 3
        );
    
        setRevisionNeeded(
          data.revisionNeeded ?? false
        );
    
        setPyqsSolved(
          data.pyqsSolved ?? 0
        );
    
        setLastUpdated(
          data.lastUpdated ?? ""
        );
    
      }
    
      setLoaded(true);
    
    }, [topicId]);

    useEffect(() => {

      if (!loaded) return;
    
      const data = {
        completed,
        confidence,
        revisionNeeded,
        pyqsSolved,
        lastUpdated:
          new Date().toISOString(),
      };
    
      localStorage.setItem(
        `study-${topicId}`,
        JSON.stringify(data)
      );
    
      setLastUpdated(
        data.lastUpdated
      );
    
    }, [
      loaded,
      topicId,
      completed,
      confidence,
      revisionNeeded,
      pyqsSolved,
    ]);

  /*
    SCORE FORMULA

    Completed = 40

    Confidence:
    1 -> 8
    2 -> 16
    3 -> 24
    4 -> 32
    5 -> 40

    PYQ Bonus:
    max 20

    Revision Needed:
    -20
  */

  const score = Math.max(
    0,

    Math.min(
      100,

      (completed ? 40 : 0) +

      confidence * 8 +

      Math.min(
        pyqsSolved,
        20
      ) -

      (
        revisionNeeded
          ? 20
          : 0
      )
    )
  );

  return (

    <div
      className="
        mt-10

        rounded-2xl

        border
        border-zinc-800

        bg-zinc-950

        p-6
      "
    >

      <h3
        className="
          mb-6

          text-lg
          font-semibold

          text-blue-400
        "
      >
        Study Tracker
      </h3>

      {/* SCORE */}

      <div className="mb-6">

        <div
          className="
            flex
            items-center
            justify-between

            mb-2
          "
        >

          <p
            className="
              text-sm
              text-zinc-400
            "
          >
            Topic Score
          </p>

          <p
            className="
              text-sm
              font-semibold
              text-blue-400
            "
          >
            {score}%
          </p>

        </div>

        <div
          className="
            h-3

            rounded-full

            bg-zinc-800

            overflow-hidden
          "
        >

          <div
            className="
              h-full

              bg-blue-500

              transition-all
              duration-300
            "
            style={{
              width: `${score}%`,
            }}
          />

        </div>

      </div>

      {/* COMPLETED */}

      <label
        className="
          flex
          items-center
          gap-3

          mb-5

          text-sm
        "
      >

        <input
          type="checkbox"
          checked={completed}
          onChange={(e) =>
            setCompleted(
              e.target.checked
            )
          }
        />

        Mark Topic Completed

      </label>

      {/* CONFIDENCE */}

      <div className="mb-5">

        <p
          className="
            mb-2

            text-sm

            text-zinc-400
          "
        >
          Confidence Level
        </p>

        <select
          value={confidence}
          onChange={(e) =>
            setConfidence(
              Number(
                e.target.value
              )
            )
          }
          className="
            w-full

            rounded-lg

            border
            border-zinc-800

            bg-zinc-900

            px-3
            py-2

            text-sm
          "
        >

          <option value={1}>
            🔴 Very Weak
          </option>

          <option value={2}>
            🟠 Weak
          </option>

          <option value={3}>
            🟡 Average
          </option>

          <option value={4}>
            🔵 Strong
          </option>

          <option value={5}>
            🟢 Mastered
          </option>

        </select>

      </div>

      {/* REVISION */}

      <label
        className="
          flex
          items-center
          gap-3

          mb-5

          text-sm
        "
      >

        <input
          type="checkbox"
          checked={revisionNeeded}
          onChange={(e) =>
            setRevisionNeeded(
              e.target.checked
            )
          }
        />

        Needs Revision

      </label>

      {/* PYQS */}

      <div className="mb-5">

        <p
          className="
            mb-2

            text-sm

            text-zinc-400
          "
        >
          PYQs Solved
        </p>

        <input
          type="number"
          min={0}

          value={pyqsSolved}

          onChange={(e) =>
            setPyqsSolved(
              Number(
                e.target.value
              )
            )
          }

          className="
            w-full

            rounded-lg

            border
            border-zinc-800

            bg-zinc-900

            px-3
            py-2

            text-sm
          "
        />

      </div>

      {/* STATUS */}

      <div
        className="
          mt-6

          border-t
          border-zinc-800

          pt-4
        "
      >

        <p
          className="
            text-xs
            text-zinc-500
          "
        >
          Topic ID
        </p>

        <p
          className="
            text-xs

            break-all

            text-zinc-400
          "
        >
          {topicId}
        </p>

        {lastUpdated && (

          <p
            className="
              mt-3

              text-xs

              text-zinc-500
            "
          >
            Last Updated:
            {" "}
            {new Date(
              lastUpdated
            ).toLocaleString()}
          </p>

        )}

      </div>

    </div>

  );
}