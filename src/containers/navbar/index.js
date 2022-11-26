import { useTranslation } from "react-i18next"
import logo from "../../images/Logo.svg"
import style from "./style.module.scss"
import { ChangeLanguageBtn } from "../../components/change-language-btn"
import { Button } from "../../components/button"
import { useLocalStorage } from "../../hooks/use-local-storage"

export const Navbar = () => {
  const { t } = useTranslation()
  const [language, setLanguage] = useLocalStorage("language", "en")

  return (
    <header className={style.headerContainer}>
      <div className={style.logoMain}>
        <img src={logo} alt="logo" title="Home" />
      </div>

      <div className={style.navBarButtons}>
        <ChangeLanguageBtn language={language} setLanguage={setLanguage} />
        <Button text={t("usersBtn")} />
        <Button text={t("signUpBtn")} />
      </div>
    </header>
  )
}
