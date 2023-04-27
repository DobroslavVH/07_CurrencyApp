import Rates from "../../../ui/screens/Rates";
import getAllCurrenciesRateFactory from "../../usecases/getAllCurrenciesRateFactory";

const RatesFactory = () => <Rates
    getAllCurrenciesRate={getAllCurrenciesRateFactory()}
/>

export default RatesFactory