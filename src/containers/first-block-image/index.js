import { useTranslation } from "react-i18next"
import style from "./style.module.scss"
import { Button } from "../../components/button"

export const FirstBlockImage = () => {
  const { t } = useTranslation()

  return (
    <div className={style.firstBlockImageContainer}>
      <h1>{t("title")}</h1>
      <p>{t("subtitle")}</p>
      <Button text={t("signUpBtn")} />
    </div>
  )
}
