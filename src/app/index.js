import style from "./style.module.scss"
import { Navbar } from "../containers/navbar"
import { FirstBlockImage } from "../containers/first-block-image"
import { UsersList } from "../containers/users-list"
import { PostRequest } from "../containers/post-request"

export const App = () => {
  return (
    <div className={style.mainContainer}>
      <Navbar />
      <FirstBlockImage />
      <UsersList />
      <PostRequest />
    </div>
  )
}

export default App
