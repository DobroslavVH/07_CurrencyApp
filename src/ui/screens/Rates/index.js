import React, { useContext, useEffect } from 'react'
import useAllCurrenciesRate from '../../hooks/useAllCurrenciesRate'
import CountriesList from './components/CountriesList'
import Body from '../../components/Body'
import CurrencyContext from '../../context/CurrencyContext'
import Header from './components/Header'
import dayjs from 'dayjs'

const Rates = ({
    getAllCurrenciesRate
}) => {

    const { selectedCurrency, setDate, selectedDate } = useContext(CurrencyContext)

    useEffect(() => {
        setDate(dayjs(new Date).toISOString())
    }, [])

    const { rowData,
        allCurrencies,
        allCurrenciesLoading,
        allCurrenciesRefresh
    } = useAllCurrenciesRate({
        date: selectedDate?.substring(0, 10).toString(),
        getAllCurrenciesRate: getAllCurrenciesRate,
        basedTo: selectedCurrency
    })

    useEffect(() => {
        allCurrenciesRefresh()
    }, [selectedDate])

    return (
        <Body>
            <Header />
            <CountriesList
                refreshing={allCurrenciesLoading}
                onRefresh={allCurrenciesRefresh}
                rowData={rowData}
                allCurrencies={allCurrencies}
                extraData={selectedDate}
            />
        </Body>
    )
}

export default Rates