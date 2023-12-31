import React from 'react';
import { View } from 'react-native';
import CalculationScreen from './src/components/screens/CalculationScreen';
import History from './src/components/screens/History';
import Profile from './src/components/screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; //For bottom tab navigation

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Calculation" component={CalculationScreen} options={{ headerShown: false }} />
        <Tab.Screen name="History" component={History} options={{ headerShown: false }} />
        <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
