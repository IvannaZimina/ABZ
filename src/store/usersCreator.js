import * as actTypes from "./actionTypes"
import axios from "axios"

const actionOne = () => {
  const action = { type: actTypes.LOADING, payload: "isLoading" }
  return action
}

const actionTwo = async () => {
  const { data } = await axios.get(
    "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6"
  )

  if (!data) {
    const action = { type: actTypes.LOAD_FAILED, payload: "loadFail" }
    return action
  }

  const action = { type: actTypes.USERS, payload: data.users }
  return action
}

export const getUsersData = async (dispatch, payload) => {
  dispatch(actionOne())
  dispatch(await actionTwo(payload))
}

export const getPositions = async (dispatch) => {
  const { data } = await axios.get(
    "https://frontend-test-assignment-api.abz.agency/api/v1/positions"
  )

  if (!data) {
    const action = { type: actTypes.LOAD_FAILED, payload: "loadFail" }
    return action
  }

  return dispatch({ type: actTypes.POSITIONS, payload: data.positions })
}

export const getUserToken = async (dispatch) => {
  const { data } = await axios.get(
    "https://frontend-test-assignment-api.abz.agency/api/v1/token"
  )

  if (!data) {
    const action = { type: actTypes.LOAD_FAILED, payload: "loadFail" }
    return action
  }

  return dispatch({ type: actTypes.USER_TOKEN, payload: data.token })
}
