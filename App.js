import CatalogScreen from './src/screens/CatalogScreen';
import MainScreen from './src/screens/MainScreen';
import {NavigationContainer} from '@react-navigation/native';
import ProductsScreen from './src/screens/ProductsScreen';
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
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="Catalog" component={CatalogScreen} />
          <Stack.Screen
            name="Products"
            component={ProductsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
