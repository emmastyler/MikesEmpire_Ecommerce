import axios from 'axios'

import { USER_LOGIN_FAILED, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../Constants/userConstant"

export const login = (email, name, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const { data } = await axios.post('api/users/login', { email, name, password })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
        localStorage.setItem('adminInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAILED,
            payload: error.response && error.response.data.messsge ? error.response.data.message : error.message,
        })
    }
}