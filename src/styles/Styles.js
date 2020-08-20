import {Dimensions, StyleSheet} from 'react-native';

import Colors from './Colors';

const productCategoryHeight = 'auto';
const productCategoryHalfWidth = Dimensions.get('window').width / 2 - 20;
const formWidth = Dimensions.get('window').width - 50;

const Styles = StyleSheet.create({
  back: {
    backgroundColor: Colors.black,
  },
  backImage:{
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    position: 'absolute',
    height: Dimensions.get('window').height,
    opacity: 0.4,
  },  
  body: {
    backgroundColor: Colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: Dimensions.get('window').height,
  },
  buttonsInRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: formWidth,
  },
  cartIconImage: {
    resizeMode: 'contain',
    height: 50,
    paddingVertical: 10,
  },
  cartIconText: {
    color: Colors.white,
    fontSize: 20,
    lineHeight: 30,
    marginLeft: 10,
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderRadius: 50,
    backgroundColor: Colors.black,
    width: 35,
    height: 30,
    textAlign: 'center',
  },
  cartIconTouchWrap: {
    backgroundColor: 'rgba(0,0,0,0)',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    paddingRight: 20,
    marginBottom: -70,
    zIndex: 2,
  },
  cartIconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.red,
    height: 70,
    width: 70,
    marginVertical: 10,
    borderRadius: 50,
  },
  cartItem: {
    height: 80,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: formWidth,
    marginBottom: 30,
  },
  cartItems: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.light,
  },
  cartItemBottomWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',    
  },
  cartItemCount: {
    color: Colors.light,
    fontSize: 22,
    marginHorizontal: 15,
  },
  cartItemImage: {
    resizeMode: 'contain',
    width: 100,
  },
  cartItemMinMaxBtn: {
    color: Colors.light,
    fontSize: 20,
    borderColor: Colors.light,
    borderWidth: 1,
    borderRadius: 50,
    width: 25,
    height: 25,
    lineHeight: 25,
    textAlign: 'center',
  },
  cartItemMinMaxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartItemName: {
    color: Colors.white,
    fontSize: 18,
  },
  cartItemNameWrapper: {
    flexDirection: 'column',
    marginLeft: 10,
    width: formWidth - 125,
    paddingHorizontal: 10
  },
  cartItemPrice: {
    color: Colors.light,
    fontSize: 25,
    marginLeft: 20,
  },
  cartItemRemove: {
    width: 25,
    resizeMode: 'contain',
  },
  categoryCity: {
    color: Colors.white,
    marginVertical: 20,
    fontSize: 24,
  },
  categoryImg: {
    resizeMode: 'contain',
    height: 80,
    marginTop: 20,
  },
  categoryItem:{
    width: formWidth / 2 - 20,
  },
  categoryProductButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryProductButtonText: {
    color: Colors.white,
    backgroundColor: Colors.red,
    paddingHorizontal: 25,
    paddingVertical: 5,
    borderRadius: 50,
    marginTop: 10,
  },
  categoryProductImage: {
    resizeMode: 'contain',
    position: 'relative',
    width: productCategoryHalfWidth + 30,
    height: 180,
  },
  categoryProductTitle: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    width: productCategoryHalfWidth,
  },
  categoryProductText: {
    color: Colors.white,
    fontSize: 12,
    width: productCategoryHalfWidth,
    marginTop: 5,
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
  categoryProductSectionText: {
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    marginLeft: 10,
    paddingBottom: 10,
    height: productCategoryHeight,
  },
  categoryTitle: {
    color: Colors.white,
    fontSize: 18,
    height: 45,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
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
  categoryWrapper:{
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: "space-between"
  },
  cityListText: {
    marginTop: 10,
    marginBottom: 10,
    height: 30,
    fontSize: 20,
    color: Colors.white,
  },
  chopsticksBlock: {
    marginRight: 20,
  },
  chopsticksImage: {
    height: 80,
    resizeMode: 'contain',
    width: 80,
  },
  chopsticksImages: {
    flexDirection: 'row',
  },
  chopsticksImageText: {
    color: Colors.white,
    width: 80,
  },
  chopsticksImageTextActive: {
    color: Colors.green,
    width: 80,
  },
  chopsticksText: {
    color: Colors.white,
    fontSize: 18,
  },
  chopsticksWrapper: {
    flexDirection: 'column',
    width: formWidth,
    marginBottom: 20
  },
  contactText: {
    color: Colors.white,
    fontSize: 18,
    textAlign: 'left',
  },
  contactTextBold: {
    color: Colors.white,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10
  },
  contactTextWrapper: {
    width: formWidth,
    justifyContent: 'flex-start',
    marginTop: 10
  },
  contactImg:{
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 10
  },
  contactWrapper: {
    flexDirection: 'row',
    marginBottom: 20
  },
  deliveryTitle:{
    color: Colors.white,
    fontSize: 22
  },
  endScreenWrapper:{
    width: Dimensions.get('window').width - 20
  },
  endTextSubtitle: {
    color: Colors.grey,
    lineHeight: 36,
    backgroundColor: 'transparent',
    fontSize: 24,
  },
  endTextTitle: {
    color: Colors.white,
    backgroundColor: 'transparent',
    fontSize: 36,
    lineHeight: 54,
    marginTop: 150,
    fontWeight: 'bold'
    // bac
  },
  errorText:{
    color: Colors.red,
    fontSize: 14,
    marginBottom: -10,
    marginTop: 10
  },
  form: {
    marginTop: 30,
  },
  input: {
    borderBottomColor: Colors.light,
    borderBottomWidth: 1,
    width: formWidth,
    color: Colors.light,
    // textAlign: 'center',
    fontSize: 18,
    height: 50,
    marginBottom: 10,
  },
  logoCategory: {
    resizeMode: 'contain',
    height: 170,
    marginTop: 10,
    marginBottom: 30,
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
    width: '100%',
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
  radioBtn: {
    color: Colors.white,
    marginBottom: 20,
    marginLeft: -10
  },
  radioBtnText:{
    color: Colors.white,
    marginVertical: 0,
    fontSize: 18
  },
  radioBtnWrapper: {
    width: formWidth
  },  
  sectionContainer: {
    margin: 32,
    paddingHorizontal: 12,
    justifyContent: 'flex-start',
    alignContent: 'space-between',
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
  sumText: {
    color: Colors.white,
    textAlign: 'right',
    width: formWidth,
    fontSize: 26,
    marginVertical: 15,
  },
  textBtn: {
    color: Colors.white,
    paddingVertical: 10,
    width: formWidth - 50,
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
  textBtnCall: {
    color: Colors.white,
    paddingVertical: 10,
    textAlign: 'center',
    fontSize: 20,
    paddingHorizontal: 25,
  },
  textBtnContainer: {
    borderRadius: 50,
    backgroundColor: Colors.red,
    marginBottom: 20,
  },
  textBtnEndScreen:{
    color: Colors.black,
    paddingVertical: 15,
    width: formWidth / 1.5,
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold'
  },
  textBtnMainScreen: {
    color: Colors.white,
    paddingVertical: 10,
    width: formWidth,
    textAlign: 'center',
    fontSize: 20,
  },
  textEndBtnContainer:{
    borderRadius: 50,
    backgroundColor: Colors.white,
    marginBottom: 20,
    width: formWidth / 1.5,
    marginTop: 100
  }
});

export default Styles;
