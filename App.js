import { View, StyleSheet, Text, Button } from "react-native"
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { color } from "./_models/color"

import CategoriesScreen from "./_screens/CategoriesScreen";
import OverviewScreen from "./_screens/OverviewScreen";
import DetailScreen from "./_screens/DetailScreen"

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MealStackScreen />
    </NavigationContainer>
  )
}

function MealStackScreen() {
  return (
    <Stack.Navigator initialRouteName="MealsCategory"
      screenOptions={{
        headerStyle: { backgroundColor: color.header },
        headerTintColor: '#ffff',
        contentStyle: { backgroundColor: color.background }
      }}
    >
      <Stack.Screen
        name={'MealsCategories'}
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name={'MealsOverview'}
        component={OverviewScreen}
      // options={({ route, navigation }) => {
      //   const catId = route.params.categoryId;
      //   return {
      //     title: catId,
      //   };
      // }}
      />
      <Stack.Screen
        name={'MenuDetail'}
        component={DetailScreen}
      />
    </Stack.Navigator>

  )
}

