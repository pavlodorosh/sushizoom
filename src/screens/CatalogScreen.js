import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import Styles from '../styles/Styles';
import firestore from '@react-native-firebase/firestore';

const CatalogScreen = ({navigation, route}) => {
    const {priceKoef} = route.params;
    
    const [categories, setCategories] = useState([])
    
    useEffect(() => {
      setCategories([])
      const subscriber = firestore()
        .collection(`Category`)
        .get()
        .then(querySnapshot => {          
          querySnapshot.forEach(documentSnapshot => {
            setCategories(prevState => [...prevState, documentSnapshot.data()])          
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
                categories.length > 0 && (
                  categories.map((cat, index) => {
                    return (
                      <View key={index}>
                         <TouchableWithoutFeedback
                          onPress={() => {
                            navigation.navigate('Catalog', {priceKoef});
                          }}>
                          <Image
                            source={{uri: categories[cat].image}}
                            style={Styles.categoryImg}
                          />
                        </TouchableWithoutFeedback>
                        <Text
                          style={Styles.categoryTitle}
                          onPress={() => {
                            navigation.navigate('Catalog', {priceKoef});
                          }}>
                          МЕНЮ
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
  