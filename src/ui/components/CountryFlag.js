import { View, StyleSheet } from 'react-native'
import React from 'react'
import CountryFlag from 'react-native-country-flag'
import { colors } from '../core/constants/colors'

const CustomCountryFlag = ({ countryCurrency }) => {

    const countryCode = countryCurrency?.substring(0, 2).toLowerCase()

    return (
        <View style={styles.flag}>
            <CountryFlag isoCode={countryCode} size={44} />
        </View>
    )
}

export default CustomCountryFlag

const styles = StyleSheet.create({
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
})