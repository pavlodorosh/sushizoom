import {
    Image,
    ScrollView,
    Text,
    TouchableHighlight,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import IconCart from '../components/IconCart'
import Styles from '../styles/Styles';
import firestore from '@react-native-firebase/firestore';
import { useSelector } from 'react-redux'

const CatalogScreen = ({navigation, route}) => {   
    const [categories, setCategories] = useState([])
    const state = useSelector(state => state, [])
    
    useEffect(() => {
      setCategories([])
      firestore()
        .collection(`Category`)
        .get()
        .then(querySnapshot => {   
          console.log(querySnapshot)      
          querySnapshot.forEach(documentSnapshot => {
            setCategories(prevState => [...prevState, documentSnapshot.data()])          
          });
        });
    }, []);

  
    return (
      <>
        <TouchableHighlight style={Styles.cartIconTouchWrap} onPress={() => {
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
                categories.length > 0 && (
                  categories.map((cat, index) => {
                    return (
                      <View key={index}>
                         <TouchableWithoutFeedback
                          onPress={() => {
                            navigation.navigate('Products', {id: cat.id});
                          }}>
                          <Image
                            source={{uri: cat.image}}
                            style={Styles.categoryImg}
                          />
                        </TouchableWithoutFeedback>
                        <Text
                          style={Styles.categoryTitle}
                          onPress={() => {
                            navigation.navigate('Products', {id: cat.id});
                          }}>
                          {cat.name}
                        </Text>
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
  
  export default CatalogScreen;
  