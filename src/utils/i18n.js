import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import en from "../trans/en/index.json"
import ua from "../trans/ua/index.json"

const resources = {
  en: { translation: en },
  ua: { translation: ua },
}

i18n.use(initReactI18next).init({
  resources,
  lng: JSON.parse(localStorage.getItem("language")),
  fallback: "en",
})

export default i18n
