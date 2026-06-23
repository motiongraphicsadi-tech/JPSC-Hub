"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type Language = "en" | "hi";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext =
  createContext<LanguageContextType>({
    language: "en",
    setLanguage: () => {},
  });

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [language, setLanguage] =
    useState<Language>("en");

  // Load saved preference
  useEffect(() => {
    const saved =
      localStorage.getItem("language");

    if (
      saved === "en" ||
      saved === "hi"
    ) {
      setLanguage(saved);
    }
  }, []);

  // Save preference
  useEffect(() => {
    localStorage.setItem(
      "language",
      language
    );
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(
    LanguageContext
  );
}