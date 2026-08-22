"use client";

import { useEffect, useState } from "react";

export function DynamicThemeFont() {
  const [fontFamily, setFontFamily] = useState<string>("Playfair Display");

  useEffect(() => {
    const fetchFont = () => {
      fetch("/api/popup", { cache: "no-store" })
        .then(res => res.json())
        .then(data => {
          if (data.success && data.popup && data.popup.fontFamily) {
            setFontFamily(data.popup.fontFamily);
          }
        })
        .catch(() => {});
    };

    fetchFont();

    // Listen for custom font update events (e.g. from Admin Panel live changes)
    const handleFontChange = (e: CustomEvent) => {
      if (e.detail) {
        setFontFamily(e.detail);
      }
    };

    window.addEventListener("themeFontChange" as any, handleFontChange);
    const interval = setInterval(fetchFont, 3000);

    return () => {
      window.removeEventListener("themeFontChange" as any, handleFontChange);
      clearInterval(interval);
    };
  }, []);

  const fontUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(fontFamily)}:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap`;

  return (
    <>
      <link rel="stylesheet" href={fontUrl} />
      <style>{`
        :root {
          --font-serif: '${fontFamily}', serif !important;
        }
        .font-serif {
          font-family: '${fontFamily}', serif !important;
        }
      `}</style>
    </>
  );
}
