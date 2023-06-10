import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home, Wallet, Notifications, Favorite } from '../screens'
import BottomTabNavigator from './BottomTabNavigator';
import { COLORS, ROUTES } from '../constants';
import IonIcons from 'react-native-vector-icons/Ionicons'
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (<CustomDrawer {...props} />)}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: COLORS.primary,
        drawerActiveTintColor: "#fff",
        drawerLabelStyle: {
          marginLeft: -20
        }
      }}
    >
      <Drawer.Screen
        name={ROUTES.HOME_DRAWER}
        component={BottomTabNavigator}
        options={{
          title: 'Home',
          drawerIcon: ({ focused, color, size }) => (
            <IonIcons name='home-sharp' size={size} color={color} />
          )
        }}
      />
      <Drawer.Screen
        name={ROUTES.FAVORITE}
        component={Favorite}
        options={{
          title: 'Favorite List',
          drawerIcon: ({ focused, color, size }) => (
            <IonIcons name='md-bookmark-sharp' size={size} color={color} />
          )
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;