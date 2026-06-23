"use client";

import { useLanguage } from "./LanguageProvider";

export default function English({
  children,
}: {
  children: React.ReactNode;
}) {

  const { language } =
    useLanguage();

  if (language !== "en")
    return null;

  return <>{children}</>;
}