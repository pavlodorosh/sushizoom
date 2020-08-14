import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  UselessTextInput,
  View,
  ViewPagerAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {RadioButton} from 'react-native-paper';
import RadioButtonRN from 'radio-buttons-react-native';
import Styles from '../styles/Styles';
import Telegram from 'telegram-send-message';

const OrderScreen = ({navigation, route}) => {
  const [cart_this, setCart] = useState([]);
  const [sum, setSum] = useState(0);
  const [deliveryCash, setDeliveryCash] = useState(0);

  const [empty, isEmpty] = useState(true);
  const [person, setPerson] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [chopstick, setChopstick] = useState(true);
  const [delivery, setDelivery] = useState('Самовивіз');

  const state = useSelector(state => state, []);
  const dispatch = useDispatch();

  const data = [
    {
      label: 'Доставка за адресою',
    },
    {
      label: 'Самовивіз',
    },
  ];
  
  useEffect(() => {
    setCart(state.data.cart);
    if (state.data.cart.length > 0) {
      isEmpty(false);
    }
    console.log(cart_this);
  }, []);

  const sendMessage = () => {
    const ch = chopstick ? 'навчальні' : 'звичайні';
    let message = `Нове замовлення! Імя: ${name}, Сума: ${getSum(cart_this)} грн, Телефон: ${phone}, Адреса: ${address}, Кількість наборів: ${person}, Доставка: ${delivery}, Палички ${ch}... Склад замовлення: `;

    cart_this.forEach(el => {
      message += el.name + '(x' + el.count + '), ';
    });
    Telegram.setToken('868514272:AAH6bAavjGQHH-bztp9Buu1ugozGVfNCgl0');
    Telegram.setRecipient(490328195);
    Telegram.setMessage(message);
    Telegram.send();
    dispatch({
      type: 'CLEAR_STATE',
    });
  };

  const getSum = products => {
    let value = 0;
    products.forEach(item => {
      value +=
        (item.price * state.data.priceKoefficient).toFixed(0) * item.count;
    });
    if (value < 800) {
      value += deliveryCash;
    }
    return value;
  };

  const deleteItem = idx => {
    dispatch({
      type: 'DELETE_FROM_CART',
      value: idx,
    });
    setCart(state.data.cart);
    if (state.data.cart.length > 0) {
      isEmpty(false);
    } else {
      isEmpty(true);
    }
  };

  const increaseCount = idx => {
    dispatch({
      type: 'INCREASE_COUNT',
      value: idx,
    });
    console.log(cart_this);
  };

  const decreaseCount = idx => {
    dispatch({
      type: 'DECREASE_COUNT',
      value: idx,
    });
  };

  return (
    <>
      <ScrollView>
        <View style={Styles.body}>
          {!empty && (
            <View style={Styles.sectionContainer}>
              <Image
                source={require('../../assets/images/logo.png')}
                style={Styles.logoCategory}
              />
              <View style={Styles.cartItems}>
                {cart_this.map((item, index) => {
                  if (item.action) {
                    item.price = item.new_price;
                  }
                  return (
                    <View key={index} style={Styles.cartItem}>
                      <Image
                        source={{uri: item.image}}
                        style={Styles.cartItemImage}
                      />
                      <View style={Styles.cartItemNameWrapper}>
                        <Text style={Styles.cartItemName}>{item.name}</Text>
                        <View style={Styles.cartItemBottomWrapper}>
                          <View style={Styles.cartItemMinMaxWrapper}>
                            <TouchableWithoutFeedback
                              onPress={() => {
                                decreaseCount(index);
                              }}>
                              <Text style={Styles.cartItemMinMaxBtn}>-</Text>
                            </TouchableWithoutFeedback>
                            <Text style={Styles.cartItemCount}>
                              {item.count}
                            </Text>
                            <TouchableWithoutFeedback
                              onPress={() => {
                                increaseCount(index);
                              }}>
                              <Text style={Styles.cartItemMinMaxBtn}>+</Text>
                            </TouchableWithoutFeedback>
                          </View>
                          <Text style={Styles.cartItemPrice}>
                            {(item.price * state.data.priceKoefficient).toFixed(
                              0,
                            ) * item.count}{' '}
                            грн
                          </Text>
                        </View>
                      </View>
                      <TouchableWithoutFeedback
                        onPress={() => {
                          deleteItem(index);
                        }}>
                        <Image
                          source={require('../../assets/images/arrows_circle_remove.png')}
                          style={Styles.cartItemRemove}
                        />
                      </TouchableWithoutFeedback>
                    </View>
                  );
                })}
              </View>
              {cart_this.length > 0 && (
                <Text style={Styles.sumText}>
                  Сума: {getSum(cart_this)} грн
                </Text>
              )}

              <View style={Styles.radioBtnWrapper}>
                <Text style={Styles.deliveryTitle}>Варіант доставки</Text>
                <RadioButtonRN
                  data={data}
                  initial={1}
                  activeColor="#90d40d"
                  selectedBtn={e => {
                    if (e.label == 'Самовивіз') {
                      setDeliveryCash(30);
                    } else {
                      setDeliveryCash(0);
                    }
                    setDelivery(e.label);
                  }}
                  style={Styles.radioBtn}
                  textStyle={Styles.radioBtnText}
                  box={false}
                  animationTypes={['pulse']}
                  duration={0}
                />
              </View>

              <View style={Styles.chopsticksWrapper}>
                <Text style={Styles.chopsticksText}>
                  Які палички вам найбільше підходять?
                </Text>
                <View style={Styles.chopsticksImages}>
                  <TouchableWithoutFeedback
                    onPress={() => {
                      setChopstick(true);
                    }}>
                    <View style={Styles.chopsticksBlock}>
                      <Image
                        source={require('../../assets/images/Palochki_uchebnye.jpg')}
                        style={Styles.chopsticksImage}
                      />
                      <Text
                        style={
                          chopstick
                            ? Styles.chopsticksImageTextActive
                            : Styles.chopsticksImageText
                        }>
                        Палички навчальні
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback
                    onPress={() => {
                      setChopstick(false);
                    }}>
                    <View style={Styles.chopsticksBlock}>
                      <Image
                        source={require('../../assets/images/Palochki_uchebnye.jpg')}
                        style={Styles.chopsticksImage}
                      />
                      <Text
                        style={
                          !chopstick
                            ? Styles.chopsticksImageTextActive
                            : Styles.chopsticksImageText
                        }>
                        Палички звичайні
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              </View>
              <View style={Styles.form}>
                <TextInput
                  style={Styles.input}
                  placeholder="Кількість приборів"
                  placeholderTextColor="#DAE1E7"
                  onChangeText={v => setPerson(v)}
                  keyboardType="numeric"
                  value={person}
                />
                <TextInput
                  style={Styles.input}
                  placeholder="П. І. П."
                  placeholderTextColor="#DAE1E7"
                  onChangeText={v => setName(v)}
                  value={name}
                />
                <TextInput
                  style={Styles.input}
                  placeholder="Телефон"
                  placeholderTextColor="#DAE1E7"
                  onChangeText={v => setPhone(v)}
                  keyboardType="phone-pad"
                  value={phone}
                />
                <TextInput
                  style={Styles.input}
                  placeholder="Адреса"
                  placeholderTextColor="#DAE1E7"
                  onChangeText={v => setAddress(v)}
                  value={address}
                />
              </View>
              <TouchableOpacity
                onPress={() => {
                  if (name != '' && phone != '' && address != '') {
                    sendMessage();
                    isEmpty(true);
                    navigation.navigate('End');
                  }
                }}>
                <View styl={Styles.orderBtn}>
                  <Text style={Styles.orderBtnText}>ЗАМОВИТИ</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
          {empty && (
            <View style={Styles.sectionContainer}>
              <Image
                source={require('../../assets/images/logo.png')}
                style={Styles.logoCategory}
              />
              <Text style={Styles.categoryCity}>Кошик пустий</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default OrderScreen;
