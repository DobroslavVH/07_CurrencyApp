export const BASE_URL = 'https://api.polygon.io'
export const TOKEN = '6gH40SBJMqqmUDJZi4VxhNCd4J_sUEUS'

export const REQUEST_METHOD = {
    GET: 'get',
    POST: 'POST'
}

export const ENDPOINTS = {
    allCurrenciesRate: (date, token) => `/v2/aggs/grouped/locale/global/market/fx/${date}?adjusted=true&apiKey=${token}`,

}