const getAllCurrenciesRate = ({
    httpService,
    ENDPOINTS,
    BASE_URL,
    TOKEN,
}) => async ({
    date
}) => {

        const url = BASE_URL + ENDPOINTS.allCurrenciesRate(date, TOKEN)
        const response = await httpService({ url })


        if (response === undefined) {
            return undefined
        } else if (response?.status === "NOT_AUTHORIZED") {
            return 'NOT_AUTHORIZED'
        } else {
            return response?.results
        }
    }

export default getAllCurrenciesRate