import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import colors from '../assets/colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const PamokuLangas = (props) => {

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.pamokosBackground}>
          <Text style={styles.pamokosNr}>{props.pamokosNr}</Text>
        </View>
        <Text style={styles.pamoka}>{props.pamoka}</Text>
      </View>
      <View style={styles.laikas}>
          <Text style={styles.laikasText}>{props.pamokosPradzia}</Text>
          <Text style={styles.laikasText}>{props.pamokosPabaiga}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    borderColor: colors.green,
    borderWidth: 2,
    height: height*0.1,
    width: width*0.88,
    backgroundColor: '#FFF',
    padding: '5%',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  pamokosBackground: {
    width: width*0.07,
    height: height*0.05,
    backgroundColor: colors.green,
    opacity: 0.4,
    borderRadius: 5,
    marginRight: width*0.01,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pamokosNr:{
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.black,
  },
  pamoka: {
    maxWidth: '90%',
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.darkgray,
  },
  laikas: {
    width: '15%',
    height: '120%',
    backgroundColor: colors.green,
    opacity: 0.6,
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'center',
  },
  laikasText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.black,
  },
});

export default PamokuLangas;