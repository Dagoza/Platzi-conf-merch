import { useState } from 'react'
import initialState from '../initialState';

export const useInitialState = () => {
    const [state, setState] = useState(initialState);
    const addToCart = payload => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        })
    }
    const removeFromCart = payload => {
        setState({
            ...state,
            cart: state.cart.splice(payload,1)
        })
    }

    const addToBuyer = payload => {
        setState({
            ...state,
            buyer: payload
        })
    }

    const addNewOrder = payload => {
        setState({
            ...state,
            orders: [...state.orders, payload]
        })

    }

    return {
        state,
        addToCart,
        removeFromCart,
        addToBuyer,
        addNewOrder
    }
}
