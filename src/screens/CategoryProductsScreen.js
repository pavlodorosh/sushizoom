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
import React, {useEffect} from 'react';

import Styles from '../styles/Styles';
import firebase from '../../firebase'
import firestore from '@react-native-firebase/firestore'

const SushiSetCollection = firestore().collection('SushiSet').doc('AuX3df6ooDtLnWtH8z57')

const CategoryProductsScreen = ({navigation, route}) => {
  useEffect(()=>{
    SushiSetCollection.get().then(doc => {
      if(doc.exists){
        console.log(doc.data())
      } else {
        console.log('empty')
      }
    }).catch(error => {
      console.log(error)
    })
  }, [])

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
            <View style={Styles.categoryProductSection}>
              <Image
                source={require('../../assets/images/_Sushiboom.jpg')}
                style={Styles.categoryProductImage}
              />
              <View style={Styles.categoryProductSectionText}>
                <Text style={Styles.categoryProductTitle}>SUSHIZOOM</Text>
                <Text style={Styles.categoryProductTitle}>390 ГРН</Text>
                <Text style={Styles.categoryProductText}>
                  макі з лососем½ , макі філа ½ , макі з огірком½, макі з
                  авокадо½, філадельфія з лососем½ , філадельфія з вугрем{' '}
                </Text>
                <TouchableOpacity onPress={() => {}}>
                  <View styl={Styles.categoryProductButton}>
                    <Text style={Styles.categoryProductButtonText}>
                      ЗАМОВИТИ
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={Styles.categoryProductSection}>
              <Image
                source={require('../../assets/images/_Sushiboom.jpg')}
                style={Styles.categoryProductImage}
              />
              <View style={Styles.categoryProductSectionText}>
                <Text style={Styles.categoryProductTitle}>SUSHIZOOM</Text>
                <Text style={Styles.categoryProductTitle}>390 ГРН</Text>
                <Text style={Styles.categoryProductText}>
                  макі з лососем½ , макі філа ½ , макі з огірком½, макі з
                  авокадо½, філадельфія з лососем½ , філадельфія з вугрем{' '}
                </Text>
                <TouchableOpacity onPress={() => {}}>
                  <View styl={Styles.categoryProductButton}>
                    <Text style={Styles.categoryProductButtonText}>
                      ЗАМОВИТИ
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={Styles.categoryProductSection}>
              <Image
                source={require('../../assets/images/_Sushiboom.jpg')}
                style={Styles.categoryProductImage}
              />
              <View style={Styles.categoryProductSectionText}>
                <Text style={Styles.categoryProductTitle}>SUSHIZOOM</Text>
                <Text style={Styles.categoryProductTitle}>390 ГРН</Text>
                <Text style={Styles.categoryProductText}>
                  макі з лососем½ , макі філа ½ , макі з огірком½, макі з
                  авокадо½, філадельфія з лососем½ , філадельфія з вугрем{' '}
                </Text>
                <TouchableOpacity onPress={() => {}}>
                  <View styl={Styles.categoryProductButton}>
                    <Text style={Styles.categoryProductButtonText}>
                      ЗАМОВИТИ
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={Styles.categoryProductSection}>
              <Image
                source={require('../../assets/images/_Sushiboom.jpg')}
                style={Styles.categoryProductImage}
              />
              <View style={Styles.categoryProductSectionText}>
                <Text style={Styles.categoryProductTitle}>SUSHIZOOM</Text>
                <Text style={Styles.categoryProductTitle}>390 ГРН</Text>
                <Text style={Styles.categoryProductText}>
                  макі з лососем½ , макі філа ½ , макі з огірком½, макі з
                  авокадо½, філадельфія з лососем½ , філадельфія з вугрем{' '}
                </Text>
                <TouchableOpacity onPress={() => {}}>
                  <View styl={Styles.categoryProductButton}>
                    <Text style={Styles.categoryProductButtonText}>
                      ЗАМОВИТИ
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={Styles.categoryProductSection}>
              <Image
                source={require('../../assets/images/_Sushiboom.jpg')}
                style={Styles.categoryProductImage}
              />
              <View style={Styles.categoryProductSectionText}>
                <Text style={Styles.categoryProductTitle}>SUSHIZOOM</Text>
                <Text style={Styles.categoryProductTitle}>390 ГРН</Text>
                <Text style={Styles.categoryProductText}>
                  макі з лососем½ , макі філа ½ , макі з огірком½, макі з
                  авокадо½, філадельфія з лососем½ , філадельфія з вугрем{' '}
                </Text>
                <TouchableOpacity onPress={() => {}}>
                  <View styl={Styles.categoryProductButton}>
                    <Text style={Styles.categoryProductButtonText}>
                      ЗАМОВИТИ
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default CategoryProductsScreen;
