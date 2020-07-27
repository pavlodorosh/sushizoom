import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';

import Context from '../context';
import Styles from '../styles/Styles';

const IconCart = () => {
  const context = useContext(Context);
  return (
    <>
      <View style={Styles.cartIconWrapper}>
        <Image
          source={require('../../assets/images/cart-icon.png')}
          style={Styles.cartIconImage}
        />
        <Text style={Styles.cartIconText}>{context.cart.length}</Text>
      </View>
    </>
  );
};

export default IconCart;
