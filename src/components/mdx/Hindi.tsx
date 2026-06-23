"use client";

import { useLanguage } from "./LanguageProvider";

export default function Hindi({
  children,
}: {
  children: React.ReactNode;
}) {

  const { language } =
    useLanguage();

  if (language !== "hi")
    return null;

  return <>{children}</>;
}