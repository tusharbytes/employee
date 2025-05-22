"use client"
import React, { useEffect, useState } from 'react';

function Langswitcher() {
  const [languageConfig, setLanguageConfig] = useState(null);
  const [currentLanguage, setCurrentLanguage] = useState("en");
  console.log("languageConfig", languageConfig)
  useEffect(() => {
    // Read from global window object
    if (typeof window !== "undefined") {
      const config = window.__GOOGLE_TRANSLATION_CONFIG__;
      setLanguageConfig(config);
      setCurrentLanguage(config?.defaultLanguage || "en");
    }
  }, []);

  const switchLanguage = (lang) => {
    setCurrentLanguage(lang);
    console.log("Switched to:", lang);
    // optionally, trigger translation logic here
  };

  if (!languageConfig) return null;

  return (
    <div className="text-center notranslate">
      {languageConfig.languages.map((ld) =>
        currentLanguage === ld.name ||
          (currentLanguage === "auto" &&
            languageConfig.defaultLanguage === ld.name) ? (
          <span key={`l_s_${ld.name}`} className="mx-3 text-orange-300">
            {ld.title}
          </span>
        ) : (
          <a
            key={`l_s_${ld.name}`}
            onClick={() => switchLanguage(ld.name)}
            className="mx-3 text-blue-300 cursor-pointer hover:underline"
          >
            {ld.title}
          </a>
        )
      )}
    </div>
  );
}

export default Langswitcher;
