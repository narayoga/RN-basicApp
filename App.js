import React from 'react';
import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

import AuthNavigation from './src/navigations/AuthNavigator';
import FavoriteContextProvider from './src/store/context/favourite-context';

import { Provider } from 'react-redux';
import store from './src/store/redux/store';

const App = () => {
  const isAuthenticated = true //isi dikemudian hari
  return (
    <FavoriteContextProvider>
      <Provider store={store}>
        <NavigationContainer>
          {
            isAuthenticated ? <AuthNavigation /> : <DrawerActions />
          }
        </NavigationContainer>
      </Provider>
    </FavoriteContextProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
