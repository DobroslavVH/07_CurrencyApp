import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import RatesFactory from '../../main/screens/Rates/RatesFactory';
import CountryCurrencyDetails from '../screens/Rates/components/CountryCurrencyDetails';
import ExchangeFactory from '../../main/screens/Rates/ExchangeFactory';
import CountrySelector from '../screens/Rates/components/CountrySelector';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../core/constants/colors';
import ToastMessage from '../components/ToastMessage';


const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()


const RatesStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Rates'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="RatesScreen"
                component={RatesFactory}
            />
            <Stack.Screen
                name="CurrencyDetails"
                component={CountryCurrencyDetails}
                options={{
                    presentation: 'modal',
                    gestureResponseDistance: 600,
                    contentStyle: {
                        backgroundColor: 'rgba(0,0,0,0)',
                    },
                }}
            />
            <Stack.Screen
                name="CountrySelector"
                component={CountrySelector}
                options={{
                    presentation: 'modal',
                    gestureResponseDistance: 200,
                    contentStyle: {
                        backgroundColor: 'rgba(0,0,0,0)',
                    },
                }}
            />
            <Stack.Screen
                name="ToastMessage"
                component={ToastMessage}
                options={{
                    presentation: 'transparentModal',
                    contentStyle: {
                        backgroundColor: 'rgba(0,0,0,0)',
                    },
                }}
            />
        </Stack.Navigator>
    )
}

const ExchangeStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='ExchangeScreen'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="ExchangeScreen"
                component={ExchangeFactory}
            />
            <Stack.Screen
                name="ToastMessage"
                component={ToastMessage}
                options={{
                    presentation: 'transparentModal',
                    contentStyle: {
                        backgroundColor: 'rgba(0,0,0,0)',
                    },
                }}
            />
        </Stack.Navigator>
    )
}

const BottomNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Rates'
                screenOptions={{
                    headerShown: false
                }}
            >
                <Tab.Screen
                    name="Rates"
                    component={RatesStack}
                    options={{
                        tabBarIcon: ({ focused }) => <MaterialCommunityIcons
                            name="chart-timeline-variant-shimmer"
                            size={focused ? 30 : 24}
                            color={focused ? colors.green : colors.darkGray} />,
                        tabBarActiveTintColor: colors.green,
                        tabBarInactiveTintColor: colors.darkGray
                    }}
                />
                <Tab.Screen
                    name="Exchange"
                    component={ExchangeStack}
                    options={{
                        tabBarIcon: ({ focused }) => <MaterialCommunityIcons
                            name="swap-horizontal"
                            size={focused ? 34 : 28}
                            color={focused ? colors.green : colors.darkGray} />,
                        tabBarActiveTintColor: colors.green,
                        tabBarInactiveTintColor: colors.darkGray
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default BottomNavigator