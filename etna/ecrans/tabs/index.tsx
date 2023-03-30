import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './../Home/index';
import Assiduite from './../assiduité/index';
import Emargement from '../Emargement';
import History from './../History/index';
import { COLORS } from './../../outils/contantes';

const Tab = createBottomTabNavigator();

const BottonTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="tabs_home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63', headerShown: false
      }}
    >
      <Tab.Screen
        name="tabs_home"
        component={Home}
        options={{
          tabBarLabel: 'Etudiant',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={COLORS.main} size={18} />
          ),
        }}
      />
      <Tab.Screen
        name="assiduité"
        component={Assiduite}
        options={{
          tabBarLabel: 'Assiduité',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={COLORS.main} size={18} />
          ),
        }}
      />
      <Tab.Screen
        name="emarger"
        component={Emargement}
        options={{
          tabBarLabel: 'Emarger',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="qrcode" color={COLORS.main} size={18} />
          ),
          
        }}
      />
      <Tab.Screen
        name="historique"
        component={History}
        options={{
          tabBarLabel: 'Historique',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="history" color={COLORS.main} size={18} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottonTabs;