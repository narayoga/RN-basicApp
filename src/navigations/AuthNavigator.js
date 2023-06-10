import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, ForgotPassword, Register } from '../screens'
import { COLORS, ROUTES } from '../constants';

import BottomTabNavigator from './BottomTabNavigator';
import DrawerNavigation from './DrawerNavigator';

const Stack = createStackNavigator();

function AuthNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: 'white',
                headerBackTitle: 'exit',
                headerBackTitleVisible: false,
                headerStyle: {
                    backgroundColor: COLORS.primary
                }
            }}
            initialRouteName={ROUTES.LOGIN}
        >
{/**************************** screen section  ********************************/}
            <Stack.Screen
                name={ROUTES.LOGIN}
                component={Login}
            />
            <Stack.Screen
                name={ROUTES.FORGOT_PASSWORD}
                component={ForgotPassword}
                options={({ route }) => ({
                    title: route.params.userId
                })}
            />
            <Stack.Screen
                name={ROUTES.REGISTER}
                component={Register}
                options={{
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: COLORS.dark
                    }
                }}
            />
            <Stack.Screen
                name={ROUTES.HOME}
                component={DrawerNavigation}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}

export default AuthNavigation;