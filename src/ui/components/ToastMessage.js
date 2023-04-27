import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../core/constants/colors'
import { fontSize } from '../core/constants/fonts'
import { borderRadius, spacing } from '../core/constants/spacing'

const ToastMessage = ({ route }) => {

    const navigation = useNavigation()

    const { message } = route.params

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.goBack()
        }, 3000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.messageContainer}>
                <Text style={styles.text} numberOfLines={2}>{message}</Text>
            </View>
        </View>
    )
}

export default ToastMessage

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    messageContainer: {
        position: 'absolute',
        bottom: 100,
        left: '10%',
        width: '80%',
        borderRadius: borderRadius.small,
        backgroundColor: colors.white,
        shadowColor: colors.darkGray,
        shadowRadius: 8,
        shadowOpacity: 0.5,
        shadowOffset: {
            width: 0,
            height: 2
        },
        justifyContent: 'center',
        alignItems: 'center',
        padding: spacing.s3,
        flexShrink: 1
    },
    text: {
        fontSize: fontSize.p4,
        fontWeight: '400',
        alignSelf: 'center',
        color: colors.darkGray,
        textAlign: 'center'
    }
})