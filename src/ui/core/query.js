import { QueryClient } from 'react-query'

export const reactQuery = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnMount: true,
            retry: true
        }
    }
})

export const queryType = {
    allCurrenciesQuery: 'allCurrenciesQuery'
}