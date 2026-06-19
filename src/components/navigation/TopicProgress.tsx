type Props = {
  current: number;
  total: number;
};

export default function TopicProgress({
  current,
  total,
}: Props) {

  return (

    <div>

      <p
        className="
          text-xs
          font-medium
          tracking-wide
          text-zinc-500
        "
      >

        Topic

        <span
          className="
            ml-1
            text-blue-400
          "
        >
          {current}
        </span>

        <span className="mx-1">
          of
        </span>

        <span
          className="
            text-zinc-300
          "
        >
          {total}
        </span>

      </p>

    </div>

  );

}