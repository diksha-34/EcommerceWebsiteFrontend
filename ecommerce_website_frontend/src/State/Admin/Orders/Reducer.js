import { CONFIRMED_ORDERS_REQUEST, CONFIRMED_ORDERS_SUCCESS, DELETE_ORDERS_FAILURE, DELETE_ORDERS_REQUEST, DELETE_ORDERS_SUCCESS, DELIVERED_ORDERS_REQUEST, DELIVERED_ORDERS_SUCCESS, GET_ORDERS_FAILURE, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS, PLACED_ORDERS_REQUEST, PLACED_ORDERS_SUCCESS, SHIP_ORDERS_FAILURE, SHIP_ORDERS_REQUEST, SHIP_ORDERS_SUCCESS } from "./ActionType"

const initialState = {
    loading: false,
    error: "",
    orders: []
}
export const adminOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDERS_REQUEST:
            return {...state, loading: true, error:null}

        case GET_ORDERS_SUCCESS:
            return {...state, order:action.payload, loading: false, error:null }

        case GET_ORDERS_FAILURE:
            return {...state, loading: false, error: action.payload }

       
        case CONFIRMED_ORDERS_REQUEST:
        case PLACED_ORDERS_REQUEST:
        case DELIVERED_ORDERS_REQUEST:
        case DELETE_ORDERS_REQUEST:
        case SHIP_ORDERS_REQUEST:
            return {...state, loading: true, error:null}

        case CONFIRMED_ORDERS_SUCCESS:
            return {...state, error:null, confirmed:action.payload, loading: false }
        
        case PLACED_ORDERS_SUCCESS:
            return {...state, error:null, placed:action.payload, loading: false }
        
        case DELIVERED_ORDERS_SUCCESS:
            return {...state, error:null, delivered:action.payload, loading: false }
        
        case SHIP_ORDERS_SUCCESS:
            return {...state, error:null, shipped:action.payload, loading: false }
        
        case DELETE_ORDERS_SUCCESS:
            return {...state, error:null, deletedOrder:action.payload, loading: false }

        case DELETE_ORDERS_FAILURE:
            return {...state, loading: false, error: action.payload }
        
        case SHIP_ORDERS_FAILURE:
            return {...state, loading: false, error: action.payload }

        default:
            return state;
    }
}