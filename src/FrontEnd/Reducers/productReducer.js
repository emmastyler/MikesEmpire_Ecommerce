
import {
    PRODUCT_CREATE_FAILED,
    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_RESET,
    PRODUCT_FAILED,
    PRODUCT_REQUEST,
    PRODUCT_SUCCESS,
    PRODUCT_DETAIL_FAILED,
    PRODUCT_DETAIL_REQUEST,
    PRODUCT_DETAIL_SUCCESS,
    PRODUCT_DETAIL_RESET,
    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_FAILED,
    PRODUCT_UPDATE_SUCCESS,
    PRODUCT_UPDATE_RESET,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_FAILED

}

    from '../Constants/productConstant'

export const productStoreReducer = (state = { product: [] }, action) => {
    switch (action.type) {
        case PRODUCT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case PRODUCT_FAILED:
            return {
                loading: false,
                error: action.payload
            }
        case PRODUCT_SUCCESS:
            return {
                loading: false,
                product: action.payload
            }

        default:
            return state
    }
}

export const createProductReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_CREATE_REQUEST:
            return {

                loading: true
            }
        case PRODUCT_CREATE_FAILED:
            return {
                loading: false,
                error: action.payload
            }
        case PRODUCT_CREATE_SUCCESS:
            return {
                loading: false,
                product: action.payload,
                success: true

            }
        case PRODUCT_CREATE_RESET:
            return {

            }
        default:
            return state
    }
}

export const productDetailReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case PRODUCT_DETAIL_REQUEST:
            return {
                ...state,
                loading: true
            }
        case PRODUCT_DETAIL_FAILED:
            return {
                loading: false,
                error: action.payload
            }
        case PRODUCT_DETAIL_SUCCESS:
            return {
                loading: false,
                product: action.payload
            }
        case PRODUCT_DETAIL_RESET:
            return {

            }

        default:
            return state
    }
}

export const productUpdateReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case PRODUCT_UPDATE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case PRODUCT_UPDATE_FAILED:
            return {
                loading: false,
                error: action.payload
            }
        case PRODUCT_UPDATE_SUCCESS:
            return {
                loading: false,
                product: action.payload,
                success: true
            }
        case PRODUCT_UPDATE_RESET:
            return {

            }
        default:
            return state
    }
}

export const productDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_DELETE_REQUEST:
            return {
                loading: true
            }
        case PRODUCT_DELETE_SUCCESS:
            return {
                loading: false,
                success: true
            }
        case PRODUCT_DELETE_FAILED:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return {
                ...state
            }
    }
}