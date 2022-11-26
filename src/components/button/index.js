import style from "./style.module.scss"

export const Button = ({ text }) => {
  return <button className={style.navBtn}>{text}</button>
}
