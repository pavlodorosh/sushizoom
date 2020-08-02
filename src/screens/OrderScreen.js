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
} from 'react-native';
import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'

import Styles from '../styles/Styles';
import Telegram from 'telegram-send-message';

const OrderScreen = ({navigation, route}) => {
  const [cart_this, setCart] = useState([]);
  const [sum, setSum] = useState(999);
  
  const [name, setName] = useState('');
  const [empty, isEmpty] = useState(true);
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [comment, setComment] = useState('');
  
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  const radio_props = [
    {label: 'Доставка за Вашою адресою ', value: 0 },
    {label: 'Самовивіз (знижка -5%)', value: 1 }
  ];

  useEffect(() => {
    setCart(state.data.cart);
    if(state.data.cart.length > 0){
      isEmpty(false)
    }
  }, []);

  const sendMessage = () => {
    // let message = `Нове замовлення! Імя: ${name}, Телефон: ${phone}, Адреса: ${address}, Коментар: ${comment}, Товар: ${route.params.product.name}`

    Telegram.setToken('868514272:AAH6bAavjGQHH-bztp9Buu1ugozGVfNCgl0');
    Telegram.setRecipient(490328195);
    Telegram.setMessage('fd');
    Telegram.send();
  };


  return (
    <>

      <ScrollView>
        <View style={Styles.body}>
          { !empty && (
            <View style={Styles.sectionContainer}>
                <Image
                  source={require('../../assets/images/logo.png')}
                  style={Styles.logoCategory}
                />
                <View style={Styles.cartItems}>
                  {cart_this.map((item, index) => {
                    if(item.action){
                      item.price = item.new_price
                    }
                    if(state.data.city == 'Київ'){
                      item.price = (item.price * 1.2).toFixed(0)
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
                              <TouchableWithoutFeedback onPress={()=>{}}>
                                <Text style={Styles.cartItemMinMaxBtn}>-</Text>
                              </TouchableWithoutFeedback>
                              <Text style={Styles.cartItemCount}>{item.count}</Text>
                              <TouchableWithoutFeedback onPress={()=>{}}>
                                <Text style={Styles.cartItemMinMaxBtn}>+</Text>
                              </TouchableWithoutFeedback>
                            </View>
                            <Text style={Styles.cartItemPrice}>{item.price * item.count} грн</Text>
                          </View>
                        </View>
                        <TouchableWithoutFeedback onPress={()=>{}}>
                          <Image
                            source={require('../../assets/images/arrows_circle_remove.png')}
                            style={Styles.cartItemRemove}
                          />
                        </TouchableWithoutFeedback>
                      </View>
                    );
                  })}
                </View>
                <Text style={Styles.sumText}>Сума: {sum} грн</Text>

                <View style={Styles.chopsticksWrapper}>
                  <Text style={Styles.chopsticksText}>Які палички вам найбільше підходять?</Text>
                  <View style={Styles.chopsticksImages}>
                    <View style={Styles.chopsticksBlock}>
                      <Image
                        source={require('../../assets/images/Palochki_uchebnye.jpg')}
                        style={Styles.chopsticksImage}
                      />
                      <Text style={Styles.chopsticksImageText}>Палички навчальні</Text>
                    </View>
                    <View style={Styles.chopsticksBlock}>
                      <Image
                        source={require('../../assets/images/Palochki_uchebnye.jpg')}
                        style={Styles.chopsticksImage}
                      />
                      <Text style={Styles.chopsticksImageText}>Палички звичайні</Text>
                    </View>
                  </View>
                </View>

                <View style={Styles.form}>
                  <TextInput
                    style={Styles.input}
                    placeholder="Кількість приборів"
                    placeholderTextColor="#DAE1E7"
                    onChangeText={v => setName(v)}
                    value={name}
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
                    onChangeText={v => setName(v)}
                    value={name}
                  />
                  <TextInput
                    style={Styles.input}
                    placeholder="Адреса"
                    placeholderTextColor="#DAE1E7"
                    onChangeText={v => setName(v)}
                    value={name}
                  />
                </View>
                <View>
                  <Text>Оберіть доставку</Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    if (name != '' || phone != '' || address != '') {
                      sendMessage();
                      navigation.navigate('End');
                    }
                  }}>
                  <View styl={Styles.orderBtn}>
                    <Text style={Styles.orderBtnText}>ЗАМОВИТИ</Text>
                  </View>
                </TouchableOpacity>
            </View>
          )}
          { empty && (
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
