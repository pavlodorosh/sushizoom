import CategoryProductsScreen from './src/screens/CategoryProductsScreen';
import CategoryScreen from './src/screens/CategoryScreen';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import StartScreen from './src/screens/StartScreen';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();


const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            showLabel: false,
          }}>
          <Stack.Screen name="Start" component={StartScreen} />
          <Stack.Screen name="Category" component={CategoryScreen} />
          <Stack.Screen
            name="CategoryProducts"
            component={CategoryProductsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
