import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignUp from './screens/Signup/SignUp';
import Qrcode from './screens/Qrcode/Qrcode';
import Home from './Home';
import { NavigationContainer } from '@react-navigation/native';
import Admin from './ecrans/Home';
import History from './ecrans/History';


const Stack = createStackNavigator();

function MyStack() {
  
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Qrcode" component={Qrcode} />
          <Stack.Screen name="Admin" component={Admin} />
          <Stack.Screen name="History" component={History} />
        </Stack.Navigator>
    </NavigationContainer>
    );
  
}


export default MyStack;