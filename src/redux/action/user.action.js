import axios from "axios"
import { actionTypes, API_BASE_URL } from "../../utils/constant"

export const getAllUser = () => {
    return async dispatch => {
        dispatch({
            type: actionTypes.GET_USER_PENDING
        })
        try {
            const responce = await axios.get(`${API_BASE_URL}/users`)
            console.log("responce", responce)
            dispatch({
                type: actionTypes.GET_USER_SUCCESS,
                payload: {
                    data: responce.data
                }
            })
        } catch (error) {
            dispatch({
                type: actionTypes.GET_USER_FAILED,
                payload: {
                    message: "Somthing went wrong"
                }
            })
        }
    }
}

//GET USER BY ID
export const getUserById = (id) => {
    return async dispatch => {
        dispatch({
            type: actionTypes.GET_USER_BY_ID_PENDING
        })
        try {
            const responce = await axios.get(`${API_BASE_URL}/users/${id}`)
            console.log("responce_with_id=>>>>>>", responce)
            dispatch({
                type: actionTypes.GET_USER_BY_ID_SUCCESS,
                payload: {
                    data: responce.data
                }
            })
        } catch (error) {
            dispatch({
                type: actionTypes.GET_USER_BY_ID_FAILED,
                payload: {
                    message: "something went wrong"
                }
            })
        }
    }
}