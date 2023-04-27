import { View, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../core/constants/colors'


const Body = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

export default Body

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: colors.white,
    }
})