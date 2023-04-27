import getAllCurrenciesRate from "../../domain/usecases/getAllCurrenciesRate";
import { ENDPOINTS, BASE_URL, TOKEN, REQUEST_METHOD } from "../../ui/core/api";
import httpServiceFactory from '../infra/httpServiceFactory'

const getAllCurrenciesRateFactory = () => getAllCurrenciesRate({
    httpService: httpServiceFactory(),
    ENDPOINTS,
    BASE_URL,
    TOKEN,
    REQUEST_METHOD
})

export default getAllCurrenciesRateFactory