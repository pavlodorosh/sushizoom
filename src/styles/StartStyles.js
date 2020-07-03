import { StyleSheet } from 'react-native'
import Colors from './Colors'

const Styles = StyleSheet.create({
    body: {
      backgroundColor: Colors.black,
      justifyContent: 'center',
      alignItems: 'center'
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
        backgroundColor: '#ff0000',
    },
    cityListItem: {
      marginTop: 10,
      height: 30, 
      fontSize: 20, 
      color: Colors.white,
    },
    logoMain: {
      width: 180, 
      resizeMode: 'contain',
      maxHeight: '40%'
    }
});

export default Styles