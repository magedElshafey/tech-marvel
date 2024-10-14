import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const AppInitialzation = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    localStorage.setItem("lang", JSON.stringify(i18n.language));
    document.documentElement.setAttribute("lang", i18n.language);
    document.body.style.direction = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return null;
};

export default AppInitialzation;
