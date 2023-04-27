import { FlatList, StyleSheet } from 'react-native'
import React from 'react'
import CountryCurrencyInfo from './CountryCurrencyInfo'
import { spacing } from '../../../core/constants/spacing'

const CountriesList = ({
    allCurrencies,
    rowData,
    onRefresh,
    refreshing,
    extraData
}) => {

    const renderItem = ({ item }) => {
        return (
            <CountryCurrencyInfo
                countryCurrency={item}
                rowData={rowData}
            />
        )
    }

    return (
        <FlatList
            refreshing={refreshing}
            onRefresh={onRefresh}
            contentContainerStyle={styles.container}
            data={allCurrencies}
            keyExtractor={(item, index) => index}
            renderItem={(item) => renderItem(item)}
            extraData={extraData}
        />
    )
}

export default CountriesList

const styles = StyleSheet.create({
    container: {
        padding: spacing.s4
    }
})