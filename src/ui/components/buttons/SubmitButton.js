import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { borderRadius, WIDTH } from '../../core/constants/spacing'
import { fontSize } from '../../core/constants/fonts'
import { colors } from '../../core/constants/colors'

const SubmitButton = ({
    title,
    titleColor,
    backgroundColor,
    size,
    onPress,
    disable
}) => {

    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.container(backgroundColor, size)}
            disabled={disable}
        >
            <Text style={styles.text(titleColor, disable)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default SubmitButton

const styles = StyleSheet.create({
    container: (backgroundColor, size) => ({
        width: size === 'large'
            ? WIDTH * 0.9
            : size === 'medium'
                ? WIDTH * 0.4
                : WIDTH * 0.2,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius.medium,
        minHeight: 40,
        justifyContent: 'center',
        alignItems: 'center'
    }),
    text: (titleColor, disable) => ({
        color: !disable ? titleColor : colors.darkGray,
        fontSize: fontSize.p4,
        fontWeight: '300'
    })
})