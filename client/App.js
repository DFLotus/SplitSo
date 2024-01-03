import React from 'react';
import CalculationScreen from './src/components/screens/CalculationScreen';
import History from './src/components/screens/History';
import Profile from './src/components/screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; //For bottom tab navigation
import Ionicons from "react-native-vector-icons/Ionicons"

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={"Calculation"}
        screenOptions={({ route }) => ({
          /*Use the screenOptions function to customize the tab bar and the routes*/
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let routeName = route.name;

            if (routeName === "Calculation") {
              iconName = focused ? "calculator" : "calculator-outline";
            }
            else if (routeName === "History") {
              iconName = focused ? "receipt-outline" : "receipt-outline";
            }
            else if (routeName === "Profile") {
              iconName = focused ? "person-circle-outline" : "person-circle-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarLabelStyle: {
            paddingBottom: 10,
            fontSize: 12
          },
          tabBarStyle: [
            {
              display: "flex"
            },
            {
              height: 60,
            },
            {
              backgroundColor: '#FBFAFA'
            },
            null
          ]
        })}>

        <Tab.Screen name={"Calculation"} component={CalculationScreen} options={{ headerShown: false }} />
        <Tab.Screen name={"History"} component={History} options={{ headerShown: false }} />
        <Tab.Screen name={"Profile"} component={Profile} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
