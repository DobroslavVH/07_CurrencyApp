import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import dayjs from 'dayjs'
import { fontSize } from '../../../core/constants/fonts'
import { colors } from '../../../core/constants/colors'
import { spacing } from '../../../core/constants/spacing'

const TransactionInfo = ({ transaction }) => {

    const date = dayjs(transaction?.transactionDate).date()
    const day = dayjs(transaction?.transactionDate).format('MMM')

    return (
        <View style={styles.container}>
            <View style={styles.dateContainer}>
                <Text style={styles.dateText}>{date}</Text>
                <Text style={styles.dayText}>{day}</Text>
            </View>
            <View style={styles.currencyContainer}>
                <Text style={styles.transactionText}>Exchange transaction</Text>
                <View style={styles.currencyRow}>
                    <Text style={[styles.currencyValueText, { color: colors.green }]}>+ {transaction?.secondaryCurrencyAmount?.toFixed(2)} </Text>
                    <Text style={[styles.currencyText, { color: colors.green }]}>{transaction?.secondaryCurrency}</Text>
                </View>
                <View style={[styles.currencyRow, { marginTop: 4 }]}>
                    <Text style={[styles.currencyValueText, { color: colors.red, fontSize: fontSize.p2 }]}>- {transaction?.primaryCurrencyAmount} </Text>
                    <Text style={[styles.currencyText, { color: colors.red, fontSize: fontSize.p2 }]}>{transaction?.primaryCurrency}</Text>
                </View>
            </View>
        </View>
    )
}

export default TransactionInfo

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: spacing.s3,
        marginHorizontal: spacing.s4
    },
    dateContainer: {
        justifyContent: "center",
        alignItems: 'center'
    },
    dateText: {
        fontSize: fontSize.p5,
        fontWeight: '500',
        color: colors.darkGray
    },
    dayText: {
        fontSize: fontSize.p4,
        color: colors.gray
    },

    // currencies
    currencyContainer: {
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    currencyRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    currencyValueText: {
        fontSize: fontSize.p3,
        fontWeight: '600'
    },
    currencyText: {
        fontSize: fontSize.p3,
        fontWeight: '200'
    },
    transactionText: {
        fontSize: fontSize.p1,
        fontWeight: '600',
        color: colors.darkGray,
        marginBottom: spacing.s1
    }
})