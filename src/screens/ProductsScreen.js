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
import React, {useContext, useEffect, useState} from 'react';

import Context from '../context'
import IconCart from '../components/IconCart'
import Styles from '../styles/Styles';
import firestore from '@react-native-firebase/firestore';

const ProductsScreen = ({navigation, route}) => {
  const context = useContext(Context)
  const [count, setCount] = useState(context.cart.length)
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts([])
    firestore()
    .collection(`Product`)
    .get()
    .then(querySnapshot => {   
      console.log(querySnapshot)      
      querySnapshot.forEach(documentSnapshot => {
        let data = documentSnapshot.data()
        if(data.category == route.params.id){
          if(data.action){
            data.price = data.new_price
          }
          if(context.city == 'Київ'){
            data.price = (data.price * 1.2).toFixed(0)
          }

          setProducts(prevState => [...prevState, data])       
        }
   
      });
    });
  }, []);

  const addToCart = (el) => {
    setCount(prev => prev + 1)

    let canPush = true

    context.cart.forEach(prod => {
      if(prod.name == el.name){
        prod.count++
        canPush = false
      }
    })

    if(canPush){
      el.count = 1
      context.cart.push(el)
    }
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
            <IconCart count={count}/>
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
