import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import IconCart from '../components/IconCart'
import Styles from '../styles/Styles';
import database from '@react-native-firebase/database';

const ProductsScreen = ({navigation, route}) => {
  const [products, setProducts] = useState(null)
  const [actionProducts, setActionProducts] = useState([])
  
  const state = useSelector(state => state, [])
  const dispatch = useDispatch()

  useEffect(() => {
    database().ref(`product`).once('value').then(snapshot => {
      const prods = Object.values(snapshot.val())
      setProducts(prods.flat())
    })
  }, []);

  const addToCart = (el) => {
    dispatch({
      type: 'ADD_TO_CART',
      value: el
    })
  }

  return (
    <View style={Styles.back}>
      <StatusBar barStyle="dark-content" />
      <TouchableHighlight underlayColor="transparent" style={Styles.cartIconTouchWrap} onPress={() => {
        navigation.navigate('Order')
      }}>
        <IconCart count={state.data.cartCount}/>
      </TouchableHighlight>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={Styles.body}>
          <View style={Styles.sectionContainer}>
            <Image
              source={require('../../assets/images/logo.png')}
              style={Styles.logoCategory}
            />
              {                
                products != null && (
                  Object.keys(products).map((el, index) => {
                      if(products[el].action){
                        return (
                          <View style={Styles.categoryProductSection} key={index}>
                            <Image
                              source={{uri: products[el].image}}
                              style={Styles.categoryProductImage}
                            />
                            <View key={index} style={Styles.categoryProductSectionText}>
                              <Text style={Styles.categoryProductTitle}>{products[el].name}</Text>
                              <Text style={Styles.categoryProductTitle}>{(products[el].price * state.data.city[0].priceKoef).toFixed(0)} ГРН</Text>
                              <Text style={Styles.categoryProductText}>{products[el].ingredients}</Text>
                              <Text style={Styles.categoryProductText}>{products[el].weight} гр</Text>
                              <TouchableOpacity onPress={() => {
                                addToCart(products[el])
                              }}>
                                <View styl={Styles.categoryProductButton}>
                                  <Text style={Styles.categoryProductButtonText}>
                                    В КОШИК
                                  </Text>
                                </View>
                              </TouchableOpacity>
                            </View>
                          </View>
                        )
                      }                      
                    })
                )
              }              
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductsScreen;
