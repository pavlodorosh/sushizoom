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

const CategoryProductsScreen = ({navigation, route}) => {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    const subscriber = firestore()
      .collection('Catalog/c8HZNaeDG6BoFwotRgSa/SushiSet')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          setProducts(documentSnapshot.data())
        });
      });

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
                products != null && (
                    Object.keys(products).map((item, index) => {
                      return (
                        <View style={Styles.categoryProductSection}>
                          <Image
                            source={require('../../assets/images/_Sushiboom.jpg')}
                            style={Styles.categoryProductImage}
                          />
                          <View key={index} style={Styles.categoryProductSectionText}>
                            <Text style={Styles.categoryProductTitle}>{products[item].name}</Text>
                            <Text style={Styles.categoryProductTitle}>{item.price} ГРН</Text>
                            <Text style={Styles.categoryProductText}>{item.ingredients}</Text>
                            <TouchableOpacity onPress={() => {}}>
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

export default CategoryProductsScreen;
