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

import Styles from '../styles/Styles';
import firestore from '@react-native-firebase/firestore';

const collections = ['SushiSet']
  
  const ActionScreen = ({navigation, route}) => {
    const [products, setProducts] = useState([])
  
    useEffect(() => {
      setProducts([])
      collections.forEach(col => {
        const subscriber = firestore()
            .collection(`Catalog/c8HZNaeDG6BoFwotRgSa/${col}`)
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    if(documentSnapshot.data().action){
                        documentSnapshot.data().price = documentSnapshot.data().new_price
                        setProducts(prevState => [...prevState, documentSnapshot.data()])
                    }
                });
            });
      })
     
  
    }, []);
  
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={Styles.body}>
            <View style={Styles.sectionContainer}>
              <Image
                source={require('../../assets/images/logo.png')}
                style={Styles.logoCategory}
              />
                {                
                  products.length != 0 && (
                      Object.keys(products).map((item, index) => {
                        return (
                          <View style={Styles.categoryProductSection} key={index}>
                            <Image
                              source={{uri: products[item].img}}
                              style={Styles.categoryProductImage}
                            />
                            <View key={index} style={Styles.categoryProductSectionText}>
                              <Text style={Styles.categoryProductTitle}>{products[item].name}</Text>
                              <Text style={Styles.categoryProductTitle}>{products[item].price} ГРН</Text>
                              <Text style={Styles.categoryProductText}>{products[item].ingredients}</Text>
                              <TouchableOpacity onPress={() => {
                                navigation.navigate('Order', {product: products[item]});
                              }}>
                                <View styl={Styles.categoryProductButton}>
                                  <Text style={Styles.categoryProductButtonText}>
                                    ЗАМОВИТИ
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
  
  export default ActionScreen;
  