"use client";

import { useLanguage } from "./LanguageProvider";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2 mb-8">
      <button
        onClick={() => setLanguage("en")}
        className={
          language === "en"
            ? "bg-emerald-600 text-white px-4 py-2 rounded"
            : "border px-4 py-2 rounded"
        }
      >
        English
      </button>

      <button
        onClick={() => setLanguage("hi")}
        className={
          language === "hi"
            ? "bg-emerald-600 text-white px-4 py-2 rounded"
            : "border px-4 py-2 rounded"
        }
      >
        हिन्दी
      </button>
    </div>
  );
}