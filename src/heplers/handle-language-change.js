import i18n from "../utils/i18n"

export const handleLanguageChange = (language, setLanguage) => {
  if (language === "en") {
    i18n.changeLanguage("ua")
    setLanguage("ua")
  } else if (language === "ua") {
    i18n.changeLanguage("en")
    setLanguage("en")
  }
}
