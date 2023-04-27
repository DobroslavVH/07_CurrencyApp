import { View, Text, StyleSheet } from 'react-native'
import React, { useContext, useState } from 'react'
import { colors } from '../../../core/constants/colors'
import { borderRadius, spacing } from '../../../core/constants/spacing'
import { fontSize } from '../../../core/constants/fonts'
import SubmitButton from '../../../components/buttons/SubmitButton'
import CurrencyContext from '../../../context/CurrencyContext'
import { useNavigation } from '@react-navigation/native'
import CurrencyHeader from '../../../components/CurrencyHeader'

const CountryCurrencyDetails = ({ route }) => {

    const navigation = useNavigation()

    const { countryCurrency, rowData } = route.params

    const [countryCurrencyInfo, setCountryCurrencyInfo] = useState(countryCurrency)

    const { setCurrency, setSecondaryCurrency, selectedCurrency, setTickersInfo } = useContext(CurrencyContext)

    const firstCountryCurrency = countryCurrencyInfo?.T?.substring(2, 5)
    const secondCountryCurrency = countryCurrencyInfo?.T?.substring(5, 8)

    const closePrice = countryCurrencyInfo?.c?.toFixed(5) || '-'
    const lowestPriceShort = countryCurrencyInfo?.l?.toFixed(3)
    const lowestPrice = countryCurrencyInfo?.l?.toFixed(5) || '-'
    const highestPrice = countryCurrencyInfo?.h?.toFixed(5) || '-'
    const numberOfTransactions = countryCurrencyInfo?.n || '-'
    const openPrice = countryCurrencyInfo?.c?.toFixed(5) || '-'
    const tradingVolume = countryCurrencyInfo?.v || '-'
    const volumeWeightedAveragePrice = countryCurrencyInfo?.vw || '-'

    const disable = selectedCurrency === secondCountryCurrency

    const onChangeCurrencies = () => {
        const currentTicker = secondCountryCurrency + firstCountryCurrency
        const newTicker = rowData?.find(item => item?.T?.substring(2, 8) === currentTicker)
        setCountryCurrencyInfo(newTicker)
    }

    const onCurrencySelect = () => {
        setCurrency(secondCountryCurrency)
        navigation.goBack()
    }

    const onExchange = () => {
        const primaryTicker = rowData?.find(item => item?.T?.substring(2, 8) === (firstCountryCurrency + secondCountryCurrency))
        const secondaryTicker = rowData?.find(item => item?.T?.substring(2, 8) === (secondCountryCurrency + firstCountryCurrency))

        setCurrency(firstCountryCurrency)
        setSecondaryCurrency(secondCountryCurrency)
        setTickersInfo([primaryTicker, secondaryTicker])

        navigation.goBack()
        setTimeout(() => {
            navigation.navigate('Exchange')
        }, 200)

    }

    const headerInfo = () => {
        return (
            <CurrencyHeader
                firstCountryCurrency={firstCountryCurrency}
                lowestPriceShort={lowestPriceShort}
                secondCountryCurrency={secondCountryCurrency}
                onChangeCurrencies={onChangeCurrencies}
                primaryCurrencyValue
            />
        )
    }

    const InfoRow = ({ label, value, currency }) => {
        return (
            <View style={styles.rowContainer}>
                <Text style={styles.labelText}>{label}</Text>
                <View style={styles.secondCountryContainer}>
                    <Text style={styles.currencyValueText}>{value}</Text>
                    <Text style={[styles.currencyText, { marginLeft: spacing.s1 }]}>{currency}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {headerInfo()}
            <View style={styles.rowDetailsContainer}>
                <InfoRow label={'Close Price'} value={closePrice} currency={secondCountryCurrency} />
                <InfoRow label={'Highest Price'} value={highestPrice} currency={secondCountryCurrency} />
                <InfoRow label={'Lowest Price'} value={lowestPrice} currency={secondCountryCurrency} />
                <InfoRow label={'Number of Transactions'} value={numberOfTransactions} />
                <InfoRow label={'Open Price'} value={openPrice} currency={secondCountryCurrency} />
                <InfoRow label={'Trading Volume'} value={tradingVolume} />
                <InfoRow label={'Volume Weighted Average Price'} value={volumeWeightedAveragePrice} />
            </View>
            <View style={styles.buttonscontainer}>
                <SubmitButton
                    title={disable ? 'Default' : `Set ${secondCountryCurrency} as default`}
                    titleColor={colors.green}
                    backgroundColor={colors.lightGray}
                    size={'medium'}
                    onPress={onCurrencySelect}
                    disable={disable}
                />
                <SubmitButton
                    title={'Exchange'}
                    titleColor={colors.blue}
                    backgroundColor={colors.lightGray}
                    size={'medium'}
                    onPress={onExchange}
                />
            </View>
        </View>

    )
}

export default CountryCurrencyDetails

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        minHeight: 100,
        width: '100%',
        backgroundColor: colors.white,
        borderTopLeftRadius: borderRadius.medium,
        borderTopRightRadius: borderRadius.medium,
        padding: spacing.s2,
    },
    headerContainer: {
        marginTop: spacing.s1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.lightGray,
        padding: spacing.s1 / 2,
        borderRadius: 25
    },
    firstCountryContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    secondCountryContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    labelText: {
        marginLeft: spacing.s1,
        fontSize: fontSize.p3,
        fontWeight: '600',
        flexShrink: 1,
        color: colors.darkGray
    },
    currencyValueText: {
        fontSize: fontSize.p2,
        fontWeight: '600',
        flexShrink: 1,
        color: colors.black
    },
    currencyText: {
        fontSize: fontSize.p3,
        fontWeight: '200',
        flexShrink: 1,
        color: colors.black
    },

    // info row stuffs
    rowDetailsContainer: {
        padding: spacing.s2
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: spacing.s2
    },
    buttonscontainer: {
        flexDirection: 'row',
        padding: spacing.s3,
        justifyContent: 'space-between'
    }
})