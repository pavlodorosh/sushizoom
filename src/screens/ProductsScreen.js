import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import IconCart from '../components/IconCart'
import Styles from '../styles/Styles';
import firestore from '@react-native-firebase/firestore';

const ProductsScreen = ({navigation, route}) => {
  const [products, setProducts] = useState([])
  
  const state = useSelector(state => state, [])
  const dispatch = useDispatch()

  useEffect(() => {
    setProducts([])
    firestore()
    .collection(`Product`)
    .get()
    .then(querySnapshot => {     
      querySnapshot.forEach(documentSnapshot => {
        let data = documentSnapshot.data()
        if(data.category == route.params.id){
          if(data.action){
            data.price = data.new_price
          }
          setProducts(prevState => [...prevState, data])       
        }
   
      });
    });
  }, []);

  const addToCart = (el) => {
    dispatch({
      type: 'ADD_TO_CART',
      value: el
    })
    
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={Styles.body}>
          <View style={Styles.sectionContainer}>
            <TouchableOpacity onPress={() => {
              navigation.navigate('Order')
            }}>
              <IconCart count={state.data.cartCount}/>
            </TouchableOpacity>
            <Image
              source={require('../../assets/images/logo.png')}
              style={Styles.logoCategory}
            />
              {                
                products.length != 0 && (
                    products.map((product, index) => {
                      return (
                        <View style={Styles.categoryProductSection} key={index}>
                          <Image
                            source={{uri: product.image}}
                            style={Styles.categoryProductImage}
                          />
                          <View key={index} style={Styles.categoryProductSectionText}>
                            <Text style={Styles.categoryProductTitle}>{product.name}</Text>
                            <Text style={Styles.categoryProductTitle}>{product.price} ГРН</Text>
                            <Text style={Styles.categoryProductText}>{product.ingredients}</Text>
                            <TouchableOpacity onPress={() => {
                              addToCart(product)
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
                    })
                )
              }              
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default ProductsScreen;
