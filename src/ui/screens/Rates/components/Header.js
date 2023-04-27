import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { spacing } from '../../../core/constants/spacing';
import CurrencyContext from '../../../context/CurrencyContext';
import CustomCountryFlag from '../../../components/CountryFlag';
import { colors } from '../../../core/constants/colors';
import { fontSize } from '../../../core/constants/fonts';
import { useNavigation } from '@react-navigation/native';
import DatePicker from '../../../components/DatePicker';
import dayjs from 'dayjs'
import { reactQuery } from '../../../core/query';

const Header = () => {

    const navigation = useNavigation()

    const { selectedCurrency, setDate, selectedDate } = useContext(CurrencyContext)

    const [modalVisible, setModalVisible] = useState(false)

    const selectCountry = () => {
        navigation.navigate('CountrySelector')
    }

    const selectDate = () => {
        setModalVisible(true)
    }

    const onDateChange = (event, date) => {
        reactQuery.invalidateQueries()
        setDate(dayjs(date).toISOString())
        setModalVisible(false)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.rightSubcontainer}
                onPress={selectCountry}
            >
                <CustomCountryFlag countryCurrency={selectedCurrency} />
                <Text style={styles.currencyValueText}>1 </Text>
                <Text style={styles.currencyText}>{selectedCurrency}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={selectDate}
            >
                <Text style={styles.currencyText}>{selectedDate?.substring(0, 10)}</Text>
            </TouchableOpacity>
            <DatePicker
                modalVisible={modalVisible}
                onChange={onDateChange}
                value={dayjs(selectedDate).toDate()}
            />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        marginHorizontal: spacing.s4,
        marginVertical: spacing.s2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    rightSubcontainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    currencyText: {
        fontSize: fontSize.p5,
        fontWeight: '200',
        flexShrink: 1,
        color: colors.black
    },
    currencyValueText: {
        marginLeft: spacing.s1,
        fontSize: fontSize.p5,
        fontWeight: '600',
        color: colors.black
    },
})