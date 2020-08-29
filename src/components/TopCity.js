import {Image, Text, View} from 'react-native';

import React from 'react';
import Styles from '../styles/Styles';

const IconCart = ({city}) => {
  return (
    <>
      <View style={Styles.topCityWrapper}>
        <Text style={Styles.topCityText}>{city}</Text>
      </View>
    </>
  );
};

export default IconCart;
