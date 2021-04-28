import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer } from './FrontEnd/Reducers/userReducers'
import { productStoreReducer, createProductReducer, productDetailReducer, productUpdateReducer, productDeleteReducer } from './FrontEnd/Reducers/productReducer'
const reducer = combineReducers({
    userLogin: userLoginReducer,
    productStores: productStoreReducer,
    createProducts: createProductReducer,
    productDetails: productDetailReducer,
    productUpdate: productUpdateReducer,
    productDelete: productDeleteReducer
})

const userInfoFromStorage = localStorage.getItem('adminInfo') ? JSON.parse(localStorage.getItem('adminInfo')) : null


const initialState = {
    userLogin: { adminInfo: userInfoFromStorage }
}


const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store