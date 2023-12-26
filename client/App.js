import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import CalculationScreen from './src/components/screens/CalculationScreen';

//const Tab = createBottomTabNavigator()

const App = () => {

  return (
    <View>
      <Header/>
      <CalculationScreen/>
    </View>
  );
}

export default App;
