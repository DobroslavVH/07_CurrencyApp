import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { useInfiniteQuery } from "react-query";
import CurrencyContext from "../context/CurrencyContext";
import { queryType } from "../core/query";
import dayjs from 'dayjs'

const useAllCurrenciesRate = ({
    date,
    getAllCurrenciesRate,
    basedTo
}) => {

    const navigation = useNavigation()
    const { selectedDate } = useContext(CurrencyContext)

    const messageDate = dayjs(selectedDate).date()
    const messageDay = dayjs(selectedDate).format('MMMM')

    const { data, isLoading, refetch, isFetching } = useInfiniteQuery(queryType.allCurrenciesQuery, () => getAllCurrenciesRate({ date }))

    const allData = data?.pages[0]

    let currencies

    if ((!isLoading && !isFetching) && allData === 'NOT_AUTHORIZED') {
        navigation.navigate('ToastMessage', {
            message:
                `No data for ${messageDate} ${messageDay}, please select another date.`
        })
    } else {
        currencies = allData !== 'NOT_AUTHORIZED'
            ? allData?.filter(item => item?.T?.substring(2, 5) === basedTo)
            : []
    }

    return {
        rowData: allData || [],
        allCurrencies: currencies || [],
        allCurrenciesLoading: isFetching,
        allCurrenciesRefresh: refetch
    }
}

export default useAllCurrenciesRate