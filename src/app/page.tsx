

import { popularArticles } from "@/data/popularArticles";

export default function HomePage() {

  const scrollingArticles = [
    ...popularArticles,
    ...popularArticles,
  ];
  return (
    <main
      className="
        min-h-screen
        bg-black
        text-white
        px-6
        pt-28
        pb-24
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          grid
          lg:grid-cols-[1fr_320px]
          gap-12
        "
      >
        {/* LEFT CONTENT */}
        <div>

          {/* HERO */}
          <section className="max-w-5xl">

                <p
                 className="
                   text-xs
                   md:text-sm
                   uppercase
                   tracking-[0.25em]
                   text-zinc-500
                   mb-5
                 "
               >
                 JPSCHUB.COM
               </p>               

               <h1
                  className="
                    text-4xl
                    md:text-5xl
                    font-bold
                    tracking-tight
                    leading-[1.05]
                  "
                >
                  Prepare for JPSC{" "}
                                  <span className="text-blue-400 md:text-2xl">
                    the Smart Way.
                  </span>
                </h1>                            

          

          </section>

          {/* CATEGORY SECTION */}
          <section className="mt-24">

           

            <div
              className="
                
                mt-10
                grid
                gap-6
                md:grid-cols-2
                xl:grid-cols-3
              "
            >

              <a
                href="/prelims/history/introduction"
                className="
                  group
                  rounded-2xl
                  border
                  border-zinc-800
                  bg-zinc-950
                  p-6
                  transition-all
                  duration-200
                  hover:border-blue-500
                  hover:bg-zinc-900
                  hover:-translate-y-1
                "
              >
                <h3 className="text-xl font-semibold text-blue-400">
                Prelims 📘
                </h3>

                <p className="mt-3 text-zinc-400">
                History, Geography, Polity, Economy and General Science.
                </p>
              </a>

              <a
                href="/mains/gs1/introduction"
                className="
                  group
                  rounded-2xl
                  border
                  border-zinc-800
                  bg-zinc-950
                  p-6
                  transition-all
                  duration-200
                  hover:border-blue-500
                  hover:bg-zinc-900
                  hover:-translate-y-1
                "
              >
                <h3 className="text-xl font-semibold text-blue-400">
                Mains ✍️
                </h3>

                <p className="mt-3 text-zinc-400">
                GS I, GS II, GS III, GS IV, Essay and Language Papers.
                </p>
              </a>

              <a
                href="/jharkhand-gk/history/introduction"
                className="
                  group
                  rounded-2xl
                  border
                  border-zinc-800
                  bg-zinc-950
                  p-6
                  transition-all
                  duration-200
                  hover:border-blue-500
                  hover:bg-zinc-900
                  hover:-translate-y-1
                "
              >
                <h3 className="text-xl font-semibold text-blue-400">
                Jharkhand GK 🌏
                </h3>

                <p className="mt-3 text-zinc-400">
                Process safety, hazards, incidents, and risk awareness.
                </p>
              </a>

              <a
  href="/current-affairs/introduction"
  className="
    group
    rounded-2xl
    border
    border-zinc-800
    bg-zinc-950
    p-6
    transition-all
    duration-200
    hover:border-blue-500
    hover:bg-zinc-900
    hover:-translate-y-1
  "
>
  <h3 className="text-xl font-semibold text-blue-400">
    Current Affairs 📰
  </h3>

  <p className="mt-3 text-zinc-400">
    Daily, Monthly and Exam-Oriented Current Affairs.
  </p>
</a>

              {/*<a
                href="/case-studies/startup/introduction"
                className="
                  group
                  rounded-2xl
                  border
                  border-zinc-800
                  bg-zinc-950
                  p-6
                  transition-all
                  duration-200
                  hover:border-blue-500
                  hover:bg-zinc-900
                  hover:-translate-y-1
                "
              >
                <h3 className="text-xl font-semibold text-blue-400">
                  Case Studies 📊
                </h3>

                <p className="mt-3 text-zinc-400">
                  Learn from real industrial incidents and investigations.
                </p>
              </a>

              <a
                href="/tools/calculators/introduction"
                className="
                  group
                  rounded-2xl
                  border
                  border-zinc-800
                  bg-zinc-950
                  p-6
                  transition-all
                  duration-200
                  hover:border-blue-500
                  hover:bg-zinc-900
                  hover:-translate-y-1
                "
              >
                <h3 className="text-xl font-semibold text-blue-400">
                  Tools 🧮
                </h3>

                <p className="mt-3 text-zinc-400">
                  Engineering calculators and practical utilities.
                </p>
              </a>*/}

            </div>

          </section>

        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="hidden lg:block">

  <div
    className="
      sticky
      top-24
      h-[550px]
      overflow-hidden
    "
  >

    <div className="article-scroll">

      <div className="space-y-4">

        {scrollingArticles.map((article, index) => (

          <a
            key={`${article.title}-${index}`}
            href={article.href}
            className="
              block
              rounded-2xl
              border
              border-zinc-800
              bg-zinc-950
              p-4

              transition-all
              duration-200

              hover:border-blue-500
            "
          >

            <p className="text-xs text-blue-400">
              {article.category}
            </p>

            <h4 className="mt-2 font-medium">
              {article.title}
            </h4>

          </a>

        ))}

      </div>

    </div>

  </div>

</aside>

      </div>
    </main>
  );
}

