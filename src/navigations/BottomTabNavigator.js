import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IonIcons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

import { COLORS, ROUTES } from '../constants';
import { Home, Wallet, Settings, Notifications } from '../screens';
import SettingNavigation from './SettingNavigator'; //nested stack navigation

function BottomTabNavigator() {
    const Tab = createBottomTabNavigator();
    const navigation = useNavigation()
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: false, //menghilangkan label tulisan di tab
                headerShown: false,
                tabBarActiveTintColor: COLORS.primary,
                tabBarIcon: ({ color, size, focused }) => {
                    let iconName

                    if (route.name === ROUTES.HOME_TAB) {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === ROUTES.SETTINGS) {
                        iconName = focused ? 'settings' : 'settings-outline';
                    } else if (route.name === ROUTES.WALLET) {
                        iconName = focused ? 'wallet' : 'wallet-outline';
                    } else if (route.name === ROUTES.NOTIFICATIONS) {
                        iconName = focused
                            ? 'md-notifications-sharp'
                            : 'md-notifications-outline';
                    }

                    return <IonIcons name={iconName} size={22} color={color} />
                }
            })}
        >
            <Tab.Screen name={ROUTES.HOME_TAB} component={Home} />
            <Tab.Screen name={ROUTES.WALLET} component={Wallet} />
            <Tab.Screen name={ROUTES.NOTIFICATIONS} component={Notifications} />
            <Tab.Screen
                name={ROUTES.SETTINGS}
                component={SettingNavigation}
                options={{
                    tabBarLabel: 'Settings',
                    title: 'Settings',
                    headerShown: true,
                    headerRight: () => {
                        return (
                            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                                <IonIcons name={'md-menu'} size={30} color={COLORS.dark} style={{ marginRight: 10 }} />
                            </TouchableOpacity>
                        )
                    }
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomTabNavigator;