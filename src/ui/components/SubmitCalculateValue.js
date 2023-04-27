import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import { StyleSheet } from 'react-native'
import { TextInput } from 'react-native'
import { colors } from '../core/constants/colors'
import { spacing } from '../core/constants/spacing'
import CurrencyContext from '../context/CurrencyContext'
import { fontSize } from '../core/constants/fonts'

const SubmitCalculateValue = ({
    setPrimaryCurrencyAmount,
    setSecondaryCurrencyAmount
}) => {

    const [value, setValue] = useState(0)

    const { tickers, selectedCurrency, secondaryCurrency } = useContext(CurrencyContext)

    const currentTicker = selectedCurrency + secondaryCurrency
    const exchangedValue = tickers?.find(item => item?.T?.substring(2, 8) === currentTicker)?.l * Number(value)

    const onEndEditing = () => {
        if (value !== 0) {
            setPrimaryCurrencyAmount(value)
            setSecondaryCurrencyAmount(exchangedValue)
        }
    }

    const submitValue = () => {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder={'0'}
                    placeholderTextColor={colors.black}
                    value={value.toString()}
                    inputMode={'numeric'}
                    onChangeText={(text) => setValue(text)}
                    onEndEditing={onEndEditing}
                    readOnly={secondaryCurrency === '' ? true : false}
                />
                <View style={styles.curve} />
            </View>
        )
    }

    const calculateValue = () => {
        return (
            <View style={styles.calculateContainer}>
                <Text style={styles.currencyText}>{!exchangedValue ? '0' : exchangedValue.toFixed(2)}</Text>
                <View style={[styles.curve, { left: -16, transform: [{ rotate: '180deg' }] }]} />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {submitValue()}
            {calculateValue()}
        </View>
    )
}

export default SubmitCalculateValue

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: spacing.s4
    },
    inputContainer: {
        backgroundColor: colors.lightGray,
        height: 40,
        width: '47%',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row"
    },
    input: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: fontSize.p4,
        fontWeight: '200',
        flexShrink: 1,
        color: colors.black
    },
    calculateContainer: {
        backgroundColor: colors.lightGray,
        height: 40,
        width: '47%',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    curve: {
        width: 20,
        height: 40,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: 'white',
        position: 'absolute',
        right: -16
    },
    currencyText: {
        fontSize: fontSize.p4,
        fontWeight: '200',
        flexShrink: 1,
        color: colors.black
    },
})