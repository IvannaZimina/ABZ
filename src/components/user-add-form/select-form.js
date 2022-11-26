import style from "./style.module.scss"
import { getPositions } from "../../store/usersCreator"
import { useTranslation } from "react-i18next"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

export const SelectForm = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const positions = useSelector((state) => state.users.positions)

  useEffect(() => {
    getPositions(dispatch)
  }, [dispatch])

  const selectInputPosition = positions.map((item) => (
    <label key={item.id}>
      <input name="position_id" type="radio" value={item.id} />
      <p>{item.name}</p>
    </label>
  ))

  return (
    <>
      <p className={style.titleSelect}>{t("selectPosition")}</p>
      {selectInputPosition}
    </>
  )
}
