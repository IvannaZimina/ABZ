import style from "./style.module.scss"
import axios from "axios"
import { Button } from "../button"
import { getUserToken } from "../../store/usersCreator"
import { SelectForm } from "./select-form"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useSelector, useDispatch } from "react-redux"

export const UserAddForm = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const token = useSelector((state) => state.users.token)

  useEffect(() => {
    getUserToken(dispatch)
  }, [dispatch])

  const [successStatus, setSuccessStatus] = useState(false)
  const [successMessage, setSuccessMessage] = useState()
  const [errorStatus, setErrorStatus] = useState(false)
  const [errorMessage, setErrorMessage] = useState()

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    const formData = new FormData(ev.target)
    const fileField = document.querySelector('input[type="file"]')
    formData.append("photo", fileField.files[0])

    const { data } = await axios.post(
      "https://frontend-test-assignment-api.abz.agency/api/v1/users",
      formData,
      { headers: { Token: token } }
    )

    if (data.success === false) {
      displayErrorMessage(data.message)
    }

    if (data.success === true) {
      setSuccessMessage(data.message)
      setSuccessStatus(true)
    }
  }

  const displayErrorMessage = (message) => {
    setErrorMessage(message)
    setErrorStatus(true)

    setTimeout(() => {
      setErrorStatus(false)
    }, 3000)
  }

  useEffect(() => {
    if (successStatus) {
      setTimeout(() => {
        setSuccessStatus(false)
      }, 5000)
    }
  }, [successStatus])

  return (
    <div className={style.userAddedForm}>
      {errorStatus && <p className={style.formIncorrect}>{errorMessage}</p>}

      {!successStatus && (
        <>
          <form onSubmit={handleSubmit}>
            <section className={style.personalData}>
              <label className={style.inputName}>
                <input
                  type="text"
                  name="name"
                  placeholder={t("yourName")}
                  pattern="[A-Za-z]{2,60}"
                />
              </label>
              <label className={style.inputEmail}>
                <input type="text" name="email" placeholder={t("email")} />
              </label>
              <label className={style.inputPhone}>
                <input type="tel" name="phone" placeholder={t("phone")} />
              </label>
            </section>

            <section className={style.selectInput}>
              <SelectForm />
            </section>

            <section className={style.userPhoto}>
              <div
                className={style.fileUploadWrapper}
                data-text={t("uploadPhoto")}
              >
                <input
                  name="photo"
                  type="file"
                  accept=".jpg, .jpeg"
                  className={style.fileUploadField}
                  max-size="5000"
                />
              </div>
            </section>

            <Button text={t("signUpBtn")} type="submit" />
          </form>
        </>
      )}

      {successStatus && <p className={style.formSuccess}>{successMessage}</p>}
    </div>
  )
}
