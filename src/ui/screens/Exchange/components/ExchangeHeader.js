import { View, StyleSheet } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import CurrencyHeader from '../../../components/CurrencyHeader'
import CurrencyContext from '../../../context/CurrencyContext'
import { borderRadius, spacing } from '../../../core/constants/spacing'
import { colors } from '../../../core/constants/colors'
import SubmitCalculateValue from '../../../components/SubmitCalculateValue'
import SubmitButton from '../../../components/buttons/SubmitButton'
import { storageKey } from '../../../core/storageKeys'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import EraseButton from '../../../components/buttons/EraseButton'

const ExchangeHeader = ({
    onRefresh
}) => {
    const navigation = useNavigation()
    const [primaryCurrencyAmount, setPrimaryCurrencyAmount] = useState()
    const [secondaryCurrencyAmount, setSecondaryCurrencyAmount] = useState()

    const [transactionObject, setTransactionObject] = useState([])

    const pastTransactions = async () => {
        const transactions = await getItem()
        if (transactions === null) {
            setTransactionObject([])
        } else {
            setTransactionObject(JSON.parse(transactions))
        }
    }

    useEffect(() => {
        pastTransactions()
    }, [])

    useEffect(() => {
        if (secondaryCurrency === '') {
            setTimeout(() => {
                navigation.navigate('ToastMessage', { message: ' Please select second currency!' })
            }, 500)
        }
    }, [])

    const {
        selectedDate,
        selectedCurrency,
        secondaryCurrency,
        setCurrency,
        setSecondaryCurrency
    } = useContext(CurrencyContext)

    const onChangeCurrencies = () => {
        setCurrency(secondaryCurrency)
        setSecondaryCurrency(selectedCurrency)
    }

    const { getItem, setItem } = useAsyncStorage(storageKey.transactions)

    useEffect(() => {
        const newTransaction = {
            transactionDate: selectedDate,
            primaryCurrency: selectedCurrency,
            primaryCurrencyAmount: primaryCurrencyAmount,
            secondaryCurrency: secondaryCurrency,
            secondaryCurrencyAmount: secondaryCurrencyAmount
        }
        if (primaryCurrencyAmount !== '') {
            setTransactionObject([newTransaction, ...transactionObject])
        }
    }, [primaryCurrencyAmount])

    const onExchangePress = async () => {
        setItem(JSON.stringify(transactionObject))
        onRefresh()
    }

    const onErase = () => {
        setTransactionObject([])
        onRefresh()
    }

    return (
        <View style={styles.container}>
            <CurrencyHeader
                firstCountryCurrency={selectedCurrency}
                lowestPriceShort={''}
                secondCountryCurrency={secondaryCurrency}
                onChangeCurrencies={onChangeCurrencies}
            />
            <View style={styles.exchangeContainer}>
                <SubmitCalculateValue
                    setPrimaryCurrencyAmount={setPrimaryCurrencyAmount}
                    setSecondaryCurrencyAmount={setSecondaryCurrencyAmount}
                />
            </View>
            <View style={styles.submitButtonContainer}>
                <SubmitButton
                    title={'Exchange'}
                    titleColor={colors.green}
                    backgroundColor={colors.lightGray}
                    size={'medium'}
                    onPress={onExchangePress}
                    disable={(secondaryCurrencyAmount === undefined || secondaryCurrencyAmount === 0) ? true : false}
                />
                <EraseButton
                    onRefresh={onErase}
                />
            </View>
        </View>
    )
}

export default ExchangeHeader

const styles = StyleSheet.create({
    container: {
        maxHeight: 300,
        margin: spacing.s2,
        paddingHorizontal: spacing.s1,
        paddingBottom: spacing.s2,
        borderBottomWidth: 0.3,
        borderRadius: borderRadius.small,
        borderColor: colors.gray
    },
    submitButtonContainer: {
        width: '100%',
        marginTop: spacing.s4,
        marginBottom: spacing.s1,
        alignItems: 'center'
    },
    exchangeContainer: {
        width: '80%',
        justifyContent: 'center',
        marginLeft: '10%'
    }
})