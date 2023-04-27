import { View, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../core/constants/colors'
import { WIDTH } from '../../core/constants/spacing'

const TwoArrows = ({ onPress }) => {

    const arrowLeft = () => {
        return (
            <View style={styles.arrowLeft}>
                <View style={styles.dash} />
                <View style={[styles.left, { position: 'absolute', top: 2, left: -2 }]} />
                <View style={[styles.right, { position: 'absolute', top: -2, left: -2 }]} />
            </View>
        )
    }

    const arrowRight = () => {
        return (
            <View style={styles.arrowRight}>
                <View style={styles.dash} />
                <View style={[styles.left, { position: 'absolute', top: -2, right: -2 }]} />
                <View style={[styles.right, { position: 'absolute', top: 2, right: -2 }]} />
            </View>
        )
    }

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
        >
            {arrowLeft()}
            {arrowRight()}
        </TouchableOpacity>
    )
}

export default TwoArrows

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: 60,
        borderRadius: 30,
        backgroundColor: colors.lightGray,
        borderWidth: 4,
        borderColor: colors.white,
        position: 'absolute',
        left: WIDTH / 2 - 43,
        top: -5
    },
    arrowLeft: {
        position: 'absolute',
        top: 31,
        left: 10
    },
    arrowRight: {
        position: 'absolute',
        top: 21,
        left: 14
    },
    dash: {
        width: 30,
        height: 1.5,
        backgroundColor: colors.darkGray
    },
    left: {
        width: 7,
        height: 1.5,
        backgroundColor: colors.darkGray,
        transform: [{ rotate: '45deg' }]
    },
    right: {
        width: 7,
        height: 1.5,
        backgroundColor: colors.darkGray,
        transform: [{ rotate: '-45deg' }]
    }
})