import dayjs from 'dayjs'

export const INITIAL_STATE = {
    selectedCurrency: 'USD',
    secondaryCurrency: '',
    tickers: [],
    selectedDate: dayjs(new Date).toISOString(),
    exchangeTransactions: []
}

export const ACTIONS = {
    SET_CURRENCY: 'set-currency',
    SET_SECONDARY_CURRENCY: 'set-secondary-currency',
    SET_TICKERS: 'set-tickers',
    SET_DATE: 'set-date',
    SET_EXCHANGE_TRANSACTIONS: 'set-exchange-transactions'
}

export default (state, actions) => {
    const { type, payload } = actions

    switch (type) {

        case ACTIONS.SET_CURRENCY:
            return {
                ...state,
                selectedCurrency: payload
            }

        case ACTIONS.SET_SECONDARY_CURRENCY:
            return {
                ...state,
                secondaryCurrency: payload
            }

        case ACTIONS.SET_TICKERS:
            return {
                ...state,
                tickers: payload
            }

        case ACTIONS.SET_DATE:
            return {
                ...state,
                selectedDate: payload
            }

        case ACTIONS.SET_EXCHANGE_TRANSACTIONS:
            return {
                ...state,
                exchangeTransactions: [...state.exchangeTransactions, payload]
            }

        default:
            return state
    }
}



