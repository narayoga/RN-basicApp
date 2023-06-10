import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Settings, SettingsDetail } from '../screens'
import { ROUTES } from '../constants';

const Stack = createStackNavigator();

function SettingNavigation() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={ROUTES.SETTINGS}>
            <Stack.Screen
                name={ROUTES.SETTINGS}
                component={Settings}
            />
            <Stack.Screen
                name={ROUTES.SETTINGS_DETAIL}
                component={SettingsDetail}
            />
        </Stack.Navigator>
    );
}

export default SettingNavigation;