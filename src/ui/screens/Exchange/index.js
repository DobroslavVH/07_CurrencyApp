import React, { useEffect, useState } from 'react'
import ExchangeHeader from './components/ExchangeHeader'
import Body from '../../components/Body'
import ExchangesList from './components/ExchangesList'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import { storageKey } from '../../core/storageKeys'

const Exchange = () => {

    const [transactions, setTransactions] = useState([])
    const [refreshing, setRefreshing] = useState(false)

    const { getItem, setItem } = useAsyncStorage(storageKey.transactions)

    const readItemFromStorage = async () => {
        const item = await getItem()
        setTransactions(JSON.parse(item))
    }

    const onRefresh = () => {
        setRefreshing(true)
        readItemFromStorage()
        setTimeout(() => {
            setRefreshing(false)
        }, 200)
    }

    useEffect(() => {
        readItemFromStorage()
    }, [])

    return (
        <Body>
            <ExchangeHeader
                onRefresh={onRefresh}
            />
            <ExchangesList
                transactions={transactions}
                refreshing={refreshing}
                onRefresh={onRefresh}
            />
        </Body>
    )
}

export default Exchange