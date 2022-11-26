/* eslint-disable default-case */
import update from "immutability-helper"
import {
  LOADING,
  LOAD_FAILED,
  USERS,
  USER_TOKEN,
  POSITIONS,
} from "./actionTypes"

const defaultState = {
  loadingStatus: "",
  users: [],
  positions: [],
  userToken: "",
}

export const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOADING: {
      return update(state, { loadingStatus: { $set: action.payload } })
    }
    case LOAD_FAILED: {
      return update(state, { loadingStatus: { $set: action.payload } })
    }
    case USERS: {
      return update(state, {
        loadingStatus: { $set: "ok" },
        users: { $set: action.payload },
      })
    }
    case POSITIONS: {
      return update(state, {
        loadingStatus: { $set: "ok" },
        positions: { $set: action.payload },
      })
    }
    case USER_TOKEN: {
      return update(state, {
        loadingStatus: { $set: "ok" },
        userToken: { $set: action.payload },
      })
    }
  }

  return state
}
