import * as React from 'react';
import {SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CustomButton from '../../components/CustomButton';

export default function HomePage({navigation}){
    return (
        <View style={styles.container}>
          {/*antraste*/}
          <SafeAreaView>
            <View style={styles.headerWrapper}>

              <CustomButton onPress={() => { alert('Pirmadienis!');}} text="P" color="#3DAA52"/>
              <CustomButton onPress={() => { alert('Antradienis!');}} text="A" color="#3DAA52"/>
              <CustomButton onPress={() => { alert('Trečiadienis!');}} text="T" color="#3DAA52"/>
              <CustomButton onPress={() => { alert('Ketvirtadienis!');}} text="K" color="#3DAA52"/>
              <CustomButton onPress={() => { alert('Penktadienis!');}} text="P" color="#3DAA52"/>

            </View>
          </SafeAreaView>

          {/*pamokos*/}
          <View style={styles.pamokosWrapper}>
            <Text style={styles.pamokosText}>Pamokos</Text>
            <View style={styles.pamokosUnderline}></View>
          </View>

        </View>
      );
}

 const styles = StyleSheet.create({
   container:{
     flex:1,
   },

   headerWrapper:{
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     paddingHorizontal: 25,
     marginTop: 15,
     height: 50,
   },

   pamokosWrapper:{
     paddingHorizontal: 30,
     marginTop: 12,

   },

   pamokosText:{
    fontSize: 20,
   },

   pamokosUnderline:{
     backgroundColor: "#3DAA52",
     borderRadius: 80,
     height: 4,
   },



 });
  