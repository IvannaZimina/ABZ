import style from "./style.module.scss"
import { useTranslation } from "react-i18next"
import { HeaderTwo } from "../../components/header-2"
import { UserAddForm } from "../../components/user-add-form"

export const PostRequest = () => {
  const { t } = useTranslation()

  return (
    <div className={style.postRequestContainer}>
      <HeaderTwo text={t("postRequest")}/>
      <UserAddForm />
    </div>
  )
}
