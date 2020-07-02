import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import StartScreen from './src/screens/StartScreen'
import CategoryScreen from './src/screens/CategoryScreen'

const Stack = createStackNavigator()

const App = () => {
  return (
    <>        
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Start" component={StartScreen} options={{title: 'Головна'}} />
          <Stack.Screen name="Category" component={CategoryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};



export default App;
