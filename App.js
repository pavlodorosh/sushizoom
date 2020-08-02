import ActionScreen from './src/screens/ActionScreen';
import CatalogScreen from './src/screens/CatalogScreen';
import EndScreen from './src/screens/EndScreen';
import MainScreen from './src/screens/MainScreen';
import {NavigationContainer} from '@react-navigation/native';
import OrderScreen from './src/screens/OrderScreen';
import ProductsScreen from './src/screens/ProductsScreen';
import { Provider } from 'react-redux'
import React from 'react';
import StartScreen from './src/screens/StartScreen';
import appMainReducer from './src/redux/reducer'
import { createStackNavigator } from '@react-navigation/stack';
import { createStore } from 'redux'

const Stack = createStackNavigator();

const globalData = createStore(appMainReducer)

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Provider store={globalData}>
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
        </Provider>
      </NavigationContainer>
    </>
  );
};

export default App;
