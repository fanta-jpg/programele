import * as React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { ImageBackground } from 'react-native-web';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import CustomDayButton from '../../components/CustomDayButton';
import CustomLessonButton from '../../components/CustomLessonButton';

export default function HomePage({navigation}){
    return (
        <View style={styles.container}>
          {/*antraste*/}
          <SafeAreaView>
            <View style={styles.headerWrapper}>

              <CustomDayButton onPress={() => { alert('Pirmadienis!');}} text="P" color="#3DAA52"/>
              <CustomDayButton onPress={() => { alert('Antradienis!');}} text="A" color="#3DAA52"/>
              <CustomDayButton onPress={() => { alert('Trečiadienis!');}} text="T" color="#3DAA52"/>
              <CustomDayButton onPress={() => { alert('Ketvirtadienis!');}} text="K" color="#3DAA52"/>
              <CustomDayButton onPress={() => { alert('Penktadienis!');}} text="P" color="#3DAA52"/>

            </View>
          </SafeAreaView>

          {/*pamokos*/}
          <View style={styles.pamokosWrapper}>
            <Text style={styles.pamokosText}>Pamokos</Text>
            <View style={styles.pamokosUnderline}></View>
          </View>

          {/*pamoku buttonai*/}
          <View style={styles.pamokosButtons}>
            <CustomLessonButton text="3 Anglų k." color="#3DAA52"/>
            <CustomLessonButton text="3 Istorija" color="#3DAA52"/>
            <CustomLessonButton text="3 IT" color="#3DAA52"/>
            <CustomLessonButton text="3 Dailė" color="#3DAA52"/>
            <CustomLessonButton text="3 Chemija" color="#3DAA52"/>
            <CustomLessonButton text="3 Kūno k." color="#3DAA52"/>
            <CustomLessonButton text="3 Matematika" color="#3DAA52"/>
            <CustomLessonButton text="3 Fizika" color="#3DAA52"/>
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
     /*backgroundColor: "#2EDAD3",*/
   },

   pamokosWrapper:{
     paddingHorizontal: 30,
     marginTop: 10,
     /*backgroundColor: "#078BC2",*/
   },

   pamokosText:{
    fontSize: 24,
    fontWeight: 'bold',
   },

   pamokosUnderline:{
     backgroundColor:"#3DAA52",
     borderRadius: 80,
     height: 4,
   },

   pamokosButtons:{
     flexDirection: 'column',
     justifyContent: 'center',
     alignSelf: 'center',
     marginTop: 10,
     paddingHorizontal: 25,
     /*backgroundColor: "#FF4C26",*/
     width: '100%',
   },

 });
  