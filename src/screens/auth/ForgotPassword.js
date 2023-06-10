import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { COLORS } from '../../constants';
import {useRoute} from '@react-navigation/native'

const ForgotPassword = () => {

  const route = useRoute()

  return (
    <View style={styles.container}>
      <Text style={{color: COLORS.gray}}>ForgotPassword</Text>
      <Text style={{color: COLORS.primary}}>user: {route.params.userId}</Text>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
