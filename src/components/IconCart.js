import {
  Image,
  Text,
  View,
} from 'react-native';

import React from 'react';
import Styles from '../styles/Styles';

const IconCart = ({ count }) => {
  return (
    <>
      <View style={Styles.cartIconWrapper}>
        <Image
          source={require('../../assets/images/cartIcon.png')}
          style={Styles.cartIconImage}
        />
        <Text style={Styles.cartIconText}>{count}</Text>
      </View>
    </>
  );
};

export default IconCart;
