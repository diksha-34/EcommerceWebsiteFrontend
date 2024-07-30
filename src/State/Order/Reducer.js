import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType"

const initialState = {
    orders: [],
    loading: false,
    error: null,
    order: null
}
export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ORDER_REQUEST:
            return {...state, loading: true, error:null}

        case CREATE_ORDER_SUCCESS:
            return {...state, order:action.payload, loading: false, success:true, error:null }

        case CREATE_ORDER_FAILURE:
            return {...state, loading: false, error: action.payload }

       
        case GET_ORDER_BY_ID_REQUEST:
            return {...state, loading: true, error:null}

        case GET_ORDER_BY_ID_SUCCESS:
            return {...state, error:null, order:action.payload, loading: false, success:true }

        case GET_ORDER_BY_ID_FAILURE:
            return {...state, loading: false, error: action.payload }

        default:
            return state;
    }
}