import * as React from 'react';
import {View, Text} from 'react-native';

export default function SettingsPage({navigation}){
    return (
        <View style={{flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',}}>
          <Text style={{fontSize: 26, fontWeight: 'bold',}}>this is the settings page</Text>
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