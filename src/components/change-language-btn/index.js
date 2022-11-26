import style from "./style.module.scss"
import { handleLanguageChange } from "../../heplers/handle-language-change"
import uaFlag from "../../images/ua-flag-icon.png"
import enFlag from "../../images/en-flag-icon.png"


export const ChangeLanguageBtn = ({language, setLanguage}) => {
  return (
    <button
      className={style.changeLanguageBtn}
      onClick={() => handleLanguageChange(language, setLanguage)}
    >
      {language === "en" ? (
        <img className={style.flag} src={enFlag} alt="en" />
      ) : (
        <img className={style.flag} src={uaFlag} alt="ua" />
      )}
    </button>
  )
}
