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
import {shallowEqual, useDispatch, useSelector} from 'react-redux';

import IconCart from '../components/IconCart';
import Styles from '../styles/Styles';
import TopCity from '../components/TopCity';
import database from '@react-native-firebase/database';

const ProductsScreen = ({navigation, route}) => {
  const [actionProducts, setActionProducts] = useState([]);

  const state = useSelector(state => state, []);
  const dispatch = useDispatch();

  useEffect(() => {
    database()
      .ref(`action`)
      .once('value')
      .then(snapshot => {
        setActionProducts(snapshot.val());
      });
  }, []);

  const addToCart = el => {
    if (state.data.city[0].name.includes('Київ')) {
      el.price = el.price_kiev;
      el.image = el.image_kiev;
    }
    dispatch({
      type: 'ADD_TO_ACTION_CART',
      value: el,
    });
  };

  return (
    <View style={Styles.back}>
      <StatusBar barStyle="dark-content" />
      <TopCity city={state.data.city[0].name} />
      <TouchableHighlight
        underlayColor="transparent"
        style={Styles.cartIconTouchWrap}
        onPress={() => {
          navigation.navigate('Order');
        }}>
        <IconCart count={state.data.cartCount} />
      </TouchableHighlight>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={Styles.body}>
          <View style={Styles.sectionContainer}>
            <Image
              source={require('../../assets/images/logo.png')}
              style={Styles.logoCategory}
            />
            {actionProducts != null &&
              Object.keys(actionProducts).map((el, index) => {
                if (actionProducts[el].action) {
                  return (
                    <View style={Styles.categoryProductSection} key={index}>
                      <Image
                        source={{
                          uri: state.data.city[0].name.includes('Київ')
                            ? actionProducts[el].image_kiev
                            : actionProducts[el].image,
                        }}
                        style={Styles.categoryProductImage}
                      />
                      <View
                        key={index}
                        style={Styles.categoryProductSectionText}>
                        <Text style={Styles.categoryProductTitle}>
                          {actionProducts[el].name}
                        </Text>
                        <Text style={Styles.categoryProductTitle}>
                          {state.data.city[0].name.includes('Київ')
                            ? actionProducts[el].price_kiev
                            : actionProducts[el].price}
                          ГРН
                        </Text>
                        <Text style={Styles.categoryProductText}>
                          {actionProducts[el].ingredients}
                        </Text>
                        <Text style={Styles.categoryProductText}>
                          {actionProducts[el].weight} гр
                        </Text>
                        <TouchableOpacity
                          onPress={() => {
                            addToCart(actionProducts[el]);
                          }}>
                          <View styl={Styles.categoryProductButton}>
                            <Text style={Styles.categoryProductButtonText}>
                              В КОШИК
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  );
                }
              })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductsScreen;
