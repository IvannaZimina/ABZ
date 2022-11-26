import { combineReducers } from "redux"
import { configureStore } from "@reduxjs/toolkit"
import { usersReducer } from "./usersReducer"

const reducers = combineReducers({
  users: usersReducer,
})

const store = configureStore({ reducer: reducers })

export default store
