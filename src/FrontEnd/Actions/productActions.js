import axios from 'axios'
import {
    PRODUCT_CREATE_FAILED,
    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_DELETE_FAILED,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DETAIL_FAILED,
    PRODUCT_DETAIL_REQUEST,
    PRODUCT_DETAIL_SUCCESS,
    PRODUCT_FAILED,
    PRODUCT_REQUEST,
    PRODUCT_SUCCESS,
    PRODUCT_UPDATE_FAILED,
    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS,

}

    from '../Constants/productConstant'

export const productStore = () => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCT_REQUEST
        })

        const { data } = await axios.get('/api/productstore')

        dispatch({
            type: PRODUCT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_FAILED,
            payload: error.response && error.response.data.messsge ? error.response.data.message : error.message,
        })
    }
}

export const createProduct = () => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCT_CREATE_REQUEST
        })

        const { data } = await axios.post('/api/product', {})

        dispatch({
            type: PRODUCT_CREATE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_CREATE_FAILED,
            payload: error.response && error.response.data.messsge ? error.response.data.message : error.message,
        })
    }
}

export const productDetail = (id) => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCT_DETAIL_REQUEST
        })

        const { data } = await axios.get(`/api/products/${id}`)

        dispatch({
            type: PRODUCT_DETAIL_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAIL_FAILED,
            payload: error.response && error.response.data.messsge ? error.response.data.message : error.message,
        })
    }
}

export const updateProduct = (product) => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCT_UPDATE_REQUEST
        })

        const { data } = await axios.put(`/api/updateproduct/${product._id}`, product,)

        dispatch({
            type: PRODUCT_UPDATE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_UPDATE_FAILED,
            payload: error.response && error.response.data.messsge ? error.response.data.message : error.message,
        })
    }
}

export const deleteProduct = (id) => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCT_DELETE_REQUEST
        })

        await axios.delete(`/api/deleteproducts/${id}`)
        dispatch({
            type: PRODUCT_DELETE_SUCCESS,
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_DELETE_FAILED,
            payload: error.response && error.response.data.messsge ? error.response.data.message : error.message,
        })
    }
}