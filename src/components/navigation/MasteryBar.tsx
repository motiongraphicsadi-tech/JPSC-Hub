"use client";

import { useEffect, useState } from "react";

type Props = {
  topicId: string;
};

export default function MasteryBar({
    topicId,
  }: Props) {

  const [mastery, setMastery] =
    useState(0);

  useEffect(() => {

    const saved =
      localStorage.getItem(
        `study-${topicId}`
      );

    if (!saved) return;

    const data =
      JSON.parse(saved);

    setMastery(
      data.mastery ?? 0
    );

  }, [topicId]);

  return (

    <div
      className="
        flex
        items-center
        gap-3
        min-w-[180px]
      "
    >
  
      <div
        className="
          h-2
          w-24
          overflow-hidden
          rounded-full
          bg-zinc-800
        "
      >
  
        <div
          className="
            h-full
            bg-blue-500
            transition-all
          "
          style={{
            width: `${mastery}%`,
          }}
        />
  
      </div>
  
      <span
        className="
          text-xs
          font-medium
          text-blue-400
        "
      >
        {mastery}%
      </span>
  
    </div>
  
  );

}