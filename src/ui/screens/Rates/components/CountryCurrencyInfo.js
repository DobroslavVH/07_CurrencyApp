import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../../../core/constants/colors'
import { contriesInfoByCurrency } from '../../../core/constants/countryCodes'
import { spacing, WIDTH } from '../../../core/constants/spacing'
import { fontSize } from '../../../core/constants/fonts'
import { useNavigation } from '@react-navigation/native'
import CustomCountryFlag from '../../../components/CountryFlag'

const CountryCurrencyInfo = ({ countryCurrency, rowData }) => {

    const navigation = useNavigation()

    const shortCurrencyName = countryCurrency?.T?.substring(5, 8)
    const countryCode = countryCurrency?.T?.substring(5, 8).toLowerCase()
    const countryName = contriesInfoByCurrency?.find(info => info?.currency === shortCurrencyName)?.country
    const currencyValue = countryCurrency?.l?.toFixed(3)

    const onPress = () => {
        navigation.navigate('CurrencyDetails', { countryCurrency: countryCurrency, rowData: rowData })
    }

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
        >
            <View style={styles.flagContainer}>
                <CustomCountryFlag countryCurrency={countryCode} />
                <View style={styles.countryContainer}>
                    <Text style={styles.countryText} numberOfLines={1}>{countryName}</Text>
                </View>
            </View>
            <View style={styles.currencyContainer}>
                <Text style={styles.currencyValueText}>{currencyValue} </Text>
                <Text style={styles.currencyText}>{shortCurrencyName}</Text>
            </View>
            <View style={styles.rightEndContainer} />
        </TouchableOpacity>
    )
}

export default CountryCurrencyInfo

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: 'space-between',
        backgroundColor: colors.lightGray,
        marginBottom: spacing.s1,
        borderBottomLeftRadius: 25,
        borderTopLeftRadius: 25,
        padding: spacing.s1 / 2
    },
    rightEndContainer: {
        width: 30,
        height: 50,
        borderBottomLeftRadius: 25,
        borderTopLeftRadius: 25,
        backgroundColor: 'white',
        position: 'absolute',
        right: -24
    },
    flagContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    flag: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 45,
        height: 45,
        borderRadius: 22.5,
        borderWidth: 1,
        borderColor: colors.white,
        overflow: 'scroll'
    },
    currencyContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    countryContainer: {
        maxWidth: WIDTH * 0.5,
    },
    countryText: {
        marginLeft: spacing.s1,
        fontSize: fontSize.p3,
        fontWeight: '600',
        flexShrink: 1,
        color: colors.darkGray
    },
    currencyValueText: {
        fontSize: fontSize.p3,
        fontWeight: '600',
        flexShrink: 1,
        color: colors.black
    },
    currencyText: {
        fontSize: fontSize.p4,
        fontWeight: '200',
        flexShrink: 1,
        color: colors.black
    }
})