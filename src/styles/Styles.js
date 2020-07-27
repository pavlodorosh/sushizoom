import {Dimensions, StyleSheet} from 'react-native';

import Colors from './Colors';

const productCategoryHeight = 'auto'
const productCategoryHalfWidth = Dimensions.get('window').width / 2 - 20
const formWidth = Dimensions.get('window').width - 50


const Styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: Dimensions.get('window').height,
  },
  buttonsInRow:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: formWidth
  },
  cartIconImage: {    
    resizeMode: 'contain',
    width: 38,
    height: 45,
    marginTop: 30,
    paddingVertical: 10,
  },
  cartIconText: {
    color: Colors.white,
    fontSize: 30,
    marginLeft: 10,
  },
  cartIconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  categoryCity: {
    color: Colors.white,
    marginVertical: 20,
    fontSize: 30
  },
  categoryImg: {
    resizeMode: 'contain',
    height: 150,
    width: formWidth,
    marginTop: 50
  },
  categoryProductButton:{
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  categoryProductButtonText: {
    color: Colors.white,
    backgroundColor: Colors.red,
    paddingHorizontal: 25,
    paddingVertical: 5,
    borderRadius: 50,
    marginTop: 10
  },
  categoryProductImage: {
    resizeMode: 'contain',
    position: 'relative',
    width: productCategoryHalfWidth + 30,
    height: 180
  },
  categoryProductTitle: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    width: productCategoryHalfWidth
  },
  categoryProductText: {
    color: Colors.white,
    fontSize: 12,
    width: productCategoryHalfWidth,
    marginTop: 5
  },
  categoryProductSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    marginVertical: 20,
    borderBottomColor: Colors.dark,
    borderBottomWidth: 2,
  },
  categoryProductSectionText:{
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    marginLeft: 10,
    paddingBottom: 10,
    height: productCategoryHeight
  },
  categoryTitle: {
    color: Colors.white,
    fontSize: 30,
    height: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10
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
    flexDirection: 'column',
  },
  cityListText: {
    marginTop: 10,
    marginBottom: 10,
    height: 30,
    fontSize: 20,
    color: Colors.white,
  },
  endText: {
    color: Colors.white,
    backgroundColor: 'transparent',
    fontSize: 24
    // bac
  },
  form: {
    marginTop: 30
  },
  input: {
    borderBottomColor: Colors.light,
    // backgroundColor: 'transparent',
    borderBottomWidth: 1,
    width: formWidth,
    color: Colors.light,
    textAlign: 'center',
    fontSize: 18,
    height: 50,
    marginBottom: 10
  },
  logoCategory: {
    resizeMode: 'contain',
    height: 200,
    marginTop: 10,
    marginBottom: 30
  },
  logoMain: {
    resizeMode: 'contain',
    height: '20%',
    marginTop: 30,
    marginBottom: 20,
  },
  orderBtn: {
    alignItems: 'center', 
    justifyContent: 'center', 
    width: '100%'
  },
  orderBtnText: {
    color: Colors.white,
    backgroundColor: Colors.red,
    paddingHorizontal: 40,
    paddingVertical: 8,
    borderRadius: 50,
    marginTop: 10,
    textAlign: 'center',
  },
  sectionContainer: {
    margin: 32,
    paddingHorizontal: 12,
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
  textBtn:{
    color: Colors.white,
    paddingVertical: 10,
    width: formWidth,
    textAlign: 'center',
    fontSize: 20,
  },
  textBtnAction: {
    color: Colors.white,
    paddingVertical: 10,
    paddingHorizontal: 25,
    textAlign: 'center',
    fontSize: 20,
  },
  textBtnCall:{
    color: Colors.white,
    paddingVertical: 10,
    textAlign: 'center',
    fontSize: 20,
    paddingHorizontal: 25,
  },
  textBtnContainer: {
    borderRadius: 50,
    backgroundColor: Colors.red,
    marginBottom: 20
  },
});

export default Styles;
