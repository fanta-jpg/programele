import * as React from 'react';
import {StyleSheet, Text, View } from 'react-native';

export default function HomePage({navigation}){
    return (
        <View style={{flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',}}>
          <Text style={{fontSize: 26, fontWeight: 'bold',}}>namai namuciai</Text>
        </View>
      );
}

// const styles = StyleSheet.create({
//     screenContainer: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },

//     tempText: {
//         fontSize: 26,
//         fontWeight: 'bold',
//     },
//   });
  