import { actionTypes, responceTypes } from '../../utils/constant'

const initialState = {
    isLoading: false,
    message: null,
    status: "",
    users: [],
    selectedUser: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_USER_PENDING:
            state = {
                ...state,
                isLoading: true,
                status: responceTypes.pending,
                message: "Please wait while products are fetching!"
            }
            return state
        case actionTypes.GET_USER_SUCCESS:
            state = {
                ...state,
                isLoading: false,
                status: responceTypes.success,
                message: "Products are fetched Successfuly!",
                users: action.payload.data || []
            }
            return state

        case actionTypes.GET_USER_FAILED:
            state = {
                ...state,
                isLoading: false,
                status: responceTypes.failed,
                message: action.payload.message,
                users: []
            }
            return state

        //find with id
        case actionTypes.GET_USER_BY_ID_PENDING:
            state = {
                ...state,
                isLoading: true,
                status: reportError.pending,
                message: "please wait while products fetching!"
            }
            return state
        case actionTypes.GET_USER_BY_ID_SUCCESS:
            state = {
                ...state,
                isLoading: false,
                status: responceTypes.success,
                message: "Products are fetched successfully!",
                selectedUser: action.payload.data
            }
            return state

        case actionTypes.GET_USER_BY_ID_FAILED:
            state = {
                ...state,
                isLoading: false,
                status: responceTypes.failed,
                message: action.payload.message,
                selectedUser: null
            }
            return state

        default: return state
    }
}
export default userReducer