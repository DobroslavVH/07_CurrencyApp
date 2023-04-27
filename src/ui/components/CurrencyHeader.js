import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomCountryFlag from '../components/CountryFlag'
import TwoArrows from './buttons/TwoArrows'
import { spacing } from '../core/constants/spacing'
import { colors } from '../core/constants/colors'
import { fontSize } from '../core/constants/fonts'

const CurrencyHeader = ({
    firstCountryCurrency,
    lowestPriceShort,
    secondCountryCurrency,
    onChangeCurrencies,
    primaryCurrencyValue
}) => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.firstCountryContainer}>
                <CustomCountryFlag countryCurrency={firstCountryCurrency} />
                <Text style={[styles.currencyValueText, { marginLeft: spacing.s1 }]}>{primaryCurrencyValue ? '1 ' : ''}</Text>
                <Text style={styles.currencyText}>{firstCountryCurrency}</Text>
            </View>
            <View style={styles.secondCountryContainer}>
                <Text style={styles.currencyValueText}>{lowestPriceShort} </Text>
                <Text style={[styles.currencyText, { marginRight: spacing.s1 }]}>{secondCountryCurrency}</Text>
                <CustomCountryFlag countryCurrency={secondCountryCurrency} />
            </View>
            <TwoArrows onPress={onChangeCurrencies} />
        </View>
    )
}

export default CurrencyHeader

const styles = StyleSheet.create({
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
    secondCountryContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
})