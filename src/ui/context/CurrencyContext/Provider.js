import React, { useReducer } from "react";
import CurrencyContext from '.'
import CurrencyReducer, { ACTIONS, INITIAL_STATE } from './Reducer'

const CurrencyProvider = ({ children }) => {

    const [state, dispatch] = useReducer(CurrencyReducer, INITIAL_STATE)

    const setCurrency = currency => {
        dispatch({
            type: ACTIONS.SET_CURRENCY,
            payload: currency
        })
    }

    const setSecondaryCurrency = secondaryCurrency => {
        dispatch({
            type: ACTIONS.SET_SECONDARY_CURRENCY,
            payload: secondaryCurrency
        })
    }

    const setTickersInfo = tickers => {
        dispatch({
            type: ACTIONS.SET_TICKERS,
            payload: tickers
        })
    }

    const setDate = date => {
        dispatch({
            type: ACTIONS.SET_DATE,
            payload: date
        })
    }

    return (
        <CurrencyContext.Provider
            value={{
                ...state,
                setCurrency,
                setSecondaryCurrency,
                setTickersInfo,
                setDate
            }}
        >
            {children}
        </CurrencyContext.Provider>
    )
}

export default CurrencyProvider