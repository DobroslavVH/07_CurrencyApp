import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { colors } from '../../core/constants/colors';

const EraseButton = ({ onRefresh }) => {

    const eraseData = async () => {
        try {
            await AsyncStorage.clear()
        } catch (error) {
            console.log('erase storage error', error)
        }
        console.log('Storage is clear')
        onRefresh()
    }

    return (
        <TouchableOpacity
            onPress={() => eraseData()}
            style={styles.container}
        >
            <MaterialCommunityIcons name="delete-clock-outline" size={20} color={colors.darkGray} />
        </TouchableOpacity>
    )
}

export default EraseButton

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        right: 0,
        bottom: 0
    }
})