import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import BottonTabs from '../ecrans/tabs';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='home' screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={BottonTabs} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes