import style from "./style.module.scss"

export const UserCard = ({ user }) => {
  return (
    <div className={style.card}>
      <div className={style.userPhoto}>
        <img src={user.photo} alt={user.name} />
      </div>
      <p className={style.userName}>{user.name}</p>
      <p className={style.userPosition}>{user.position}</p>
      <p className={style.userEmail}>{user.email}</p>
      <p className={style.userPhone}>{user.phone}</p>
    </div>
  )
}
