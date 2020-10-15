import { Image, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import Styles from '../styles/Styles';
import database from '@react-native-firebase/database';
import { useDispatch } from 'react-redux'

const StartScreen = ({ navigation }) => {
  const [region, setRegion] = useState(null);
  const [cities, setCities] = useState({});
  const [regions, setRegions] = useState(null);
  const [cityArr, setCityArr] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => {
    if (!regions) {
      getRegionsFromDB()
    }
  })

  useEffect(() => {
    setCities({})
    getCitiesFromDB()
  }, []);

  const getCitiesFromDB = () => {
    database().ref('city').once('value').then(snapshot => {
      setCities(snapshot.val())
    })
  }
  const getRegionsFromDB = () => {
    database().ref('regions').once('value').then(snapshot => {
      setRegions(snapshot.val())
    })
  }

  const handleCityClick = cityObj => {
    if (cities == {}) {
      getCitiesFromDB()
    } else {
      dispatch({
        type: 'CITY_HANDLE_CLICK',
        value: cityObj
      })
      navigation.navigate('Main')
    }
  }

  const handleRegionClick = (region) => {
    if (cities != undefined) {
      setRegion(1)
      setCityArr(cities[region])
    }
  }

  const resetCities = () => {
    setRegion(null)
    setCityArr([])
  }


  return (
    <>
      
        <View style={Styles.body}>
          <View style={Styles.sectionContainer} contentContainerStyle={Styles.scrollView}>
            <Image
              source={require('../../assets/images/logo.png')}
              style={Styles.logoMain}
            />
            <ScrollView automaticallyAdjustContentInsets={true}>
            <Text style={Styles.categoryCity}>Доставка японської кухні</Text>
            {
              region == null && (
                <>
                  {
                    regions && (
                      Object.keys(regions).sort((a, b) => regions[a].order - regions[b].order).map((id, index) => {
                        return (
                          <View key={index} style={Styles.textBtnContainer}>
                            <TouchableOpacity onPress={() => { handleRegionClick(id) }}>
                              <Text style={Styles.textBtn}>{regions[id].name}</Text>
                            </TouchableOpacity>
                          </View>
                        )
                      })
                    )
                  }
                </>
              )
            }
            {
              region != null && (
                <>
                  <View style={Styles.textBtnContainer}>
                    <TouchableOpacity onPress={() => { setRegion(null) }}>
                      <Text style={Styles.textBtn}>Назад</Text>
                    </TouchableOpacity>
                  </View>
                  {
                    cityArr != undefined && (
                      cityArr.map((item, index) => {
                        return <Text style={Styles.cityListText} key={index} onPress={() => { handleCityClick(item) }}>{item.name}</Text>
                      })
                    )
                  }
                  {
                    cityArr == undefined && resetCities()
                  }
                </>
              )
            }
            
          </ScrollView>
          </View>
        </View>
    </>
  );
};

export default StartScreen;
