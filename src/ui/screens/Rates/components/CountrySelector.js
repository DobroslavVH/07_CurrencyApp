import { Animated, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { StyleSheet } from 'react-native'
import { colors } from '../../../core/constants/colors'
import { borderRadius, spacing, WIDTH } from '../../../core/constants/spacing'
import { contriesInfoByCurrency } from '../../../core/constants/countryCodes'
import CustomCountryFlag from '../../../components/CountryFlag'
import { fontSize } from '../../../core/constants/fonts'
import SearchBar from '../../../components/SearchBar'
import CurrencyContext from '../../../context/CurrencyContext'
import { useNavigation } from '@react-navigation/native'

const CountrySelector = () => {

    const navigation = useNavigation()

    const scrollY = new Animated.Value(0)

    const { setCurrency } = useContext(CurrencyContext)

    const [searchText, setSearchText] = useState('')

    const showData = contriesInfoByCurrency?.filter(item => item?.country?.includes(searchText))

    const selectCountry = (item) => {
        setCurrency(item?.currency)
        navigation.goBack()
    }

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => selectCountry(item)}
            >
                <CustomCountryFlag countryCurrency={item?.currency} />
                <View style={styles.textContainer}>
                    <Text
                        style={styles.countryText}
                        numberOfLines={1}
                    >{item?.country}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const handleOnChange = (text) => {
        setSearchText(text)
    }

    function renderHeader() {
        return (
            <Animated.View
                style={{
                    transform: [{
                        translateY: scrollY.interpolate({
                            inputRange: [0, 500],
                            outputRange: [0, -100],
                            extrapolate: 'clamp'
                        })
                    }]
                }}
            >
                <SearchBar
                    searchText={searchText}
                    setSearchText={handleOnChange}
                />
            </Animated.View>
        )
    }

    return (
        <View style={styles.container}>
            <Animated.FlatList
                ListHeaderComponent={renderHeader()}
                data={showData}
                keyExtractor={(item, index) => index}
                renderItem={(item) => renderItem(item)}
                numColumns={2}
                initialNumToRender={20}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    {
                        useNativeDriver: true
                    },
                )}
                showsVerticalScrollIndicator={false}
            />
        </View >
    )
}

export default CountrySelector

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
    itemContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.lightGray,
        marginBottom: spacing.s1,
        borderRadius: 25,
        padding: spacing.s1 / 2,
        width: WIDTH / 2 - spacing.s2
    },
    textContainer: {
        flex: 1
    },
    countryText: {
        marginLeft: spacing.s1,
        fontSize: fontSize.p3,
        fontWeight: '600',
        flexShrink: 1,
        color: colors.darkGray
    },
    searchBarContainer: {
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