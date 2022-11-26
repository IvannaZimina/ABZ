import style from "./style.module.scss"
import { Button } from "../../components/button"
import { HeaderTwo } from "../../components/header-2"
import { getUsersData } from "../../store/usersCreator"
import { UserCard } from "../../components/user-card"
import { useTranslation } from "react-i18next"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

export const UsersList = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users.users)

  useEffect(() => {
    getUsersData(dispatch)
  }, [dispatch])

  return (
    <div className={style.usersContainer}>
      <HeaderTwo text={t("getRequest")} id="usersList" />
      <div className={style.usersCard}>
        {users.map((user) => {
          return <UserCard user={user} key={user.id} />
        })}
      </div>
      <div className={style.showMoreBtn}>
        <Button text={t("showMoreBtn")} />
      </div>
    </div>
  )
}
