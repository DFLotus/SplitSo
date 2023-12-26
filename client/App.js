import React from 'react';
import { Text, useColorScheme, View, } from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Text>Hello, World</Text>
  );
}

export default App;
