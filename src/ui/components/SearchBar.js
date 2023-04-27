import { TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../core/constants/colors'
import { spacing } from '../core/constants/spacing'
import { fontSize } from '../core/constants/fonts'

const SearchBar = ({
    searchText,
    setSearchText
}) => {
    return (
        <TextInput
            style={styles.container}
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
            placeholder={'Search ...'}
        />
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.lightGray,
        marginBottom: spacing.s1,
        borderRadius: 20,
        paddingHorizontal: spacing.s3,
        marginVertical: spacing.s3,
        height: 40,
        width: '100%',
        fontSize: fontSize.p4,
        fontWeight: '300',
        marginBottom: spacing.s4
    },
})