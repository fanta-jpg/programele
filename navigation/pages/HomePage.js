import * as React from 'react';
import {SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function HomePage({navigation}){
    return (
        <View style={styles.container}>
          {/*antraste*/}
          <SafeAreaView>
            <View style={styles.headerWrapper}>

              <Text style={styles.dienosText}>P</Text>
              <Text style={styles.dienosText}>A</Text>
              <Text style={styles.dienosText}>T</Text>
              <Text style={styles.dienosText}>K</Text>
              <Text style={styles.dienosText}>P</Text>

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
     paddingHorizontal: 30,
     height: 50,
   },

   dienosText:{
     fontSize: 20,
   },

   pamokosWrapper:{
     paddingHorizontal: 28,
     marginTop: 12,

   },

   pamokosText:{
    fontSize: 20,
   },

   pamokosUnderline:{
     backgroundColor: "#b7bdc7",
     borderRadius: 80,
     height: 4,
   },



 });
  