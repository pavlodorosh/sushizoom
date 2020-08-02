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

import IconCart from '../components/IconCart'
import Styles from '../styles/Styles';
import firestore from '@react-native-firebase/firestore';

const CatalogScreen = ({navigation, route}) => {   
    const [categories, setCategories] = useState([])
    
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
        <StatusBar barStyle="dark-content" />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={Styles.body}>
            <View style={Styles.sectionContainer}>
              {/* <IconCart count={count}/> */}
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
  