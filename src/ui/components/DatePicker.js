import { View, StyleSheet } from 'react-native'
import React from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import { colors } from '../core/constants/colors';
import { borderRadius, spacing } from '../core/constants/spacing';
import { Modal } from 'react-native';
import dayjs from 'dayjs'

const DatePicker = ({
    onChange,
    modalVisible,
    value
}) => {

    return (
        <Modal
            presentationStyle='overFullScreen'
            transparent={true}
            animationType='fade'
            visible={modalVisible}
        >
            <View style={styles.overlay} />
            <View style={styles.container}>
                <DateTimePicker
                    value={value}
                    display='spinner'
                    maximumDate={dayjs(new Date).toDate()}
                    onChange={onChange}
                    timeZoneOffsetInMinutes={-120}
                />
            </View>
        </Modal>
    )
}

export default DatePicker

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        minHeight: 100,
        maxHeight: 400,
        width: '100%',
        backgroundColor: colors.white,
        borderTopLeftRadius: borderRadius.medium,
        borderTopRightRadius: borderRadius.medium,
        padding: spacing.s2,
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.2)'
    }
})