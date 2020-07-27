import React, { createContext } from 'react';

import ActionScreen from './src/screens/ActionScreen';
import CatalogScreen from './src/screens/CatalogScreen';
import Context from './src/context'
import EndScreen from './src/screens/EndScreen';
import MainScreen from './src/screens/MainScreen';
import {NavigationContainer} from '@react-navigation/native';
import OrderScreen from './src/screens/OrderScreen';
import ProductsScreen from './src/screens/ProductsScreen';
import StartScreen from './src/screens/StartScreen';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const data = {
  city: '',
  cart: [],
  phone: null  
}

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Context.Provider value={data}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              showLabel: false,
            }}>
            <Stack.Screen name="Start" component={StartScreen} />
            <Stack.Screen name="Action" component={ActionScreen} />
            <Stack.Screen name="End" component={EndScreen} />
            <Stack.Screen name="Main" component={MainScreen} />
            <Stack.Screen name="Order" component={OrderScreen} />
            <Stack.Screen name="Catalog" component={CatalogScreen} />
            <Stack.Screen
              name="Products"
              component={ProductsScreen}
            />
          </Stack.Navigator>
        </Context.Provider>
      </NavigationContainer>
    </>
  );
};

export default App;
