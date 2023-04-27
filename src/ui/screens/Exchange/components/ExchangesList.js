import { StyleSheet } from 'react-native'
import React from 'react'
import { spacing } from '../../../core/constants/spacing'
import { FlatList } from 'react-native'
import TransactionInfo from './TransactionInfo'

const ExchangesList = ({
    transactions,
    refreshing,
    onRefresh
}) => {

    const renderItem = ({ item }) => {
        return (
            <TransactionInfo transaction={item} />
        )
    }

    return (
        <FlatList
            contentContainerStyle={styles.container}
            refreshing={refreshing}
            onRefresh={onRefresh}
            data={transactions}
            keyExtractor={(item, index) => index}
            renderItem={item => renderItem(item)}
        />
    )
}

export default ExchangesList

const styles = StyleSheet.create({
    container: {
        marginTop: spacing.s2
    }
})