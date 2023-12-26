import React from 'react';
import { Text, useColorScheme, View, } from 'react-native';
import Header from './src/components/Header';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View>
      <Header/>
      <Text>Hello, World</Text>
    </View>
  );
}

export default App;
