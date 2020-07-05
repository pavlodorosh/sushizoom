import {Dimensions, StyleSheet} from 'react-native';

import Colors from './Colors';

const Styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: Dimensions.get('window').height,
  },
  categoryContainer: {},
  categoryImg: {
    resizeMode: 'contain',
    height: 150,
    marginTop: 50,
    marginBottom: 20,
  },
  categoryTitle: {
    color: Colors.white,
    fontSize: 30,
    height: 40,
    fontWeight: 'bold',
  },
  categoryTitleAction: {
    color: Colors.red,
    fontSize: 30,
    height: 40,
    fontWeight: 'bold',
  },
  categoryView: {
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  cityListText: {
    marginTop: 10,
    height: 30,
    fontSize: 20,
    color: Colors.white,
  },
  logoCategory: {
    resizeMode: 'contain',
    height: 100,
    marginTop: '10%',
  },
  logoMain: {
    resizeMode: 'contain',
    height: '20%',
    marginTop: '40%',
    marginBottom: 20,
  },
  sectionContainer: {
    margin: 32,
    paddingHorizontal: 24,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    height: '100%',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.white,
  },
  select: {
    width: 260,
    height: 50,
    color: Colors.white,
    justifyContent: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  selectContainer: {
    borderRadius: 50,
    backgroundColor: Colors.red,
  },
});

export default Styles;
